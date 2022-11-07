import { Router } from "express";

import * as matchController from "./match.controller.js";

const app = Router();

app.get("/matches/:instance", matchController.getMatches);

app.post("/matches/groupStage", matchController.createGroupStageMatches);
app.post("/matches/round16", matchController.createRound16Matches);

export default app;
