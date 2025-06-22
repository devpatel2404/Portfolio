/** @type {import('next').NextConfig} */
console.log("Build Time Key: ", process.env.SUPABASE_URL);

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
    ],
  },
};

export default nextConfig;
