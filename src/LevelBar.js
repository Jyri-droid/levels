const LevelBar = (props) => {
    const barWidth = props.value / props.maxValue * 100;
    return <div className="level-container" key={`levelContainer ${props.labels} ${props.value}`}>
        <li className="level-text-container" key={`textContainer ${props.labels} ${props.value}`}>
            {props.labels.map((element) => 
                <div className="level-text" key={`label ${element}`}>{element}</div>)
            }
        </li>
        <div className="level-bar-container" key={`barContainer ${props.labels} ${props.value}`}>
            <div 
                className={`level-bar ${props.secondaryColor ? "level-bar-secondary" : "level-bar-default"}`} 
                style={{width: `${barWidth}%`, marginLeft: `${props.alignRight ? "auto" : "none"}`}}
                key={`bar ${props.labels} ${props.value}`}
            ></div>
        </div>
    </div>
}

export default LevelBar;