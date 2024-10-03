import Container from "@mui/material/Container";
import "../copyright/copyright.css";

function Copyright(){
   
    const currentYear = new Date().getFullYear();

    return (
        <div className="copyright">    <Container>
        <p className="stamp">Copyright © {currentYear}  Zenithfit.</p>
        </Container></div>
    
    )

}

export default Copyright;