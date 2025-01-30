const TablaPermisos = ({ datos }) => {
  return (
    <div className="card shadow mb-4" style={{ marginTop: '20px' }}>
      <div className="card-header py-3">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h6 className="m-0 font-weight-bold text-primary title-text-color">Administración de permisos</h6>
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
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
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
              {/* Mapeo de datos dinámicos */}
              {datos.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>
                    <i className="bi bi-person-circle me-1" style={{ color: 'rgb(0, 81, 255)' }}></i> {usuario.nombre}
                  </td>
                  <td>{usuario.cargo}</td>
                  <td className="d-flex justify-content-start">
                    <select className="form-control w-auto">
                      <option value="admin">Administrador</option>
                      <option value="personnel">Personal</option>
                    </select>
                    <button type="button" className="btn btn-icon" style={{ color: 'green' }}>
                      <i className="bi bi-check-square-fill"></i>
                    </button>
                    <button type="button" className="btn btn-icon" style={{ color: 'red' }}>
                      <i className="bi bi-x-square-fill"></i>
                    </button>
                  </td>
                  <td>{usuario.status}</td>
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TablaPermisos;
