/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/admin",
        permanent: true, // 301 redirect (use false for temporary)
      },
    ];
  },
};

export default nextConfig;
