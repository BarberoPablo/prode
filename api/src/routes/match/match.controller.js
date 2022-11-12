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
        }
      }
    }
    res.status(201).send("listo");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const createRound16Matches = async (req, res) => {
  try {
    let teams = await Team.find({ round16: { $ne: null } });
    let odd = false;

    teams = teams.sort((a, b) => Number(a.round16 > b.round16) * 2 - 1);

    for (let i = 0; i < 8; i++) {
      if (odd) {
        await Match.create({
          teamA: { name: teams[i].name, group: teams[i].group },
          teamB: { name: teams[i + 8 - 1].name, group: teams[i + 8 - 1].group },
          instance: "round16",
        });
        odd = !odd;
      } else {
        await Match.create({
          teamA: { name: teams[i].name, group: teams[i].group },
          teamB: { name: teams[i + 8 + 1].name, group: teams[i + 8 + 1].group },
          instance: "round16",
        });
        odd = !odd;
      }
    }
    const round16Matches = await Match.find({ instance: "round16" });

    res.status(201).json(round16Matches);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const setMatchDate = async (req, res) => {
  const { matchId } = req.params;
  const { date } = req.body;
  try {
    const matchDate = new Date(date);
    console.log(matchDate);
    const match = await Match.findByIdAndUpdate(matchId, { date: matchDate });

    res.status(201).json(match);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const setGroupStageDates = async (req, res) => {
  const { data } = req.body;
  try {
    const matches = await Match.where("teamA.name").equals("Argentina");
    //Blog.$where('this.username.indexOf("val") !== -1').exec(function (err, docs) {});

    /* for (let match in data) {
      Match.find({ teamA: { $regex: "Argentina", $options: "i" } });
    } */
    console.log(matches);

    res.status(201).json(matches);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
