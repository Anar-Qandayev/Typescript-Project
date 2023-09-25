import { Link } from "react-router-dom";
import { BsFillBasket2Fill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";


const Header = () => {
return (
    <header >
        <nav className=" h-20 bg-white flex justify-around ">
            <ul className="flex items-center justify-between w-1/3">
                <li>
                    <Link to="/home" className=" font-mono no-underline text-dark-orange text-2xl font-bold">Watch Store</Link>
                </li>
                <li>
                    <Link to="/everything" className="no-underline text-black text-2xl">SHOP</Link>
                </li>
                <li>
                    <Link to="/groceries" className="no-underline text-black text-2xl">PRODUCTS</Link>
                </li>
                <li>
                    <Link to="/juice" className="no-underline text-black text-2xl">BLOGS</Link>
                </li>
            </ul>
            <ul className=" w-80 flex items-center justify-between ">
                <li>
                    <Link to="/about" className="no-underline text-black text-2xl">ABOUT</Link>
                </li>
                <li>
                    <Link to="/contact" className="no-underline text-black text-2xl">CONTACT</Link>
                </li>
                <li className=" w-20  flex justify-between">
                    <Link to="/contact" className="no-underline text-black text-2xl"><BsFillBasket2Fill/></Link>
                    <Link to="/contact" className="no-underline text-black text-2xl"><BsPersonFill/></Link>
                </li>
            </ul>
        </nav>
    </header>
);
};

export default Header;
