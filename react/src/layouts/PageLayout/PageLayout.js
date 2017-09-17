import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'


export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1>Slash and Dash</h1>
    {/*<Link to='/counter' activeClassName='page-layout__nav-item--active'>Search</Link>*/}
    {/*<div className='page-layout__viewport'>*/}
      {/*{children}*/}
    {/*</div>*/}
    <search>
        <input type="text" name="search"/>
        <button>Search</button>
    </search>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
