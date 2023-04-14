const LevelBar = (props) => {
    return <>
        <div className="level-text-container">
            {props.labels.map((element) => 
                <div className="level-text" key={`label ${element}`}>{element}</div>)
            }
        </div>
        <div className="level-bar-container">
        <div 
            className={`level-bar ${props.secondaryColor ? "level-bar-secondary" : "level-bar-default"}`} 
            style={{width: `${props.value / props.maxValue * 100}%`, marginLeft: `${props.alignRight ? "auto" : "0"}`}}
            key={`bar ${props.value}`}
        ></div>
    </div></>
}

export default LevelBar;