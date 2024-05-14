/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "https://via.placeholder.com",
                port: '',
                pathname: '/**',
            },
        ]
    }
};

export default nextConfig;
