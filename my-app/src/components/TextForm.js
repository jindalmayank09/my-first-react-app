
import React,{ useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        if(text === null || text.length === 0) {
            props.showAlert('Plase provide some input for conversation','Faliure');
        }
        console.log('U Just Clicked on Upper Case Button' + text);
        let updatedText = text.toUpperCase();
        setText(updatedText);
        props.showAlert('Converted to Upper Case','Success');
    }
    const handleLowClick = ()=>{
        if(text === null || text.length === 0) {
            props.showAlert('Plase provide some input for conversation','Faliure');
        }
        console.log('U Just Clicked on Lower Case Button' + text);
        let updatedText = text.toLowerCase();
        setText(updatedText);
        props.showAlert('Converted to Lower Case','Success');
    }
    const handleOnChange = (event)=>{
        console.log('OnChange');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
    <h2>{props.heading}</h2>    
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myReactBox" rows="10"></textarea>
            </div>
            <button className='btn btn-primary mx-3' onClick={handleUpClick}>Convert to UpperCase</button>
            <button className='btn btn-primary' onClick={handleLowClick}>Convert to LowerCase</button>
            </div>
            <div className='container my-2'>
                <h1>your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{(1/125)*text.split(" ").length} Time to read words</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            </>
  ) 
}
