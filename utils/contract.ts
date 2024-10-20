import { ethers } from "ethers";
import SurfboardNFTAbi from "./SurfboardNFTAbi.json";
import { encodeFunctionData } from "viem";

const contractAddress = process.env
  .NEXT_PUBLIC_SURFBOARD_NFT_DEPLOYED_CONTRACT_ADDRESS as string;

export const prepareMintSurfboardTransaction = (
  address: string,
  imageUrl: string
) => {
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

  // Prepare the transaction data
  return encodeFunctionData({
    abi: SurfboardNFTAbi,
    functionName: "mintTo",
    args: [address, tokenURI],
  });
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
