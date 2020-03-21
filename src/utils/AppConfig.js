import pkg from "../../package.json";

const AppConfig = {
  PORT: 3010,
  apiVersions: {
    "v1.0": "v1.0"
  },
  buildVersion: pkg.version,
  // mongoAdmin: "mongo_admin",
  // mongoAdminPassword: "mongo_admin_secret_key",
  mongoDBurl: `mongodb://localhost:27017`,
  DatabaseName: "affside_staging"
};

export default AppConfig;
