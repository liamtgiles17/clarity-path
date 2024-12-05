/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    images: {
        unoptimized: true,
    },
    assetPrefix: isProd ? "/clarity-path/" : '',
    basePath: isProd ? "/clarity-path" : '',
    output: "export",
    reactStrictMode: true,
};

export default nextConfig;
