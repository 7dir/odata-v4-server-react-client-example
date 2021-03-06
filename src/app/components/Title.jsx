import React from "react";

export default function Title() {
    return (
        <div>
            <span style={{
                float: "left",
                display: "inline-block",
                position: "relative",
                marginRight: "35px",
                marginBottom: "15px",
                top: "14px",
                width: "202px",
                height: "40px",
                background: "url(logo.png) center no-repeat"
            }}></span>
            <h1 style={{
                lineHeight: '43px'
            }}>Northwind
				<br />
                <span
                    style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "-19px"
                    }} 
                >React example client for JayStack OData v4 Server</span>
            </h1>
        </div>
    )
}