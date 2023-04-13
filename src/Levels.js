const Levels = (props) => {
    const maxValue = Math.max(...props.values);
    return <div className="levels" key="asdaskljh">
        <div className="level-text-container" key="askjdh">
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
                        className={`level-bar ${props.secondary ? "level-bar-secondary" : "level-bar-default"}`} 
                        style={{width: `${element / maxValue * 100}%`, marginLeft: `${props.alignRight ? "auto" : "0"}`}}
                        key={`bar ${element}`}
                    ></div>
                </div>
            </>
        )}
    </div>
}

export default Levels;