/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "www.miniusa.com",
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "digitalassets.tesla.com",
                port: '',
                pathname: '/**',
            },
             {
                protocol: 'https',
                hostname: "www.volvocars.com",
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.gpas-cache.ford.com',
                port: '',
                pathname: '/**',
            }
        ]
    }
};

export default nextConfig;
