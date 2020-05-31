import React from "react"
import config from "../../config"

import { Link } from "react-scroll"

import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import IsotopeLayout from "../components/isotope-2"

import Radicalisering from "../images/portfolio/radicalisering-portfolio-item_600x338.jpg"
import Pinkpop from "../images/portfolio/pinkpop-portfolio-item_600x338.jpg"
import Trekvlietplein from "../images/portfolio/trekvlietplein-portfolio-item_600x338.jpg"

import RadicaliseringPDF from "../files/portfolio-item-radicalisering.pdf"
import PinkpopPDF from "../files/portfolio-item-pinkpop.pdf"
import TrekvlietpleinPDF from "../files/portfolio-item-trekvlietplein.pdf"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Veiligheidskundige in opleiding" />
        {/* HOME */}
        <div className="section" />
        <section id="home">
          <div className="container">
            <div className="row">
              <div className="col">
                <Controller>
                  <Scene
                    classToggle="fadeInUp"
                    reverse={false}
                    triggerHook="onCenter"
                  >
                    <Tween from={{ y: 20, opacity: 0 }}>
                      <h1>
                        Sophie Peeman{" "}
                        <span>Veiligheidskundige in opleiding</span>
                      </h1>
                    </Tween>
                  </Scene>
                </Controller>
              </div>
            </div>
          </div>
        </section>
        {/* OVER MIJ */}
        <section id="over-mij">
          <div className="container">
            <div className="row">
              <div className="col col-xl-10 mx-xl-auto text-center">
                <Controller>
                  <Scene
                    classToggle="fadeInUp"
                    reverse={false}
                    triggerHook="onCenter"
                  >
                    <Tween from={{ y: 20, opacity: 0 }}>
                      <h2>Over mij</h2>
                    </Tween>
                  </Scene>
                  <Scene
                    classToggle="fadeInUp"
                    reverse={false}
                    triggerHook="onCenter"
                  >
                    <Tween from={{ y: 20, opacity: 0 }}>
                      <p>
                        Mijn naam is Sophie Peeman. Ik ben student Integrale
                        Veiligheidskunde aan de Haagse Hogeschool en gedreven om
                        te werken aan een veiligere samenleving. Doordat ik
                        stressbestendig ben en hoofd- en bijzaken van elkaar kan
                        onderscheiden, lukt het mij om resultaatgericht te
                        werken binnen de gevraagde tijd. Dankzij mijn
                        veelzijdige werkervaring en deelname aan teamsporten,
                        ben ik een echte teamplayer wat mij communicatief sterk
                        heeft gemaakt. Bij mijn vrienden sta ik bekend om mijn
                        enthousiaste en positieve persoonlijkheid.
                      </p>
                    </Tween>
                  </Scene>
                </Controller>
              </div>
            </div>
          </div>
        </section>
        {/* Competenties */}
        <section id="competenties">
          <div className="container">
            <div className="row skills">
              <div className="col-12 text-center">
                <Controller>
                  <Scene
                    classToggle="fadeInUp"
                    reverse={false}
                    triggerHook="onCenter"
                  >
                    <Tween from={{ y: 20, opacity: 0 }}>
                      <h2>Competenties</h2>
                    </Tween>
                  </Scene>
                </Controller>
              </div>

              {config.competentions.map(social => {
                const { title, count, description } = social
                return (
                  <div className="skill col-12 col-lg-6">
                    <Controller>
                      <Scene
                        classToggle="fadeInUp"
                        reverse={false}
                        triggerHook="onCenter"
                      >
                        <Tween from={{ y: 20, opacity: 0 }}>
                          <div className="title">
                            <h4>{title}</h4>
                            <span className="count">{count}</span>
                          </div>
                          <div className="skillbar">
                            <Controller>
                              <Scene reverse={false} triggerHook="onCenter">
                                <Tween from={{ width: 0 }}>
                                  <div
                                    className="skillbar-inner"
                                    style={{ width: count + "%" }}
                                  ></div>
                                </Tween>
                              </Scene>
                            </Controller>
                          </div>
                          <small small className="description">
                            {description}
                          </small>
                        </Tween>
                      </Scene>
                    </Controller>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        {/* CV */}
        <section id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h2>Portfolio</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-5 mb-md-0">
                <a
                  href={RadicaliseringPDF}
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <figure>
                    <img
                      className="img-fluid"
                      src={Radicalisering}
                      alt="Portfolio item Radicalisering"
                    />
                    <figcaption>
                      <h3 className="img-title">Radicalisering</h3>
                    </figcaption>
                  </figure>
                </a>
              </div>

              <div className="col-md-4 mb-5 mb-md-0">
                <a href={PinkpopPDF} target="_blank" rel="nofollow noreferrer">
                  <figure>
                    <img
                      className="img-fluid"
                      src={Pinkpop}
                      alt="Portfolio item Pinkpop"
                    />
                    <figcaption>
                      <h3 className="img-title">Pinkpop</h3>
                    </figcaption>
                  </figure>
                </a>
              </div>

              <div className="col-md-4">
                <a
                  href={TrekvlietpleinPDF}
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <figure>
                    <img
                      className="img-fluid"
                      src={Trekvlietplein}
                      alt="Portfolio item Trekvlietplein"
                    />
                    <figcaption>
                      <h3 className="img-title">Trekvlietplein</h3>
                    </figcaption>
                  </figure>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* CV */}
        <section id="cv">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h2>CV</h2>
              </div>
            </div>

            {/* <IsotopeLayout /> */}

            <div className="row" id="pdf">
              <div className="col-12 col-md-8">
                <h3>Liever een PDF?</h3>
                <p className="lead">
                  Deze kunt u gemakkelijk aanvragen door contact met mij op te
                  nemen.
                </p>
              </div>
              <div className="col-12 col-md-4 align-self-center text-center">
                <Link
                  activeClass="active"
                  className="btn btn-light"
                  to="contact"
                  spy={true}
                  smooth="easeInOutQuad"
                  duration={1000}
                  offset={-50}
                >
                  Aanvragen
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT */}
        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h2>Contact</h2>
              </div>
            </div>
            <form
              className="row"
              name="contact"
              id="contact-form"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <div className="col-12 col-md-6 mb-4 mb-md-0">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="naam"
                    placeholder="Naam *"
                    name="naam"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="E-mailadres *"
                    name="e-mailadres"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    id="telefoonnummer"
                    placeholder="Telefoonnummer"
                    name="telefoonnummer"
                  />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="onderwerp"
                    placeholder="Onderwerp"
                    name="onderwerp"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="bericht"
                    rows="3"
                    placeholder="Bericht"
                    name="bericht"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              </div>
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
            </form>
          </div>
        </section>
      </Layout>
    )
  }
}
export default IndexPage
