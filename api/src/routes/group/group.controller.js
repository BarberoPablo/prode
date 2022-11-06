import { Group } from "./group.js";
import { Team } from "../team/team.js";

export const getAllGroups = async (req, res) => {
  const allGroups = await Group.find();

  res.status(200).json(allGroups);
};

export const getGroup = async (req, res) => {
  try {
    const { groupLetter } = req.params;
    const group = await Group.find({ name: groupLetter });

    res.status(200).json(group);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const createGroups = async (req, res) => {
  try {
    const groupLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const teams = await Team.find();

    if (!teams.length) {
      return res.status(400).send(`No teams found`);
    }

    for (const letter of groupLetters) {
      const teamsFromXGroup = teams.filter((team) => team.group === letter);
      const group = new Group({
        name: letter,
        teams: teamsFromXGroup,
      });

      await group.save();
    }

    const allGroups = await Group.find();

    res.status(201).json(allGroups);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
