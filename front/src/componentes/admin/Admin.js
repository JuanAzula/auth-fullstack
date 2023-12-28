import Listado from './Listado'
import Formulario from './Formulario'

import { useEffect, useState } from 'react'
import { PRODUCTO_VACIO } from '../../constantes/productoVacio'

import { ProductoService } from '../../servicios/ProductoService'

export default function Admin ({ productos, setProductos }) {
  const [idSeleccionado, setIdSeleccionado] = useState(null)
  const [producto, setProducto] = useState(PRODUCTO_VACIO)

  useEffect(() => {
    async function rellenarProducto () {
      if (idSeleccionado) {
        const producto = await ProductoService.getProducto(idSeleccionado)
        setProducto(producto)
      } else {
        setProducto(PRODUCTO_VACIO)
      }
    }

    rellenarProducto()
  }
  , [idSeleccionado]
  )

  console.log('Admin', producto)

  return (
        <>
            {/* <pre>{JSON.stringify(producto)}</pre> */}
            <pre>{idSeleccionado}</pre>
            <Listado productos={productos} setIdSeleccionado={setIdSeleccionado} setProductos={setProductos} />
            <Formulario producto={producto} setIdSeleccionado={setIdSeleccionado} setProducto={setProducto} setProductos={setProductos} />
        </>
  )
}
