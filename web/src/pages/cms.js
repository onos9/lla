import React from "react"
import Image from "../components/image"
import Pagination from "../components/pagination"
import TopOfPage from "../components/topofpage"

const imagePool = [
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
]

const CMS = () => {
  return (
    <main>
      <TopOfPage />
      <section className="portfolio_grid_columns">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div id="style_portfolio_grid" className="portfolioWrap">
                <div className="isotopeFiltr"><ul><li className="squareButton active"><a href="#" data-filter="*">All</a></li><li className="squareButton"><a href="#" data-filter=".flt_65">clear</a></li><li className="squareButton"><a href="#" data-filter=".flt_36">Design</a></li><li className="squareButton"><a href="#" data-filter=".flt_66">exclusive</a></li><li className="squareButton"><a href="#" data-filter=".flt_7">portfolio</a></li><li className="squareButton"><a href="#" data-filter=".flt_63">portfolio hover</a></li><li className="squareButton"><a href="#" data-filter=".flt_64">print</a></li></ul></div>
                <section className="portfolio isotope folio4col inited" data-columns={4} style={{ position: 'relative', height: 980 }}>
                {imagePool.map((url,idx) => <Image key={idx} url={url} />)} 
                </section>
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CMS
