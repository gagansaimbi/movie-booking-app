
import { Link } from 'react-router-dom'

function Header() {

    // const navigate = useNavigate()

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid bs-body-bg">

                    <Link className="navbar-brand" to="/">
                        <h1>E-Cube</h1>
                    </Link>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    <h4>Home</h4>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">
                                    <h4>Nearbuy events</h4>
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search" 
                            
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header