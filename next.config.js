/** @type {import('next').NextConfig} */

module.exports = {
    generateBuildId: () => "build",
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["images.prismic.io", "prismic-io.s3.amazonaws.com"]
    }
};
