const buttonStyle = {
    background: 'chocolate',
    border: 'none',
    width: '60px',
    height: '30px',
    borderRadius: '10px',
    cursor: 'pointer' 
}
export const SearchButton = ({handle})=>{
    return <button onClick={handle} style={buttonStyle} type="sbumit">
        search
    </button>
}