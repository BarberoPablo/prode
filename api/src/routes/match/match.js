import { Schema, model } from "mongoose";

const matchSchema = new Schema(
  {
    teamA: {
      group: String,
      name: String,
      goals: {
        type: Number,
        default: 0,
      },
      penaltyGoals: {
        type: Number,
        default: 0,
      },
    },
    teamB: {
      group: String,
      name: String,
      goals: {
        type: Number,
        default: 0,
      },
      penaltyGoals: {
        type: Number,
        default: 0,
      },
    },
    date: {
      type: Date,
      required: false,
      default: null,
    },
    winner: {
      type: String,
      enum: ["teamA", "teamB", "tie", null],
      default: null,
    },
    instance: {
      type: String,
      required: true,
      enum: ["groupStage", "round16", "quarterfinals", "semifinals", "final"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Match = model("Match", matchSchema);
