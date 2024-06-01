/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // Ensure SWC is used for minification
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false, module: false };
    }
    return config;
  },

  compiler: {
    styledComponents: true,
    emotion: true,
  },
};

export default nextConfig;
