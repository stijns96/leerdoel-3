/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import Scroll from "./scroll"

import Header from "./header"
import "../styles/styles.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 text-center text-md-left">
              <span>
                &copy; 2019 &#124; Alle rechten voorbehouden &#124; Portfolio
                Sophie Peeman
              </span>
            </div>
            <div className="col-12 col-md-6 text-center text-md-right">
              <span className="m-0">
                Gemaakt door&nbsp;
                <a
                  href="https://www.waysagency.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Webdesignbureau Ways Agency"
                >
                  Ways Agency
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
