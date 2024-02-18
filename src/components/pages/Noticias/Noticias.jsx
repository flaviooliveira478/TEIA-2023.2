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
import post6 from "../../../assets/images/image-glicose-device.jpg";
import post7 from "../../../assets/images/image-robo-automatization.jpg";
import post8 from "../../../assets/images/image-lenses-contact.jpg";
import post9 from "../../../assets/images/image-3d-impression.jpg";

/* Audio */
import audio1 from "../../../assets/audio/audio-dispositivo-trabalho.mp3";
import audio2 from "../../../assets/audio/audio-nobel-fisiologia-medicina-2023.mp3";
import audio3 from "../../../assets/audio/audio-alzheimer.mp3";
import audio4 from "../../../assets/audio/audio-metaverso.mp3";
import audio5 from "../../../assets/audio/audio-ciencia-dados-ia-saude.mp3";
import audio6 from "../../../assets/audio/audio-device-glicose.mp3";
import audio7 from "../../../assets/audio/audio-robos.mp3";
import audio8 from "../../../assets/audio/audio-lenses-contact.mp3";
import audio9 from "../../../assets/audio/audio-3d-impression.mp3";

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
    {
      id: 6,
      tag: "Dispositivos",
      audio: audio6,
      title:
        "Dispositivo Vestível Revoluciona Monitoramento de Glicose: Adeus Picadas?",
      imagem: post6,
      text: `Um novo dispositivo vestível promete revolucionar o monitoramento de glicose no sangue para pessoas com diabetes. O dispositivo, ainda em desenvolvimento, utiliza sensores para medir os níveis de glicose através da pele, sem a necessidade de picadas dolorosas.

      Funcionamento:
      
      Sensores biofotônicos: O dispositivo usa sensores biofotônicos para medir a quantidade de luz que é absorvida pela glicose na corrente sanguínea.
      Monitoramento contínuo: Os níveis de glicose são monitorados continuamente e enviados para um aplicativo em tempo real.
      Alertas personalizáveis: O aplicativo pode enviar alertas para o usuário quando os níveis de glicose estiverem muito altos ou baixos.
      Benefícios:
      
      Menos dor e sofrimento: Elimina a necessidade de picadas frequentes no dedo para medir a glicose.
      Monitoramento constante: Permite um acompanhamento mais preciso da glicose ao longo do dia.
      Melhor controle do diabetes: Facilita o controle da diabetes e a prevenção de complicações.
      Desafios:
      
      Precisão: A precisão do dispositivo ainda precisa ser validada em estudos clínicos.
      Custo: O custo do dispositivo ainda não foi definido.
      Acessibilidade: A disponibilidade do dispositivo ainda não foi confirmada em todos os países.
      Conclusão: O dispositivo vestível para monitoramento de glicose representa um grande avanço para o tratamento da diabetes. Se os desafios forem superados, essa tecnologia poderá melhorar significativamente a qualidade de vida de milhões de pessoas.`,
      lermais: "Ler mais",
    },
    {
      id: 7,
      tag: "Dispositivos",
      audio: audio7,
      title: "Robôs: Novas Fronteiras da Automação",

      imagem: post7,
      text: `Os robôs estão se tornando cada vez mais sofisticados e capazes de realizar uma ampla gama de tarefas. Essa tendência está revolucionando diversos setores da indústria, desde a manufatura até a saúde e o varejo.

      Novas Fronteiras da Robótica:
      
      Robôs colaborativos: Trabalham lado a lado com humanos em tarefas complexas, aumentando a produtividade e a segurança.
      Robôs autônomos: Operam sem a necessidade de intervenção humana, realizando tarefas repetitivas ou perigosas.
      Robôs sociais: Interagem com humanos de forma natural, prestando serviços como atendimento ao cliente e educação.
      Robôs bioinspirados: Inspirados na natureza, esses robôs são capazes de se adaptar a diferentes ambientes e realizar tarefas complexas.
      Robôs com inteligência artificial: Utilizam IA para tomar decisões autônomas e aprender com suas experiências.
      Aplicações da Robótica:
      
      Manufatura: Realização de tarefas repetitivas e perigosas, aumento da produtividade e da qualidade dos produtos.
      Saúde: Assistência em cirurgias, realização de exames, reabilitação de pacientes.
      Varejo: Atendimento ao cliente, reposição de produtos, entrega de pedidos.
      Logística: Movimentação de cargas, organização de armazéns, entrega de produtos.
      Agricultura: Plantio, colheita, irrigação, controle de pragas.
      Limpeza: Limpeza de casas, escritórios, ruas, outros ambientes.
      Segurança: Monitoramento de ambientes, proteção de pessoas e bens.
      Benefícios da Robótica:
      
      Aumento da produtividade: Os robôs podem realizar tarefas de forma mais rápida e eficiente que os humanos.
      Melhoria da qualidade: Os robôs podem realizar tarefas com maior precisão e menos erros.
      Redução de custos: Os robôs podem reduzir os custos de produção e operação.
      Segurança no trabalho: Os robôs podem realizar tarefas perigosas que antes eram feitas por humanos.
      Novas oportunidades de trabalho: A robótica cria novas oportunidades de trabalho em áreas como desenvolvimento, engenharia e manutenção.
      Desafios da Robótica:
      
      Alto custo: Os robôs ainda podem ser muito caros para algumas empresas.
      Desemprego: A robótica pode levar à perda de alguns tipos de trabalho.
      Ética: É importante garantir que os robôs sejam usados de forma ética e responsável.
      Segurança: É importante garantir que os robôs sejam seguros para os humanos.
      O futuro da robótica é promissor. Espera-se que os robôs se tornem cada vez mais presentes em nossas vidas, impactando diversos setores da sociedade. É importante estarmos preparados para essa mudança e aproveitar os benefícios que a robótica pode oferecer.`,
      lermais: "Ler mais",
    },
    {
      id: 8,
      tag: "Dispositivos",
      audio: audio8,
      title:
        "Lentes de contato inteligentes: a próxima fronteira da tecnologia vestível?",

      imagem: post8,
      text: `Empresa desenvolve lentes de contato inteligentes com realidade aumentada, prometendo revolucionar a maneira como nos relacionamos com o mundo ao nosso redor.

      Imagine poder acessar informações e interagir com o mundo digital sem precisar de um smartphone ou outro dispositivo. As lentes de contato inteligentes prometem fazer isso e muito mais, abrindo um novo mundo de possibilidades para a tecnologia vestível.
      
      Funcionalidades:
      
      Exibição de informações: As lentes podem exibir informações como navegação, notificações, mensagens e até mesmo legendas em tempo real.
      Interação com o ambiente: As lentes podem ser usadas para controlar dispositivos inteligentes, fazer compras e até mesmo jogar jogos.
      Monitoramento de saúde: As lentes podem monitorar a saúde do usuário, como frequência cardíaca, pressão arterial e níveis de glicose.
      Benefícios:
      
      Mãos livres: As lentes liberam suas mãos para outras tarefas.
      Informação instantânea: As informações são exibidas diretamente em seu campo de visão, para que você não precise desviar o olhar para um dispositivo.
      Experiência natural: As lentes são leves e confortáveis de usar, proporcionando uma experiência natural e imersiva.
      Desafios:
      
      Tecnologia em desenvolvimento: As lentes de contato inteligentes ainda estão em desenvolvimento e podem levar alguns anos para serem comercializadas em larga escala.
      Custo: As lentes podem ser caras, especialmente nos primeiros modelos.
      Preocupações com a privacidade: As lentes podem coletar dados sobre o usuário, o que levanta preocupações com a privacidade.
      O futuro das lentes de contato inteligentes é promissor. As empresas estão trabalhando para superar os desafios e desenvolver lentes que sejam acessíveis, seguras e fáceis de usar. As lentes de contato inteligentes podem revolucionar a maneira como nos relacionamos com o mundo ao nosso redor, tornando a vida mais fácil, mais eficiente e mais divertida.`,
      lermais: "Ler mais",
    },
    {
      id: 9,
      tag: "Dispositivos",
      audio: audio9,
      title:
        "Impressão 3D: Personalização Ilimitada para um Mundo à Sua Medida",

      imagem: post9,
      text: `A impressão 3D está revolucionando a forma como criamos e consumimos produtos, abrindo um universo de possibilidades para a personalização. Imagine poder imprimir objetos sob medida, com designs únicos e funcionalidades específicas para suas necessidades e desejos.

      Personalização sem Limites:
      
      Crie objetos únicos: Imprima peças personalizadas para hobbies, decoração, vestuário, acessórios e muito mais.
      Adapte produtos à sua necessidade: Personalize próteses, órteses, calçados e outros itens para atender às suas necessidades específicas.
      Produza em pequenas quantidades: Imprima protótipos, peças de reposição ou itens personalizados sem a necessidade de grandes tiragens.
      Torne sua marca única: Imprima produtos com sua logo, design ou mensagem, criando peças exclusivas para sua marca.
      Benefícios da Personalização na Impressão 3D:
      
      Maior liberdade de criação: Dê vida às suas ideias com designs complexos e personalizados.
      Melhor ajuste e ergonomia: Crie objetos que se adaptam perfeitamente ao seu corpo e às suas necessidades.
      Produção sob demanda: Evite o desperdício e produza apenas o que você precisa, quando precisa.
      Sustentabilidade e economia: Reduza o impacto ambiental e economize recursos com produção local e personalizada.
      Tecnologias para Personalização:
      
      Modelagem 3D: Utilize softwares para criar modelos 3D personalizados com as características desejadas.
      Impressoras 3D: Escolha entre diversas tecnologias de impressão 3D para dar vida aos seus designs.
      Materiais inovadores: Explore uma ampla gama de materiais para impressão, desde plásticos e resinas até metais e biomateriais.
      Desafios da Personalização em Impressão 3D:
      
      Custo: As impressoras 3D ainda podem ser caras para uso pessoal, mas os preços estão diminuindo rapidamente.
      Complexidade: O processo de criação e impressão 3D pode ser complexo para iniciantes, mas existem recursos disponíveis para facilitar o aprendizado.
      Propriedade intelectual: É importante proteger seus designs e modelos 3D para evitar cópias não autorizadas.
      O futuro da personalização na impressão 3D é promissor. Essa tecnologia tem o potencial de democratizar a produção, permitindo que qualquer pessoa crie objetos personalizados com facilidade e economia.`,
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
