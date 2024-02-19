import React from "react";
import "./sobre.css";

const Sobre = () => {
  return (
    <div className="sobre-container">
      <h1>Portal de Notícias sobre Tecnologia</h1>
      <p>
        Este portal foi desenvolvido como parte do projeto da Unidade 1 da
        disciplina Tópicos Especiais em Inteligência Artificial. O objetivo do
        projeto era criar um portal utilizando ferramentas baseadas em
        inteligência artificial.
      </p>
      <p>
        Em colaboração com o ChatGPT, Copilot, Leonardo.AI, TTSmaker e Bard
        (Gemini), criamos um portal de notícias dedicado à tecnologia como uma
        das sugestões pelo ChatGpt do que poderia ser feito. Utilizamos a
        tecnologia de geração de texto assistida pelo ChatGPT para criar
        conteúdo original e relevante sobre as últimas novidades no mundo da
        tecnologia.
      </p>
      <p>
        O Leonardo.AI foi utilizado principalmente para gerar os headers
        contendo imagens, bem como a imagem da notícia, adicionando uma dimensão
        visual atraente ao portal.
      </p>
      <p>
        O Gemini, anteriormente conhecido como Bard, foi empregado para obter
        notícias relacionadas a tópicos específicos buscados pelos usuários.
        Isso permitiu que o portal oferecesse uma ampla variedade de informações
        sobre tecnologia, mantendo-se atualizado com as últimas tendências e
        desenvolvimentos.
      </p>
      <p>
        Além disso, o TTSmaker foi usado para converter alguns dos textos em
        áudio, proporcionando uma experiência multimídia aos usuários.
      </p>
      <p>
        Vale ressaltar que a estrutura do projeto, feito em React, utilizou o
        ChatGPT em algumas situações específicas, como para esclarecer dúvidas e
        desenvolver componentes específicos, como a página "Sobre" e o
        componente de áudio.
      </p>
      <p>
        Este projeto demonstra como as ferramentas baseadas em inteligência
        artificial podem ser utilizadas de forma criativa e inovadora para
        desenvolver soluções que agreguem valor aos usuários em diferentes
        contextos, como o campo do jornalismo e das notícias online.
      </p>
      <p>
        Para mais detalhes e para acessar o código-fonte deste projeto, visite o
        repositório no GitHub:{" "}
        <a
          className="new-padding"
          href="https://github.com/flaviooliveira478/TEIA-2023.2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Techverse
        </a>
        .
      </p>
    </div>
  );
};

export default Sobre;
