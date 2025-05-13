
import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    const gasXTokenAddress = "0x...";  // Replace with deployed GASXToken address
    const entryPointAddress = "0x..."; // Replace with deployed EntryPoint contract address

    console.log("Deploying GASXPaymaster with the account:", deployer.address);

    const GASXPaymaster = await ethers.getContractFactory("GASXPaymaster");
    const gasXPaymaster = await GASXPaymaster.deploy(gasXTokenAddress, entryPointAddress);

    console.log("GASXPaymaster deployed to:", gasXPaymaster.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
