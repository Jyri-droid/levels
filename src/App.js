import "./styles.css";
import Levels from "./Levels";
import LevelUnits from "./LevelUnits";
import LevelBar from "./LevelBar";
import { useState } from "react";

const data1 = {
  buy: {
    amount: [8, 7255, 9221, 6983, 2363],
    price: [5.012, 5.010, 5.007, 5.006, 5.004]
  },
  sell: {
    amount: [3193, 8404, 6570, 11574, 9574],
    price: [5.016, 5.018, 5.020, 5.022, 5.024]
  },
  deals: {
    time: ["14:03:49", "14:03:21", "14:03:01", "14:02:32", "14:02:11"],
    price: [5.014, 5.012, 5.014, 5.014, 5.014],
    amount: [797, 191, 208, 1450, 12]
  }
};

const data2 = {
  buy: {
    amount: [5432, 123, 9876, 2345, 3456],
    price: [5.011, 5.010, 5.009, 5.008, 5.007]
  },
  sell: {
    amount: [12345, 7890, 5678, 2345, 7890],
    price: [5.012, 5.008, 5.005, 5.004, 5.003]
  },
  deals: {
    time: ["14:04:57", "14:04:53", "14:04:37", "14:04:17", "14:04:10"],
    price: [5.010, 5.012, 5.011, 5.014, 5.013],
    amount: [21098, 17890, 12345, 678, 23456]
  }
};

function App() {
  // Change data and launch transition
  const [data, setData] = useState(data1);
  const handleClick = () => {
    setData(data === data1 ? data2 : data1);
  };

  // Values for levels
  const maxValueBuy = Math.max(...data.buy.amount);
  const totalBuy = data.buy.amount.reduce((a, b) => a + b, 0);
  const maxValueSell = Math.max(...data.sell.amount);
  const totalSell = data.sell.amount.reduce((a, b) => a + b, 0);
  const totalDeals = Math.max(...data.deals.amount);
  return (
    <div className="App">

      <h3 className="container">Tarjoustasot</h3>
      <div className="container">
          <Levels>
            <LevelUnits units={["Kpl", "Ostohinta"]} />
            {data.buy.amount.map((element, index) => 
              <LevelBar
                alignRight
                labels={[element.toLocaleString(), data.buy.price[index]]}
                value={element}
                maxValue={maxValueBuy}
              />
            )}
            <LevelBar
              alignRight
              labels={[`Yhteensä ${totalBuy.toLocaleString()}`, ""]}
              value={totalBuy}
              maxValue={totalBuy + totalSell}
            />
          </Levels>
          <Levels>
            <LevelUnits units={["Myyntihinta", "Kpl"]} />
            {data.sell.amount.map((element, index) => 
              <LevelBar
                secondaryColor
                labels={[data.sell.price[index], element.toLocaleString()]}
                value={element}
                maxValue={maxValueSell}
              />
            )}
            <LevelBar
              secondaryColor
              labels={[`Yhteensä ${totalSell.toLocaleString()}`]}
              value={totalSell}
              maxValue={totalBuy + totalSell}
            />
          </Levels>
      </div>

      <h3 className="container">Viimeisimmät kaupat</h3>
      <div className="container">
          <Levels>
            <LevelUnits units={["Aika", "Hinta", "Kpl"]} />
            {data.deals.amount.map((element, index) => 
              <LevelBar
                labels={[data.deals.time[index], data.deals.price[index], element.toLocaleString()]}
                value={element}
                maxValue={totalDeals}
              />
            )}
          </Levels>
      </div>
      <div className="container"><button onClick={handleClick}>Vaihda data</button></div>
    </div>
  );
}

export default App;