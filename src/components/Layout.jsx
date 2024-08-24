import './Layout.css'
import { Pokedex } from './Pokedex.jsx'
import { PokemonForm } from './PokemonForm.jsx'
export const Layout = ({page})=>{

    return <div className="layout">
        {page===1 && <Pokedex/>}
        {page===2 && <PokemonForm/>}
    </div>
}