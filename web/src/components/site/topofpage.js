import React from "react"

const TopOfPage = () => {
    return (
        <section id="topOfPage" className="topTabsWrap color_section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="speedBar">
                            <a className="home" href="index.html">Home</a>
                            <span className="breadcrumbs_delimiter"> / </span>
                            <a className="all" href="#">All Posts</a>
                            <span className="breadcrumbs_delimiter"> / </span>
                            <span className="current">Under construction</span>
                        </div>
                        <h3 className="pageTitle h3">Under construction</h3>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default TopOfPage