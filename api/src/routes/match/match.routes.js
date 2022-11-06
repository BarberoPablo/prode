import { Router } from "express";

import * as matchController from "./match.controller.js";

const app = Router();

app.get("/matches/:instance", matchController.getMatches);

app.post("/matches/groupStage", matchController.createGroupStageMatches);

export default app;
