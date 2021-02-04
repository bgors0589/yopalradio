import React, {useState} from "react";
import {connect, styled, css} from 'frontity'
import Doted from "../assets/dotted.png";

const NotaHome = ({actions, state}) => {
    return (
        <>
            <SectionPage>
                <TitleUltimas>
                    <SpanTitleU>Lo último</SpanTitleU>
                </TitleUltimas>
            </SectionPage>
        </>
    )
}

export default connect(NotaHome)

const SectionPage = styled.section`
    width: 100%;
    float: left;
    margin-right: -330px;
    padding-right: 330px;
`;

const TitleUltimas = styled.h4`
    font-weight: 600;
    text-transform: uppercase;
    color: #424242;
    background: url(${Doted});
    margin-bottom: 1.4rem;
`;

const SpanTitleU = styled.span`
    background-color: #ddd;
    padding-right: 2rem;
`;