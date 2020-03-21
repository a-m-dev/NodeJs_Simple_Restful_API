import pkg from "../../package.json";

const AppConfig = {
  PORT: 3010,
  apiVersions: {
    "v1.0": "v1.0"
  },
  buildVersion: pkg.version,
  mongoDBurl: "mongodb://localhost:27017",
  DatabaseName: "rest_standard_api"
};

export default AppConfig;
