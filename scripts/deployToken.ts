
import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    const initialSupply = ethers.utils.parseUnits("100000", 18); // 1 million tokens

    console.log("Deploying GASXToken with the account:", deployer.address);

    const GASXToken = await ethers.getContractFactory("GASXToken");
    const gasXToken = await GASXToken.deploy(initialSupply);

    console.log("GASXToken deployed to:", gasXToken.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
