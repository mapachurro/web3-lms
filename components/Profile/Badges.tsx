"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/UI/Button/Button";
import { ethers } from "ethers";
import SurfboardNFTAbi from "@/utils/SurfboardNFTAbi.json";
import Image from "next/image";
import { useWallets } from "@privy-io/react-auth";

interface Surfboard {
  id: number;
  imageUrl: string;
}

const contractAddress = process.env
  .NEXT_PUBLIC_SURFBOARD_NFT_DEPLOYED_CONTRACT_ADDRESS as string;

const BadgesSection: React.FC<{ fullAddress: string }> = ({ fullAddress }) => {
  const router = useRouter();
  const { wallets } = useWallets();
  const [surfboards, setSurfboards] = useState<Surfboard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurfboards = async () => {
      console.log("Fetching surfboards for address:", fullAddress);
      if (!fullAddress || wallets.length === 0) return;

      try {
        const wallet = wallets[0];
        console.log("Using wallet:", wallet.address);
        const provider = await wallet.getEthereumProvider();
        const ethersProvider = new ethers.BrowserProvider(provider);
        const signer = await ethersProvider.getSigner();

        console.log("Contract address:", contractAddress);
        const contract = new ethers.Contract(
          contractAddress,
          SurfboardNFTAbi,
          signer
        );

        console.log("Calling getNFTsOwned for address:", fullAddress);
        const tokenIds = await contract.getNFTsOwned(fullAddress);
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
  }, [fullAddress, wallets]);

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
                  width={150}
                  height={150}
                  className="mx-auto"
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
