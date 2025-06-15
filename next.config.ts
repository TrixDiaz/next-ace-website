import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },

        ],
        domains: [
            'i.pravatar.cc',
            'images.unsplash.com'
        ],
    },
};

export default nextConfig;
