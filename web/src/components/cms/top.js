import React from 'react';

const Top = () => {
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
                            <span className="current">Post formats fullwidth</span>
                        </div>
                        <h3 className="pageTitle h3">Post formats fullwidth</h3>
                    </div>
                </div>
                <div className="tabsButton">
                    <ul className="nav-tabs sc_tabs_titles" role="tablist">
                        <li className="tab_names state-default active">
                            <a className="theme_button" href="#tabBlog" role="tab" data-toggle="tab">
                                <span>Blog</span>
                            </a>
                        </li>
                        <li className="tab_names state-default">
                            <a className="theme_button" href="#calendar" role="tab" data-toggle="tab">
                                <span>Calendar</span>
                            </a>
                        </li>
                        <li className="tab_names state-default">
                            <a href="#archives" role="tab" data-toggle="tab">
                                <span>Archives</span>
                            </a>
                        </li>
                        <li className="tab_names state-default">
                            <a href="#flickr-widget" role="tab" data-toggle="tab">
                                <span>Flickr Photos</span>
                            </a>
                        </li>
                        <li className="tab_names state-default">
                            <a href="#recent-posts-widget" role="tab" data-toggle="tab">
                                <span>Recent Posts</span>
                            </a>
                        </li>
                        <li className="tab_names state-default">
                            <a href="#meta" role="tab" data-toggle="tab">
                                <span>Meta</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Top;