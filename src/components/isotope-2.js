import React from "react"
import $ from "jquery"

class IsotopeLayout extends React.Component {
  componentDidMount() {
    var grid = $("#gallery").isotope({
      layoutMode: "fitRows",
      transitionDuration: "0.5s",
    })

    // filter items on button click
    $(".filter-button-group").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter")

      grid.isotope({
        filter: filterValue,
      })
    })

    // change is-checked class on buttons
    $(".filter-button-group").each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup)
      $buttonGroup.on("click", "button", function () {
        $buttonGroup.find(".btn-primary").removeClass("btn-primary")
        $(this).addClass("btn-primary")
      })
    })
  }
  render() {
    return (
      <>
        <div class="row">
          <div class="filter-button-group mx-auto">
            <button type="button" class="btn btn-primary" data-filter="*">
              Alles
            </button>
            <button type="button" class="btn" data-filter=".werk">
              Werk
            </button>
            <button type="button" class="btn" data-filter=".stage">
              Stage
            </button>
            <button type="button" class="btn" data-filter=".school">
              School
            </button>
          </div>
        </div>

        <div class="row" id="gallery">
          <div class="col-12 col-sm-6 col-lg-4 item werk">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Woodstone</h4>
                <p class="card-text">Leidinggevende</p>
                <footer>
                  <small class="card-text text-muted">2018 - 2019</small>
                  <small class="card-link refer">
                    <a
                      href="files/getuigschrift-Sophie-peeman.pdf"
                      title="Woodstone getuigschrift Sophie Peeman"
                      target="_blank"
                    >
                      Bekijk referentie
                    </a>
                  </small>
                  <span class="card-text text-muted">
                    <i class="fas fa-briefcase"></i>
                  </span>
                </footer>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 item werk">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Roest</h4>
                <p class="card-text">Gastvrouw</p>
                <footer>
                  <small class="card-text text-muted">2016 - 2019</small>
                  <span class="card-text text-muted">
                    <i class="fas fa-briefcase"></i>
                  </span>
                </footer>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 item werk">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Expo</h4>
                <p class="card-text">Verkoopmedewerkster</p>
                <footer>
                  <small class="card-text text-muted">2017 - 2018</small>
                  <span class="card-text text-muted">
                    <i class="fas fa-briefcase"></i>
                  </span>
                </footer>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 item werk">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Wijnplaza</h4>
                <p class="card-text">Commercieel medewerkster</p>
                <footer>
                  <small class="card-text text-muted">2017 - 2018</small>
                  <span class="card-text text-muted">
                    <i class="fas fa-briefcase"></i>
                  </span>
                </footer>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 item stage">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Ronald McDonald's Kinderhuis</h4>
                <p class="card-text">Begeleidster</p>
                <footer>
                  <small class="card-text text-muted">
                    Dec 2014 - Jan 2015
                  </small>
                  <span class="card-text text-muted">
                    <i class="fas fa-id-card-alt"></i>
                  </span>
                </footer>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 item stage">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">BAM Woningbouw</h4>
                <p class="card-text">Begeleidster</p>
                <footer>
                  <small class="card-text text-muted">Feb 2015</small>
                  <span class="card-text text-muted">
                    <i class="fas fa-id-card-alt"></i>
                  </span>
                </footer>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 item school">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">De Haagse Hogeschool</h4>
                <p class="card-text">Integrale Veiligheidskunde</p>
                <footer>
                  <small class="card-text text-muted">Sep 2018 - Heden</small>
                  <span class="card-text text-muted">
                    <i class="fas fa-school"></i>
                  </span>
                </footer>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 item school">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">ONC Parkdreef</h4>
                <p class="card-text">Hoger algemeen voortgezet onderwijs</p>
                <footer>
                  <small class="card-text text-muted">2012 - 2017</small>
                  <span class="card-text text-muted">
                    <i class="fas fa-school"></i>
                  </span>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default IsotopeLayout
