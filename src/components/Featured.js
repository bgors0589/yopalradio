import React from "react";
import { connect, css } from "frontity";

const Featured = ({state, imgId, element}) => {
    const media =  state.source.attachment[imgId]
    if (element === "principal")
    return(
        <>
            <img src={media.source_url} css={css`position: absolute; top: 0; width: 100%;
                                            transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
                                            :hover{
                                                -webkit-transform: matrix(1.2, 0, 0, 1.2, 0, 0);
                                                transform: matrix(1.2, 0, 0, 1.2, 0, 0); 
                                            }
                                            ::after {
                                                background-image: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%);
                                                opacity: 0.6;
                                                left: 0;
                                                top: 0;
                                                right: 0;
                                                bottom: 0;
                                                content: "";
                                                position: absolute;
                                                z-index: 1;
                                                pointer-events: none;
                                                border-radius: 8px 8px 0 0;
                                            }`} />
        </>
    )

    if(element === "post")
    return(
        <>
            <img src={media.source_url} css={css`width: 100%;
                                            `} />
        </>
    )
}

export default connect(Featured)