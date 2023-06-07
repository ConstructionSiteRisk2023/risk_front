import React, { useState, useEffect }  from "react";



const Analysis = () => {
  const [date, setDate] = useState("1998-07-02")


  const onChange = (key, data) => {
    if (key === "tickrate") {
      setDate(data);
    }
    else if (key === "camindex") {
      setCamidxTmp(data);
    }
    else if (key === "arduinoport") {
      setArduinoportTmp(data);
    }
    else if (key === "baudrate") {
      setBaudrateTmp(data);
    }
  }


  return (
    <div className="container">

      <h1>Predict</h1>
      <div>
        <h2>Input</h2>
        <div>
          <span>Date : </span>
          <input value={tickratetmp} onChange={(e) => onChange("tickrate", e.target.value)} />
        </div>
        <div>
          <span>Temperature : </span>
          <input value={tickratetmp} onChange={(e) => onChange("tickrate", e.target.value)} />
        </div>
        <div>
          <span>Humidity : </span>
          <input value={tickratetmp} onChange={(e) => onChange("tickrate", e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default Analysis;
