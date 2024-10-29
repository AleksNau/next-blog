'use client'

import {createContext, useEffect, useState} from "react";
import {getCategoryData} from "@/app/utils/data";
export const MyContext = createContext();



export const MyProvider = ({children}) => {
    const [cat,setCat]=useState();
    const [selectedCard, handleCardClick] = useState("");
    useEffect(()=> {
        async function fetchPosts() {
            let data = await getCategoryData().then((res)=> {setCat(res)})
        
          }
          fetchPosts()
    },[])

    return <MyContext.Provider value={{cat,handleCardClick,selectedCard}}>{children}</MyContext.Provider>
}