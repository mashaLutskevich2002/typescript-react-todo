import React from 'react';

export const Header: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper deep-orange darken-4 pd-10">
            <a href="#" className="brand-logo">TodoList <i className='material-icons'> done</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">My todo </a></li>
                    <li><a href="/">Information</a></li>
                </ul>
            </div>
        </nav>
    );
}

