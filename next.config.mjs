/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // If you have other configurations, keep them here
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "eiwnnzyovdijefcfkvsm.supabase.co",
      },
    ],
  },
};

export default nextConfig;
