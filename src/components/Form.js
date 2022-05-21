import React, {useState} from "react";


export default function Form(props) {
  
  const [text, setText] = useState('');
  
  const handleUpClick = () =>{
        const uppercase = text.toUpperCase()
        setText(uppercase);
        props.showAlert('Coverted to uppercase!', 'success')
    }

    const handleDnClick = () =>{
        const lowercase = text.toLowerCase()
        setText(lowercase);
        props.showAlert('Coverted to lowercase!', 'success')
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    
    const clearText = () => {
      setText('');
      props.showAlert('Text cleared!', 'success')
    }

    const handleCopy = () => {
      navigator.clipboard.writeText(text)
      props.showAlert('Text copied to clipboard!', 'success')
      // document.getSelection().removeAllRanges()
    }

    const removeExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '))
    }


    // const convertToCapitalLetter = () => {
    //   const noOfWords = text.trim().split(" ")[0] ? text.trim().split(" ").length : 0
    //   const word = text.trim().split(" ")
    // //  console.log(word[0] || (word[noOfWords-1].endsWith('.')===true));
    //   if(word[0]){
    //   const newText = word[0].charAt(0).toUpperCase() + word[0].slice(1)
    //   console.log(newText);
    //   }
    // }
    

  return (
    <div>
      <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
          <h1 className="mb-3" >{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Enter text here" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white'}} id="myBox" rows="8" />
        </div>
      <button disabled={text.trim().length === 0} type="submit" className="btn btn-primary me-3 my-1" onClick={handleUpClick}>Covert to Uppercase</button>
      <button disabled={text.trim().length === 0} type="submit" className="btn btn-primary me-3 my-1" onClick={handleDnClick}>Covert to Lowercase</button>
      <button disabled={text.trim().length === 0} type="submit" className="btn btn-primary me-3 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.trim().length === 0} type="submit" className="btn btn-primary me-3 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
      <button disabled={text.trim().length === 0} type="submit" className="btn btn-primary me-3 my-1" onClick={clearText}>Clear Text</button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
          <h2>Preview</h2>
          <p>{text.length>0 ? text : 'Nothing to preview'}</p>
          <h4>Your Text Summary</h4>
          {/* <p>{text.trim().split(" ")[0] ? text.trim().split(" ").length : 0} words and {text.trim().length} characters.</p> */}
          <p>{text.trim().split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.trim().length} characters.</p>
          <h4>Average time to read above text</h4>
          <p>It can be read {0.008 * (text.trim().split(" ").length)} minutes.</p>

      </div>
    </div>
  );
}
