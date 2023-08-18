import { Link }from "react-router-dom";

const Footer = () => {
    return ( 
        <div className="footer">
         <div>
         <Link to="/myvoot"><span>MY VOOT</span></Link>
         <Link to="/tvshows"><span>TV SHOWS</span></Link>
         <Link to="/kids"><span>KIDS</span></Link>
         <Link to="/movies"><span>MOVIES</span></Link>
         <Link to="/shots"><span>SHOTS</span></Link>

        </div>
        </div>
     );
}
 
export default Footer;