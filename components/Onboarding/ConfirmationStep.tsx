import React, { useState } from "react";
import { Surfboard, UserCategory } from "@/types/onboarding";
import { determineUserRole } from "@/utils/userRole";
import Image from "next/image";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import { base, baseSepolia } from "viem/chains";
import { encodeFunctionData } from "viem";
import SurfboardNFTAbi from "@/utils/SurfboardNFTAbi.json";
import { ethers } from "ethers";

interface ConfirmationStepProps {
  category: UserCategory;
  onStart: () => void;
  selectedSurfboard: Surfboard | null;
  onMintComplete: () => void;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({
  category,
  onStart,
  selectedSurfboard,
  onMintComplete,
}) => {
  const [isMinting, setIsMinting] = useState(false);
  const [isMinted, setIsMinted] = useState(false);
  const { user } = usePrivy();
  const { wallets } = useWallets();
  const { client } = useSmartWallets();

  if (!selectedSurfboard) return null;

  const handleMint = async () => {
    setIsMinting(true);
    try {
      const contractAddress = process.env
        .NEXT_PUBLIC_SURFBOARD_NFT_DEPLOYED_CONTRACT_ADDRESS as `0x${string}`;
      if (!contractAddress) {
        throw new Error("Contract address is not defined");
      }
      // Create metadata
      const metadata = {
        name: "Surfboard NFT",
        description: "A unique surfboard for the Base ecosystem",
        image: selectedSurfboard.img,
      };

      // Convert metadata to a JSON string and encode as base64
      const encodedMetadata = Buffer.from(JSON.stringify(metadata)).toString(
        "base64"
      );
      const tokenURI = `data:application/json;base64,${encodedMetadata}`;

      let txHash;
      const wallet = wallets[0];

      if (client) {
        // Prepare the transaction data
        const txData = encodeFunctionData({
          abi: SurfboardNFTAbi,
          functionName: "mintTo",
          args: [client.account.address, tokenURI],
        });

        txHash = await client.sendTransaction({
          account: client.account,
          chain: baseSepolia,
          to: contractAddress,
          data: txData,
        });
      } else if (wallet) {
        // Use regular wallet
        console.log("Minting with regular wallet");

        const ethProvider = await wallet.getEthereumProvider();
        const provider = new ethers.BrowserProvider(ethProvider);
        const signer = await provider.getSigner();

        const contract = new ethers.Contract(
          contractAddress,
          SurfboardNFTAbi,
          signer
        );

        const tx = await contract.mintTo(wallet.address, tokenURI);
        txHash = tx.hash;
      } else {
        throw new Error("No wallet available for minting");
      }

      console.log("Transaction hash:", txHash);

      setIsMinted(true);
      onMintComplete();
    } catch (error) {
      console.error("Error minting surfboard:", error);
    } finally {
      setIsMinting(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-polysans text-gray-300 mb-4">
        Okay, we found your spot to start surfing. You&apos;re a{" "}
        {determineUserRole(category)}!
      </h2>
      <div className="p-4 rounded-lg mb-8">
        <h3 className="text-2xl font-bold text-white mb-1">
          That&apos;s your tool to learn and earn
        </h3>
        <p className=" text-gray-400">
          Earn $SHELLS as you progress and upgrade your surfboard and You never
          know where the waves will lead you once you go down.
        </p>
        <div className="flex items-start gap-6 my-4">
          <div className="surfboard-container">
            <div className="surfboard-circle"></div>
            <Image
              src={selectedSurfboard.img}
              alt={selectedSurfboard.name}
              width={200}
              height={250}
              className="w-24"
              unoptimized
            />
          </div>
          <div>
            <h4 className="text-xl font-bold text-blue-400 mb-2">
              {selectedSurfboard.name}
            </h4>
            <p className="text-gray-300 mb-2">
              Rarity: {selectedSurfboard.rarity}
            </p>
            <p className="text-gray-300 mb-4">
              Shell Multiplier: x{selectedSurfboard.shellMultiplier}
            </p>
            <h5 className="text-lg font-bold text-white mb-2">Attributes:</h5>
            <ul className="text-gray-300 mb-4">
              {Object.entries(selectedSurfboard.attributes).map(
                ([key, value]) => (
                  <li key={key} className="mb-1">
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                  </li>
                )
              )}
            </ul>
            {selectedSurfboard.specialAbility && (
              <div className="mb-4">
                <h5 className="text-lg font-bold text-white mb-2">
                  Special Ability:
                </h5>
                <p className="text-gray-300">
                  {selectedSurfboard.specialAbility}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {!isMinted ? (
        <button
          onClick={handleMint}
          disabled={isMinting}
          className="w-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white p-3 rounded-lg text-center transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isMinting ? "Minting..." : "Mint Your Surfboard"}
        </button>
      ) : (
        <button
          onClick={onStart}
          className="w-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white p-3 rounded-lg text-center transition-all transform hover:scale-105"
        >
          Start Surfing!
        </button>
      )}
    </div>
  );
};

export default ConfirmationStep;
