import React from "react";
import { useQuery } from "react-query";

export const Teams = () => {
  const getTeams = async () => {
    const response = await fetch("http://localhost:3001/teams");
    return response.json();
  };

  const { data, status } = useQuery("", getTeams);

  if (status === "loading") {
    return <p> Loading </p>;
  }

  if (status === "error") {
    return <p> Error </p>;
  }

  const mutatedData = (() => {
    const dataAsc = data.sort((a, b) => Number(a.group > b.group) * 2 - 1);
    return dataAsc;
  })();
  return (
    <div>
      <p>TEAMS</p>
      {mutatedData.map((team) => {
        return (
          <div key={team._id}>
            Country: {team.name} Group: {team.group}
          </div>
        );
      })}
    </div>
  );
};
