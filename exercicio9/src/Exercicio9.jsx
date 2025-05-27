export default function Exercicio9 ({ capital, juros, tempo })
{
    let montante = capital * Math.pow(1 + juros / 100, tempo);
    
    return (
        <div>
            Capital: R${capital} <br/>
            Juros: R${juros} <br/>
            Tempo: R${tempo} <br/>
            Seu Montante é: R${montante} 
        </div>
    );
}