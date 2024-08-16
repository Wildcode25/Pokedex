import 'Layout.css'
export const Layout = ({page})=>{

    return <div className="layout">
        {page===1 && <Pokedex/>}
        {page===2 && <PokemonForm/>}
        {page===3 && <Profile/>}
    </div>
}