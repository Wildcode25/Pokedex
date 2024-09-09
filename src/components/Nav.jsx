import '../styles/nav.css'
export const Nav = ({setPage})=>{
    return <nav>
        <ul>
            <li className='navItem' onClick={()=>setPage(1)}>Pokedex</li>
        </ul>
    </nav>

}