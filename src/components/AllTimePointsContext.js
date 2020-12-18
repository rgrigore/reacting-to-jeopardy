import React, { useState, useEffect, createContext } from "react";

export const AllTimePointsContext = createContext({
    allTimePoints: 0,
    setAllTimePoints: () => {}
})

export const AllTimePointsProvider = (props) => {
    const [allTimePoints, setAllTimePoints] = useState(parseInt(localStorage.getItem('allTimePoints')) || 0);

    useEffect(() => {
        localStorage.setItem('allTimePoints', allTimePoints);
    }, [allTimePoints]);

    return (
      <AllTimePointsContext.Provider value={{allTimePoints, setAllTimePoints}}>
          {props.children}
      </AllTimePointsContext.Provider>
    )
}
