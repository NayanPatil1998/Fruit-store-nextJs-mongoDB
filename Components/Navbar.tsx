import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar: React.FunctionComponent = () => {

  const router = useRouter();

  function isActive(route: string){
    if(route == router.pathname)
      return "nav-link active"
    else 
      return "nav-link"
  }
// 19z2jOcSCkAbQQum
  return (
    <>
      <div className="nav__container">
        <div className="container ">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <h5 className="logo">
                  <i className="fas fa-apple-alt"></i> FruitStore.com
                </h5>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link href="/">
                      <a
                        className={isActive("/")}
                        aria-current="page"
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/cart">
                      <a
                        className={isActive("/cart")}
                        aria-current="page"
                      >
                        Cart
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/signup">
                      <a
                        className={isActive("/signup")}
                        aria-current="page"
                      >
                        Sign Up
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/login">
                      <a
                        className={isActive("/login")}
                        aria-current="page"
                      >
                        Log In
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
