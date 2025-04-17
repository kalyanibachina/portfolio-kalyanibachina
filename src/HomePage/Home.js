import '../css/Homepage.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


function Home(){
    return(
        <div className="container-fluid">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="row border bg-white shadow box-area">
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center left-box">
                        <div className="mb-3">
                            <img src="kalyani.jpg" alt="kalyani" height="auto" width="120px"/>
                        </div>
                        <div className="mb-2 d-flex flex-column align-items-center">
                            <h3 className="fs-4 fw-bolder mb-0">Kalyani Bachina</h3>
                            <p className="mb-0 fw-bold"><small>(she/her)</small></p>
                            <p><small>Software Engineer</small></p>
                        </div>
                        <div className="mb-3">
                            <a href="#"><button className="btn btn-dark button">Email Me</button></a>
                        </div>
                        <div className="d-flex fs-3">
                            <a href="https://www.linkedin.com/in/bachinakalyani/" className="nav-link me-2"><FaLinkedin /></a>
                            <a href="#" className="nav-link me-2"><FaGithub /></a>
                            <a href="#" className="nav-link me-2"><FaSquareInstagram /></a>
                        </div> 
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center p-5 right-box">
                        <h2 className="fs-1 fw-bolder pb-3">About Me</h2>
                        <p className="mb-5 pb-3 lh-sm fst-italic"><small>I am a passionate technologist with a Master’s in Computer Science, specializing in building scalable and robust software solutions. I value clean architecture, efficient code, and continuous growth through hands-on problem-solving and learning.</small></p>
                        <div className="d-flex justify-content-center">
                            <a><button className="btn btn-dark me-4 button">Resume</button></a>
                            <a href="/portfolio"><button className="btn btn-dark button">Portfolio</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home