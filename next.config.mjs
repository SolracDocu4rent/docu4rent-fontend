/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      dirs: ['src'],
    },
    reactStrictMode: true,
    output: 'standalone',
  };
  
  export default nextConfig;