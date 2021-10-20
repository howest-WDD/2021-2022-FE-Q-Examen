import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer>
            <button className="c-checkout">
                <FontAwesomeIcon icon={faLock} />
                <span>Verder naar bestellen</span>
            </button>
            <div className="c-help">
                <p>Hulp nodig? Bel 0123 45 67 89</p>
            </div>
        </footer>
    );
}

export default Footer;
