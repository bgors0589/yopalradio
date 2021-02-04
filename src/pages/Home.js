import React, {useState} from "react";
import {connect, styled, css} from 'frontity'
import Doted from "../assets/dotted.png";
import {FaRegNewspaper} from "react-icons/fa"

import Featured from "../components/Featured";
import Category from "../components/Category";
import Link from "../components/Link";

const Home = ({actions, state}) => {

    const audioRef = React.useRef()
    const data = state.source.get(state.router.link)

    return(
        <>
            <div css={css`max-width: 1040px;
                        background: #ddd;
                        border-radius: 8px;
                        clear: both;
                        margin: 1rem auto;
                        padding: 1rem;
                        min-height: calc(100vh - 80px - 190px)`}>
                <section css={css`width: 64%; float: left;`}>
                    <TitleUltimas>
                        <SpanTitleU>Lo último</SpanTitleU>
                    </TitleUltimas>
                    <DivCardsNotas>
                            {data.items.map(({id})=>{
                            const Nota = state.source.post[id]
                            return(
                                <>
                                <DivCardNotas key={id}>
                                    <DivWrapFigureNotas>
                                    <H3CoverTagNotas>
                                        {/* <a href="/noticias/cine">Cine</a> */}
                                        <Category id={Nota.categories[0]} />
                                    </H3CoverTagNotas>      
                                    <figure css={css`margin: 0;`}>
                                    <a href={Nota.link} css={css`display: block;
                                                    position: relative;
                                                    overflow: hidden;
                                                    padding-top: 56.25%;`}
                                            onClick={
                                                event=>{
                                                    event.preventDefault();
                                                    actions.router.set(Nota.link);
                                                }
                                            }>
                                        <Featured imgId={Nota.featured_media} element="principal" />
                                    </a>
                                    <div css={css`position: absolute;
                                                right: 1rem;
                                                z-index: 1;
                                                font-size: 2rem;
                                                color: white;
                                                border-radius: 50%;
                                                background-color: #472084;
                                                box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.46);
                                                padding: 0.3rem;
                                                margin-top: -20px;
                                                text-decoration: none;
                                                width: 42px;
                                                height: 42px;
                                                line-height: 2.6rem;`}><FaRegNewspaper /></div>
                                    </figure>
                                    </DivWrapFigureNotas>
                                    <div css={css`padding: 1rem 1.6rem 1.6rem;`}>
                                    <time css={css`font: bold 0.7rem "brandon-bold";
                                                color: #a0a0a0;
                                                text-transform: uppercase;`}>Publicado el: {Nota.date.split("T",1)}</time>
                                    <a href={Nota.link} css={css`text-decoration: none; color: #000;
                                                            :hover{
                                                                color: #472084;
                                                            }`}
                                            onClick={
                                                event=>{
                                                    event.preventDefault();
                                                    actions.router.set(Nota.link);
                                                }
                                            }><h2 css={css`font: bold 1.2rem "raleway-bold";
                                                margin: 0.6rem 0;`} dangerouslySetInnerHTML={{__html:Nota.title.rendered}}></h2></a>
                                    </div>
                                </DivCardNotas>
                                </>
                            )
                            })}
                    </DivCardsNotas>
                </section>
                <aside css={css`width: 34%; float: right;
                            position: sticky;
                            position: -webkit-sticky;
                            top: 100px;`}>
                    <SectionBoxEmisoras>
                        <DivModEmisoras>
                            <DivHeaderMod>
                                <div css={css`font-size: 21px;
                                    color: #fff;
                                    font-weight: 500;
                                    text-transform: uppercase;`}>Escucha en vivo</div> 
                                <div css={css`position: absolute;
                                                    top: 0;
                                                    right: 0;
                                                    height: 100%;
                                                    border-left: 1px solid #fff;
                                                    width: 65px;
                                                    text-align: center;
                                                    padding-top: 9px;`}><span css={css`    display: inline-block;
                                                                    width: 40px;
                                                                    height: 40px;
                                                                    border-radius: 50%;
                                                                    border: 2px solid #fff;
                                                                        ::before{
                                                                            position: absolute;
                                                                            top: 50%;
                                                                            left: 50%;
                                                                            margin-top: -9px;
                                                                            content: "";
                                                                            display: inline-block;
                                                                            width: 0;
                                                                            height: 0;
                                                                            border-left: 15px solid #fff;
                                                                            border-top: 9px solid transparent;
                                                                            border-bottom: 9px solid transparent;
                                                                            margin-left: -5px;
                                                                        }
                                                                    }
                                                                    `}></span></div> 
                            </DivHeaderMod>
                                    
                                <div css={css`border: 1px solid #ccc;
                                            background: #fff;
                                            padding: 19px 23px;`}>
                                    <div class="x-slide slide-station x-done" >

                                        <div class="x-wrapper">
                                            <div class="x-container">
                                            <div class="x-emisoras">
                                                    <div class="title-station">PLAYER<br />
                                                        <audio controls ref={audioRef}>
                                                            <source src="https://stream.zenolive.com/xx5hfuvk9neuv.aac" />
                                                        </audio>
                                                    </div>
                                            </div>
                                            </div>
                                        </div>         
                                    
                                    </div>
                                </div>

                                <div css={css`padding: 6px;
                                    font-size: 13px;
                                    line-height: 1;
                                    background: #472084;
                                    color: #fff;
                                    height: 26px;
                                    text-align: center;
                                    height: 26px;
                                    font-style: italic;`}><span>Solo dar Play</span></div>
                                    
                        </DivModEmisoras>
                    </SectionBoxEmisoras>
                    <section css={css`clear: both;
                                        margin-top: 2rem;`}>
                        <TitleUltimas>
                            <SpanTitleU>Top Musical</SpanTitleU>
                        </TitleUltimas>
                            <DivBoxContent css={css`padding: 0;`}>
                            
                                <DivItemTop css={css`padding: 0;`}>
                                <SpanNumberTop css={css`font-size: 3rem;`}>1</SpanNumberTop>
                                <DivCaptionTop css={css`font-size: 1.6rem;`}><span itemprop="byArtist" class="artist">KAROL G</span> <SpanNameTop>BICHOTA</SpanNameTop></DivCaptionTop>
                                <DivOptionsTop css={css`background-color: black; position: relative;
                                                            width: 8rem;`}><img css={css`border: 0;
                                            max-width: 100%;
                                            vertical-align: middle;`} src="https://f.radio-lazona.io/2020/11/13/103210_1022378.jpg" alt="BICHOTA" />
                                </DivOptionsTop>
                                </DivItemTop>
                                <DivItemTop>
                                <SpanNumberTop>2</SpanNumberTop>
                                <DivCaptionTop><span itemprop="byArtist" class="artist">CAMILO</span> <SpanNameTop>VIDA DE RICO </SpanNameTop></DivCaptionTop>
                                <DivOptionsTop>
                                </DivOptionsTop>
                                </DivItemTop>
                                                
                                <DivItemTop>
                                <SpanNumberTop>3</SpanNumberTop>
                                <DivCaptionTop><span itemprop="byArtist" class="artist">FARRUKO</span> <SpanNameTop>LA TOXICA </SpanNameTop></DivCaptionTop>
                                <DivOptionsTop>
                                </DivOptionsTop>
                                </DivItemTop>
                                                
                                <DivItemTop>
                                <SpanNumberTop>4</SpanNumberTop>
                                <DivCaptionTop><span itemprop="byArtist" class="artist">CIELO TORRES</span> <SpanNameTop>NUNCA ES SUFICIENTE </SpanNameTop></DivCaptionTop>
                                <DivOptionsTop>
                                </DivOptionsTop>
                                </DivItemTop>
                                                
                                <DivItemTop>
                                <SpanNumberTop>5</SpanNumberTop>
                                <DivCaptionTop><span itemprop="byArtist" class="artist">SEBASTIÁN YATRA Y GUAYNAA</span> <SpanNameTop>CHICA IDEAL </SpanNameTop></DivCaptionTop>
                                <DivOptionsTop>
                                </DivOptionsTop>
                                </DivItemTop>
                                    <div class="more"><a href="/ranking" css={css`border-radius: 8px;
                                                            background-color: #472084;
                                                            color: white;
                                                            font: italic bold 1.1rem "Space Mono";
                                                            margin: 6px;
                                                            display: inline-block;
                                                            padding: .2rem 1.2rem;
                                                            float: right;
                                                            text-transform: uppercase;`}
                                                            onClick={
                                                                event=>{
                                                                    event.preventDefault();
                                                                    actions.router.set("/ranking");
                                                                }
                                                            }>Todo el ranking</a></div>
                            </DivBoxContent>
                    </section>

                    <section css={css`clear: both;`}>
                        <TitleUltimas>
                            <SpanTitleU>Eventos</SpanTitleU>
                        </TitleUltimas>
                        <DivBoxContent css={css`margin-bottom: 2rem;`}>
                            <img src="https://s3-us-west-2.amazonaws.com/joinnus.com/user/1385757/act5fd14ddf143d2.jpg" css={css`width: 100%;`} />
                            <img src="https://s3-us-west-2.amazonaws.com/joinnus.com/user/1385757/act5fd14ddf143d2.jpg" css={css`width: 100%;`} />
                            <img src="https://s3-us-west-2.amazonaws.com/joinnus.com/user/1385757/act5fd14ddf143d2.jpg" css={css`width: 100%;`} />
                            <img src="https://s3-us-west-2.amazonaws.com/joinnus.com/user/1385757/act5fd14ddf143d2.jpg" css={css`width: 100%;`} />
                            <img src="https://s3-us-west-2.amazonaws.com/joinnus.com/user/1385757/act5fd14ddf143d2.jpg" css={css`width: 100%;`} />
                            <img src="https://s3-us-west-2.amazonaws.com/joinnus.com/user/1385757/act5fd14ddf143d2.jpg" css={css`width: 100%;`} />
                        </DivBoxContent>
                    </section>
                </aside>
                <div css={css`clear:both;`}></div>
            </div>
        </>
    )
}

