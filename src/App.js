import "./styles.css";
import LevelUnits from "./LevelUnits";
import LevelBar from "./LevelBar";

const data = {
  buy: {
    amount: [8, 7255, 9221, 6983, 2363],
    price: [5.012, 5.010, 5.007, 5.006, 5.004]
  },
  sell: {
    amount: [3193, 8404, 6570, 11574, 9574],
    price: [5.016, 5.018, 5.020, 5.022, 5.024]
  }
};

const data2 = {
  buy: {
    amount: [8, 7255, 9221, 6983, 2363],
    price: [5.012, 5.010, 5.007, 5.006, 5.004]
  },
  sell: {
    amount: [8, 7255, 9221, 6983, 2363],
    price: [5.012, 5.010, 5.007, 5.006, 5.004]
  }
};

function App() {
  const maxValueBuy = Math.max(...data.buy.amount);
  const totalBuy = data.buy.amount.reduce((a, b) => a + b, 0);
  const maxValueSell = Math.max(...data.sell.amount);
  const totalSell = data.sell.amount.reduce((a, b) => a + b, 0);
  return (
    <div className="App">
      <h3 className="container">Tarjoustasot</h3>
      <div className="container">
        <LevelUnits units={["Kpl", "Ostohinta"]} />
        {data.buy.amount.map((element, index) => 
          <LevelBar
            alignRight
            labels={[element, data.buy.price[index]]}
            value={element}
            maxValue={maxValueBuy}
          />
        )}
        <LevelBar
          alignRight
          labels={["Yhteensä", totalBuy]}
          value={totalBuy}
          maxValue={totalBuy + totalSell}
        />
      </div>
    </div>
  );
}

export default App;


/*         <Levels 
          alignRight 
          secondaryColor
          units={["Kpl", "Ostohinta"]} 
          values={data.buy.amount} 
          labels={[data.buy.amount, data.buy.price]}
          total="Yhteensä"
        /> */