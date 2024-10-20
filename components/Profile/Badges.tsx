"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/UI/Button/Button";
import { ethers } from "ethers";
import SurfboardNFTAbi from "@/utils/SurfboardNFTAbi.json";
import Image from "next/image";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";

interface Surfboard {
  id: number;
  imageUrl: string;
}

const contractAddress = process.env
  .NEXT_PUBLIC_SURFBOARD_NFT_DEPLOYED_CONTRACT_ADDRESS as `0x${string}`;

const BadgesSection: React.FC<{ fullAddress: string }> = ({ fullAddress }) => {
  const router = useRouter();
  const { user, login } = usePrivy();
  const { client } = useSmartWallets();
  const [surfboards, setSurfboards] = useState<Surfboard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurfboards = async () => {
      if (!user || !client) {
        await login();
        return;
      }

      const smartWallet = user.linkedAccounts.find(
        (account) => account.type === "smart_wallet"
      );
      if (!smartWallet) {
        console.error("Smart wallet not found");
        setLoading(false);
        return;
      }
      try {
        console.log("Smart Wallet Address:", smartWallet.address);
        console.log("Smart Wallet Type:", smartWallet.type);

        const provider = new ethers.BrowserProvider(client);
        const contract = new ethers.Contract(
          contractAddress,
          SurfboardNFTAbi,
          provider
        );

        console.log("Calling getNFTsOwned for address:", smartWallet.address);
        const tokenIds = await contract.getNFTsOwned(smartWallet.address);
        console.log("Received tokenIds:", tokenIds);

        const surfboardPromises = tokenIds.map(async (id: bigint) => {
          console.log("Fetching URI for token ID:", id.toString());
          const uri = await contract.tokenURI(id);
          console.log("Received URI:", uri);
          let metadata;
          if (uri.startsWith("data:application/json;base64,")) {
            const base64Data = uri.split(",")[1];
            metadata = JSON.parse(atob(base64Data));
          } else {
            const response = await fetch(uri);
            metadata = await response.json();
          }
          console.log("Parsed metadata:", metadata);
          return { id: Number(id), imageUrl: metadata.image };
        });

        const surfboardsData = await Promise.all(surfboardPromises);
        console.log("Fetched surfboards data:", surfboardsData);
        setSurfboards(surfboardsData);
      } catch (error) {
        console.error("Error fetching surfboards:", error);
        if (error instanceof Error) {
          console.error("Error message:", error.message);
          console.error("Error stack:", error.stack);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSurfboards();
  }, [user, client, login]);

  return (
    <>
      <h1 className="mt-4 text-lg text-gray-200">Surfboards</h1>
      <div className="mt-2 w-full border border-gray-800 rounded-2xl p-4">
        {loading ? (
          <div className="text-center text-gray-200">Loading surfboards...</div>
        ) : surfboards.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {surfboards.map((surfboard) => (
              <div key={surfboard.id} className="text-center">
                <Image
                  src={surfboard.imageUrl}
                  alt={`Surfboard #${surfboard.id}`}
                  width={60}
                  height={100}
                  className="mx-auto"
                  unoptimized
                />
                <p className="mt-2 text-gray-200">Surfboard #{surfboard.id}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto text-center text-gray-200 items-center h-[300px] flex flex-col justify-center">
            <h1 className="text-xl">Start surfing through the modules</h1>
            <p className="text-md mt-1 text-gray-400 w-[200px]">
              Learn everything you need to thrive onchain!
            </p>
            <br />
            <Button
              onClick={() => router.push("/modules")}
              additionalStyles="py-1 px-4"
            >
              Start learning
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default BadgesSection;
