import { Table } from "antd";
import React from "react";
import { columns } from "../../data";
import "../../App.css";

const MapTable = ({ title, data, isMobile }) => {
  return (
    <>
      {data?.length > 0 && (
        <div className={isMobile ? "mobile-title" : "title"}>
          {title + " İLÇESİ"}{" "}
          {isMobile && (
            <>
              <br />{" "}
              <span className="info-text">
                *Tablonun devamı için yana kaydırın --{">"}
              </span>
            </>
          )}
        </div>
      )}
      <Table
        dataSource={data}
        columns={columns}
        scroll={{ x: 1000 }}
        noData="daaaa"
      />
    </>
  );
};

export default MapTable;
