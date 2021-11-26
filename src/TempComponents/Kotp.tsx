import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function OtpSearch(props: any) {
  const [firstSearch, setFirstSearch] = useState("");
  const [secondSearch, setSecondSearch] = useState("");
  const [thirdSearch, setThirdSearch] = useState("");
  const [fourthSearch, setFourthSearch] = useState("");

  const _firstRef = useRef<any>({});
  const _secondRef = useRef<any>({});
  const _thirdRef = useRef<any>({});
  const _fourthRef = useRef<any>({});

  useEffect(() => {
    _firstRef.current.focus();
  });
  useEffect(() => {
    if (firstSearch.length === 1) {
      _secondRef.current.focus();
    }
  }, [firstSearch.length]);

  useEffect(() => {
    if (secondSearch.length === 1) {
      _thirdRef.current.focus();
    }
  }, [secondSearch.length]);

     useEffect(() => {
    if (thirdSearch.length === 1) {
      _fourthRef.current.focus();
    }
  }, [thirdSearch.length]);

  return (
    <div className="App">
      <h1>Enter OTP</h1>
      <input className="inputOtp"
        type="text"
        maxLength={1}
        value={firstSearch}
        onChange={(e: any) => setFirstSearch(e.target.value)}
        ref={_firstRef}
      />
      <input className="inputOtp"
        type="text"
        maxLength={1}
        value={secondSearch}
        onChange={(e: any) => setSecondSearch(e.target.value)}
        ref={_secondRef}
      />
      <input className="inputOtp"
        type="text"
        maxLength={1}
        value={thirdSearch}
        onChange={(e: any) => setThirdSearch(e.target.value)}
        ref={_thirdRef}
      />
      <input className="inputOtp"
        type="text"
        maxLength={1}
        value={fourthSearch}
        onChange={(e: any) => setFourthSearch(e.target.value)}
        ref={_fourthRef}
      />
    </div>
  );
}
export default OtpSearch