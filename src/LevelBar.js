const LevelBar = (props) => {
    const barWidth = props.value / props.maxValue * 100;
    return <div className="level-container">
        <div className="level-text-container">
            {props.labels.map((element) => 
                <div className="level-text" key={`label ${element}`}>{element}</div>)
            }
        </div>
        <div className="level-bar-container">
            <div 
                className={`level-bar ${props.secondaryColor ? "level-bar-secondary" : "level-bar-default"}`} 
                style={{width: `${barWidth}%`, marginLeft: `${props.alignRight ? "auto" : "none"}`}}
                key={`bar ${props.value}`}
            ></div>
        </div>
    </div>
}

export default LevelBar;