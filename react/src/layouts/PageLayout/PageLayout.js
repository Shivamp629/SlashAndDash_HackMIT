import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1>Slash and Dash</h1>
    {/*<Link to='/counter' activeClassName='page-layout__nav-item--active'>Search</Link>*/}
    {/*<div className='page-layout__viewport'>*/}
      {/*{children}*/}
    {/*</div>*/}
    <search>
        <input type="text" name="search"/>
        <button onClick={increment}>Search</button>
    </search>

      <table id="resultsTable">
        <tr>
          <th>Departure</th>
          <th>Passengers</th>
          <th>Estimated Cost</th>
        </tr>
        <tr>
          <td>ATL</td>
          <td>230</td>
          <td>$110</td>
        </tr>
        <tr>
          <td>BOS</td>
          <td>1000</td>
          <td>$190</td>
        </tr>
        <tr>
          <td>HOU</td>
          <td>570</td>
          <td>$89</td>
        </tr>
        <tr>
          <td>MIA</td>
          <td>489</td>
          <td>$250</td>
        </tr>
        <tr>
          <td>CHI</td>
          <td>720</td>
          <td>$205</td>
        </tr>
      </table>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
  increment: PropTypes.func.isRequired
}
export function increment (value = "ATL") {
  fetch('http://localhost:4000/search/action.payload')
  document.getElementById('resultsTable').style.display = "table"
}


// const ACTION_HANDLERS = {
//   [COUNTER_INCREMENT]    : (state, action) => fetch('/search/action.payload')
// }

const initialState = 0
export function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export default PageLayout
