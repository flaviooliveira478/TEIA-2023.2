import React from "react";
import Title from "../../Title.jsx";
import Layout from "../../Layout.jsx";
import News from "../../News.jsx";
import Releases from "../../Releases.jsx";

/* imagens Detasques */
import post1 from "../../../assets/images/image-deviceheat-leonard-ai.jpg";
import post3 from "../../../assets/images/image-Alzheimer-leonardo-ai.jpg";

/* Imagens Notícias mais recentes */
import noticia1 from "../../../assets/images/2.jpg";

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
      imagem: post3,
      tag: "Ciência",
      titulo:
        "Nobel de Fisiologia ou Medicina premia responsáveis pelas vacinas de mRNA contra Covid-19",
    },
  ];

  const noticias = [
    {
      imagem: noticia1,
      tag: "Tecnologia",
      title:
        "Avanços Revolucionários na Inteligência Artificial Prometem Transformar Radicalmente a Tecnologia",
      text: "Uma nova era de inovação está se desenhando no horizonte da tecnologia, impulsionada por avanços revolucionários na inteligência artificial (IA).",
      lermais: "Ler mais1",
    },
    {
      imagem: noticia1,
      tag: "Ciência",
      title: "Título2",
      text: "Texto2",
      lermais: "Ler mais2",
    },
    {
      imagem: noticia1,
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
    </div>
  );
};

export default Home;
