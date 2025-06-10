export default function Exercicio10 ({ distancia, velocidade })
{
    let tempo = distancia/velocidade;
    
    return (
        <div>
            Distancia: {distancia}Km <br/>
            Velocidade: {velocidade} Por horas <br/>
            O Tempo estimado da sua viagem é: {tempo} horas
        </div>
    );
}