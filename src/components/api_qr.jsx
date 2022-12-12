import React, { useState, useEffect } from 'react';
import "./api_qr.css"



function Api_qr() {
    const options = ['Monday', 'Tuesday', 'Thursday', 
  'Friday', 'Saturday', 'Sunday']


    const [url,Seturl] =useState()
    const [word, Setword] = useState()
    const [value, SetValue] = useState()
    const [size,Setsize] = useState()
    const [color, Setcolor] = useState()
    const [format, Setformat] = useState()
    const [QRCode, setQrCode] = useState()

    useEffect(() => {setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&color=${color}&size=${size}x${size}`);}, [value,color,size]);

function handle(){
        Setword(value)
        

    }

    


    return (
        <>
  
            <h1 id="h1">QR code generator</h1>
         <div id ="frame">         
           <p id="p1">enter values for qr code:</p>
           <input id="value" onChange={(e) => {SetValue(e.target.value)}} placeholder='enter value' />
           <br/>
           <p id="p2">set color</p>
            <input id="color" type='color' onChange={(e)=>{Setcolor(e.target.value.substring(1))}}/>
            <br/>
            <p id="p3">set size</p>
            <input id="size" type="range" min="50" max="400" value={size} onChange={(e)=>{Setsize(e.target.value)}}/>
            <br/>
           
            <button id="create" onClick={handle}>generate</button>

            </div>
            <p id="p5">Download qr</p>

            <p id='p4'>select file format</p>
                
                <select onChange={(e)=>{Setformat(e.target.value)}}  id = "dropdown">
                    <option value="N/A">N/A</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <br/>
                <button id="downloadbtn">download</button>

            

            <br/>
            <div id="output">
            <img id="image" src={QRCode} />
            </div>

            
                
                
            


            
        </>
    );
}

export default Api_qr;