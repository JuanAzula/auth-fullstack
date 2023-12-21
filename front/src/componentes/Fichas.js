import Ficha from "./Ficha";

export default function Fichas({ productos }) {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {productos.map(producto => <Ficha producto={producto} />)}
        </div>
    );
}