import { Team } from "./team.js";

export const getAllTeams = async (req, res) => {
  const teams = await Team.find();

  res.status(200).json(teams);
};

export const createTeam = async (req, res) => {
  const teams = req.body;

  if (teams.length) {
    Team.create(teams, (error, createdTeams) => {
      if (error) {
        console.log(error);
      } else {
        return res.status(201).send("Teams created");
      }
    });
  }

  const { teamName, group } = req.body;
  try {
    if (!teamName) {
      return res.status(403).send("Can not create an empty teamName");
    }

    const team = new Team({
      name: teamName,
      group,
      points: 0,
    });
    const newTeam = await team.save();

    res.status(201).json(newTeam);
  } catch (error) {
    res.status(409).send(error.message);
  }
};
