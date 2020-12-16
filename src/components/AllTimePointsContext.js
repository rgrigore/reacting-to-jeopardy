import React, { useState, useEffect, createContext } from "react";

export const AllTimePointsContext = createContext();

export const AllTimePointsProvider = (props) => {
    const [AllTimePoints, setAllTimePoints] = useState(localStorage.getItem('allTimePoints') || 0);

    useEffect(() => {
        localStorage.setItem('allTimePoints', AllTimePoints);
    }, [AllTimePoints]);

    return (
      <AllTimePointsContext.Provider value={[AllTimePoints, setAllTimePoints]}>
          {props.children}
      </AllTimePointsContext.Provider>
    );
};
