export default function Exercicio3()
{
    return(
        <div>
            <h1>Exercicio3</h1>
           
            <div className="conteudo">

            <h3>Calculo de juros</h3>
           
       
            <form>
                <p>
                    Digite o valor da prestação: <br />
                    <input type="text" />
                </p>

                <p>
                    Digite a taxa de juros: <br />
                    <input type="text" />
                </p>

                <p>
                    Digite o tempo (em dias) de atraso: <br />
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
