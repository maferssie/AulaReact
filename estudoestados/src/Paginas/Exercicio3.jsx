import { useState } from "react";

export default function Exercicio3()
{
    const[valor, setValor] = useState(0);
    const[taxa, setTaxa] = useState(0);
    const[tempo, setTempo] = useState(0);
    const[resultado, setResultado] = useState(0);

    function calcular()
    {
      let valorparcela;

      valorparcela = Number(valor) + (Number(valor) * Number(taxa) * Number(taxa) * Number(tempo) / 100);

      setResultado(valorparcela);
    }
    return(
        <div>
            <h1>Exercício 3</h1>
           
            <div className="conteudo">

            <h3>Calculo de juros</h3>
           
            <form>
                <p>
                    Digite o valor da prestação: <br />
                    <input type="text" value={valor}
                    onChange={(e) => setValor(e.target.value)} />
                </p>

                <p>
                    Digite a taxa de juros: <br />
                    <input type="text" value={taxa}
                    onChange={(e) => setTaxa(e.target.value)} />
                </p>

                <p>
                    Digite o tempo (em dias) de atraso: <br />
                    <input type="text" value={tempo}
                     onChange={(e) => setTempo(e.target.value)} />
                </p>


                <p>
                    <input type="button" value="Calcular" onClick={calcular} />
                </p>

                <p>
                    <b> Resultado </b>
                    <br />
                  O Valor da sua Prestação: {valor} <br />
                  O Valor da sua Taxa: {taxa} <br />
                  Seu tempo em atraso é de: {tempo} <br />
                  O Valor da sua Parcela é: {resultado} <br />
                </p>

                <p>
                    <a href="/">Voltar</a>
                </p>
            </form>
            </div>
        </div>
    )
}
