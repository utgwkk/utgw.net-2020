module.exports = {
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
