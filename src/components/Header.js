import React, {useState} from "react";
import {connect, styled, css} from 'frontity'
import Link from "./Link";
import Logo from "../assets/TUXradio.png";
import { ImFacebook2, ImInstagram, ImYoutube, ImTwitter} from "react-icons/im";

const Header = ({actions, state}) => {

  const {isMobileMenuOpen} = state.theme

  const [menu,setMenu] = useState(false)

  const changeMenu = () => {
    if(window.scrollY >= 170){
      setMenu(true)
    }else{
      setMenu(false)
    }
  }


  if (typeof window !== "undefined") {
  window.addEventListener('scroll', changeMenu);
  }
  return (
    <>
      <HeaderContent>
        <HeaderMusical>
          <BodyHdr>
            <InnerBodyHdr>
              <ColFirts>
                {menu 
                ? 
                (
                <a href="javascript:void(0)" css={css`width: 50px;
                          height: 50px;
                          border: 2px solid #fff;
                          border-radius: 50%;
                          display: -ms-flexbox;
                          display: flex;
                          -ms-flex-align: center;
                          align-items: center;
                          -ms-flex-pack: center;
                          justify-content: center;
                          margin-right: 15px;
                      `} onClick={actions.theme.toggleMobileMenu}>
                  <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.348877 0.5H26.4419V3.33333H0.348877V0.5ZM0.348877 7.58333H26.4419V10.4167H0.348877V7.58333ZM0.348877 14.6667H26.4419V17.5H0.348877V14.6667Z" fill="white"></path>
                  </svg>
                </a>
                )
                :
                (
                  null
                )}
              </ColFirts>
              <ColMiddle>
                <Link href="/">
                  <img src={Logo} alt="RadioTux" height="100" />
                </Link>
              </ColMiddle>
              <ColLast>
                <a href="https://zeno.fm/yopalradiorkskfuvk9neuv/" target="_blank">
                  <ButtonRadio>
                    <CirclePlay>
                      <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.70985C0 0.945022 0.823657 0.463307 1.49026 0.838272L14.4505 8.12842C15.1302 8.51073 15.1302 9.48927 14.4505 9.87158L1.49026 17.1617C0.823659 17.5367 0 17.055 0 16.2902V1.70985Z" fill="white"></path>
                      </svg>
                    </CirclePlay>
                    <div>
                      Radio en vivo
                    </div>
                  </ButtonRadio>
                </a>
              </ColLast>
            </InnerBodyHdr>
          </BodyHdr>
          {menu 
          ? 
          (
            isMobileMenuOpen
            ? 
            (
              <FooterHdrM>
              <GridHdr>
                {menu 
                ? 
                (
                  <div css={css`display: block;
                        position: absolute;
                        top: 16px;
                        right: 16px;
                        cursor: pointer;
                    `} onClick={actions.theme.closeMobileMenu}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.75 2.0125L15.9875 0.25L9 7.2375L2.0125 0.25L0.25 2.0125L7.2375 9L0.25 15.9875L2.0125 17.75L9 10.7625L15.9875 17.75L17.75 15.9875L10.7625 9L17.75 2.0125Z" fill="black"></path>
                  </svg>
                </div>
                )
                :
                (
                  null
                )}
                
                <div class="menu-wrapper">
                  <UlNavM>
                    <LiNavM>
                      <Link href="/category/farandula">Farandula</Link>
                    </LiNavM>
                    <LiNavM>
                      <Link href="/category/series">Series</Link>
                    </LiNavM>
                    <LiNavM>
                      <Link href="/category/deportes">Deportes</Link>
                    </LiNavM>
                    <LiNavM>
                      <Link href="/category/musica">Música</Link>
                    </LiNavM>
                  </UlNavM>
                </div>
                {menu 
                ? 
                (
                <div>
                  <div css={css`font-size: 1.4rem;
                      color: #000;
                      margin-bottom: 15px;`}>Siguenos en:</div>

                  <ul css={css`list-style: none;
                      margin: 0;
                      display: -ms-flexbox;
                      display: flex;
                      padding-left: 0;
                      padding-bottom: 1.5rem;
                    `}>
                    <li css={css`margin-right: 10px;
                      margin-bottom: 0;`}>
                      <a href="https://facebook.com/" target="_blank" css={css`background: #3B5998;
                                    width: 40px;
                                    height: 40px;
                                    border-radius: 3px;
                                    font-size: 20px;
                                    display: -ms-flexbox;
                                    display: flex;
                                    -ms-flex-align: center;
                                    align-items: center;
                                    -ms-flex-pack: center;
                                    justify-content: center;
                                    color: #fff;`}><ImFacebook2 /></a>
                    </li>
                    <li css={css`margin-right: 10px;
                      margin-bottom: 0;`}>
                      <a href="https://twitter.com/" target="_blank" css={css`background: #4099FF;
                                    width: 40px;
                                    height: 40px;
                                    border-radius: 3px;
                                    font-size: 20px;
                                    display: -ms-flexbox;
                                    display: flex;
                                    -ms-flex-align: center;
                                    align-items: center;
                                    -ms-flex-pack: center;
                                    justify-content: center;
                                    color: #fff;`}><ImTwitter /></a>
                    </li>
                    <li css={css`margin-right: 10px;
                      margin-bottom: 0;`}>
                      <a href="https://youtube.com/" target="_blank" css={css`background: #FF0000;
                                    width: 40px;
                                    height: 40px;
                                    border-radius: 3px;
                                    font-size: 20px;
                                    display: -ms-flexbox;
                                    display: flex;
                                    -ms-flex-align: center;
                                    align-items: center;
                                    -ms-flex-pack: center;
                                    justify-content: center;
                                    color: #fff;`}><ImYoutube /></a>
                    </li>
                    <li css={css`margin-right: 10px;
                      margin-bottom: 0;`}>
                      <a href="https://instagram.com/" target="_blank" css={css`background: linear-gradient(135deg, #C13584 0%, #A345D0 48.1%, #E0A400 100%);
                                    width: 40px;
                                    height: 40px;
                                    border-radius: 3px;
                                    font-size: 20px;
                                    display: -ms-flexbox;
                                    display: flex;
                                    -ms-flex-align: center;
                                    align-items: center;
                                    -ms-flex-pack: center;
                                    justify-content: center;
                                    color: #fff;`}><ImInstagram /></a>
                    </li>
                  </ul>
                </div>
                )
                :
                (
                  null
                )}
              </GridHdr>
            </FooterHdrM>
            )
            :
            (
              <FooterHdr>
                <GridHdr>
                  {menu 
                  ? 
                  (
                    <div css={css`display: block;
                          position: absolute;
                          top: 16px;
                          right: 16px;
                          cursor: pointer;
                      `} onClick={actions.theme.closeMobileMenu}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.75 2.0125L15.9875 0.25L9 7.2375L2.0125 0.25L0.25 2.0125L7.2375 9L0.25 15.9875L2.0125 17.75L9 10.7625L15.9875 17.75L17.75 15.9875L10.7625 9L17.75 2.0125Z" fill="black"></path>
                    </svg>
                  </div>
                  )
                  :
                  (
                    null
                  )}
                  
                  <div class="menu-wrapper">
                    <UlNavM>
                      <LiNavM>
                        <Link href="/category/farandula">Farandula</Link>
                      </LiNavM>
                      <LiNavM>
                        <Link href="/category/series">Series</Link>
                      </LiNavM>
                      <LiNavM>
                        <Link href="/category/deportes">Deportes</Link>
                      </LiNavM>
                      <LiNavM>
                        <Link href="/category/musica">Música</Link>
                      </LiNavM>
                    </UlNavM>
                  </div>
                  {menu 
                  ? 
                  (
                  <div>
                    <div css={css`font-size: 1.4rem;
                        color: #000;
                        margin-bottom: 15px;`}>Siguenos en:</div>

                    <ul css={css`list-style: none;
                        margin: 0;
                        display: -ms-flexbox;
                        display: flex;
                        padding-left: 0;
                        padding-bottom: 1.5rem;
                      `}>
                      <li css={css`margin-right: 10px;
                        margin-bottom: 0;`}>
                        <a href="https://facebook.com/" target="_blank" css={css`background: #3B5998;
                                      width: 40px;
                                      height: 40px;
                                      border-radius: 3px;
                                      font-size: 20px;
                                      display: -ms-flexbox;
                                      display: flex;
                                      -ms-flex-align: center;
                                      align-items: center;
                                      -ms-flex-pack: center;
                                      justify-content: center;
                                      color: #fff;`}><ImFacebook2 /></a>
                      </li>
                      <li css={css`margin-right: 10px;
                        margin-bottom: 0;`}>
                        <a href="https://twitter.com/" target="_blank" css={css`background: #4099FF;
                                      width: 40px;
                                      height: 40px;
                                      border-radius: 3px;
                                      font-size: 20px;
                                      display: -ms-flexbox;
                                      display: flex;
                                      -ms-flex-align: center;
                                      align-items: center;
                                      -ms-flex-pack: center;
                                      justify-content: center;
                                      color: #fff;`}><ImTwitter /></a>
                      </li>
                      <li css={css`margin-right: 10px;
                        margin-bottom: 0;`}>
                        <a href="https://youtube.com/" target="_blank" css={css`background: #FF0000;
                                      width: 40px;
                                      height: 40px;
                                      border-radius: 3px;
                                      font-size: 20px;
                                      display: -ms-flexbox;
                                      display: flex;
                                      -ms-flex-align: center;
                                      align-items: center;
                                      -ms-flex-pack: center;
                                      justify-content: center;
                                      color: #fff;`}><ImYoutube /></a>
                      </li>
                      <li css={css`margin-right: 10px;
                        margin-bottom: 0;`}>
                        <a href="https://instagram.com/" target="_blank" css={css`background: linear-gradient(135deg, #C13584 0%, #A345D0 48.1%, #E0A400 100%);
                                      width: 40px;
                                      height: 40px;
                                      border-radius: 3px;
                                      font-size: 20px;
                                      display: -ms-flexbox;
                                      display: flex;
                                      -ms-flex-align: center;
                                      align-items: center;
                                      -ms-flex-pack: center;
                                      justify-content: center;
                                      color: #fff;`}><ImInstagram /></a>
                      </li>
                    </ul>
                  </div>
                  )
                  :
                  (
                    null
                  )}
                </GridHdr>
              </FooterHdr>
            )
              
          )
          :
          (
            <GridHdr>
                <UlNav>
                  <LiNav>
                    <Link href="/category/farandula" menumobile={true}>Farandula</Link>
                  </LiNav>
                  <LiNav>
                    <Link href="/category/series" menumobile={true}>Series</Link>
                  </LiNav>
                  <LiNav>
                    <Link href="/category/deportes" menumobile={true}>Deportes</Link>
                  </LiNav>
                  <LiNav>
                    <Link href="/category/musica" menumobile={true}>Música</Link>
                  </LiNav>
                </UlNav>
            </GridHdr>
          )}
        </HeaderMusical>
      </HeaderContent>
    </>
  );
};

