import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AudioPlayer from "../../AudioPlayer";
import "./Noticias.css";

/* Imagens*/
import post1 from "../../../assets/images/image-deviceheat-leonard-ai.jpg";
import post2 from "../../../assets/images/image-vaccine-leonardo-ai.jpg";
import post3 from "../../../assets/images/image-Alzheimer-leonardo-ai.jpg";
import post4 from "../../../assets/images/image-vr-leonard-ai.jpg";
import post5 from "../../../assets/images/image-ia-na-saude-leonardo-ai.jpg";

/* Audio */
import audio1 from "../../../assets/audio/audio-dispositivo-trabalho.mp3";
import audio2 from "../../../assets/audio/audio-nobel-fisiologia-medicina-2023.mp3";
import audio3 from "../../../assets/audio/audio-alzheimer.mp3";
import audio4 from "../../../assets/audio/audio-metaverso.mp3";
import audio5 from "../../../assets/audio/audio-ciencia-dados-ia-saude.mp3";

const Noticias = () => {
  const params = useParams();
  const newsIndex = parseInt(params.id);

  // Array de notícias com os detalhes completos
  const noticias = [
    {
      id: 1,
      audio: audio1,
      tag: "Dispositivos",
      title: "Dispositivo inovador promete combater calor extremo no trabalho",
      imagem: post1,
      text: `Trabalhadores que enfrentam o calor infernal no dia a dia podem ter um novo aliado: um dispositivo vestível capaz de monitorar a temperatura corporal em tempo real e alertar sobre o risco de superaquecimento.
      
      Desenvolvido por pesquisadores da Universidade de Queensland, na Austrália, o dispositivo é composto por um pequeno sensor que se fixa no peito e se conecta a um aplicativo de smartphone. O sensor coleta dados sobre a frequência cardíaca, a temperatura da pele, o nível de atividade e a produção de suor.
      
      Essas informações são então utilizadas para calcular a temperatura corporal central do usuário, a medida mais precisa de como o corpo está lidando com o calor. Quando a temperatura corporal central sobe muito, o dispositivo vibra e o aplicativo envia uma notificação alertando o usuário para fazer uma pausa e se refrescar.
      
      Os testes realizados com o dispositivo mostraram que ele é eficaz na prevenção do estresse por calor e da exaustão, condições que podem ser graves e até mesmo fatais em casos extremos.
      
      Ainda em fase de desenvolvimento, o dispositivo tem o potencial de revolucionar a segurança e o bem-estar de trabalhadores em diversos setores, como agricultura, construção civil e mineração.
      
      Para os trabalhadores, o dispositivo significa:
      
      Menos risco de doenças: proteção contra o estresse por calor, exaustão, desidratação e outras condições graves.
      Mais produtividade: redução da fadiga e aumento da capacidade de trabalho.
      Maior segurança: diminuição do risco de acidentes de trabalho.
      Para as empresas, o dispositivo pode levar a:
      
      Redução dos custos com saúde: menos absenteísmo, licenças médicas e indenizações.
      Aumento da produtividade: workforce mais saudável e eficiente.
      Melhoria da imagem da empresa: compromisso com a segurança e o bem-estar dos trabalhadores.
      O dispositivo ainda não está disponível no mercado, mas os pesquisadores acreditam que ele estará em breve. As empresas interessadas em adquirir o dispositivo podem entrar em contato com os pesquisadores da Universidade de Queensland.
      
      Esta é uma notícia promissora para todos que trabalham em ambientes de alta temperatura. O dispositivo vestível pode ajudar a proteger milhões de trabalhadores de doenças graves e melhorar suas condições de trabalho.`,
      lermais: "Ler mais1",
    },
    {
      id: 2,
      audio: audio2,
      tag: "Ciência",
      title:
        "Nobel de Fisiologia ou Medicina: Reconhecimento por Vacinas de mRNA",
      imagem: post2,
      text: `A bioquímica Katalin Karikó e o imunologista Drew Weissman receberam o Nobel de Fisiologia ou Medicina 2023 por suas pesquisas 
            que lançaram as bases para as vacinas de RNA mensageiro (mRNA) contra a Covid-19.
            
            As vacinas de mRNA, desenvolvidas pelas empresas Moderna e Pfizer/BioNTech, foram fundamentais no combate à pandemia, com mais 
            de 13 bilhões de doses administradas em todo o mundo.
            
            Karikó e Weissman descobriram como modificar o mRNA sintético para que ele não fosse rejeitado pelo sistema imunológico, 
            permitindo sua aplicação terapêutica.
            
            As pesquisas da dupla iniciaram-se na década de 1990 e foram essenciais para o rápido desenvolvimento das vacinas contra a Covid-19.
            
            A tecnologia de mRNA abre portas para o desenvolvimento de vacinas contra outras doenças, como gripe, HIV, malária e zika.
            
            O prêmio reconhece a perseverança e a resiliência de Karikó e Weissman, e inspira novas gerações de cientistas.
            
            A premiação destaca a importância da pesquisa básica e sua aplicação para o bem da humanidade.`,
      lermais: "Ler mais2",
    },
    {
      id: 3,
      audio: audio3,
      tag: "Ciência",
      title: "Novo medicamento contra Alzheimer: esperança no horizonte",
      imagem: post3,
      text: `Esperança para pacientes com Alzheimer: Um novo medicamento experimental, o donanemabe, 
            mostrou-se capaz de retardar o declínio cognitivo em até 60% em pacientes nos estágios iniciais da doença.
             
            Resultados promissores: Em testes clínicos de fase 3 com 1.736 pacientes, o donanemabe reduziu com sucesso 
            as placas da proteína beta-amiloide no cérebro, um dos principais fatores causadores da doença. Em pacientes 
            com baixa concentração da proteína tau, o declínio cognitivo foi 60% mais lento em comparação com o grupo placebo.
             
            Pontos de atenção: O medicamento pode causar "anormalidades de imagem relacionadas à amiloide" (ARIA), em casos raros 
            levando a convulsões e hemorragia cerebral. A FDA está analisando o donanemabe e a empresa espera aprovação até o fim de 2023.

            Avanço significativo: A chegada de novos medicamentos como o donanemabe marca um ponto de virada na luta contra o Alzheimer, 
            que afeta milhões de pessoas no mundo.`,
      lermais: "Ler mais3",
    },
    {
      id: 4,
      tag: "Dispositivos",
      audio: audio4,
      title: "Metaverso: Mergulhando em um Novo Mundo de Possibilidades",
      imagem: post4,
      text: `O metaverso está se tornando uma das tendências tecnológicas mais quentes do momento. Essa nova fronteira digital promete revolucionar a maneira como nos comunicamos, trabalhamos, nos divertimos e experimentamos o mundo.

      Dispositivos de Realidade Virtual (RV) e Realidade Aumentada (RA):
      
      Chave para o metaverso: Os dispositivos de RV e RA são essenciais para acessar o metaverso e suas experiências imersivas.
      RV: Cria um ambiente virtual completamente novo, onde você pode se sentir como se estivesse realmente presente em outro lugar.
      RA: Sobreposta elementos digitais no mundo real, criando uma experiência híbrida.
      Novos dispositivos:
      
      Meta Quest 2: Headset de RV autônomo da Meta, com tela de alta resolução e rastreamento de mão.
      Project Cambria: Headset de RV premium da Meta, com recursos avançados como sensores de alta resolução e rastreamento facial.
      Nreal Light: Óculos de RA leves e compactos, com tela de alta resolução e campo de visão amplo.
      Magic Leap 2: Headset de RA de última geração, com recursos avançados como computação espacial e óptica de waveguide.
      Aplicações no Metaverso:
      
      Trabalho: Reuniões virtuais, colaboração em projetos, treinamento em ambientes simulados.
      Entretenimento: Shows virtuais, jogos imersivos, experiências cinematográficas interativas.
      Socialização: Interagir com amigos e familiares em ambientes virtuais, criar novas conexões.
      Educação: Aulas imersivas, visitas virtuais a museus e locais históricos, treinamento em simulações.
      Comércio: Experiências de compra imersivas, provar roupas virtualmente, visitar lojas virtuais.
      Desafios:
      
      Custo dos dispositivos: A maioria dos dispositivos de RV e RA ainda são muito caros para o público em geral.
      Doença de Simulação: Alguns usuários podem sentir náuseas e tonturas ao usar dispositivos de RV.
      Privacidade e segurança: O metaverso levanta preocupações sobre privacidade e segurança de dados.
      O futuro do metaverso:
      
      Evolução contínua: A tecnologia do metaverso está em constante evolução, com novos dispositivos e aplicações sendo lançados a todo momento.
      Acessibilidade: O metaverso precisa se tornar mais acessível para que todos possam participar.
      Impacto na sociedade: O metaverso tem o potencial de transformar a sociedade de várias maneiras, desde a forma como trabalhamos até a forma como nos relacionamos com o mundo.
      O metaverso é um universo de possibilidades que ainda está começando a ser explorado. As implicações dessa tecnologia são enormes e podem mudar completamente a maneira como vivemos nossas vidas.`,
      lermais: "Ler mais",
    },
    {
      id: 5,
      tag: "Ciência",
      audio: audio5,
      title:
        "Ciência de dados e IA na saúde: otimização e escalabilidade para um futuro promissor",
      imagem: post5,
      text: `Desafios e oportunidades: O setor da saúde enfrenta a constante necessidade de otimizar operações e lidar 
            com a escassez de profissionais qualificados. A ciência de dados e a IA surgem como aliadas para superar esses desafios, 
            impulsionando a escalabilidade e a eficiência.

            Convergência tecnológica: A busca por aprimoramento impulsiona a transformação digital na saúde, com a telemedicina, 
            o monitoramento remoto, a análise e a automatização de dados como exemplos da convergência entre tecnologia e saúde.
      
            Benefícios da IA: A IA oferece a capacidade de desbloquear conhecimentos valiosos a partir de dados, gerenciar grandes 
            volumes de informações e automatizar processos, otimizando o desempenho e a eficiência dos sistemas de saúde.
      
            Cuidados personalizados: A IA também abre portas para o fornecimento de cuidados médicos avançados e personalizados, 
            tanto em nível nacional quanto internacional.
      
            Armazenamento e segurança de dados: A integração de sistemas e a migração de dados representam desafios para as 
            organizações de saúde. A migração para a nuvem surge como uma solução viável, oferecendo benefícios como:
      
            Simplificação da arquitetura,
            Redução de custos,
            Gestão centralizada,
            Capacidade escalável e flexível,
            Desempenho otimizado,
            Investimento rentável,
            Nuvem híbrida: A implementação de uma solução de nuvem híbrida permite armazenar e gerenciar dados em uma 
            plataforma confiável e escalável, pronta para alojar e proteger dados e aplicações críticas, além de auxiliar 
            as organizações de saúde a operarem em múltiplos ambientes.
      
            Conclusão: A ciência de dados e a IA representam um futuro promissor para a saúde, otimizando operações, 
            escalando serviços e oferecendo cuidados cada vez mais personalizados e eficientes. A migração para a 
            nuvem e a implementação de soluções híbridas garantem a segurança e o acesso aos dados, impulsionando a transformação do setor.`,
      lermais: "Ler mais",
    },
  ];

  const isValidIndex =
    !isNaN(newsIndex) && newsIndex >= 1 && newsIndex <= noticias.length;

  // Se o ID da notícia for válido, obtém os detalhes da notícia com base no ID
  const newsDetail = isValidIndex ? noticias[newsIndex - 1] : null;

  useEffect(() => {
    // Rolar para o topo da página ao montar o componente
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {newsDetail ? (
        <div className="noticias-posts">
          <h5>{newsDetail.tag}</h5>
          <h2>{newsDetail.title}</h2>
          <AudioPlayer src={newsDetail.audio} />
          <img src={newsDetail.imagem} alt="Dispositivo inovador, calor" />
          <p className="news-post-p">{newsDetail.text}</p>
        </div>
      ) : (
        <p>Notícia não encontrada</p>
      )}
    </div>
  );
};

export default Noticias;
