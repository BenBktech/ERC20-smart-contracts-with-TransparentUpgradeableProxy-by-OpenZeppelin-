import { ethers, upgrades } from "hardhat";

async function main() {
  const TokenIsERC20 = await ethers.getContractFactory("TokenIsERC20");

  const tokenIsERC20 = await upgrades.deployProxy(TokenIsERC20, [], {
    initializer: "initialize"
  })
  await tokenIsERC20.deployed()

  console.log(`TokenIsERC20 deployed to : ${tokenIsERC20.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
