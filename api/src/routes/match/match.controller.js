import { Match } from "./match.js";
import { Team } from "../team/team.js";

const createMatch = async (teamA, teamB) => {
  await Match.create({
    teamA,
    teamB,
    instance: "groupStage",
  });
};

export const getMatches = async (req, res) => {
  const { instance } = req.params;
  const matches = await Match.find({ instance });

  res.status(200).json(matches);
};

export const createGroupStageMatches = async (req, res) => {
  const groups = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const teams = await Team.find();
  try {
    for (let letter of groups) {
      const teamsFromXGroup = teams.filter((teams) => teams.group === letter);
      for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
          await createMatch(
            {
              group: teamsFromXGroup[i].group,
              name: teamsFromXGroup[i].name,
            },
            {
              group: teamsFromXGroup[j].group,
              name: teamsFromXGroup[j].name,
            }
          );
          //console.log(teamsFromXGroup[i].name, teamsFromXGroup[j].name);
        }
      }
    }
    res.status(201).send("listo");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
