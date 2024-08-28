import { createContext, useRef } from "react"

export const FilterContext = createContext()
export const FilterProvider = ({children})=>{
    const filters = useRef({
        types: [],
        name: ''
    })
    return <FilterContext.Provider value={{
        filters
    }
    }>
        {children}
    </FilterContext.Provider>
}