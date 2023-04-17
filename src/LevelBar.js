const LevelBar = (props) => {
    const barWidth = props.value / props.maxValue * 100;
    return <div className="level-container">
        <tr className="level-text-container">
            {props.labels.map((element) => 
                <td className="level-text" key={`label ${element}`}>{element}</td>)
            }
        </tr>
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