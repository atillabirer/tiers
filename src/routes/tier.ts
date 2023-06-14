import { Contract, JsonRpcProvider, parseEther } from "ethers";
import { Router, Request, Response } from "express";
import { STAKING_CONTRACTS, XSTELLA_ADDRESS, minBalanceABI } from "../constants/addresses";
import { MINIMUM_USER_BALANCE, Tiers } from "../constants/index";
import dualFarmsAbi from "../constants/abi/dualFarms.json";


const router = Router();

router.get("/address/:address", async function (req: Request, res: Response) {

  try {

    //get tier by address
    const { address } = req.params;

    const minimumUserBalance = MINIMUM_USER_BALANCE //1K xStella

    if (!address) throw new Error('no address provided');


    const provider = new JsonRpcProvider("https://rpc.api.moonbeam.network/");

    const xStellaContract = new Contract(XSTELLA_ADDRESS, minBalanceABI, provider);

    const userBalance = await xStellaContract.balanceOf(address);
    console.log(userBalance);

    //ethers v6 is using BigInt instead of BigNumber, no need for gt/lt/div etc now
    //just use typical javascript logic / arithmetic operators

    if (userBalance > minimumUserBalance) {

      res.json({ tier: Tiers.PREMIUM });

    } else {

      //look for the tokens in staking contracts (for now just Dual Farms);

      const dualFarmsContract = new Contract(STAKING_CONTRACTS[0], dualFarmsAbi, provider);

      const result = await dualFarmsContract.userInfo(3, address);

      console.log("userAmount:", result[0]);
      //result[0] == amount
      if (result[0] > minimumUserBalance) {
        res.json({ tier: Tiers.PREMIUM });
      }

      res.json({ tier: Tiers.BASIC });

    }
  }
  catch (error) {
    res.status(500).json({ error: error });
  }



});


export default router;
