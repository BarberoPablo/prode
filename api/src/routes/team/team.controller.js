import { Team } from "./team.js";

export const getAllTeams = async (req, res) => {
  const teams = await Team.find();

  res.status(200).json(teams);
};

export const getTeam = async (req, res) => {
  const { name } = req.params;
  const team = await Team.find({ name });

  res.status(200).json(team);
};

export const createTeam = async (req, res) => {
  try {
    const teams = req.body;

    if (teams.length) {
      const newTeams = await Team.create(teams);
      return res.status(201).json(newTeams);
    }

    const { teamName, group } = req.body;
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
