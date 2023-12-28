import Admin from './admin/Admin'
import PropTypes from 'prop-types'
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

ProductForm.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  productos: PropTypes.array.isRequired,
  setProductos: PropTypes.func.isRequired
}
