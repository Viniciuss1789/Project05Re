import React, { useState } from 'react';

function Calculadora() {
  const [expressao, setExpressao] = useState('');
  const [resultado, setResultado] = useState('');

  const handleClick = (value) => {
    setExpressao(expressao + value);
  };

  const calcularResultado = () => {
    try {
      const resultadoCalculado = eval(expressao);
      setResultado(resultadoCalculado);
    } catch (error) {
      setResultado('Erro');
    }
  };

  const limparTudo = () => {
    setExpressao('');
    setResultado('');
  };

  return (
    <div>
      <h2>Calculadora Simples</h2>
      <input
        type="text"
        value={expressao}
        readOnly
        style={{ marginBottom: '10px' }}
      />
      <div>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={calcularResultado}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
      <button onClick={limparTudo} style={{ marginTop: '10px' }}>Limpar</button>
      <div>
        <p>Resultado: {resultado}</p>
      </div>
    </div>
  );
}

export default Calculadora;