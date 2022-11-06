import { Schema, model } from "mongoose";

const matchSchema = new Schema(
  {
    teamA: {
      group: String,
      name: String,
      goals: 0,
      penaltyGoals: 0,
    },
    teamB: {
      group: String,
      name: String,
      goals: 0,
      penaltyGoals: 0,
    },
    date: Date,
    winner: {
      type: String,
      default: null,
    },
    instance: {
      type: String,
      enum: ["groupStage", "round16", "quarterfinals", "semifinals", "final"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Match = model("Match", matchSchema);
