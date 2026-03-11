import React from 'react'

const Nav = () => {
    return (
        <div className='navbar'>
            <h1>Horizon Courts</h1>
            <div className="navbar-options">
                <ul>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Coaches</li>
                    <li>Events</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <button>Book Now<i class="ri-arrow-right-up-long-line"></i></button>
        </div>
    )
}

export default Nav
