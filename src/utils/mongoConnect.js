import mongoose from "mongoose";
import AppConfig from "./AppConfig";

const connect = (ops = {}) => {
  return mongoose.connect(
    // connect to local
    // `${AppConfig.mongoDBurl}/${AppConfig.DatabaseName}`,
    // when starting via dokcer compsoe
    "mongodb://mongo_admin:mongo_admin_secret_key@affside_DB:27017/affside_staging?authSource=admin",
    {
      ...ops,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
};

export default connect;
