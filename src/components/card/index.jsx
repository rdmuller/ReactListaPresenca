import './styles.css';

function Card(props) {
    return (
        <div className="card">
            <strong>{props.nome}</strong>
            <small>{props.hora}</small>
        </div>
    )
}

// # Outra forma para escrever o código
// com a utilização das chaves nos parâmetros, o JS deixa as propriedades (desestruturadas) para serem utilizar sem referenciar o objeto props
/*function Card({nome, hora}) {
    return (
        <div className="card">
            <strong>{nome}</strong>
            <small>{hora}</small>
        </div>
    )
}*/

export default Card;