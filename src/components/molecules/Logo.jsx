import { Link } from "react-router-dom";

const Logo = () => {
    return(
        <div className="flex">
            <Link to="/">
            <img className="img-logo" src="https://ed.team/images/logo/logo.svg" alt="logo" />
            </Link>
            
        </div>
    )
}
export default Logo;