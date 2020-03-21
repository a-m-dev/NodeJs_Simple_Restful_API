import mongoose from "mongoose";
import AppConfig from "./AppConfig";

const connect = (ops = {}) => {
  return mongoose.connect(`${AppConfig.mongoDBurl}/${AppConfig.DatabaseName}`, {
    ...ops,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

export default connect;
