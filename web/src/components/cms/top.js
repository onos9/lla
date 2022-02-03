import { Link } from '@mui/material';
import React from 'react';

const Top = () => {
    return (
        <section id="topOfPage" className="topTabsWrap color_section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="speedBar">
                            <Link className="home" to="index.html">Home</Link>
                            <span className="breadcrumbs_delimiter"> / </span>
                            <Link className="all" to="#">All Posts</Link>
                            <span className="breadcrumbs_delimiter"> / </span>
                            <span className="current">Post formats fullwidth</span>
                        </div>
                        <h3 className="pageTitle h3">Post formats fullwidth</h3>
                    </div>
                </div>
                <div className="tabsButton">
                    <ul className="nav-tabs sc_tabs_titles" role="tablist">
                        <li className="tab_names state-default active">
                            <Link className="theme_button" to="#tabBlog" role="tab" data-toggle="tab">
                                <span>Images</span>
                            </Link>
                        </li>
                        <li className="tab_names state-default">
                            <Link className="theme_button" to="#calendar" role="tab" data-toggle="tab">
                                <span>Videos</span>
                            </Link>
                        </li>
                        <li className="tab_names state-default">
                            <Link to="#archives" role="tab" data-toggle="tab">
                                <span>Audios</span>
                            </Link>
                        </li>
                        <li className="tab_names state-default">
                            <Link to="#flickr-widget" role="tab" data-toggle="tab">
                                <span>Documents</span>
                            </Link>
                        </li>
                        <li className="tab_names state-default">
                            <Link to="#recent-posts-widget" role="tab" data-toggle="tab">
                                <span>Animations</span>
                            </Link>
                        </li>
                        <li className="tab_names state-default">
                            <Link to="#meta" role="tab" data-toggle="tab">
                                <span>Others</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Top;