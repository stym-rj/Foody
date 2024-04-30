import "../footer/FooterStyles.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Foody</h1>
                    <p>Your Taste Our Service</p>
                </div>
                
                <div>
                    <a href="https://github.com/stym-rj">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                    <a href="https://instagram.com/stym.io">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/satyamraj3279/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Community</h4>
                    <a href="https://github.com/stym-rj">Github</a>
                    <a href="/">Issues</a>
                    <a href="https://github.com/stym-rj">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Address</h4>
                    <p>Lovely Professional University, Block 36, Room No: 906, <br></br>Phagwara(Punjab) India 144401</p>
                   
                    <h4>Contact Us</h4>
                    <p>Tel No. +91 7982295352</p>
                </div>
                
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;