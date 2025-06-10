export default function Exercicio11 ({ custo })
{
    let percentualdistribuidor = Number(custo)*0.28
    let imposto = Number(custo)*0.45
    let valorf= Number(custo) + Number(percentualdistribuidor) + Number(imposto)
    
    return (
        <div>
           Valor custo de fabrica: {custo} <br/>
           Valor custo do distribuidor: {percentualdistribuidor} <br/>
           Valor do imposto: {imposto} <br/>
           Valor final: {valorf}
        </div>
    );
}