export default connect(Home)

const SectionBoxEmisoras = styled.section`
    clear: both;
    margin-top: 2rem;
`;

const DivModEmisoras = styled.div`
    border-top: 3px solid #2d9ecc;
`;

const DivHeaderMod = styled.div`
    height: 58px;
    padding: 15px 14px;
    position: relative;
    background: #472084;
    padding: 14px 65px 14px 15px;
`;

const DivBoxContent = styled.div`
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    padding: 2rem;
`;

const TitleUltimas = styled.h4`
    font-weight: 600;
    text-transform: uppercase;
    color: #424242;
    background: url(${Doted});
    margin-bottom: 1.3rem;
    margin-top: 1.8rem;
    font-size: 2.2rem;
`;

const SpanTitleU = styled.span`
    background-color: #ddd;
    padding-right: 1.5rem;
`;
const DivItemTop = styled.div`
    border-bottom: 1px solid #ddd;
    font: 1.1rem "Bangers";
    min-height: 4.5rem;
    display: table;
    width: 100%;
    padding: 0.6rem 0;
    cursor: pointer;
    >*{
        display: table-cell;
        vertical-align: middle;
    }
    :hover{
        background-color: #472084;
        span{
            color: #fff
        }
        span:last-child {
            
                color: #ff0
            
        }
    }
    }
`;

const SpanNumberTop = styled.span`
    font-size: 1.5rem;
    color: #000;
    width: 3.6rem;
    text-align: center;
`;

const DivCaptionTop = styled.div`
    font-size: 1.2rem;
    color: #000;
    text-transform: uppercase;
`;

const DivOptionsTop = styled.div`
    width: 4rem;
    text-align: center;
`;

const SpanNameTop = styled.span`
    color: #472084;
    :hover{
        color: #ff0;
    }
`;

const DivCardsNotas = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 10px;
    grid-auto-flow: row dense;
`;

const H3CoverTagNotas = styled.h3`
    position: absolute;
    bottom: -18px;
    left: 0;
    z-index: 2;
    background: #472084;
    padding: 0 10px;
    display: inline-block;
    line-height: 17px;
`;

const DivWrapFigureNotas = styled.div`
    position: relative;
`;

const DivCardNotas = styled.div`
    position: relative;
    border-radius: 8px;
    background-color: white;
    margin-bottom: 1rem;
    overflow: hidden;
    width: 100%;
    // float: left;
    // margin: 6px;
`;