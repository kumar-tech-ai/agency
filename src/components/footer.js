import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = ({ copyright }) => { 
 <footer
          style={{
          background:'#ffdd00',
          }}
        >
          <div style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
          maxWidth: 1170}}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.origamicreative.com">Origamicreative</a>
        </div>
        </footer>

 

 

export default Footer
