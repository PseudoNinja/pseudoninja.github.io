import React from "react";

import app from "../app/app";

export default function Custom404() {
    return (
        <div id="error-404" className="">
            <div id="error-404-container" className="">
                <div id="error-404-code" className="">
                    404
                </div>
                <div id="error-404-msg" className="">
                    {app.lang.translate(
                        "I'm sorry Dave; I can't do that right now."
                    )}
                </div>
            </div>
        </div>
    );
}
