import { NameFilter } from "./NameFilter.jsx";
import { TypeFilter } from "./TypeFilter.jsx";
export const Filter = ({setLoading}) => {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: 'center',
        background: "#414446",
        width: "660px",
        height: "360px",
        padding: "10px",
        borderRadius: "20px",
       
      }}
    >
      <NameFilter setLoading={setLoading}/>
      <TypeFilter setLoading={setLoading}/>
    </div>
  );
};
