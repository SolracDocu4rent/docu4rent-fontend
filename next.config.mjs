/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      dirs: ['src'],
    },
    reactStrictMode: false,
    output: 'standalone',
  };
  
  export default nextConfig;