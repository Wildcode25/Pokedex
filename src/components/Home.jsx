import { useState } from "react"
import { Nav } from "./Nav.jsx"
import { Layout } from "./Layout.jsx"
export const Home = ()=>{
    const [page, setPage]=useState(1)
    return <>
    <Nav setPage={setPage}/>
    <Layout page={page}/>
    </>

}