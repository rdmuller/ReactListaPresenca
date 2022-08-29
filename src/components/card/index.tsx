import './styles.css';

export type CardProps = {
    nome: string;
    hora: string;
}

export function Card(props: CardProps) {
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