export default function Exercicio6({ quantidade, preco })
{
    let subtotal =(quantidade * preco)
    let desconto = subtotal * 0.1;
    let valorf = (subtotal - desconto);

    return (
        <div> 
        Total : {subtotal} <br />
        Desconto : R${desconto} <br />
        Valor final : R${valorf}
    </div>
    );
}