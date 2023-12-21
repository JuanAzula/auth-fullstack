export default function Menu({ menus }) {
  const renderMenuItems = (menuItems) => {
    return menuItems.map((m) => (
      <li className="nav-item" key={m.url}>
        <a className="nav-link" href={m.url}>
          {m.nombre}
        </a>
      </li>
    ));
  };

  return (
    <nav className="navbar navbar-expand-sm bg-dark mb-3" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Ejercicio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            {renderMenuItems(menus.izquierda)}
          </ul>
          <ul className="navbar-nav">
            {renderMenuItems(menus.derecha)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
