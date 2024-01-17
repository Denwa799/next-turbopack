const nextConfig = {
  distDir: "dist",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  experimental: {
    turbo: {
      rules: {},
    },
  },
};

module.exports = nextConfig;
