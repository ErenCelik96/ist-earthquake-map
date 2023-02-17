import { Select } from "antd";
import React from "react";

const CustomizeSelect = ({ options, onChange }) => {
  const towns = [...new Set(options.map((item) => item.ilce_adi))];

  return (
    <div>
      <p className="info-text">
        Haritadan veya aşağıdaki listeden ilçe seçerek başlayabilirsiniz*
      </p>
      <Select
        style={{ width: 200, marginBottom: 20 }}
        placeholder="İlçe seçiniz"
        onChange={(e) => onChange(e)}
      >
        {towns?.map((option, index) => (
          <Select.Option key={index} value={option}>
            {option}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default CustomizeSelect;
