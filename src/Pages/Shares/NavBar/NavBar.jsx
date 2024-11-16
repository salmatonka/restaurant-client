import { Link } from "react-router-dom";


const NavBar = () => {

  const navOptions = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/menu">Our Menu</Link></li>
    <li><Link to="/order/salad">Order Food</Link></li>
    <li><Link to="/dashboard">Dashboard</Link></li>
    <li><Link to="/contactUs">ContactUs</Link></li>
    <li><Link to="/logIn">LogIn</Link></li>
    <li><Link to="/register">Register</Link></li>
    {/* <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li> */}
    <li><Link to="/secret">Secret</Link></li>

    {/* {
    user? <>
    <p className='text-gray-100'>{user?.displayName}</p>
    <button onClick={handleLogOut}>Logout</button>
    </> 
    :
     <>
     <li><Link to="/logIn">LogIn</Link></li>
     </>
} */}

  </>
  return (

    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-white text-xl">daisyUI</a>
      </div>
      <div className="navbar-center text-white hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;