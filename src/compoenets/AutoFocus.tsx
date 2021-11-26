import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Auto =()=>{
const[text,setText]=useState("")
const autoid=useRef<any>()

useEffect(()=>{
    autoid.current.focus()
},[])
const _handleText=()=>{
    setText(autoid.current.value)
}

return(
    <div>
    <input type="text"  placeholder="Auto focus" ref={autoid}/>
    <br />
    <button onClick={_handleText}>click</button>
    <br />
    <p>{text}</p>
    </div>
)

}


export default Auto