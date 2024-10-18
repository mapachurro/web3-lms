import { ethers } from "ethers";
import SurfboardNFTAbi from "./SurfboardNFTAbi.json";

const contractAddress = process.env
  .NEXT_PUBLIC_SURFBOARD_NFT_DEPLOYED_CONTRACT_ADDRESS as string;

console.log(
  "NEXT_PUBLIC_SURFBOARD_NFT_DEPLOYED_CONTRACT_ADDRESS: ",
  contractAddress
);

export const mintSurfboard = async (
  signer: ethers.Signer,
  imageUrl: string
): Promise<ethers.ContractTransactionResponse> => {
  const contract = new ethers.Contract(
    contractAddress,
    SurfboardNFTAbi,
    signer
  );
  const address = await signer.getAddress();

  // Create a simple metadata object
  const metadata = {
    name: "Surfboard NFT",
    description: "A unique surfboard for the Base ecosystem",
    image: imageUrl,
  };

  // Convert metadata to a JSON string and encode as base64
  const encodedMetadata = Buffer.from(JSON.stringify(metadata)).toString(
    "base64"
  );
  const tokenURI = `data:application/json;base64,${encodedMetadata}`;

  // Call the mintTo function with the tokenURI
  return await contract.mintTo(address, tokenURI);
};

export const getNFTsOwned = async (
  provider: ethers.Provider,
  address: string
): Promise<number[]> => {
  const contract = new ethers.Contract(
    contractAddress,
    SurfboardNFTAbi,
    provider
  );
  const tokenIds = await contract.getNFTsOwned(address);
  return tokenIds.map((id: bigint) => Number(id));
};
