import { useState } from "react"
import { Nav } from "./Nav.jsx"
export const Home = ({user})=>{
    const [page, setPage]=useState(1)
    return <>
    <Nav setPage={setPage}/>
    </>

}