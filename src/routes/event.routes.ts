import { Router } from "express";
import { EventController } from "../controllers/EventController";
import { EventRespositoyMongoose } from "../repositories/EventReositoryMoongose";
import { EventUseCase } from "../useCases/EventUseCase";

class EventRoutes {
  public router: Router;
  private eventController: EventController;
  constructor() {
    this.router = Router();
    const eventRepository = new EventRespositoyMongoose();
    const eventUseCase = new EventUseCase(eventRepository);
    this.eventController = new EventController(eventUseCase);
    this.initRoutes();
  }

  initRoutes() {
    this.router.post(
      "/",
      this.eventController.create.bind(this.eventController)
    );
  }
}

export { EventRoutes };
