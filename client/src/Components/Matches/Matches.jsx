import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Matches = () => {
  const getMatches = async () => {
    let response = await fetch("http://localhost:3001/match/groupStage")
      .then((response) => response.json())
      .then((data) => {
        return data.sort((a, b) => Number(a.teamA.name > b.teamA.name) * 2 - 1);
      });
    setMatchesScores(
      response.map((match) => {
        return {
          _id: match._id,
          teamAScore: 0,
          teamBScore: 0,
        };
      })
    );
    return response;
  };

  const { data, status } = useQuery("matches", getMatches);

  const [matchesScores, setMatchesScores] = useState([]);

  const handleScore = (e, matchId) => {
    e.preventDefault();

    const findMatchWithId = (score) => {
      if (score._id === matchId) return true;
      return false;
    };
    const scoreIndex = matchesScores.findIndex(findMatchWithId);

    let updatedMatches = [...matchesScores];
    updatedMatches[scoreIndex][e.target.name] = e.target.value;

    setMatchesScores(updatedMatches);
  };

  const handleFinalScore = (e) => {
    e.preventDefault();
    console.log(matchesScores);
  };

  return (
    <div>
      Matches:
      {status === "loading" && <div> Cargando equipos </div>}
      {status === "error" && <div> Error al cargar los equipos </div>}
      {status === "success" && (
        <div>
          <div>
            <form onSubmit={(e) => handleFinalScore(e)}>
              <ol>
                {data?.map((match) => {
                  return (
                    !match.winner && (
                      <li key={match._id}>
                        {match.teamA.name}
                        <input
                          type="number"
                          name="teamAScore"
                          min="0"
                          max="10"
                          onChange={(e) => handleScore(e, match._id)}
                        />
                        <input
                          type="number"
                          name="teamBScore"
                          min="0"
                          max="10"
                          onChange={(e) => handleScore(e, match._id)}
                        />
                        {match.teamB.name}
                      </li>
                    )
                  );
                })}
              </ol>
              <button type="submit"> predecir </button>
            </form>
            <p>Proximos partidos:</p>
            {data?.map((match) => {
              return (
                !match.winner && (
                  <div key={match._id}>
                    <form onSubmit={(e) => handleFinalScore(e)}>
                      {match.teamA.name}
                      <div>
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
                        <button type="submit"> predecir </button>
                      </div>
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
        </div>
      )}
    </div>
  );
};
export default Matches;
