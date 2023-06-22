/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  headers: [
    { key: "Access-Control-Allow-Credentials", value: "true" },
    {
      key: "Access-Control-Allow-Origin",
      value: "http://localhost:3000",
    },
    // ...
  ],
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/graphql",
          destination: "http://0.0.0.0:8000/graphql",
        },
      ],
    };
  },
  output: "standalone",
};

module.exports = nextConfig;
