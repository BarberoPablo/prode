import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Matches = () => {
  const getMatches = async () => {
    let response = await fetch("http://localhost:3001/match/groupStage")
      .then((response) => response.json())
      .then((data) => {
        return data.sort((a, b) => Number(a.teamA.name > b.teamA.name) * 2 - 1);
      });
    //let realShit = response.json().sort((a, b) => Number(a.teamA.name > b.teamA.name) * 2 - 1);
    //let response2 = response.json().sort((a, b) => Number(a.name > b.name) * 2 - 1);
    return response;
  };

  const { data, status } = useQuery("matches", getMatches);
  const [matchScore, setMatchScore] = useState({
    teamAScore: "0",
    teamBScore: "0",
  });

  const handleScore = (event) => {
    const scoreInput = event.target;
    setMatchScore({
      ...matchScore,
      [scoreInput.name]: scoreInput.value,
    });
    console.log(matchScore);
  };

  const handleFinalScore = (event) => {
    const finalScore = event.target;
    console.log(finalScore);
  };

  return (
    <div>
      Matches:
      {status === "loading" && <div> Cargando equipos </div>}
      {status === "error" && <div> Error al cargar los equipos </div>}
      {status === "success" && (
        <>
          <div>
            <p>Proximos partidos:</p>
            {data?.map((match) => {
              return (
                !match.winner && (
                  <div key={match._id}>
                    <form onSubmit={(e) => handleFinalScore(e)}>
                      {match.teamA.name}
                      <input
                        type="number"
                        name="teamAScore"
                        min="0"
                        max="10"
                        onChange={(e) => handleScore(e)}
                      />
                      VS
                      {match.teamB.name}
                      <input
                        type="number"
                        name="teamBScore"
                        min="0"
                        max="10"
                        onChange={(e) => handleScore(e)}
                      />
                      <button> predecir </button>
                    </form>
                  </div>
                )
              );
            })}
          </div>
          <div>
            <p>Partidos terminados:</p>
            {data?.map((match) => {
              return (
                match.winner && (
                  <p key={match._id}>
                    {match.teamA.name} VS {match.teamB.name}
                  </p>
                )
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
export default Matches;