export default connect(Header)

const HeaderContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 0;
  background: #FF11A3;
  z-index: 10;
  margin-bottom: 10px;
`;

const HeaderMusical = styled.header`
  background: #FF11A3;
  box-shadow: 0 1px 4px rgba(53,53,53,0.5);
`;

const BodyHdr = styled.div`
  border-bottom: 1px solid #fff;
`;

const BodyHdrFixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 0;
  background: #FF11A3;
  z-index: 10;
`;

const FooterHdr = styled.div`
  left: -100%;
  position: fixed;
  top: 0;
  z-index: 11;
  background: #fff;
  width: 265px;
  height: 100%;
  padding: 25px;
  box-shadow: 8px 0 10px rgba(62,62,62,0.5);
  overflow: auto;
  transition: left 400ms cubic-bezier(0.23, 1, 0.32, 1);
`;

const FooterHdrM = styled.div`
  left: 0;
  position: fixed;
  top: 0;
  z-index: 11;
  background: #fff;
  width: 265px;
  height: 100%;
  padding: 25px;
  box-shadow: 8px 0 10px rgba(62,62,62,0.5);
  overflow: auto;
  transition: left 400ms cubic-bezier(0.23, 1, 0.32, 1);
`;

const InnerBodyHdr = styled.div`
  display: -ms-flexbox;
  display: flex;
  max-width: 1366px;
  margin: 0 auto;
  padding: 0 20px;
  height: 95px;
`;

const ColFirts = styled.div`
  -ms-flex: 1;
  flex: 1;
  -ms-flex-align: center;
  align-items: center;
  display: -ms-flexbox;
  display: flex;
`;
const ColMiddle = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 20px;
}
`;

const ColLast = styled.div`
  -ms-flex: 1;
  flex: 1;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: end;
  justify-content: flex-end;
  display: -ms-flexbox;
  display: flex;
`;

const GridHdr = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const DivImg = styled.img`
  border: 0;
  max-width: 100%;
  vertical-align: middle;
`;

const ButtonRadio = styled.div`
  background: #fff;
  color: #FF11A3;
  height: 50px;
  border-radius: 26px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding: 4px 4px 4px 4px;
  min-width: 180px;
  max-width: 100%;
`;

const CirclePlay = styled.div`
  background: #FF11A3;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
`;

const UlNav = styled.ul`
  list-style: none;
  margin: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex: 1;
  flex: 1;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  overflow: hidden;
`;

const LiNav = styled.li`
  margin: 0;
  display: -ms-flexbox;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
`;

const LiNavM = styled.li`
  margin: 0;
  display: -ms-flexbox;
  display: flex;
  flex: 1 1 auto;
  text-align: left;
`;

const UlNavM = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;