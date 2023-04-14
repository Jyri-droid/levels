const LevelUnits = (props) => {
    return <div className="level-text-container">
        {props.units.map((element) => <span className="level-text" key={`unit ${element}`}>{element}</span>)}   
    </div>
}

export default LevelUnits;