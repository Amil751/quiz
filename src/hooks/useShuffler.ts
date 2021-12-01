import React, { useEffect } from "react";
import { NewData, RootObject } from "../types";

export const useShuffler = (newData: NewData[]|undefined)=> {
  
    if (newData) {
       newData.map((questions)=>(
            questions.answer.sort(() => Math.random() - 0.5)
        ))
    }
   
    return newData
};
