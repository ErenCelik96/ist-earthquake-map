import { Istanbul } from "turkey-district-maps-3";
import { Tooltip } from "antd";
import React from "react";

const Map = ({ setTown }) => {
  return (
    <>
      <Istanbul
        onClick={({ name }) => {
          setTown(name);
        }}
        distWrapper={(distComponent, distData) => (
          <Tooltip title={distData.name} key={distData.name}>
            {distComponent}
          </Tooltip>
        )}
      />
    </>
  );
};

export default Map;
