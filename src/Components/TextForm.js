import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Convert to UpperCase got clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleloClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleclearClick = ()=>{
        let newText = "";
        setText(newText)
    }
    const handlecameClick = ()=>{
        let newText = text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("OnChange");
        setText(event.target.value)
        setOriginalText(event.target.value);
    }
    const handleRevertClick = () => {
        setText(originalText);
      };
    const[text, setText] = useState("");
    const [originalText, setOriginalText] = useState('');
    //text = "use text" wrong way to change the set
    //setText("new text") right way to change the set 
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            <textarea className='form-control' value={text} onChange={handleOnChange} id='myBox' rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.Mode === 'green' ? 'success' : 'primary'} mx-2`} onClick={handleUpClick}>Convert to UpperCase</button>
        <button className={`btn btn-${props.Mode === 'green' ? 'success' : 'primary'} mx-2`} onClick={handleloClick}>Convert to Lowercase</button>
        <button className={`btn btn-${props.Mode === 'green' ? 'success' : 'primary'} mx-2`} onClick={handlecameClick}>Camel Case</button>
        <button className={`btn btn-${props.Mode === 'green' ? 'success' : 'primary'} mx-2`} onClick={handleRevertClick}>Back</button>
        <button className={`btn btn-${props.Mode === 'green' ? 'success' : 'primary'} mx-2`} onClick={handleclearClick}>Clear</button>
    </div>
    <div className = "container">
        <h2>Your summary</h2>
        <p>The text contains characters {text.length} and words {wordCount(text)}</p>
        <p>{0.008 * text.length} minutes required to read</p>
        <h1>Preview</h1>
        <p>{text}</p>
    </div>
    </>
  )
}

function wordCount(text) {
    // Trim the text to remove leading and trailing whitespace
    const trimmedText = text.trim();
  
    // Check if the trimmed text is empty
    if (trimmedText === "") {
      return 0;
    }
  
    // Split the text by one or more spaces and return the length of the resulting array
    return trimmedText.split(/\s+/).length;
  }