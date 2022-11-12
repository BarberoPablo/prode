import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Matches from "./Matches";

const GroupStage = () => {
  return (
    <>
      <div>GroupStage</div>
      <Matches instance="groupStage" />
    </>
  );
};

export default GroupStage;
