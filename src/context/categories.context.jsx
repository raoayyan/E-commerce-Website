import { createContext ,useState,useEffect} from "react";

import SHOP_DATA from '../shopData.js';

import { getCategoriesAndDoc } from "../utils/firebase/firebase.utils.js";
export const CategoriesContext = createContext({
      categoriesMap:{},
})

export const CategoriesProvider = ({children})=>{
    const [categoriesMap, setcategoriesMap] = useState({})
    useEffect(()=>{
        const getCategoriesMap = async()=>{
            const categorymap = await getCategoriesAndDoc();
            
            setcategoriesMap(categorymap)
        }
        getCategoriesMap();
    },[])
    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}>{children} </CategoriesContext.Provider>
    )
}