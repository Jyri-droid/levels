import "./styles.css";
import Levels from "./Levels";

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
  return (
    <div className="App">
      <h3 className="container">Levels</h3>
      <div className="container">
        <Levels 
          alignRight 
          secondary 
          units={["Kpl", "Ostohinta"]} 
          values={data.buy.amount} 
          labels={[data.buy.amount, data.buy.price]}
        />
      </div>
    </div>
  );
}

export default App;
