import PropTypes from "prop-types"
import React, { Component } from "react"

import { Link, animateScroll as scroll } from "react-scroll"

class Header extends Component {
  constructor() {
    super()
    this.state = {
      scrolled: false,
    }
    this.scrollToTop = this.scrollToTop.bind(this)
  }

  scrollToTop() {
    scroll.scrollToTop()
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100
      if (isTop !== true) {
        this.setState({ scrolled: true })
      } else {
        this.setState({ scrolled: false })
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll")
  }

  state = {
    isActive: false,
  }

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive,
    })
  }

  render() {
    return (
      <header
        id="header"
        className={
          this.state.scrolled || this.state.isActive
            ? "fixed-top active"
            : "fixed-top"
        }
      >
        <nav id="navigation" className="container navbar navbar-expand-lg">
          <Link onClick={this.scrollToTop} className="navbar-brand">
            Sophie Peeman
          </Link>
          <ul
            className={
              this.state.isActive
                ? "navbar-nav ml-auto col-12 col-lg show"
                : "navbar-nav ml-auto col-12 col-lg"
            }
          >
            <li className="nav-item">
              <Link
                onClick={this.toggleButton}
                activeClass="active"
                className="nav-link"
                to="over-mij"
                spy={true}
                smooth="easeInOutQuad"
                duration={1000}
                offset={-50}
              >
                Over mij
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleButton}
                activeClass="active"
                className="nav-link"
                to="competenties"
                spy={true}
                smooth="easeInOutQuad"
                duration={1000}
                offset={-50}
              >
                Competenties
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleButton}
                activeClass="active"
                className="nav-link"
                to="portfolio"
                spy={true}
                smooth="easeInOutQuad"
                duration={1000}
                offset={-50}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleButton}
                activeClass="active"
                className="nav-link"
                to="cv"
                spy={true}
                smooth="easeInOutQuad"
                duration={1000}
                offset={-50}
              >
                CV
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleButton}
                activeClass="active"
                className="nav-link"
                to="contact"
                spy={true}
                smooth="easeInOutQuad"
                duration={1000}
                offset={-50}
              >
                Contact
              </Link>
            </li>
          </ul>
          <button
            className={
              this.state.isActive
                ? "hamburger hamburger--elastic is-active"
                : "hamburger hamburger--elastic"
            }
            onClick={this.toggleButton}
            type="button"
            aria-label="Menu"
            aria-controls="navigation"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Sophie Peeman`,
}

export default Header
