/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'muscatlab.s3.ap-northeast-1.amazonaws.com',
            port: '',
            pathname: '/**',
            },
        ],
    }
}

module.exports = nextConfig
