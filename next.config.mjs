/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  webpack: (config) => {
    config.cache = false;
    return config;
  },
  
};

export default nextConfig;
