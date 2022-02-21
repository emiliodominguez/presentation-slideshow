const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    generateBuildId: () => "build",
    reactStrictMode: true,
    swcMinify: true,
    images: { domains: ["images.prismic.io", "prismic-io.s3.amazonaws.com"] },
    // This override fixes an issue with the map on production
    webpack: config => {
        config.optimization = { minimizer: [new UglifyJsPlugin({ uglifyOptions: { mangle: false } })] };
        return config;
    }
};
