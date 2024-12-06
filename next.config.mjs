/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    assetPrefix: isProd ? "/clarity-path/" : '',
    basePath: isProd ? "/clarity-path" : '',
    output: "export",
};

export default nextConfig;
