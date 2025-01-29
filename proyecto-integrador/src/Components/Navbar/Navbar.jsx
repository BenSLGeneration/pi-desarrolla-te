import React from "react";
export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow rounded-pill p-2 position-absolute top-0 end-0 m-3">
            <div className="container-fluid">
            <input
      className="form-control form-control-sm rounded-pill me-2"
      type="search"
      placeholder="Buscar"
      aria-label="Buscar"
    />
    <button className="btn btn-sm rounded-pill">
    <i className="bi bi-gear" style={{ fontSize: '2rem', color: 'blue' }}></i>
    </button>
                <a className="navbar-brand" href="/">Navbar</a>
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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle" 
                                href="javascript:void(0);" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/action">Action</a></li>
                                <li><a className="dropdown-item" href="/another-action">Another action</a></li>
                                <li><a className="dropdown-item" href="/something-else">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};