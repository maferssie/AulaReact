export default function Exercicio1({fah, celsius})
{
    let celsius = ((fah-32)*5)/9;

    return (
        <div> 
           <h3>Chamadas para o Exercicio 1</h3>

           A conversão de 100°F para Celsius é {celsius};
           A conversão de 70°F para Celsius é {celsius};
        </div>
    );
}