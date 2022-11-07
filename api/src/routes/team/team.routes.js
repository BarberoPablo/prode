import { Router } from "express";
import * as teamController from "./team.controller.js";

const app = Router();

app.get("/teams", teamController.getAllTeams);
app.get("/teams/:name", teamController.getTeam);

app.post("/teams", teamController.createTeam);

export default app;
