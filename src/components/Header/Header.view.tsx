import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Constant from '../../constants/Constant'
import Search from '../Search/Search.view'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <nav>
        <div className={styles.logo}>
          <Link to="/">{Constant.NETFLIX}</Link>
        </div>
        <div className={styles.searchBar}>
          <Search />
        </div>
        <div className={styles.clear} />
      </nav>
    </header>
  )
}

export default withRouter(Header)
