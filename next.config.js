/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
    "localhost",
    "https://api.bubbookz.com",
    "http://api.bubbookz.com",
    ] 
    ,
  },
}

module.exports = nextConfig
