import React from 'react' 
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavoritesContext from '../../store/favorites-context'

import classes from './MainNavigation.module.css'

function MainNavigation() {

    const favoritesCxt = useContext(FavoritesContext)

    return (
        <div>
            <header className={classes.header}>
                <div className={classes.logo}>React Meetups</div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>All Meetups</Link>
                        </li>
                        <li>
                            <Link to='/new-meetup'>Add New Meetups</Link>
                        </li>
                        <li>
                            <Link to='/favorites'>My Favorites
                            <span className={classes.badge}>{favoritesCxt.totalFavorites}</span></Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default MainNavigation
