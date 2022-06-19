import {useState} from "react";
import Hog from "./Hog";

function Hogs({hogs}) {
    const [greasedOnly, setGreasedOnly] = useState(false);
    const [sortType, setSortType] = useState("none");

    function getHogsUi() {
        let selectedHogs = [];
        selectedHogs = getFilteredHogs();
        selectedHogs = getSortedHogs(selectedHogs);

        return  selectedHogs.map(hog => <Hog key={hog.name} name={hog.name} hog={hog} />);
    }

    function getFilteredHogs() {
        let filteredHogs = [];
        if (greasedOnly) {
            filteredHogs = hogs.filter(hog => hog.greased);
        }
        else {
            filteredHogs = hogs;
        }
        return filteredHogs;
    }

    function getSortedHogs(hogs) {
        let sortedHogs = [];
        if (sortType === "none") {
            sortedHogs = hogs;
        }
        if (sortType === "name") {
            sortedHogs = hogs.sort(nameCompare);  
        }
        if (sortType === "weight") {
            sortedHogs = hogs.sort(weightCompare);
        }
        return sortedHogs;
    } 

    function nameCompare(a, b) {
        let result = 0;
        if (a.name < b.name) {
            result = -1;
        }
        if (a.name > b.name) {
            result = 1;
        }
        if (a.name === b.name) {
            result = 0;
        }
        return result;
    }

    const weightCompare = (a, b) => a.weight - b.weight;

    return (
        <div>
            <div name="switches" style={{display:"inline-grid", float:"left"}}>
                <div class ="ui toggle checkbox">
                    <input type="checkbox" name="greasedSwitch" onChange={() => setGreasedOnly(!greasedOnly)}/>
                    <label>Show greased only</label>
                </div>
                <div class="ui form">
                    <div class="grouped fields">
                        <label>Sort by:</label>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="hogSort" onClick={()=>setSortType("name")}/>
                                <label>Name</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="hogSort" onClick={()=>setSortType("weight")}/>
                                <label>Weight</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="hogSort" onClick={()=>setSortType("none")}/>
                                <label>None</label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div  className="ui grid container">
                {getHogsUi()}
            </div>
        </div>
    )
}

export default Hogs;