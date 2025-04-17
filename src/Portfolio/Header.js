function Header(){
 return(
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <div>
                    <a href="/" className="navbar-brand"><h3>KALYANI BACHINA</h3></a>
                    <button class="navbar-toggler" type="button" >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
            

        </nav>
                
                

        
    
 )
}

export default Header