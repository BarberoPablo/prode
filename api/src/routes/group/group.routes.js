import { Router } from "express";
import * as groupController from "./group.controller.js";

const app = Router();

app.get("/groups", groupController.getAllGroups);
app.get("/groups/:groupLetter", groupController.getGroup);

app.post("/groups", groupController.createGroups);

export default app;
