import '../styles/nav.css'
export const Nav = ({setPage})=>{
    return <nav>
        <ul>
            <li className='navItem' onClick={()=>setPage(1)}>Pokedex</li>
            <li className='navItem' onClick={()=>setPage(2)}>Create pokemon</li>
            <li className='navItem' onClick={()=>setPage(3)}>Profile</li>
        </ul>
    </nav>

}