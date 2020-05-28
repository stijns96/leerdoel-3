import React from "react"
import config from "../../config"

import { Link } from "react-scroll"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Radicalisering from "../images/portfolio/radicalisering-portfolio-item_600x338.jpg"
import Pinkpop from "../images/portfolio/pinkpop-portfolio-item_600x338.jpg"
import Trekvlietplein from "../images/portfolio/trekvlietplein-portfolio-item_600x338.jpg"

import RadicaliseringPDF from "../files/portfolio-item-radicalisering.pdf"
import PinkpopPDF from "../files/portfolio-item-pinkpop.pdf"
import TrekvlietpleinPDF from "../files/portfolio-item-trekvlietplein.pdf"

const IndexPage = () => (
  <Layout>
    <SEO title="Veiligheidskundige in opleiding" />

    {/* HOME */}
    <section id="home">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>
              Sophie Peeman <span>Veiligheidskundige in opleiding</span>
            </h1>
          </div>
        </div>
      </div>
    </section>

    {/* OVER MIJ */}
    <section id="over-mij">
      <div className="container">
        <div className="row">
          <div className="col col-xl-10 mx-xl-auto text-center">
            <h2>Over mij</h2>
            <p>
              Mijn naam is Sophie Peeman. Ik ben student Integrale
              Veiligheidskunde aan de Haagse Hogeschool en gedreven om te werken
              aan een veiligere samenleving. Doordat ik stressbestendig ben en
              hoofd- en bijzaken van elkaar kan onderscheiden, lukt het mij om
              resultaatgericht te werken binnen de gevraagde tijd. Dankzij mijn
              veelzijdige werkervaring en deelname aan teamsporten, ben ik een
              echte teamplayer wat mij communicatief sterk heeft gemaakt. Bij
              mijn vrienden sta ik bekend om mijn enthousiaste en positieve
              persoonlijkheid.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Competenties */}
    <section id="competenties" name="test1">
      <div className="container">
        <div className="row skills">
          <div className="col-12 text-center">
            <h2>Competenties</h2>
          </div>

          {config.competentions.map(social => {
            const { title, count, description } = social
            return (
              <div className="skill col-12 col-lg-6">
                <div className="title">
                  <h4>{title}</h4>
                  <span className="count">{count}</span>
                </div>
                <div className="skillbar">
                  <div className="skillbar-inner" data-width={count}></div>
                </div>
                <small small className="description">
                  {description}
                </small>
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
                  alt="Portfolio Item Radicalisering"
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
                  alt="Portfolio Item Pinkpop"
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
                  alt="Portfolio Item Trekvlietplein"
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

        <div className="row">
          <div className="filter-button-group mx-auto">
            <button type="button" className="btn btn-primary" data-filter="*">
              Alles
            </button>
            <button type="button" className="btn" data-filter=".werk">
              Werk
            </button>
            <button type="button" className="btn" data-filter=".stage">
              Stage
            </button>
            <button type="button" className="btn" data-filter=".school">
              School
            </button>
          </div>
        </div>

        <div className="row" id="gallery">
          <div className="col-12 col-sm-6 col-lg-4 item werk">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Woodstone</h4>
                <p className="card-text">Leidinggevende</p>
                <footer>
                  <small className="card-text text-muted">2018 - 2019</small>
                  <small className="card-link refer">
                    <a
                      href="files/getuigschrift-Sophie-peeman.pdf"
                      title="Woodstone getuigschrift Sophie Peeman"
                      target="_blank"
                    >
                      Bekijk referentie
                    </a>
                  </small>
                  <span className="card-text text-muted">
                    <i className="fas fa-briefcase"></i>
                  </span>
                </footer>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 item werk">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Roest</h4>
                <p className="card-text">Gastvrouw</p>
                <footer>
                  <small className="card-text text-muted">2016 - 2019</small>
                  <span className="card-text text-muted">
                    <i className="fas fa-briefcase"></i>
                  </span>
                </footer>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 item werk">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Expo</h4>
                <p className="card-text">Verkoopmedewerkster</p>
                <footer>
                  <small className="card-text text-muted">2017 - 2018</small>
                  <span className="card-text text-muted">
                    <i className="fas fa-briefcase"></i>
                  </span>
                </footer>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 item werk">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Wijnplaza</h4>
                <p className="card-text">Commercieel medewerkster</p>
                <footer>
                  <small className="card-text text-muted">2017 - 2018</small>
                  <span className="card-text text-muted">
                    <i className="fas fa-briefcase"></i>
                  </span>
                </footer>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 item stage">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Ronald McDonald's Kinderhuis</h4>
                <p className="card-text">Begeleidster</p>
                <footer>
                  <small className="card-text text-muted">
                    Dec 2014 - Jan 2015
                  </small>
                  <span className="card-text text-muted">
                    <i className="fas fa-id-card-alt"></i>
                  </span>
                </footer>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 item stage">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">BAM Woningbouw</h4>
                <p className="card-text">Begeleidster</p>
                <footer>
                  <small className="card-text text-muted">Feb 2015</small>
                  <span className="card-text text-muted">
                    <i className="fas fa-id-card-alt"></i>
                  </span>
                </footer>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 item school">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">De Haagse Hogeschool</h4>
                <p className="card-text">Integrale Veiligheidskunde</p>
                <footer>
                  <small className="card-text text-muted">
                    Sep 2018 - Heden
                  </small>
                  <span className="card-text text-muted">
                    <i className="fas fa-school"></i>
                  </span>
                </footer>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 item school">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">ONC Parkdreef</h4>
                <p className="card-text">Hoger algemeen voortgezet onderwijs</p>
                <footer>
                  <small className="card-text text-muted">2012 - 2017</small>
                  <span className="card-text text-muted">
                    <i className="fas fa-school"></i>
                  </span>
                </footer>
              </div>
            </div>
          </div>
        </div>

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
          action="sendmail.php"
          method="POST"
          className="needs-validation"
          id="contact-form"
          novalidate
        >
          <div className="row">
            <div className="col-12 col-md-6 left">
              <div className="form-group">
                <label for="naam">
                  Naam &#42;
                  <input
                    type="text"
                    name="naam"
                    className="form-control"
                    id="naam"
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label for="email">
                  E-mailadres &#42;
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label for="tel">
                  Telefoonnummer
                  <input
                    type="tel"
                    name="tel"
                    className="form-control"
                    id="tel"
                  />
                </label>
              </div>
            </div>
            <div className="col-12 col-md-6 right">
              <div className="form-group">
                <label for="tel">
                  Onderwerp &#42;
                  <input
                    type="text"
                    name="onderwerp"
                    className="form-control"
                    id="onderwerp"
                    required
                  />
                </label>
              </div>

              <div className="form-group">
                <label for="bericht">
                  Bericht &#42;
                  <textarea
                    className="form-control"
                    name="bericht"
                    id="bericht"
                    rows="5"
                    required
                  ></textarea>
                </label>
              </div>
              <button className="btn btn-primary btn-block" type="submit">
                Verstuur
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </Layout>
)

export default IndexPage
