import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  async rewrites() {
    return [
      {
        source: "/:locale/fonts/:path*",
        destination: "/fonts/:path*", // Matched parameters can be used in the destination
      },
      {
        source: "/:locale/images/:path*",
        destination: "/images/:path*", // Matched parameters can be used in the destination
      },
      // {
      //   source: "/:locale/:path*",
      //   has: [
      //     {
      //       type: "header",
      //       key: "referer",
      //       value: "^((?!/api/).)*$", // Ensure it's not for API requests
      //     },
      //   ],
      //   destination: "/:path*",
      // },
    ];
  },
};

export default withNextIntl(nextConfig);
