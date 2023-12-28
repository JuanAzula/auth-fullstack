export default function Pie ({ redes }) {
  return (
        <footer className="p-2 text-bg-dark d-flex flex-column">
            <p className="text-center">&copy; 2023 Juan Azula</p>
            <ul className="list-unstyled d-flex justify-content-around">
                {redes.map(r => <li key={r.url}><a className="text-white" href={r.url}>{r.nombre}</a></li>)}
            </ul>
        </footer>
  )
}
