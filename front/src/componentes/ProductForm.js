import Admin from './admin/Admin'
export default function ProductForm ({ handleLogout, productos, setProductos }) {
  return (
        <main className="container">
          <div>
            <button onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>

            <Admin productos={productos} setProductos={setProductos} />

          </main>

  )
}
