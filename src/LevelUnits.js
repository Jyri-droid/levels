const LevelUnits = (props) => {
    return <tr className="level-text-container">
            {props.units.map((element, index) => <th className="level-text" key={`unit ${element} ${index}`}>{element}</th>)}   
        </tr>
}

export default LevelUnits;