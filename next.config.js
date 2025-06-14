/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
}

module.exports = nextConfig

module.exports = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
}
