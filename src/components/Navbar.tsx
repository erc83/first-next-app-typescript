import React from 'react'

import { ActiveLink } from './ActiveLink'

const menuItem = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Dashboard',
        href: '/dashboard'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
]

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav" >
               {/*  {
                    menuItem.map((element) => {
                        return (<li className="nav-item">
                            <ActiveLink text={element.text} href={element.href} />
                        </li>)
                    })
                } */}
                {/* {
                    menuItem.map((element) => (
                        <li className="nav-item">
                            <ActiveLink text={element.text} href={element.href} />
                        </li>)
                    )
                } */}
                {
                    menuItem.map(({ text, href }) => (
                        <li key={ href } className="nav-item">
                            <ActiveLink  text={ text } href={ href } />
                        </li>)
                    )
                }
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar