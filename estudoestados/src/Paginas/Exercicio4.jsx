import { useState } from "react";

export default function Exercicio4()
{
    const[valorbase, setValorbase] = useState(0);
    const[valoraltura, setValoraltura] = useState(0);
    const[resultado, setResultado] = useState(0);

    function calcular()
    {
      let area;

      area = (base * altura) / 2

      setResultado(area);
    }
    return(
        <div>
            <h1>Exercício 4</h1>
           
        <div className="conteudo">

         <h3>Calculo da Área</h3>


        <form>
       <p>
        Digite o valor da base: <br />
         <input type="text" />
       </p>

       <p>
        Digite o valor da altura: <br />
         <input type="text" />
       </p>

       <p>
        <input type="button" value="Calcular" />
       </p>

        <p>
        <a href="/">Voltar</a>
        </p>
     </form>
    </div>
   </div>
    )
}