import React, { useState, useEffect } from "react";
// import axios from "axios";

const api_url = "http://localhost:4000/"

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
  const workProcessList = ['설치작업', '해체작업', '이동', '운반작업', '정리작업', '기타', '조립작업', '형틀 및 목공', '마감작업',
  '타설작업', '절단작업', '준비작업', '설비작업', '도장작업', '청소작업', '용접작업', '상차 및 하역작업',
  '연결작업', '굴착작업', '인양작업', '미입력', '확인 및 점검작업', '쌓기작업', '보수 및 교체작업', '매설작업',
  '천공작업', '양중작업', '정비작업', '부설 및 다짐작업', '전기작업', '벌목작업', '항타 및 항발작업',
  '거치작업', '반출작업', '적재작업', '고소작업', '물뿌리기 작업', '측량작업', '양생작업', '절취작업',
  '장약 및 발파작업', '인발작업'];
  const [workProcess, setWorkProcess] = useState("기타");
  const workersList = ['19인 이하',  '20~49인', '50~99인','100~299인', '300~499인', '500인 이상'];
  const [workers, setWorkers] = useState("19인 이하");
  const constructionTypeList = ['콘크리트공사', '기타공사', '가설공사', '설비공사', '토공사', '철골공사', '해체 및 재활용공사', '토목공사',
  '관공사', '수장공사', '타일 및 테라코타공사', '미장공사', '내외벽공사', '도장공사', '목공사',
  '지정 및 기초공사', '조적공사', '금속공사', '방수 및 방습공사', '지붕 및 홈통공사'];
  const [constructionType, setConstructionType] = useState("기타공사");
  const [checked, setChecked] = useState([]);
  const checkList = ["공공민간구분", "날씨", "온도", "습도", "시설물 분류", "작업프로세스", "작업자수","공종"];
  const [radioSelected, setRadioSelect] = useState("공종");
  const [predictedResult, setPredictedResult] = useState("");
  const [image, setImage] = useState("");



  const setSelect = (key, data) => {
    if (key === "publicType") {
      setPublicType(data);
    } else if (key === "facilityType") {
      setFacilityType(data);
    } else if (key === "weatherType") {
      setWeatherType(data);
    }else if (key === "workProcess") {
      setWorkProcess(data);
    } else if (key === "workers") {
      setWorkers(data);
    } else if (key === "constructionType") {
      setConstructionType(data);
    } else if (key === "radioSelected") {
      setRadioSelect(data);
    }

  }

  const onChange = (key, data) => {
    if (key === "temperature") {
      setTemperature(data);
    } else if (key === "humidity") {
      setHumidity(data);
    }

  }
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  

  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  const submitPredict = async () => {
      const data = {
        "공공민간구분" : publicType,
        "날씨" : weatherType,
        "온도" : temperature,
        "습도" : humidity,
        "시설물 분류" : facilityType,
        "작업프로세스" : workProcess,
        "작업자수" : workers,
        "공종" : constructionType,
      }
      console.log(data)
      const response = await fetch(api_url+"predict",{
        method : 'POST',
        headers :{
          "Content-Type" : "application/json;charset=UTF-8"
        },
        body : JSON.stringify(data)
      });
      const resjson = await response.json()
      setPredictedResult(String(resjson.result))
    }
  const  submitAnalyze = async () => {
    const basedata = {
      "공공민간구분" : publicType,
      "날씨" : weatherType,
      "온도" : temperature,
      "습도" : humidity,
      "시설물 분류" : facilityType,
      "작업프로세스" : workProcess,
      "작업자수" : workers,
      "공종" : constructionType,
    }
    const data = {"value_count" : radioSelected};
    checked.forEach(element => {
      data[element] = basedata[element]
    });

    console.log(data);

    const response = await fetch(api_url+"params",{
      method : 'POST',
      headers :{
        "Content-Type" : "application/json;charset=UTF-8"
      },
      body : JSON.stringify(data)
    });
    // console.log(response)
    const resimage = await response.blob()
    // console.log(resimage.data)
    var url = URL.createObjectURL(resimage);
    setImage(url)
    // console.log(image);
  }

  return (
    <div className="container">

      <h1>Predict</h1>
      <div>
        <h2>Input</h2>
        {/* <div>
          <span>Date : </span>
          <input value={date} onChange={(e) => onChange("tickrate", e.target.value)} />
        </div> */}
        <div>
          <span>공공민간구분 : </span>
          <select onChange={(e) => setSelect("publicType", e.target.value)} value={publicType}>
            {publicTypeList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
        <span>날씨 : </span>
        <select onChange={(e) => setSelect("weatherType", e.target.value)} value={weatherType}>
            {weatherTypeList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <span>Temperature : </span>
          <input value={temperature} onChange={(e) => onChange("temperature", e.target.value)} type="number"/>
        </div>
        <div>
          <span>Humidity : </span>
          <input value={humidity} onChange={(e) => onChange("humidity", e.target.value)} type="number"/>
        </div>
        <div>
        <span>시설물 분류 : </span>
        <select onChange={(e) => setSelect("facilityType", e.target.value)} value={facilityType}>
          
            {facilityTypeList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
        <span>작업프로세스 : </span>
        <select onChange={(e) => setSelect("workProcess", e.target.value)} value={workProcess}>
            {workProcessList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
        <span>작업자 수 : </span>
        <select onChange={(e) => setSelect("workers", e.target.value)} value={workers}>
            {workersList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
        <span>공종 : </span>
        <select onChange={(e) => setSelect("constructionType", e.target.value)} value={constructionType}>
            {constructionTypeList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <hr />
        {/* <div>
          
          <p>
            Selected: <b>{radioSelected}</b>
          </p>
        </div> */}

        
        <div>
        <button onClick={submitPredict}>Predict</button>
        {predictedResult!==""&&(
                        <span>result : {predictedResult}</span>
                    )}
        </div>
        <hr/>
        <div>
        <div className="list-container">
          <span>Parameter List</span>
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
        <div className="Radio-container">
          <span>X Label </span> 
        <select onChange={(e) => setSelect("radioSelected", e.target.value)} value={radioSelected}>
            {checkList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
        <button onClick={submitAnalyze}>Analyze</button>
        {{image}!==""&&(
          <img src={image} alt="icons" width="480" border="0"/>
        )}
        
        </div>

        </div>
      </div>
    </div>
  );
};

export default Predict;
