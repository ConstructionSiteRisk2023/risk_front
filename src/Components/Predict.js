import React, { useState, useEffect } from "react";




const Predict = () => {
  const [date, setDate] = useState("1998-07-02");
  const publicTypeList = ["공공", "민간"];
  const [publicType, setPublicType] = useState("공공");
  const [temperature, setTemperature] = useState(12.0);
  const [humidity, setHumidity] = useState(70.0);
  const facilityTypeList = ['기타 건축', '공동주택', '토목', '공장', '산업환경설비', '조경'];
  const [facilityType, setFacilityType] = useState("공동주택");
  const weatherTypeList = ['맑음', '흐림', '강우', '안개', '강설', '강풍'];
  const [weatherType, setWeatherType] = useState("맑음");
  // const [publictype, setPublicType] = useState("공공");


  const setSelect = (key, data) =>{
    if(key === "publicType"){
      setPublicType(data);
    }else if(key === "facilityType"){
      setFacilityType(data);
    }else if(key === "weatherType"){
      setWeatherType(data);
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
          <select onChange={(e) => setSelect("facilityType",e.target.value)} value={facilityType}>
            {facilityTypeList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <select onChange={(e) => setSelect("weatherType",e.target.value)} value={weatherType}>
            {weatherTypeList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          {/* <hr />
          <p>
            Selected: <b>{weatherType}</b>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Predict;
