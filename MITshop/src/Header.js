import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <>
            <nav>
                <a href="#top">Menu</a>
                <h1 className="c-logo">MIT Shop</h1>
                <div>
                    <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faShoppingBag} />
                </div>
            </nav>
            <div className="c-topbar">
                <FontAwesomeIcon icon={faArrowLeft} />
                <span>Verder shoppen</span>
            </div>
        </>
    );
}

export default Header;
