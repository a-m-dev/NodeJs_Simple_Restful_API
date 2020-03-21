import express from "express";
import mongoose from "mongoose";
import connect from "./utils/mongoConnect";
import AppConfig from "./utils/AppConfig";
import cors from "cors";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";
import corsMiddleware from "./middlewares/cors.middleware";
import noRouteMatch from "./middlewares/noRouteMatch.middleware";
import globalErrorHandler from "./middlewares/globalErrorHandler.middleware";

// import routes
import AuthorRouter from "./resources/author/author.router";

// mongoose promise
mongoose.Promise = global.Promise;

// define app
const app = express();

// handle cors
app.use(corsMiddleware);

// set up middlewares
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

// set up routing
app.use(`/api/${AppConfig.apiVersions["v1.0"]}/author`, AuthorRouter);

// error handling
app.use(noRouteMatch);
app.use(globalErrorHandler);

// connect to DB then run app
(async function() {
  try {
    await connect();
    app.listen(AppConfig.PORT, () => {
      console.log(`
    
        Affside Auth Micro is avaliable of http://localhost:3010
      
      `);
    });
  } catch (e) {
    console.log(
      ">>>>>> Cannot connect to Mongo DB",
      JSON.stringify(e, null, 2)
    );
    // process.exit(1);
  }
})();
