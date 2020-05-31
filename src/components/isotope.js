import React, { useState, useEffect } from "react"
import Isotope from "isotope-layout/js/isotope"
import $ from "jquery"

const IsotopeReact = () => {
  // store the isotope object in one state
  const [isotope, setIsotope] = useState(null)
  // store the filter keyword in another state
  const [filterKey, setFilterKey] = useState("*")

  // initialize an Isotope object with configs
  useEffect(() => {
    setIsotope(
      new Isotope("#gallery", {
        layoutMode: "fitRows",
        transitionDuration: "0.5s",
      })
    )
  }, [])

  useEffect(() => {
    $(".filter-button-group").each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup)
      $buttonGroup.on("click", "button", function () {
        $buttonGroup.find(".btn-primary").removeClass("btn-primary")
        $(this).addClass("btn-primary")
      })
    })
  }, [])

  // handling filter key change
  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` })
    }
  }, [isotope, filterKey])

  return (
    <>
      <div className="row">
        <div className="filter-button-group mx-auto">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setFilterKey("*")}
          >
            Alles
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => setFilterKey("werk")}
          >
            Werk
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => setFilterKey("stage")}
          >
            Stage
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => setFilterKey("school")}
          >
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
                <small className="card-text text-muted">Sep 2018 - Heden</small>
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
    </>
  )
}

export default IsotopeReact
