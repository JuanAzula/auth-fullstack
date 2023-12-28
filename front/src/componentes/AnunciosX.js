export default function Anuncios({ anuncios }) {
    return (
        <aside className="bg-light">
            <nav>
                <ul className="nav flex-column">
                    {anuncios.map(a => <li className="nav-item">
                        <a className="nav-link" href={a.url}>{a.nombre}</a>
                    </li>)}
                </ul>
            </nav>
        </aside>
    );
}