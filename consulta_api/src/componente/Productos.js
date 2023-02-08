import React, { useEffect } from 'react';
import Producto from './Producto';
import { useState } from 'react';

function Productos() {
    const [Articulos, SetArticulos] = useState([])
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=televisores').then(res => {
            return res.json()
        }).then(datos => {
            //console.log(datos.results)
            SetArticulos(datos.results)
            //console.log(Articulos)
        })
    })

    return (
        <div>
            {
                Articulos.map((artilulo) => {
                    return <Producto name={artilulo.title} precio={artilulo.price}></Producto>
                })
            }
        </div>
    )
}

export default Productos