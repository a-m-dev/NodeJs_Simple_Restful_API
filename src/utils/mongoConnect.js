import mongoose from "mongoose";
import AppConfig from "./AppConfig";

const connect = (ops = {}) => {
  return mongoose.connect(
    // connect to local
    `${AppConfig.mongoDBurl}/${AppConfig.DatabaseName}`,
    // when starting via dokcer compsoe
    // "mongodb://database_mongoDB:27017/rest_standard_api",
    {
      ...ops,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
};

export default connect;
