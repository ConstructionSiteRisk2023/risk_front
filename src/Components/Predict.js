import React, { useState, useEffect } from "react";




const Predict = () => {
  const [date, setDate] = useState("1998-07-02");
  const publicTypeList = ["공공", "민간"];
  const [publicType, setPublicType] = useState("공공");
  const [temperature, setTemperature] = useState(12.0);
  const [humidity, setHumidity] = useState(70.0);
  // const [publictype, setPublicType] = useState("공공");


  const setSelect = (key, data) =>{
    if(key === "publicType"){
      setPublicType(data);
    }
    
  }

  const onChange = (key, data) => {
    if (key === "tickrate") {
      setDate(data);
    }

  }


  return (
    <div className="container">

      <h1>Predict</h1>
      <div>
        <h2>Input</h2>
        <div>
          <span>Date : </span>
          <input value={date} onChange={(e) => onChange("tickrate", e.target.value)} />
        </div>
        <div>
          <span>Temperature : </span>
          <input value={temperature} onChange={(e) => onChange("tickrate", e.target.value)} />
        </div>
        <div>
          <span>Humidity : </span>
          <input value={humidity} onChange={(e) => onChange("tickrate", e.target.value)} />
        </div>
        <div>
          <select onChange={(e) => setSelect("publicType",e.target.value)} value={publicType}>
            {publicTypeList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          {/* <hr />
          <p>
            Selected: <b>{publicType}</b>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Predict;
