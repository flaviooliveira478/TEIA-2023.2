import React from "react";
import Title from "../../Title.jsx";
import Layout from "../../Layout.jsx";
import News from "../../News.jsx";
import Releases from "../../Releases.jsx";
import Footer from "../../Footer.jsx";
import post1 from "../../../assets/images/post1.jpg";

const Home = () => {
  const destaques = [
    {
      id: 1,
      imagem: post1,
      tag: "Dispositivos",
      titulo: "Dispositivo inovador promete combater calor extremo no trabalho",
    },
    {
      id: 2,
      imagem: post1,
      tag: "Tecnologia",
      titulo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatem quaerat perspiciatis tempor",
    },
    {
      id: 3,
      imagem: post1,
      tag: "Ciência",
      titulo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatem quaerat perspiciatis tempor",
    },
  ];

  const noticias = [
    {
      imagem: "",
      tag: "Tag1",
      title: "Título1",
      text: "Texto1",
      lermais: "Ler mais1",
    },
    {
      imagem: "imagem2.jpg",
      tag: "Tag2",
      title: "Título2",
      text: "Texto2",
      lermais: "Ler mais2",
    },
    {
      imagem: "imagem3.jpg",
      tag: "Tag3",
      title: "Título3",
      text: "Texto3",
      lermais: "Ler mais3",
    },
  ];

  const lancamentos = [
    {
      tag: "Tag1",
      title: "Título1",
      text: "Texto1",
      lermais: "Ler mais1",
    },
    { tag: "Tag2", title: "Título2", text: "Texto2", lermais: "Ler mais2" },
  ];
  return (
    <div>
      <Title
        title="Bem-vindo ao Techverse!"
        paragraph="
            O Techverse é a sua fonte definitiva de notícias, análises e insights sobre o fascinante universo da tecnologia e muito mais."
      />
      <Layout infos={destaques} />
      <News noticias={noticias} />
      <Releases dados={lancamentos} />
      <Footer />
    </div>
  );
};

export default Home;
