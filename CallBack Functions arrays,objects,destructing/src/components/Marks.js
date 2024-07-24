import React, { useEffect } from "react";
import { useRef } from "react";

function Marks() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let telInputRef = useRef();
  let hinInputRef = useRef();
  let engInputRef = useRef();
  let matInputRef = useRef();
  let sciInputRef = useRef();
  let socInputRef = useRef();
  let resultParaRef = useRef();
  let firstNameResultRef = useRef();
  let lastNameResultRef = useRef();
  let telResultRef = useRef();
  let hinResultRef = useRef();
  let engResultRef = useRef();
  let matResultRef = useRef();
  let sciResultRef = useRef();
  let socResultRef = useRef();
  useEffect(() => {}, []);
  let sachinDetails = {
    firstName: "Sachin",
    lastName: "Tendulkar",
    city: "Mumbai",
    telMarks: 50,
    engMarks: 85,
    hinMarks: 95,
    matMarks: 75,
    sciMarks: 45,
    socMarks: 25,
    age: 51,
  };
  let viratDetails = {
    firstName: "Virat",
    lastName: "Kolhi",
    city: "Delhi",
    telMarks: 85,
    engMarks: 75,
    hinMarks: 65,
    matMarks: 55,
    sciMarks: 45,
    socMarks: 35,
    age: 35,
    aboutVirat: () => {
      console.log(
        "Virat kolhi  is an Indian international cricketer who plays Test and One Day International (ODI) cricket for the Indian national team. A former captain in all formats, Kohli retired from Twenty20 International (T20I) following India's win at the 2024 T20 World Cup. He is a right-handed batsman and an occasional unorthodox right arm quick bowler. He represents Royal Challengers Bengaluru in the Indian Premier League (IPL) and Delhi in domestic cricket. "
      );
    },
  };
  if (sachinDetails.age > viratDetails.age) {
    console.log("sachin is older");
  } else {
    console.log("virat is older");
  }
  console.log(sachinDetails.city);
  viratDetails.aboutVirat();
  let calcTenth = (studentDetails) => {
    let passMarks = 35;
    if (
      studentDetails.telMarks >= passMarks &&
      studentDetails.hinMarks >= passMarks &&
      studentDetails.engMarks >= passMarks &&
      studentDetails.matMarks >= passMarks &&
      studentDetails.sciMarks >= passMarks &&
      studentDetails.socMarks >= passMarks
    ) {
      console.log(`${studentDetails.firstName} passed in exam`);
    } else {
      console.log(`${studentDetails.firstName} failed in exam`);
    }
  };
  calcTenth(viratDetails);
  calcTenth(sachinDetails);
  let TendulkarEngMarks = sachinDetails.engMarks;
  console.log(TendulkarEngMarks);
  let {
    engMarks: viratEngMarks,
    telMarks: viratTelMarks,
    hinMarks: viratHinMarks,
    matMarks: viratMatMarks,
    sciMarks: viratSciMarks,
    socMarks: viratSocMarks,
  } = viratDetails;
  console.log(
    viratEngMarks,
    viratTelMarks,
    viratHinMarks,
    viratMatMarks,
    viratSciMarks,
    viratSocMarks
  );
  let {
    engMarks: sachinEngMarks,
    telMarks: sachinTelMarks,
    hinMarks: sachinHinMarks,
    matMarks: sachinMatMarks,
    sciMarks: sachinSciMarks,
    socMarks: sachinSocMarks,
  } = sachinDetails;
  console.log(
    sachinEngMarks,
    sachinTelMarks,
    sachinHinMarks,
    sachinMatMarks,
    sachinSciMarks,
    sachinSocMarks
  );

  let dhoniDetails = [
    "Dhoni",
    "Mahendra Singh",
    "jharkhand",
    98,
    87,
    76,
    65,
    54,
    43,
    43,
  ];
  console.log(dhoniDetails[2]);
  let [
    dhoniName,
    ,
    dhoniState,
    dhoniTel,
    dhoniHin,
    dhoniEng,
    dhoniMat,
    dhoniSci,
    dhoniSoc,
    dhoniAge,
  ] = dhoniDetails;
  console.log(
    dhoniName,
    dhoniState,
    dhoniTel,
    dhoniHin,
    dhoniEng,
    dhoniMat,
    dhoniSci,
    dhoniSoc,
    dhoniAge
  );
  let calculateTenthResult = (
    telMarks,
    engMarks,
    hinMarks,
    matMarks,
    sciMarks,
    socMarks
  ) => {
    let passMarks = 35;
    if (
      telMarks >= passMarks &&
      engMarks >= passMarks &&
      hinMarks >= passMarks &&
      matMarks >= passMarks &&
      sciMarks >= passMarks &&
      socMarks >= passMarks
    ) {
      console.log("passed");
    } else {
      console.log("failed");
    }
  };
  calculateTenthResult(10, 20, 30, 40, 50, 60);

  useEffect(() => {
    alert("Welcome, Calculate your marks..😊 ");
  });
  let inputOnFocus = (
    inputRefFocus,
    bgColor = "orange",
    textColor = "white"
  ) => {
    inputRefFocus.current.style.backgroundColor = bgColor;
    inputRefFocus.current.style.color = textColor;
  };
  let inputOnchange = (inputRefChange, resultRefChange) => {
    if (
      inputRefChange.current.value >= 0 &&
      inputRefChange.current.value <= 100
    ) {
      if (inputRefChange.current.value >= 35) {
        resultRefChange.current.innerHTML = "Pass";
        resultRefChange.current.style.backgroundColor = "green";
      } else {
        resultRefChange.current.innerHTML = "Fail";
        resultRefChange.current.style.backgroundColor = "red";
      }
    } else {
      resultRefChange.current.innerHTML = "Invalid";
      resultRefChange.current.style.backgroundColor = "orange";
    }
  };
  let inputOnBlur = (inputRefBlur) => {
    inputRefBlur.current.style.backgroundColor = "";
    inputRefBlur.current.style.color = "black";
  };

  return (
    <div>
      <form>
        <div>
          <h4 className="title">Tenth marks calculator</h4>
          <label>First name</label>
          <input
            ref={firstNameInputRef}
            onFocus={() => {
              inputOnFocus(firstNameInputRef, "violet", "yellow");
            }}
            onBlur={() => {
              inputOnBlur(firstNameInputRef);
            }}
          ></input>
          <span ref={firstNameResultRef}></span>
        </div>
        <div>
          <label>Last name</label>
          <input
            ref={lastNameInputRef}
            onFocus={() => {
              inputOnFocus(lastNameInputRef, "red", "white");
            }}
            onBlur={() => {
              inputOnBlur(lastNameInputRef);
            }}
          ></input>
          <span ref={lastNameResultRef}></span>
        </div>
        <div>
          <label>Telugu</label>
          <input
            type="number"
            ref={telInputRef}
            onFocus={() => {
              inputOnFocus(telInputRef, "", "blue");
            }}
            onChange={() => {
              inputOnchange(telInputRef, telResultRef);
            }}
            onBlur={() => {
              inputOnBlur(telInputRef);
            }}
          ></input>
          <span ref={telResultRef}></span>
        </div>
        <div>
          <label>Hindi</label>
          <input
            type="number"
            ref={hinInputRef}
            onFocus={() => {
              inputOnFocus(hinInputRef, "brown");
            }}
            onChange={() => {
              inputOnchange(hinInputRef, hinResultRef);
            }}
            onBlur={() => {
              inputOnBlur(hinInputRef);
            }}
          ></input>
          <span ref={hinResultRef}></span>
        </div>
        <div>
          <label>English</label>
          <input
            type="number"
            ref={engInputRef}
            onFocus={() => {
              inputOnFocus(engInputRef);
            }}
            onChange={() => {
              inputOnchange(engInputRef, engResultRef);
            }}
            onBlur={() => {
              inputOnBlur(engInputRef);
            }}
          ></input>
          <span ref={engResultRef}></span>
        </div>

        <div>
          <label>Maths</label>
          <input
            type="number"
            ref={matInputRef}
            onFocus={() => {
              inputOnFocus(matInputRef);
            }}
            onChange={() => {
              inputOnchange(matInputRef, matResultRef);
            }}
            onBlur={() => {
              inputOnBlur(matInputRef);
            }}
          ></input>
          <span ref={matResultRef}></span>
        </div>
        <div>
          <label>Science</label>
          <input
            type="number"
            ref={sciInputRef}
            onFocus={() => {
              inputOnFocus(sciInputRef);
            }}
            onChange={() => {
              inputOnchange(sciInputRef, sciResultRef);
            }}
            onBlur={() => {
              inputOnBlur(sciInputRef);
            }}
          ></input>
          <span ref={sciResultRef}></span>
        </div>
        <div>
          <label>Social</label>
          <input
            type="number"
            ref={socInputRef}
            onFocus={() => {
              inputOnFocus(socInputRef);
            }}
            onChange={() => {
              inputOnchange(socInputRef, socResultRef);
            }}
            onBlur={() => {
              inputOnBlur(socInputRef);
            }}
          ></input>
          <span ref={socResultRef}></span>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let firstName = firstNameInputRef.current.value;
              let lastName = lastNameInputRef.current.value;
              let telMarks = Number(telInputRef.current.value);
              let hinMarks = Number(hinInputRef.current.value);
              let engMarks = Number(engInputRef.current.value);
              let matMarks = Number(matInputRef.current.value);
              let sciMarks = Number(sciInputRef.current.value);
              let socMarks = Number(socInputRef.current.value);
              let total =
                telMarks + engMarks + hinMarks + matMarks + sciMarks + socMarks;
              let result;
              if (
                0 > engMarks ||
                engMarks > 100 ||
                0 > telMarks ||
                telMarks > 100 ||
                0 > hinMarks ||
                hinMarks > 100 ||
                0 > matMarks ||
                matMarks > 100 ||
                0 > sciMarks ||
                sciMarks > 100 ||
                0 > socMarks ||
                socMarks > 100
              ) {
                result = "Invalid";
                resultParaRef.current.innerHTML = "Please Enter Valid Marks";
              } else {
                if (
                  engMarks < 35 ||
                  telMarks < 35 ||
                  hinMarks < 35 ||
                  matMarks < 35 ||
                  sciMarks < 35 ||
                  socMarks < 35
                ) {
                  result = "Failed";
                } else {
                  result = "Passed";
                }
                alert(`Total Marks are : ${total}`);
                resultParaRef.current.innerHTML = `${firstName} ${lastName} ${result} in SSC examination and got total marks  "${total}"`;
                console.log(total);
              }
            }}
          >
            Calculate Result
          </button>
        </div>
        <p
          ref={resultParaRef}
          onMouseMove={() => {
            resultParaRef.current.style.color = "green";
          }}
        >
          Please enter values and click "Calculate"
        </p>
      </form>
    </div>
  );
}
export default Marks;
