

import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying EntryPoint contract with the account:", deployer.address);

    const EntryPoint = await ethers.getContractFactory("EntryPoint");
    const entryPoint = await EntryPoint.deploy();

    console.log("EntryPoint deployed to:", entryPoint.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
