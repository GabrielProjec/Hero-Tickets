import express, { Application } from "express";
import { connect } from "./infra/database";
import { errormiddlewares } from "./middlewares/error.middlewares";
import { EventRoutes } from "./routes/event.routes";

class App {
  public app: Application;
  private eventRoutes = new EventRoutes();
  constructor() {
    this.app = express();
    this.middlewaresInitialize();
    this.initializeRoutes();
    this.interceptionErrors();
    connect();
  }

  initializeRoutes() {
    this.app.use("/events", this.eventRoutes.router);
  }

  interceptionErrors() {
    this.app.use(errormiddlewares);
  }

  middlewaresInitialize() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  listen() {
    this.app.listen(3333, () => console.log("Server is running"));
  }
}

export { App };
