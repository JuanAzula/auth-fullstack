import axios from 'axios';


let token= null

class TokenService {
   static async setToken(newToken) {
    token = `Bearer ${newToken}`
}
}
//Definimos de qué ruta recogemos los productos
const URL_PRODUCTOS = 'http://localhost:3002/api/productos';

class ProductoService {
    static async getProductos() {   //static para que se pueda llamar a la función getproductos sin estar dentro de la clase
        try {
            const respuesta = await axios.get('http://localhost:3002/api/productos');   // recogemos la respuesta del servidor
            return respuesta.data;  //.data es un método de axios para pasar los productos a json 
        } catch (err) {
            alert('No se ha podido obtener los productos'); // alerta de error preparada en caso de no haber obtenido los productos
            return [];
        }
    }

    static async getProducto(id) {              // a través de la función getproductos por id, mostramos el producto con el id recibido
        return (await axios.get('http://localhost:3002/api/producto' +'/'+ id)).data;
    }

    static async postProducto(producto, {token}) {
        //función post para agregar un producto
        const config = {
            headers: {
                Authorization: token 
            }
        }
        delete producto.id;                      //borramos el id porque el id se crea aleatoriamente y no lo deberíam escoger nosotros
        const respuesta = await axios.post('http://localhost:3002/api/producto', producto, config);     //el método post de axios envia el producto al servidor database, el primer parámetro especifica el servidor
        return respuesta.data;  //retornamos los productos
    }

    static async putProducto(producto, {token}) {   //función put para actualizar un producto
        const config = {
            headers: {
                Authorization: token
            }
        }
        const respuesta = await axios.put('http://localhost:3002/api/producto' +'/'+ producto.id, producto, config);//el primer argumento especifica el servidor y el producto que se quiere actualizar, el segundo parámetro es el produducto actualizado
        return respuesta.data;
    }

    static async patchProducto(producto, {token}) {      //función patch para actualizar un producto
        const config = {
            headers: {
                Authorization: token
            }
        }
        const respuesta = await axios.patch('http://localhost:3002/api/producto' +'/'+ producto.id, producto, config); // lo mismo, pero con otra mecánica, los valores que no cambias en lugar de borrarse, se mantienen
        return respuesta.data;
    }

    static async deleteProducto(id, {token}) {           //función delete para borrar un producto
        const config = {
            headers: {
                Authorization: token
            }
        }
        return await axios.delete('http://localhost:3002/api/producto' +'/'+ id, config); //el método de axios elimina el producto con el id recibido
    }
}

export { TokenService, ProductoService, token };