import { useState } from "react";
/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title.jsx";
import Layout from "./components/Layout.jsx";
import News from "./components/News.jsx";
import Releases from "./components/Releases.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const destaques = [
    {
      imagem: "",
      tag: "Series",
      titulo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatem quaerat perspiciatis tempor",
    },
    {
      imagem: "",
      tag: "Tecnologia",
      titulo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatem quaerat perspiciatis tempor",
    },
    {
      imagem: "",
      tag: "Ciência",
      titulo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatem quaerat perspiciatis tempor",
    },
  ];

  const noticias = [
    {
      imagem: "imagem1.jpg",
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
      <Navbar />
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
}

export default App;
