import { Router } from "express";
import { getAllTeams, createTeam } from "./team.controller.js";

const router = Router();

router.get("/teams", getAllTeams);

router.post("/teams", createTeam);

export default router;
