import React, { useState } from 'react';

function TextForm({ heading }) {
    const [text, setText] = useState("");

    function handleUpClick() {
        setText(text.toUpperCase());
    }

    function handleLoClick() {
        setText(text.toLowerCase());
    }

    function handleClearText() {
        setText("");
    }

    function handleOnChange(e) {
        setText(e.target.value);
    }

    return (
        <>
            <div className="container">
                <h1>{heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your Text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} Minutes to Read.</p>
                <h2>Perview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}

export default TextForm;
