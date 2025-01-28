import React from 'react';

const PermissionAdmin = () => {
  return (
    <div style={{ backgroundColor: 'rgb(126, 126, 243)' }}>
      <main id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div id="ESPACIO VACIO">
            {/* Navbar Section */}
            <header>
              <div className="navbar-wrapper">
                   <nav
                    className="navbar navbar-expand-lg bg-white shadow rounded-pill p-2"
                    style={{
                      position: 'fixed',
                      top: 0,
                      left: '50%', // Centers the navbar horizontally
                      transform: 'translateX(-50%)', // Shifts it left by 50% of its width
                      zIndex: 1050,
                      margin: '0 20px',
                      padding: '10px 20px',
                      width: '80%', // You can adjust the width as needed
                    }}>
                  <div className="container-fluid">
                    {/* Navbar Toggle Button for small screens */}
                    <button
                      className="navbar-toggler ms-auto"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarContent"
                      aria-controls="navbarContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Collapse Content */}
                    <div className="collapse navbar-collapse" id="navbarContent">
                      {/* Search Form */}
                      <form className="d-flex me-auto my-2 my-lg-0">
                        <input
                          className="form-control form-control-sm rounded-pill me-2"
                          type="search"
                          placeholder="Buscar"
                          aria-label="Buscar"
                        />
                        <button type="button" className="btn btn-custom" aria-label="Configuración">
                          <i className="bi bi-gear"></i>
                        </button>
                      </form>

                      {/* User Info */}
                      <div className="d-flex align-items-center mt-2 mt-lg-0">
                        <i className="bi bi-person-circle fs-3 text-primary me-2"></i>
                        <div>
                          <strong className="d-block">Nombre Usuario</strong>
                          <small className="text-muted">Cargo Laboral</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </header>

            {/* Main Content */}
            <div className="container-fluid" style={{ marginTop: '90px' }}> {/* Adjusting for navbar height */}
              <h1 className="h3 mb-2 text-gray-800"></h1>
              <p className="mb-4"></p>
            </div>
          </div>

          {/* Additional Content */}
          <div className="card shadow mb-4" style={{ marginTop: '20px' }}>
            <div className="card-header py-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h6 className="m-0 font-weight-bold text-primary title-text-color">Administracion de permisos</h6>
                <input type="text" className="form-control w-50" placeholder="Buscar usuarios, cargos, etc." />
                <select className="form-control w-25 ml-2">
                  <option value="all">Todos</option>
                  <option value="confirmed">Confirmado</option>
                  <option value="pending">Pendiente</option>
                  <option value="inactive">Desvinculado</option>
                </select>
              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre usuario</th>
                      <th>Cargo</th>
                      <th>Permisos</th>
                      <th>Status</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>ID</th>
                      <th>Nombre usuario</th>
                      <th>Cargo</th>
                      <th>Permisos</th>
                      <th>Status</th>
                      <th>Acciones</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <i className="bi bi-person-circle me-1" style={{ color: 'rgb(0, 81, 255)' }}></i> John Doe
                      </td>
                      <td>Product Owner</td>
                      <td className="d-flex justify-content-start">
                        <select className="form-control w-auto">
                          <option value="admin">Administrador</option>
                          <option value="personnel">Personal</option>
                        </select>
                        <button type="button" className="btn btn-icon" style={{ color: 'green' }}>
                          <i className="bi bi-check-square-fill"></i>
                        </button>
                        <button type="button" className="btn btn-icon" style={{ color: 'red' }}>
                          <i className="bi bi-x-square-fill" style={{ color: 'red' }}></i>
                        </button>
                      </td>
                      <td>Confirmado</td>
                      <td style={{ display: 'flex', gap: '20px' }}>
                        <div>
                          <i className="bi bi-eye"></i>
                          <i className="bi bi-pencil-square"></i>
                        </div>
                        <button type="button" className="btn btn-danger" style={{ marginTop: '-5px' }}>
                          DESVINCULAR
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <i className="bi bi-person-circle me-1" style={{ color: 'rgb(0, 81, 255)' }}></i> John Doe
                      </td>
                      <td>Product Owner</td>
                      <td className="d-flex justify-content-start">
                        <select className="form-control w-auto">
                          <option value="admin">Administrador</option>
                          <option value="personnel">Personal</option>
                        </select>
                        <button type="button" className="btn btn-icon" style={{ color: 'green' }}>
                          <i className="bi bi-check-square-fill"></i>
                        </button>
                        <button type="button" className="btn btn-icon" style={{ color: 'red' }}>
                          <i className="bi bi-x-square-fill" style={{ color: 'red' }}></i>
                        </button>
                      </td>
                      <td>Confirmado</td>
                      <td style={{ display: 'flex', gap: '20px' }}>
                        <div>
                          <i className="bi bi-eye"></i>
                          <i className="bi bi-pencil-square"></i>
                        </div>
                        <button type="button" className="btn btn-danger" style={{ marginTop: '-5px' }}>
                          DESVINCULAR
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <i className="bi bi-person-circle me-1" style={{ color: 'rgb(0, 81, 255)' }}></i> John Doe
                      </td>
                      <td>Product Owner</td>
                      <td className="d-flex justify-content-start">
                        <select className="form-control w-auto">
                          <option value="admin">Administrador</option>
                          <option value="personnel">Personal</option>
                        </select>
                        <button type="button" className="btn btn-icon" style={{ color: 'green' }}>
                          <i className="bi bi-check-square-fill"></i>
                        </button>
                        <button type="button" className="btn btn-icon" style={{ color: 'red' }}>
                          <i className="bi bi-x-square-fill" style={{ color: 'red' }}></i>
                        </button>
                      </td>
                      <td>Confirmado</td>
                      <td style={{ display: 'flex', gap: '20px' }}>
                        <div>
                          <i className="bi bi-eye"></i>
                          <i className="bi bi-pencil-square"></i>
                        </div>
                        <button type="button" className="btn btn-danger" style={{ marginTop: '-5px' }}>
                          DESVINCULAR
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <i className="bi bi-person-circle me-1" style={{ color: 'rgb(0, 81, 255)' }}></i> John Doe
                      </td>
                      <td>Product Owner</td>
                      <td className="d-flex justify-content-start">
                        <select className="form-control w-auto">
                          <option value="admin">Administrador</option>
                          <option value="personnel">Personal</option>
                        </select>
                        <button type="button" className="btn btn-icon" style={{ color: 'green' }}>
                          <i className="bi bi-check-square-fill"></i>
                        </button>
                        <button type="button" className="btn btn-icon" style={{ color: 'red' }}>
                          <i className="bi bi-x-square-fill" style={{ color: 'red' }}></i>
                        </button>
                      </td>
                      <td>Confirmado</td>
                      <td style={{ display: 'flex', gap: '20px' }}>
                        <div>
                          <i className="bi bi-eye"></i>
                          <i className="bi bi-pencil-square"></i>
                        </div>
                        <button type="button" className="btn btn-danger" style={{ marginTop: '-5px' }}>
                          DESVINCULAR
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <i className="bi bi-person-circle me-1" style={{ color: 'rgb(0, 81, 255)' }}></i> John Doe
                      </td>
                      <td>Product Owner</td>
                      <td className="d-flex justify-content-start">
                        <select className="form-control w-auto">
                          <option value="admin">Administrador</option>
                          <option value="personnel">Personal</option>
                        </select>
                        <button type="button" className="btn btn-icon" style={{ color: 'green' }}>
                          <i className="bi bi-check-square-fill"></i>
                        </button>
                        <button type="button" className="btn btn-icon" style={{ color: 'red' }}>
                          <i className="bi bi-x-square-fill" style={{ color: 'red' }}></i>
                        </button>
                      </td>
                      <td>Confirmado</td>
                      <td style={{ display: 'flex', gap: '20px' }}>
                        <div>
                          <i className="bi bi-eye"></i>
                          <i className="bi bi-pencil-square"></i>
                        </div>
                        <button type="button" className="btn btn-danger" style={{ marginTop: '-5px' }}>
                          DESVINCULAR
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <i className="bi bi-person-circle me-1" style={{ color: 'rgb(0, 81, 255)' }}></i> John Doe
                      </td>
                      <td>Product Owner</td>
                      <td className="d-flex justify-content-start">
                        <select className="form-control w-auto">
                          <option value="admin">Administrador</option>
                          <option value="personnel">Personal</option>
                        </select>
                        <button type="button" className="btn btn-icon" style={{ color: 'green' }}>
                          <i className="bi bi-check-square-fill"></i>
                        </button>
                        <button type="button" className="btn btn-icon" style={{ color: 'red' }}>
                          <i className="bi bi-x-square-fill" style={{ color: 'red' }}></i>
                        </button>
                      </td>
                      <td>Confirmado</td>
                      <td style={{ display: 'flex', gap: '20px' }}>
                        <div>
                          <i className="bi bi-eye"></i>
                          <i className="bi bi-pencil-square"></i>
                        </div>
                        <button type="button" className="btn btn-danger" style={{ marginTop: '-5px' }}>
                          DESVINCULAR
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <i className="bi bi-person-circle me-1" style={{ color: 'rgb(0, 81, 255)' }}></i> John Doe
                      </td>
                      <td>Product Owner</td>
                      <td className="d-flex justify-content-start">
                        <select className="form-control w-auto">
                          <option value="admin">Administrador</option>
                          <option value="personnel">Personal</option>
                        </select>
                        <button type="button" className="btn btn-icon" style={{ color: 'green' }}>
                          <i className="bi bi-check-square-fill"></i>
                        </button>
                        <button type="button" className="btn btn-icon" style={{ color: 'red' }}>
                          <i className="bi bi-x-square-fill" style={{ color: 'red' }}></i>
                        </button>
                      </td>
                      <td>Confirmado</td>
                      <td style={{ display: 'flex', gap: '20px' }}>
                        <div>
                          <i className="bi bi-eye"></i>
                          <i className="bi bi-pencil-square"></i>
                        </div>
                        <button type="button" className="btn btn-danger" style={{ marginTop: '-5px' }}>
                          DESVINCULAR
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <i className="bi bi-person-circle me-1" style={{ color: 'rgb(0, 81, 255)' }}></i> John Doe
                      </td>
                      <td>Product Owner</td>
                      <td className="d-flex justify-content-start">
                        <select className="form-control w-auto">
                          <option value="admin">Administrador</option>
                          <option value="personnel">Personal</option>
                        </select>
                        <button type="button" className="btn btn-icon" style={{ color: 'green' }}>
                          <i className="bi bi-check-square-fill"></i>
                        </button>
                        <button type="button" className="btn btn-icon" style={{ color: 'red' }}>
                          <i className="bi bi-x-square-fill" style={{ color: 'red' }}></i>
                        </button>
                      </td>
                      <td>Confirmado</td>
                      <td style={{ display: 'flex', gap: '20px' }}>
                        <div>
                          <i className="bi bi-eye"></i>
                          <i className="bi bi-pencil-square"></i>
                        </div>
                        <button type="button" className="btn btn-danger" style={{ marginTop: '-5px' }}>
                          DESVINCULAR
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <i className="bi bi-person-circle me-1" style={{ color: 'rgb(0, 81, 255)' }}></i> John Doe
                      </td>
                      <td>Product Owner</td>
                      <td className="d-flex justify-content-start">
                        <select className="form-control w-auto">
                          <option value="admin">Administrador</option>
                          <option value="personnel">Personal</option>
                        </select>
                        <button type="button" className="btn btn-icon" style={{ color: 'green' }}>
                          <i className="bi bi-check-square-fill"></i>
                        </button>
                        <button type="button" className="btn btn-icon" style={{ color: 'red' }}>
                          <i className="bi bi-x-square-fill" style={{ color: 'red' }}></i>
                        </button>
                      </td>
                      <td>Confirmado</td>
                      <td style={{ display: 'flex', gap: '20px' }}>
                        <div>
                          <i className="bi bi-eye"></i>
                          <i className="bi bi-pencil-square"></i>
                        </div>
                        <button type="button" className="btn btn-danger" style={{ marginTop: '-5px' }}>
                          DESVINCULAR
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <i className="bi bi-person-circle me-1" style={{ color: 'rgb(0, 81, 255)' }}></i> John Doe
                      </td>
                      <td>Product Owner</td>
                      <td className="d-flex justify-content-start">
                        <select className="form-control w-auto">
                          <option value="admin">Administrador</option>
                          <option value="personnel">Personal</option>
                        </select>
                        <button type="button" className="btn btn-icon" style={{ color: 'green' }}>
                          <i className="bi bi-check-square-fill"></i>
                        </button>
                        <button type="button" className="btn btn-icon" style={{ color: 'red' }}>
                          <i className="bi bi-x-square-fill" style={{ color: 'red' }}></i>
                        </button>
                      </td>
                      <td>Confirmado</td>
                      <td style={{ display: 'flex', gap: '20px' }}>
                        <div>
                          <i className="bi bi-eye"></i>
                          <i className="bi bi-pencil-square"></i>
                        </div>
                        <button type="button" className="btn btn-danger" style={{ marginTop: '-5px' }}>
                          DESVINCULAR
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <i className="bi bi-person-circle me-1" style={{ color: 'rgb(0, 81, 255)' }}></i> John Doe
                      </td>
                      <td>Product Owner</td>
                      <td className="d-flex justify-content-start">
                        <select className="form-control w-auto">
                          <option value="admin">Administrador</option>
                          <option value="personnel">Personal</option>
                        </select>
                        <button type="button" className="btn btn-icon" style={{ color: 'green' }}>
                          <i className="bi bi-check-square-fill"></i>
                        </button>
                        <button type="button" className="btn btn-icon" style={{ color: 'red' }}>
                          <i className="bi bi-x-square-fill" style={{ color: 'red' }}></i>
                        </button>
                      </td>
                      <td>Confirmado</td>
                      <td style={{ display: 'flex', gap: '20px' }}>
                        <div>
                          <i className="bi bi-eye"></i>
                          <i className="bi bi-pencil-square"></i>
                        </div>
                        <button type="button" className="btn btn-danger" style={{ marginTop: '-5px' }}>
                          DESVINCULAR
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <i className="bi bi-person-circle me-1" style={{ color: 'rgb(0, 81, 255)' }}></i> John Doe
                      </td>
                      <td>Personal Hotelero</td>
                      <td className="d-flex justify-content-start">
                        <select className="form-control w-auto">
                          <option value="admin">Administrador</option>
                          <option value="personnel">Personal</option>
                        </select>
                        <button type="button" className="btn btn-icon" style={{ color: 'green' }}>
                          <i className="bi bi-check-square-fill"></i>
                        </button>
                        <button type="button" className="btn btn-icon" style={{ color: 'red' }}>
                          <i className="bi bi-x-square-fill" style={{ color: 'red' }}></i>
                        </button>
                      </td>
                      <td>Desvinculado</td>
                      <td style={{ display: 'flex', gap: '20px' }}>
                        <div>
                          <i className="bi bi-eye"></i>
                          <i className="bi bi-pencil-square"></i>
                        </div>
                        <button type="button" className="btn btn-success" style={{ marginTop: '-5px' }}>
                          VINCULAR
                        </button>
                      </td>
                    </tr>
                    {/* Repeat rows for other entries */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PermissionAdmin;
