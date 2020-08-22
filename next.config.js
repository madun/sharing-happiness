const path = require("path");
require("dotenv").config();

module.exports = {
  /* config options here */

  env: {
    API_URL: process.env.API_URL,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    COMPANY_NAME: process.env.COMPANY_NAME,
  },

  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["public"] = path.join(__dirname, "public");

    return config;
  },
};
