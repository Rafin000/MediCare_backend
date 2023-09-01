import express, { Router } from "express";
import router from './routes'
import cors from "cors";
import * as http from "http";
import httpStatus from "http-status";
import ApiError from "./utils/ApiError";
import { errorConverter, errorHandler } from "./utils/error";

export default class App {
  private readonly app: express.Application;
  private readonly port;

  constructor(port: string) {
    this.port = port;
    this.app = express();
    this.app.use(cors());
    this.app.use(express.json({ type: "application/json" }));
    this.app.use(express.urlencoded({ extended: true }));
    this.addRouter(router);
    this.app.use((req, res, next) => {
      next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
    });
    this.app.use(errorConverter);
    this.app.use(errorHandler);

  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`server is running on port ${this.port}`);
    }
    )
  }

  addRouter(router: Router) {
    this.app.use("/api/v1", router);
  }

} 