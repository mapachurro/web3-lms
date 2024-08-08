import React from "react";
import Link from "next/link";
import { SocialPlatform, UnifiedProfile } from "@/types/profile";

interface SocialLinksProps {
  unifiedProfile: UnifiedProfile;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ unifiedProfile }) => {
  const getSocialIcon = (platform: string | number) => {
    const icons: Record<SocialPlatform, string> = {
      Farcaster: "/images/fc.svg",
      Lens: "/images/lens.svg",
      X: "/images/x.svg",
      LinkedIn: "/images/linkedin_symbol.svg",
      // Instagram: "/images/instagram.svg",
      GitHub: "/images/github.svg",
    };

    if (platform in icons) {
      return (
        <img
          src={icons[platform as SocialPlatform]}
          className="w-6 h-6"
          alt={`${platform} icon`}
        />
      );
    }

    // Default icon for unknown platforms
    return <span className="w-6 h-6 flex items-center justify-center">🔗</span>;
  };

  const getIconForSource = (source: string) => {
    const iconMap: { [key: string]: string } = {
      github: "./images/github.svg",
      linkedin: "./images/linkedin_symbol.svg",
      lens: "./images/lens.svg",
      farcaster: "./images/fc.svg",
      x: "./images/x.svg",
    };
    return iconMap[source] ? (
      <img src={iconMap[source]} className="w-6 h-6" alt={source} />
    ) : null;
  };

  return (
    <div>
      <ul className="flex gap-4 items-center mt-4">
        {unifiedProfile?.passportSocials.map((social, index) => (
          <li key={index} className="py-4">
            <Link
              href={social.profile_url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              {getIconForSource(social.source)}
            </Link>
          </li>
        ))}
        {Object.entries(unifiedProfile?.socials || {}).map(
          ([platform, url]) => (
            <li key={platform} className="py-4">
              <Link
                href={url as string}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
              >
                {getSocialIcon(platform)}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default SocialLinks;
