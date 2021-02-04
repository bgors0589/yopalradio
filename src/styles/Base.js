import React from "react";
import { Global, css } from "frontity";

const Base = () => {
    return (
        <Global 
            styles = { css`
            @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@1,700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
            html{
                font-family: 'Space Grotesk', sans-serif;
            }
            body{
                margin: 0;
                background-color: #ddd;
            }
            a{
                text-decoration: none;
            }
            *{
                box-sizing: border-box;
            }
            `}
        />
    )
}

export default Base