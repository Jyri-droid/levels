const Levels = (props) => {
    const maxValue = Math.max(...props.values);
    const totalValue = props.values.reduce((a, b) => a + b, 0);
    return <div className="levels">
        <div className="level-text-container">
            {props.units.map((element) => <span className="level-text" key={`unit ${element}`}>{element}</span>)}
        </div>
        {props.values.map((element, index) => <>
                <div className="level-text-container" key={`container ${element}`}>
                    {props.labels.map((element) => 
                        <div className="level-text" key={`label ${element}`}>{element[index]}</div>)
                    }
                </div>
                <div className="level-bar-container" key={`level-bar-container ${element}`}>
                    <div 
                        className={`level-bar ${props.secondaryColor ? "level-bar-secondary" : "level-bar-default"}`} 
                        style={{width: `${element / maxValue * 100}%`, marginLeft: `${props.alignRight ? "auto" : "0"}`}}
                        key={`bar ${element}`}
                    ></div>
                </div>
            </>
        )}
        {props.total && <>
            <div className="level-text-container">
                <div className="level-text">{props.total}</div>
                <div className="level-text">{totalValue}</div>
            </div>
            <div className="level-bar-container">
                <div 
                    className={`level-bar ${props.secondaryColor ? "level-bar-secondary" : "level-bar-default"}`} 
                    style={{width: `${100 / maxValue * 100}%`, marginLeft: `${props.alignRight ? "auto" : "0"}`}}
                ></div>
            </div>
        </>}
    </div>
}

export default Levels;