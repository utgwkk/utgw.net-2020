module.exports = {
  target: "serverless",
  async redirects() {
    return [
      {
        source: "/labs/:path*",
        destination: "https://sugarheart.utgw.net/labs/:path*",
        permanent: true,
      },
    ];
  },
};
