import React from "react";
import { useRouter } from "next/navigation";
import { modules } from "@/lib/modules";
import RecentLearners from "./recent-learners";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import Loading from "@/components/UI/Loading";
import QuickDive from "./quick-dive";
import ModulesHeader from "./header";
import Image from "next/image";
// import Refer from "./refer";

const ModulesPage = () => {
  const router = useRouter();
  const { isLoading } = useAuthRedirect(true);

  const handleModuleClick = async (moduleId: string) => {
    router.push(`/modules/${moduleId}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="py-24 px-16 flex flex-row gap-8 lg:flex-col xl:px-8">
      {/* left container  */}
      <div>
        <ModulesHeader />
        <div className="flex items-center gap-1 mb-3 mt-6">
          {" "}
          <Image
            src="/images/location-icon.svg"
            alt="location"
            width={100}
            height={100}
            className="w-4 h-4"
          />
          <h1 className="text-gray-400 font-polysans text-sm">SURF SPOTS</h1>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
          {modules.map((module) => (
            <div
              key={module.id}
              onClick={() => handleModuleClick(module.id)}
              className="bg-[#151A25] rounded-2xl overflow-hidden cursor-pointer border border-gray-700"
            >
              <div className="p-4">
                <span className="inline-block px-2 py-1 text-xs font-semibold text-[#538CFD] bg-[#10336D] rounded-md mb-2">
                  {module.category.title.toUpperCase()}
                </span>
                <h2 className="text-2xl font-cg-regular text-white mb-1">
                  {module.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  {module.description}
                </p>
              </div>
              <div className="relative h-[270px]">
                <Image
                  src={module.thumbnailUrl}
                  alt={module.title}
                  layout="fill"
                  objectFit="cover"
                  unoptimized
                  className="brightness-100 contrast-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2531] via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* right container  */}
      <div>
        <QuickDive />
        <RecentLearners />
        {/* <Refer /> */}
      </div>
    </div>
  );
};

export default ModulesPage;
