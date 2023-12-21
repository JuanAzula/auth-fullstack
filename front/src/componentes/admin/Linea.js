import {ProductoService, token} from '../../servicios/ProductoService';
export default function Linea({ producto, setIdSeleccionado, setProductos }) {
    async function borrar(id) {
        const respuesta = await ProductoService.deleteProducto(id, {token});
        if (respuesta) {
            setProductos(productos => productos.filter(p => p.id !== id));
            setIdSeleccionado(null);
        } else {
            alert(respuesta.statusText);
        }
    }

    return (
        <tr>
            <th>{producto.id}</th>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.descripcion}</td>
            <td>
                <button type="button" onClick={() => setIdSeleccionado(producto.id)} className="btn btn-sm btn-primary">Editar</button>
                <button type="button" onClick={() => borrar(producto.id)} className="btn btn-sm btn-danger">Eliminar</button>
            </td>
        </tr>
    );
}