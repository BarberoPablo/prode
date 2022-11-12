import { Router } from "express";

import * as matchController from "./match.controller.js";

const app = Router();

app.get("/match/:instance", matchController.getMatches);

app.post("/match/groupStage", matchController.createGroupStageMatches);
app.post("/match/round16", matchController.createRound16Matches);

app.put("/match/date/:matchId", matchController.setMatchDate);
app.put("/match/date/", matchController.setGroupStageDates);

export default app;
