import React from 'react';
import minhaImagem from './imagem3.png';

const MeuComponente = () => {
  return (
    <div>
      <h2>Título da Imagem</h2>
      <img src={minhaImagem} alt="Descrição da Imagem" />
    </div>
  );
};

export default MeuComponente;
