import React, { useState } from 'react';
import './style.css'
import Container from '@mui/material/Container'


function Calculadora() {

    const [numero, setNumero] = useState(0)
    const [oldnumero, setOldNumero] = useState(0)
    const [operator, setOperator] = useState(0)

    function InputCalc(e) {

        var valorInput = e.target.value
        if (numero === 0) {
            setNumero(valorInput)
        } else {
            setNumero(numero + valorInput)
        }



    }

    function Clear(e) {
        setNumero(0)

    }

    function Operador(e) {
        var inputOperator = e.target.value
        setOperator(inputOperator)
        setOldNumero(numero)
        setNumero(0)

    }

    function Calcular() {

        if (operator === '/') {
     
         setNumero((oldnumero / numero).toFixed(2));
        }
        else if (operator === '-') {
            setNumero((oldnumero - numero).toFixed(2));
        }
        else if (operator === '+') {
             setNumero((oldnumero / numero).toFixed(2));
        }
        else if (operator === 'X') {
            setNumero((oldnumero * numero).toFixed(2));
        }
    }

    return (
        <div>
            <div style={{ marginTop: ' 5em' }}></div>

            <Container maxWidth="xs">
                <div className="tela-calc">
                    <h1>{numero}</h1>
                    <button className='botao' type="text" onClick={Clear}>AC</button>
                    <button className='botao' type="text" value={0} onClick={InputCalc}>0</button>
                    <button className='botao' type="text" value="/" onClick={Operador}>/</button> 
                    <button className='botao' type="text" value="X" onClick={Operador}>X</button>
                    <button className='botao' type="text" value={7} onClick={InputCalc}>7</button>
                    <button className='botao' type="text" value={8} onClick={InputCalc}>8</button>
                    <button className='botao' type="text" value={9} onClick={InputCalc}>9</button>
                    <button className='botao' type="text" value="-" onClick={Operador}>-</button>
                    <button className='botao' type="text" value={4} onClick={InputCalc}>4</button>
                    <button className='botao' type="text" value={5} onClick={InputCalc}>5</button>
                    <button className='botao' type="text" value={6} onClick={InputCalc}>6</button>
                    <button className='botao' type="text" value="+" onClick={Operador}>+</button>
                    <button className='botao' type="text" value={1} onClick={InputCalc}>1</button>
                    <button className='botao' type="text" value={2} onClick={InputCalc}>2</button>
                    <button className='botao' type="text" value={3} onClick={InputCalc}>3</button>
                    <button className='botao' type="text" value='=' onClick={Calcular}>=</button>

                </div>
            </Container>
        </div>
    );
}

export default Calculadora;