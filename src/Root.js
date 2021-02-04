import React, {useEffect} from "react";
import {connect, Head, styled, css} from 'frontity'
import Header from "./components/Header";
import Base from "./styles/Base";
import Home from "./pages/Home";
import Encabezado from "./components/Encabezado";
import Post from "./components/Post";
import AllCategory from "./components/AllCategory";

import Logo from "./assets/TUXradio.png";

const Root = ({actions, state}) => {
  const data = state.source.get(state.router.link)

  useEffect(()=>{
    actions.source.fetch("/category/farandula")
    actions.source.fetch("/category/series")
    actions.source.fetch("/category/deportes")
    actions.source.fetch("/category/musica")
  },[])
  return (
    <>
        <Base />
        <Head>
        <title>RadioTux</title>
        </Head>
        <Encabezado />
        {data.isFetching && <PInicio>Cargando...</PInicio>}
        {data.isHome && <Home />}
        {data.isPost && <Post />}
        {data.route == "/ranking/" && <PInicio>Están en el ranking, aún estamos en mantenimiento! Pronto lo mostraremos</PInicio>}
        {data.route == "/category/farandula/" && <AllCategory />}
        {data.route == "/category/musica/" && <AllCategory />}
        {data.route == "/category/series/" && <AllCategory />}
        {data.route == "/category/deportes/" && <AllCategory />}
        <footer css={css`height: 80px;
                width: 100%;
                background: #000000;
                clear: both;
                text-align: center;
                position: relative;
                bottom: 0;
                left: 0;`}>
                  <ul css={css`padding: 1rem;
                          margin: 0;`}>
                    <li css={css`position: relative;
                            list-style-type: none;
                            display: inline-block;
                            color: #000000;
                            font-size: 0.8rem;
                            line-height: 1.3rem;
                            margin: 0;
                            vertical-align: middle;
                            font-family: "oswald-r";
                            border-right: 0;
                            padding: 0 .6rem;`}><a href="javascript://" ><img src={Logo} alt="YopalRadio" width="130" /></a></li>
                    <LiInicio><AFooter href="javascript://">Contáctenos</AFooter></LiInicio>
                    <LiInicio><AFooter href="javascript://">Anuncia Aquí</AFooter></LiInicio>
                    <LiInicio><AFooter href="javascript://">Aviso legal</AFooter></LiInicio>
                    <LiInicio><AFooter href="javascript://">Facebook</AFooter></LiInicio>
                    <LiInicio><AFooter href="javascript://">Twitter</AFooter></LiInicio>
                    <LiInicio><AFooter href="javascript://">Youtube</AFooter></LiInicio>
                  </ul>

                </footer>
    </>
  );
};

export default connect(Root)

const PInicio = styled.div`
      max-width: 1040px;
      background: #ddd;
      border-radius: 8px;
      clear: both;
      margin: 1rem auto;
      padding: 1rem;
      min-height: calc(100vh - 80px - 190px)
`;

const LiInicio = styled.li`
    position: relative;
    list-style-type: none;
    display: inline-block;
    color: #000000;
    font-size: .8rem;
    line-height: 1.3rem;
    margin: 0 1rem;
    vertical-align: middle;
    font-family: "oswald-r";
    border-right: 1px solid #000000;
    padding: 0 .3rem;
`;

const AFooter = styled.a`
    padding: 0 .6rem;
    font-weight: 700;
    color: #ffffff;
    font-family: "Roboto";
    text-decoration: none;
    display: block;

    ::after {
      position: absolute;
      content: "/";
      top: 0;
      right: -0.7rem;
      color: #ffffff;
    }
`;