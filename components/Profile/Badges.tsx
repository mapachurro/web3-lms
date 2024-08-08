import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/UI/Button/Button";

const BadgesSection: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <h1 className="mt-4 text-lg text-gray-200">Badges</h1>
      <div className="mt-2 w-full border border-gray-800 rounded-2xl p-4">
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
      </div>
    </>
  );
};

export default BadgesSection;
