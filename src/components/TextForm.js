import React, { useState } from 'react';

function TextForm({ heading, mode, showAlert }) {
    const [text, setText] = useState("");

    function handleUpClick() {
        setText(text.toUpperCase());
        showAlert("Successfully converted to UpperCase.", "success");
    }

    function handleLoClick() {
        setText(text.toLowerCase());
        showAlert("Successfully converted to LowerCase.", "success");
    }

    function handleClearText() {
        setText("");
        showAlert("Successfully the text box is cleared.", "success");
    }

    function handleOnChange(e) {
        setText(e.target.value);
    }

    function handleCopy() {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        showAlert("Copied to clipboard.", "success");
    }

    function handleExtraSpaces() {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        showAlert("Extra spaces removed.", "success");
    }

    function countWords(text){
        let arr = text.split(" ");
        let resultArr = arr.filter(word => {
            return word !== String("");
        });

        return resultArr.length;
    }

    return (
        <>
            <div className="container" style={{ color: mode === "dark" ? "white" : "black" }}>
                <h1>{heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: mode === "dark" ? "#030c19" : "white",
                            color: mode === "dark" ? "white" : "black"
                        }}
                        id="myBox"
                        rows="8"
                    >
                    </textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: mode === "dark" ? "white" : "black" }}>
                <h2>Your Text summary</h2>
                <p>{countWords(text)} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} Minutes to Read.</p>
                <h2>Perview</h2>
                <p>{text.length > 0 ? text : "Enter something in the above text box to preview it here :)"}</p>
            </div>
        </>
    );
}

export default TextForm;
