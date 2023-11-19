/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverComponentsExternalPackages: [
            '@react-email/render',
        ]
    }
}

module.exports = nextConfig
