import "./App.css";

export default function App()
{
    const estilo = {
        color : "HotPink",
        textAlign : "center",
        backgroundColor : "LightSkyBlue",
        padding : "10px"
    };

    return (
        <div className="conteudo">
            <h1>Estudo CSS</h1>

            <p>
                O CSS (<i>Cascading Style Sheets</i>) é uma linguagem utilizada para estilizar as <b>páginas web</b>. Com ela podemos definir: 
            </p>
            
            <ul>
                <li>Cores de fundo, do texto e dos elementos</li>
                <li>Fontes e tamanhos de letras</li>
                <li>Posicionamneto dos elementos na página</li>
                <li>Espaçamento, bordas, sombras, etc.</li>
                <li>Efeitos visuais e animações</li>
            </ul>

            <h3 style={estilo}>As Mais +</h3>

            <p className="centro">
                <img src="asmaismais.jpg"></img>
            </p>
        </div>
    );
}