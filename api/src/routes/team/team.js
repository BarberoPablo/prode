import { Schema, model } from "mongoose";

const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    group: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Team = model("Team", teamSchema);
