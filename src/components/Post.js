import React from 'react'
import { connect, css, styled } from 'frontity'
import Doted from "../assets/dotted.png";
import Featured from "../components/Featured";

const Post = ({state, element}) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    console.log(post)
    return (
        <>
            <div css={css`max-width: 1040px;
                        background: #ddd;
                        border-radius: 8px;
                        clear: both;
                        margin: 1rem auto;
                        padding: 1rem;
                        min-height: calc(100vh - 80px - 190px)`}>
                <section css={css`width: 64%; float: left;`}>
                    <article css={css`background-color: white;
                            border-radius: 8px;
                            padding: 1rem;`}>
                                <header css={css`margin: 12px 0 16px 0;`}>
                                    <h1  css={css`font-size: 2rem;
                                            margin-top: 0;
                                            margin-bottom: 1rem;
                                            // font-family: 'raleway-bold';
                                            font-weight: 700;
                                            color: #424242;`}
                                        dangerouslySetInnerHTML={{__html: post.title.rendered}}
                                        ></h1>
                                </header>
                                <p>{post.date.split("T",1)}</p>
                                <div>
                                    <Featured imgId={post.featured_media} element="post" />
                                    <br/>
                                    <br/>
                                    <div css={css`max-width: 500px;
                                        margin: 0 auto;`}>
                                            <div 
                                                dangerouslySetInnerHTML={{__html: post.content.rendered}}
                                                ></div>
                                        </div>
                                    
                                </div>
                    </article>
                    
                        
                </section>
                <aside css={css`width: 34%; float: right;
                            position: sticky;
                            position: -webkit-sticky;
                            top: 100px;`}>
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

export default connect(Post)

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