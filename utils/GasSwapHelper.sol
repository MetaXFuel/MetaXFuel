
import { ethers } from "hardhat";

// Helper function to estimate the gas cost of a transaction
export async function estimateGasCost(
    to: string,
    value: ethers.BigNumber,
    data: string
): Promise<ethers.BigNumber> {
    const tx = {
        to,
        value,
        data,
    };

    const estimatedGas = await ethers.provider.estimateGas(tx);
    console.log(`Estimated gas: ${estimatedGas.toString()}`);
    return estimatedGas;
}

// Helper function to check if the user has enough GASX tokens for the operation
export async function hasSufficientGas(
    gasXToken: string,
    userAddress: string,
    requiredAmount: ethers.BigNumber
): Promise<boolean> {
    const tokenContract = await ethers.getContractAt("GASXToken", gasXToken);
    const balance = await tokenContract.balanceOf(userAddress);
    return balance.gte(requiredAmount);
}
