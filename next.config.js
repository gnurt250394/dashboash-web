const aliases = require("./alias-config");
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}

const withLess = require("@zeit/next-less"),
  nextConfig = {
    //target: 'serverless',
    env: {
      weatherApi: "",
      mapBoxApi: "",
    },
    onDemandEntries: {
      maxInactiveAge: 1000 * 60 * 60,
      pagesBufferLength: 5,
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
    webpack: (config, { isServer, buildId }) => {
      const { alias } = config.resolve;
      config.resolve.alias = {
        ...alias,
        ...aliases,
      };
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            publicPath: "/_next/static/",
            outputPath: "static/",
            name: "[name].[ext]",
          },
        },
      });
      if (isServer) {
        // require('./src/utils/generateSiteMap');
      }
      return config;
    },
  };

module.exports = withLess(nextConfig);
