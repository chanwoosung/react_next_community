/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains:['static.zaritalk.com']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/community/list',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
