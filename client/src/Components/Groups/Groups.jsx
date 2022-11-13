import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import configuration from "../configuration";

const Group = () => {
  const getGroups = async () => {
    const response = await fetch(configuration.url + "match/groupStage")
      .then((response) => response.json())
      .then((data) => {
        return data.sort((a, b) => Number(a.name > b.name) * 2 - 1);
      });
  };

  const { data, status } = useQuery("groups", getGroups);

  return (
    <div>
      <>asd</>
    </div>
  );
};

export default Group;
