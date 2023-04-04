/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    PGHOST: "ep-wandering-dawn-609946.ap-southeast-1.aws.neon.tech",
    PGDATABASE: "neondb",
    PGUSER: "mr.junaid.ca",
    PGPASSWORD: "RMTgzb70IJUp",
  },
};

module.exports = nextConfig;
