import React from "react";
import {connect, styled, css} from 'frontity' 


const Link = ({href, actions, children, menumobile}) => {
  return (
    <>
      {
        !menumobile
        ?
        (
          <ANav
            css={css`-webkit-text-decoration: none;
            text-decoration: none;
            font-weight: 600;
            color: #000000;`} 
            href={href}
            onClick={
                event=>{
                    event.preventDefault();
                    actions.router.set(href);
                }
            }  
              >
              {children}
          </ANav>
        )
        :
        (
          <ANav
            css={css`-webkit-text-decoration: none;
            text-decoration: none;
            font-weight: 600;
            color: #ffffff;`} 
            href={href}
            onClick={
                event=>{
                    event.preventDefault();
                    actions.router.set(href);
                }
            }  
              >
              {children}
          </ANav>
        )
      }
        
    </>
  );
};

export default connect(Link)

const ANav = styled.a`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1.1rem;
`;