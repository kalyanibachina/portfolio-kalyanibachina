import Header from "./Header";
import '../css/PortfolioHome.css'

function PortfolioHome(){
    return(
       <div className="container-fluid">
        <div>
            <Header />
        </div>
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items center">
                    left-box
                </div>
                <div className="col-md-6">
                    right-box
                </div>
            </div>
        </div>
       </div>
    )
}

export default PortfolioHome