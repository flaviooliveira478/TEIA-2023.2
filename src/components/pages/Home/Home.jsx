import React from "react";
import Title from "../../Title.jsx";
import Layout from "../../Layout.jsx";
import News from "../../News.jsx";
import Releases from "../../Releases.jsx";

/* imagens Detasques */
import post1 from "../../../assets/images/image-deviceheat-leonard-ai.jpg";
import post3 from "../../../assets/images/image-Alzheimer-leonardo-ai.jpg";
import post2 from "../../../assets/images/image-vaccine-leonardo-ai.jpg";

/* Imagens Notícias mais recentes */
import noticia1 from "../../../assets/images/2.jpg";
import noticia2 from "../../../assets/images/image-robo-automatization.jpg";
import noticia3 from "../../../assets/images/image-lenses-contact.jpg";

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
      imagem: post2,
      tag: "Ciência",
      titulo:
        "Nobel de Fisiologia ou Medicina: Reconhecimento por Vacinas de mRNA",
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
      lermais: "Ler mais",
    },
    {
      imagem: noticia2,
      tag: "Dispositivos",
      title: "Robôs: Novas Fronteiras da Automação",
      text: `Os robôs estão se tornando cada vez mais sofisticados e
      capazes de realizar uma ampla gama de tarefas. Essa tendência
      está revolucionando diversos setores da indústria, desde a
      manufatura até a saúde e o varejo. Novas Fronteiras da
      Robótica...`,
      lermais: "Ler mais",
    },
    {
      imagem: noticia3,
      tag: "Dispositivos",
      title:
        "Lentes de contato inteligentes: a próxima fronteira da tecnologia vestível?",
      text: `Imagine poder acessar informações e interagir com o mundo
      digital sem precisar de um smartphone ou outro dispositivo.`,
      lermais: "Ler mais",
    },
  ];

  const lancamentos = [
    {
      tag: "Tag1",
      title: "Título1",
      text: "Texto1",
      lermais: "Ler mais",
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
