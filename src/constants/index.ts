import { parseEther } from "ethers";

export enum Tiers {
    BASIC,
    PREMIUM
}

export const MINIMUM_USER_BALANCE = parseEther("0.5"); // 0.5 xStella