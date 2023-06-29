// import React, { useState } from 'react';

function About({mode}) {
    // let colorObj = {
    //     color: "black",
    //     backgroundColor: "white"
    // }

    // const [myStyle, setMyStyle] = useState(colorObj);
    // const [btnText, setBtnText] = useState("Enable Dark Mode");

    // function toggleStyle() {
    //     if (myStyle.color === "black") {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: "1px solid white"
    //         });
    //         setBtnText("Enable Light Mode");
    //     } else {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         });
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

    const myStyle = {
        color: mode === "dark" ? "white" : "#0b203e",
        backgroundColor: mode === "dark" ? "rgb(36 74 104)" : "white"
    }

    return (
        <div className="container" style={{color: mode === "dark" ? "white" : "#0b203e"}}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils gives a way to analyze your text quickly and efficiently. Be it word count or character count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free To Use.</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextUtils</strong>  is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reprts a number of words and characters. Thus it is suitable for writing text with word / character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This Word Counter software works in any web browser such as chrome, firefox, internet explorer, safari, opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
            </div> */}
        </div>
    );
};

export default About;
