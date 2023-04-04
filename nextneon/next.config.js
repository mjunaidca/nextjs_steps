/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // env: {
  //   PGHOST: "ep-white-field-112151.us-east-2.aws.neon.tech",
  //   PGDATABASE: "neondb",
  //   PGUSER: "mr.junaid.ca",
  //   PGPASSWORD: "8SZK7nuERWso",
  // },
  env: {
    NEON_DATABASE_URL:
      "postgres://mr.junaid.ca:8SZK7nuERWso@ep-white-field-112151.us-east-2.aws.neon.tech/neondb",
  },
};

module.exports = nextConfig;
