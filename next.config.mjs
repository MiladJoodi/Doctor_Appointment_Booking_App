/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "res.cloudinary.com"
          },
          {
            protocol: "https",
            hostname: "lh3.googleusercontent.com"
          },
        ],
      },
};

export default nextConfig;
