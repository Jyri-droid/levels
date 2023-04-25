const LevelsUnits = (props) => {
    return <li className="level-text-container">
            {props.units.map((element, index) => <div className="level-text" key={`unit ${element} ${index}`}>{element}</div>)}   
        </li>
}

export default LevelsUnits;