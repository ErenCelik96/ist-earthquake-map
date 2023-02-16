import "./App.css";
import { Istanbul } from "turkey-district-maps-3";
import { Tooltip } from "antd";
import { data } from "./data/index";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(null);

  const selectedTown = (town) => {
    setSelected(town);
  };
  console.log(selected);
  return (
    <div className="App">
      <Istanbul
        onClick={({ name }) => selectedTown(name)}
        distWrapper={(distComponent, distData) => (
          <Tooltip title={distData.name} key={distData.name}>
            {distComponent}
          </Tooltip>
        )}
      />
      {data.map((item, i) => (
        <div key={i}>
          {selected === item.ilce_adi && <span>{item.mahalle_adi}</span>}
        </div>
      ))}
    </div>
  );
}

export default App;
