import React,{useState} from 'react'

export default function Text(props) {
    const [text, setText] = useState("Enter the value")

const onUpperCase=()=>{
    console.log("you click Here")
    let Newtext=text.toUpperCase();
    setText(Newtext);
    props.showAlert("Converted to UpperCase","Success");
}
const onchangeclicked=(event)=>{
   console.log("click Here")
   setText(event.target.value);
}

const onlowerCase=()=>{
    console.log("you click Here")
    let oldText=text.toLowerCase();
    setText(oldText);
    props.showAlert("Converted to LowerCase","Success");
}
const onTextClear=()=>{
    console.log("you click Here")
    let oldText='';
    setText(oldText);
    props.showAlert("Text is Clear","Success");
}
const onTextcopy=()=>{
    console.log("Text copied")
    let text=document.getElementById("Mybox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("clip is copied","Success");
}

const onTextspacesRemove=()=>{
    console.log("you click Here")
    let oldText=text.split(/[ ]+/);
    setText(oldText.join(" "));
    props.showAlert("Removed ExtraSpaces","Success");
}
  return (
<>
<div className='container my-3 'style={{color:props.mode==='dark'?'white':'black'}}>
         <h1>{props.Heading}</h1>
            <div className="mb-3" >
            <label htmlFor="Mybox"  className="form-label"></label>
            <textarea className="form-control" value={text} id="Mybox" rows="8"style={{backgroundColor:props.mode==='dark'?'#41464b':'white' ,color:props.mode==='dark'?'white':'black'}} onChange={onchangeclicked}></textarea>
            </div>
        <button className="btn btn-primary mx-1" onClick={onUpperCase}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={onlowerCase}>Convert To LowercaseCase</button>
        <button className="btn btn-primary mx-1" onClick={onTextClear}>ClearText</button>
        <button className="btn btn-primary mx-1" onClick={onTextcopy}>CopyText</button>
        <button className="btn btn-primary mx-1" onClick={onTextspacesRemove}>Remove Extra Spaces</button>
        
  </div>
  <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Text Summary</h2>
    <p>{text.trim().length===0?0:text.trim().split(" ").length}words and {text.length}characters</p>
    <p>{0.008 * text.split(" ").length} Minutes React</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'write something for preview'}</p>
  </div>
  </>
  
        )
  }