import React from "react"

const Page404 = () => {
    return (
        <main>
            <section className="mainWrap with_sidebar sideBarLeft">
                <div className="container" role="main">
                    <div className="row content">
                        <div className="col-sm-12">
                            <div className="page404">
                                <div className="titleError">404</div>
                                <div className="h2">The requested page cannot be found</div>
                                <p>
                                    Go back, or return to
                                    <a href="index.html">Kindergarten</a>
                                    home page to choose a new page. <br />Please report any broken links to our team.
                                </p>
                                <div className="inputSubmitAnimation radCircle">
                                    <form className="search_form" action="#" method="get">
                                        <input type="text" className="sInput" name="s" defaultValue placeholder="What are you searching for?" />
                                    </form>
                                    <a href="#" className="searchIcon aIco search" title="Search" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Page404