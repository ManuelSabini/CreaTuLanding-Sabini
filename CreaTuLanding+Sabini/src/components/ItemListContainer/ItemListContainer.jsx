import estilo from "./ItemListContainer.module.css"

const ItemListContainer = ({nombreArticulo}) => {
    let mensaje = "Descripcion del Articulo: "+nombreArticulo;
    return (
        <div className={`card ${estilo.card}`}>
            <p className="cardText">{mensaje}</p>
        </div>
    )
}

export default ItemListContainer