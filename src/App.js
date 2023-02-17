import "./App.css";
import { data } from "./data/index";
import React, { useState } from "react";
import Chart from "./components/chart";
import MapTable from "./components/table";
import Map from "./components/map";
import CustomizeSelect from "./components/select";

function App() {
  const [selectedTown, setSelectedTown] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const endRef = React.useRef(null);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const setTownName = (name) => {
    setSelectedTown(name);
    endRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    const filteredData = data.filter((item) => item.ilce_adi === selectedTown);
    setTableData(filteredData);
  }, [selectedTown]);

  return (
    <div className={isMobile ? "App-mobile" : "App"}>
      <div className={isMobile ? "mobile-main-title" : "main-title"}>
        İstanbul Deprem Senaryosu Analiz Sonuçları (7.5 Mw)
      </div>
      <Map setTown={setTownName} />
      {isMobile && <CustomizeSelect options={data} onChange={setTownName} />}
      <div ref={endRef} />
      <MapTable data={tableData} title={selectedTown} isMobile={isMobile} />
      <Chart
        data={tableData}
        xField="can_kaybi_sayisi"
        yField="mahalle_adi"
        title={selectedTown}
        isMobile={isMobile}
      />
      <Chart
        data={tableData}
        xField="cok_agir_hasarli_bina_sayisi"
        yField="mahalle_adi"
        title={selectedTown}
        isMobile={isMobile}
      />
    </div>
  );
}

export default App;
