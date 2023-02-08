function Producto(props) {
    const Accion = () => {
        alert('Button sin Efecto por ahora!')
    }

    return (
        <div className='producto'>
            <p><strong>Nombre Producto:</strong> {props.name}</p>
            <p>Valor:  <strong>${props.precio}</strong></p>
            <button onClick={Accion}>Detalles</button>
        </div>
    )
}

export default Producto