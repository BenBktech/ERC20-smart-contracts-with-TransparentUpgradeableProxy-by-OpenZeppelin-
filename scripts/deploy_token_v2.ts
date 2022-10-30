import { ethers, upgrades } from "hardhat";

const PROXY = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"

async function main() {
    const TokenIsERC20V2 = await ethers.getContractFactory("TokenIsERC20V2");
    const Upgraded = await upgrades.upgradeProxy(PROXY, TokenIsERC20V2)

    console.log(`TokenIsERC20V2 deployed to : ${Upgraded.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
