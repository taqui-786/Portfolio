/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverComponentsExternalPackages: [
            '@react-email/render',
        ],
        // images:{
        //     remotePatterns:[
        //         {
        //             protocol: 'https',
        //             hostname: 'cdn.jsdelivr.net',
        //         }
        //     ]
        // }
    }
}

module.exports = nextConfig
