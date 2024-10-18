const hre = require("hardhat");

async function main() {
  const SurfboardNFT = await hre.ethers.getContractFactory("SurfboardNFT");
  const surfboardNFT = await SurfboardNFT.deploy();

  await surfboardNFT.waitForDeployment();

  console.log("SurfboardNFT deployed to:", await surfboardNFT.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
