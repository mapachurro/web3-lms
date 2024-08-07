import React from "react";
import { useRouter } from "next/navigation";
import WaveButton from "@/components/UI/Button/WaveButton";

const BadgesSection: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <h1 className="mt-4 text-lg text-gray-200">Badges</h1>
      <div className="mt-2 w-full border border-gray-600 rounded-2xl p-4">
        <div className="mx-auto text-center text-gray-200 items-center h-[300px] flex flex-col justify-center">
          <h1 className="text-xl">Start surfing through the modules</h1>
          <p className="text-md mt-1 text-gray-400 w-[200px]">
            Learn everything you need to thrive onchain!
          </p>
          <br />
          <WaveButton
            onClick={() => router.push("/modules")}
            additionalStyles="text-sm text-white py-2 px-4 group"
            liquidStyles="w-[220px] h-[220px] -top-[90px] group-hover:-top-[130px]"
          >
            Start learning
          </WaveButton>
        </div>
      </div>
    </>
  );
};

export default BadgesSection;
