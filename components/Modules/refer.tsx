import React from "react";
import Link from "next/link";

const Refer: React.FC = () => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 flex flex-col space-y-4 mt-1">
      <h2 className="text-white text-xl font-cg-regular">
        Refer Friend and Earn Points
      </h2>
      <Link
        href="/refer"
        className="text-white text-sm font-semibold flex items-center"
      >
        REFER NOW
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-1"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M4.1665 10.0001H15.8332M15.8332 10.0001L9.99984 4.16675M15.8332 10.0001L9.99984 15.8334"
            stroke="#F9FAFB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Refer;
