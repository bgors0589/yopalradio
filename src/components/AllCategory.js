import React from 'react'
import { connect, css, styled } from 'frontity'
import Category from "../components/Category";

const AllCategory = ({state, element, actions}) => {
    const data = state.source.get(state.router.link)
    const post = data.items
    // console.log(post)
    return (
        <>
            <div css={css`max-width: 1040px;
                        background: #ddd;
                        border-radius: 8px;
                        clear: both;
                        margin: 1rem auto;
                        padding: 1rem;
                        min-height: calc(100vh - 80px - 190px)`}>
                            <p>Este sitio Esta en Mantenimiento, aún asi puedes dirigirte a cualquier contenido dando click</p>
                <section css={css`width: 64%; float: left;`}>
                    {post.map(({id})=>{
                        const infPost = state.source.post[id]
                        return (
                            <div key={id}>
                                <a href={infPost.link} css={css`display: block;
                                                    position: relative;
                                                    overflow: hidden;`}
                                            onClick={
                                                event=>{
                                                    event.preventDefault();
                                                    actions.router.set(infPost.link);
                                                }
                                            }>
                                <Category id={infPost.categories[0]} />
                                <p>{infPost.date.split("T",1)}</p>
                                <h2 dangerouslySetInnerHTML={{__html: infPost.title.rendered}}></h2>
                                </a>
                            </div>
                        )
                    })}
                </section>
                <aside css={css`width: 34%; float: right;
                            position: sticky;
                            position: -webkit-sticky;
                            top: 100px;`}></aside>
                <div css={css`clear:both;`}></div>
            </div>
            
        </>
    )
}

export default connect(AllCategory)