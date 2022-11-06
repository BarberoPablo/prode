import { Schema, model } from "mongoose";

const groupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  teams: {
    type: Array,
  },
});

export const Group = model("Group", groupSchema);
