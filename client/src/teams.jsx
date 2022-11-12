import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Teams = () => {
  const getTeams = async () => {
    let response = await fetch("http://localhost:3001/teams");
    //response = response.sort((a,b) => Number(a.group > b.group)*2-1)
    return response.json();
  };

  const { data, status } = useQuery("teams", getTeams);

  return (
    <>
      {status === "loading" && <div> Cargando equipos </div>}
      {status === "error" && <div> Error al cargar los equipos </div>}
      {status === "success" && (
        <div>
          <p>TEAMS</p>
          {data?.map((team) => {
            return (
              <div key={team._id}>
                Country: {team.name} Group: {team.group}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Teams;
