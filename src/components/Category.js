import React from "react";
import { connect, css } from "frontity";

const Category = ({state, id}) => {
    const category =  state.source.category[id]
    return (
        <>
            <a href="javascript://" css={css`font-size: 0.9rem;
                                    text-transform: uppercase;
                                    color: white;
                                    border-bottom: 0;
                                    text-decoration: none;`}>{category.name}</a>
        </>
    )
}

export default connect(Category)