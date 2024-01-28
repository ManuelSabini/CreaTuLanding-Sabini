import cartImg from "./cartWidget.png"
import estilo from "./CartWidget.module.css"

const CartWidget = () => {
    return (
        <div className={estilo.carritoAreaIcono}>
            <img src={cartImg} alt="logo de carrito" className={estilo.img}/>
        </div>
    )
}

export default CartWidget