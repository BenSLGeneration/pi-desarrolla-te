import TablaPermisos from '../../Components/TablaPermisos/TablaPermisos'; // Ajusta la ruta según tu estructura de carpetas

const Administracion = () => {
  // Datos de ejemplo
  const datosUsuarios = [
    { id: 1, nombre: 'John Doe', cargo: 'Product Owner', permisos: 'Administrador', status: 'Confirmado' },
    { id: 2, nombre: 'Jane Smith', cargo: 'Desarrolladora', permisos: 'Personal', status: 'Pendiente' },
    { id: 3, nombre: 'Carlos López', cargo: 'Diseñador UI', permisos: 'Personal', status: 'Confirmado' },
    { id: 4, nombre: 'Ana Pérez', cargo: 'Cum Master', permisos: 'Administrador', status: 'Desvinculado' },
  ];

  return (
    <div>
      <main id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div id="ESPACIO VACÍO">
            {/* Main Content */}
            <div className="container-fluid" style={{ marginTop: '90px' }}>
              <h1 className="h3 mb-2 text-gray-800"></h1>
              <p className="mb-4"></p>
            </div>
          </div>

          {/* Pasar datos a la tabla */}
          <TablaPermisos datos={datosUsuarios} />
        </div>
      </main>
    </div>
  );
};

export default Administracion;
