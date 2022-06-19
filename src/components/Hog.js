import {useState} from "react";
import HogDetails from "./HogDetails";

function Hog({hog}) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="ui eight wide column" onClick={()=>setShowDetails(true)}>
            <h4>{hog.name}</h4>
            <img src={hog.image} alt={hog.name} width= "300" height="200"/>
            {showDetails? <HogDetails hog={hog}/> : ""}
        </div>
    )
}

export default Hog;