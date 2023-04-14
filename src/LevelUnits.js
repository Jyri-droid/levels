const LevelUnits = (props) => {
    return <div className="level-text-container">
        {props.units.map((element, index) => <span className="level-text" key={`unit ${element} ${index}`}>{element}</span>)}   
    </div>
}

export default LevelUnits;