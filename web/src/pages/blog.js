import React, { useRef } from "react"
import { TopOfPage } from "../components/site"

const Blog = () => {
    const blog = useRef(null)
    return (
        <main ref={blog}>
            <TopOfPage />
            <section className="mainWrap without_sidebar">
                <div className="container" role="main">
                    <div className="row content">
                        <div className="col-sm-12">
                            <div className="tab-content">
                                <div className="tab-pane fade in active blogContent" id="tabBlog">
                                    <article className="postLeft hrShadow post">
                                        <div className="post_info infoPost">
                                            Posted
                                            <a href="#" className="post_date">February 24, 2014</a>
                                            <span className="separator">|</span>
                                            by
                                            <a href="#" className="post_author">John Doe</a>
                                            <span className="separator">|</span>
                                            <span className="post_cats">
                                                in
                                                <a className="cat_link" href="#">Post Formats,</a>
                                                <a className="cat_link" href="#">Post formats fullwidth</a>
                                            </span>
                                        </div>
                                        <div className="sc_section  col-sm-6 sc_alignleft">
                                            <div className="sc_border sc_border_light inited">
                                                <div className="sc_zoom inited">
                                                    <img src="img/tablet_1.jpg" data-zoom-image="img/tablet_2.jpg" alt />
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className="post_title">
                                            <a href="features_shortcodes_zoom.html">Theme is easy to use with any type of displays</a>
                                        </h2>
                                        <div className="postImage">
                                            <p> </p>
                                            <div className="sc_title_image sc_title_left sc_size_medium">
                                                <img src="img/lens_icon_retina.png" alt />
                                            </div>
                                            <h3 className="sc_title sc_title_iconed">Retina Ready</h3>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div>
                                        <div className="postSharing inited">
                                            <ul>
                                                <li className="squareButton light ico">
                                                    <a className="fa-link" title="More" href="features_shortcodes_zoom.html">More</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-eye" title="Views - 308" href="features_shortcodes_zoom.html">308</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-comment" title="Comments - 1" href="features_shortcodes_zoom.html">1</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-star" title="Rating - 79.3" href="features_shortcodes_zoom.html">79.3</a>
                                                </li>
                                                <li className="squareButton light ico likeButton like" data-postid={109} data-likes={10} data-title-like="Like" data-title-dislike="Dislike">
                                                    <a className="fa-heart" title="Like - 10" href="#">
                                                        <span className="likePost">10</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                    <article className="postRight hrShadow post">
                                        <div className="post_info infoPost">
                                            Posted
                                            <a href="#" className="post_date">February 23, 2014</a>
                                            <span className="separator">|</span>
                                            by
                                            <a href="#" className="post_author">John Doe</a>
                                            <span className="separator">|</span>
                                            <span className="post_cats">
                                                in
                                                <a className="cat_link" href="#">Post Formats,</a>
                                                <a className="cat_link" href="#">Post formats fullwidth</a>
                                            </span>
                                        </div>
                                        <div className="sc_section  sc_alignright col-sm-6 margin_bottom_small">
                                            <div className="sc_video_player" data-width="100%" data-height={295} data-last-width={440} style={{ height: 269 }}>
                                                <div className="sc_video_player_title" />
                                                <div className="sc_video_frame sc_video_play_button inited" data-video="<iframe class=&quot;video_frame&quot; src=&quot;https://youtube.com/embed/636Dp8eHWnM?autoplay=1&quot; allowFullScreen=&quot;allowFullScreen&quot;></iframe>" style={{ opacity: 1 }}>
                                                    <img alt src="img/video/video_post-523x295.jpg" style={{ height: 248 }} />
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className="post_title">
                                            <a href="features_shortcodes_video.html">Video post example</a>
                                        </h2>
                                        <div className="postVideo">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <p>Integer et porttitor massa. Donec eu commodo massa. Nullam dignissim, magna et porttitor fermentum, est massa euismod odio, at pharetra ipsum mi eu felis. Aenean sit amet ante non augue egestas ultricies vel nec urna. Fusce posuere nulla tristique nibh convallis suscipit. Phasellus interdum justo dolor, eget imperdiet arcu ullamcorper nec. </p>
                                        </div>
                                        <div className="postSharing inited">
                                            <ul>
                                                <li className="squareButton light ico">
                                                    <a className="fa-link" title="More" href="features_shortcodes_video.html">More</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-eye" title="Views - 576" href="features_shortcodes_video.html">576</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-comment" title="Comments - 0" href="features_shortcodes_video.html">0</a>
                                                </li>
                                                <li className="squareButton light ico likeButton like" data-postid={556} data-likes={8} data-title-like="Like" data-title-dislike="Dislike">
                                                    <a className="fa-heart" title="Like - 8" href="#">
                                                        <span className="likePost">8</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                    <article className="postLeft hrShadow post">
                                        <div className="post_info infoPost">
                                            Posted
                                            <a href="#" className="post_date">February 22, 2014</a>
                                            <span className="separator">|</span>
                                            by
                                            <a href="#" className="post_author">John Doe</a>
                                            <span className="separator">|</span>
                                            <span className="post_cats">
                                                in
                                                <a className="cat_link" href="#">Post Formats,</a>
                                                <a className="cat_link" href="#">Post formats fullwidth</a>
                                            </span>
                                        </div>
                                        <div className="sc_section sc_alignleft col-sm-6">
                                            <figure className="sc_image  sc_image_shape_square">
                                                <img src="img/laura.jpg" alt />
                                            </figure>
                                            <div className="audio_container with_info margin_top_small">
                                                <span className="mejs-offscreen">Audio Player</span><div id="mep_0" className="mejs-container svg audio_controls mejs-audio" tabIndex={0} role="application" aria-label="Audio Player" style={{ width: '100%', height: 30 }}><div className="mejs-inner"><div className="mejs-mediaelement"><audio className="audio_controls" src="sounds/laura.mp3">
                                                    <source src="sounds/laura.mp3" type="audio/mpeg" />
                                                    Тег audio not supported.
                                                </audio></div><div className="mejs-layers"><div className="mejs-poster mejs-layer" style={{ display: 'none', width: '100%', height: 30 }} /></div><div className="mejs-controls"><div className="mejs-button mejs-playpause-button mejs-play"><button type="button" aria-controls="mep_0" title="Play" aria-label="Play" /></div><div className="mejs-time mejs-currenttime-container" role="timer" aria-live="off"><span className="mejs-currenttime">00:00</span></div><div className="mejs-time-rail" style={{ width: 264 }}><span className="mejs-time-total mejs-time-slider" aria-label="Time Slider" aria-valuemin={0} aria-valuemax="NaN" aria-valuenow={0} aria-valuetext="00:00" role="slider" tabIndex={0} style={{ width: 254 }}><span className="mejs-time-buffering" style={{ display: 'none' }} /><span className="mejs-time-loaded" style={{ width: 254 }} /><span className="mejs-time-current" style={{ width: 0 }} /><span className="mejs-time-handle" style={{ left: '-5px' }} /><span className="mejs-time-float"><span className="mejs-time-float-current">00:00</span><span className="mejs-time-float-corner" /></span></span></div><div className="mejs-time mejs-duration-container"><span className="mejs-duration">04:37</span></div><div className="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="mep_0" title="Mute Toggle" aria-label="Mute Toggle" /></div><a href="javascript:void(0);" className="mejs-horizontal-volume-slider mejs-mute" aria-label="volumeSlider" aria-valuemin={0} aria-valuemax={100} aria-valuenow={80} aria-valuetext="80%" role="slider" tabIndex={0}><span className="mejs-offscreen">Use Up/Down Arrow keys to increase or decrease volume.</span><div className="mejs-horizontal-volume-total" /><div className="mejs-horizontal-volume-current" style={{ width: 40 }} /><div className="mejs-horizontal-volume-handle" style={{ left: 27 }} /></a></div><div className="mejs-clear" /></div></div>
                                            </div>
                                        </div>
                                        <h2 className="post_title">
                                            <a href="features_shortcodes_audio.html">Audio post example with cover image</a>
                                        </h2>
                                        <div className="postAudio">
                                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.<br />
                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                                        </div>
                                        <div className="postSharing inited">
                                            <ul>
                                                <li className="squareButton light ico">
                                                    <a className="fa-link" title="More" href="features_shortcodes_audio.html">More</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-eye" title="Views - 766" href="features_shortcodes_audio.html">766</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-comment" title="Comments - 0" href="features_shortcodes_audio.html">0</a>
                                                </li>
                                                <li className="squareButton light ico likeButton like" data-postid={564} data-likes={6} data-title-like="Like" data-title-dislike="Dislike">
                                                    <a className="fa-heart" title="Like - 6" href="#">
                                                        <span className="likePost">6</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                    <article className="postRight hrShadow post">
                                        <div className="post_info infoPost">
                                            Posted
                                            <a href="#" className="post_date">February 21, 2014</a>
                                            <span className="separator">|</span>
                                            by
                                            <a href="#" className="post_author">John Doe</a>
                                            <span className="separator">|</span>
                                            <span className="post_cats">
                                                in
                                                <a className="cat_link" href="#">Post Formats,</a>
                                                <a className="cat_link" href="#">Post formats fullwidth</a>
                                            </span>
                                        </div>
                                        <div className="sc_section  col-sm-6 sc_alignright margin_bottom_small">
                                            <div className="sc_border sc_border_dark inited">
                                                <div id="swiper_container_2" className="sc_slider sc_slider_swiper sc_slider_controls sc_slider_pagination swiper-container2 swiper-container-horizontal" style={{ cursor: 'grab' }}>
                                                    <ul className="swiper-wrapper" style={{ transitionDuration: '0ms', transform: 'translate3d(-684px, 0px, 0px)' }}><li className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={2} style={{ width: 342 }}>
                                                        <img src="img/slider/portfolio_item-520x390.jpg" alt />
                                                    </li>
                                                        <li className="swiper-slide swiper-slide-prev" data-swiper-slide-index={0} style={{ width: 342 }}>
                                                            <img src="img/slider/9435123826_a4c3b35c08_o-520x390.jpg" alt />
                                                        </li>
                                                        <li className="swiper-slide swiper-slide-active" data-swiper-slide-index={1} style={{ width: 342 }}>
                                                            <img src="img/slider/masonry6-520x390.jpg" alt />
                                                        </li>
                                                        <li className="swiper-slide swiper-slide-next" data-swiper-slide-index={2} style={{ width: 342 }}>
                                                            <img src="img/slider/portfolio_item-520x390.jpg" alt />
                                                        </li>
                                                        <li className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={0} style={{ width: 342 }}>
                                                            <img src="img/slider/9435123826_a4c3b35c08_o-520x390.jpg" alt />
                                                        </li></ul>
                                                    <ul className="flex-direction-nav">
                                                        <li>
                                                            <a className="swiper-button-prev" href="#" />
                                                        </li>
                                                        <li>
                                                            <a className="swiper-button-next" href="#" />
                                                        </li>
                                                    </ul>
                                                    <div className="flex-control-nav">
                                                        <div className="swiper-pagination swiper-pagination-clickable"><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet swiper-pagination-bullet-active" /><span className="swiper-pagination-bullet" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className="post_title">
                                            <a href="features_shortcodes_slider.html">Theme is easily adaptable to any mobile device</a>
                                        </h2>
                                        <div className="postGallery">
                                            <p> </p>
                                            <div className="sc_title_image sc_title_left sc_size_medium">
                                                <img src="img/lens_icon_retina.png" alt />
                                            </div>
                                            <h3 className="sc_title sc_title_iconed">Tablet friendly</h3>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div>
                                        <div className="postSharing inited">
                                            <ul>
                                                <li className="squareButton light ico">
                                                    <a className="fa-link" title="More" href="features_shortcodes_slider.html">More</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-eye" title="Views - 106" href="features_shortcodes_slider.html">106</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-comment" title="Comments - 0" href="features_shortcodes_slider.html">0</a>
                                                </li>
                                                <li className="squareButton light ico likeButton like" data-postid={569} data-likes={1} data-title-like="Like" data-title-dislike="Dislike">
                                                    <a className="fa-heart" title="Like - 1" href="#">
                                                        <span className="likePost">1</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                    <article className="postDefault hrShadow post">
                                        <div className="post_info infoPost">
                                            Posted
                                            <a href="#" className="post_date">February 20, 2014</a>
                                            <span className="separator">|</span>
                                            by
                                            <a href="#" className="post_author">John Doe</a>
                                            <span className="separator">|</span>
                                            <span className="post_cats">
                                                in
                                                <a className="cat_link" href="#">Post Formats,</a>
                                                <a className="cat_link" href="#">Post formats fullwidth</a>
                                            </span>
                                        </div>
                                        <div className="postQuote">
                                            <blockquote cite="#" className="sc_quote">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <p className="sc_quote_title">
                                                    <a href="#">Lisa Kudrow</a>
                                                </p>
                                            </blockquote>
                                        </div>
                                        <div className="postSharing inited">
                                            <ul>
                                                <li className="squareButton light ico">
                                                    <a className="fa-link" title="More" href="#">More</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-eye" title="Views - 9" href="#">9</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-comment" title="Comments - 0" href="#">0</a>
                                                </li>
                                                <li className="squareButton light ico likeButton like" data-postid={582} data-likes={0} data-title-like="Like" data-title-dislike="Dislike">
                                                    <a className="fa-heart" title="Like - 0" href="#">
                                                        <span className="likePost">0</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                    <article className="postDefault hrShadow post">
                                        <div className="post_info infoPost">
                                            Posted
                                            <a href="#" className="post_date">February 19, 2014</a>
                                            <span className="separator">|</span>
                                            by
                                            <a href="#" className="post_author">John Doe</a>
                                            <span className="separator">|</span>
                                            <span className="post_cats">
                                                in
                                                <a className="cat_link" href="#">Post Formats,</a>
                                                <a className="cat_link" href="#">Post formats fullwidth</a>
                                            </span>
                                        </div>
                                        <div className="postLink">
                                            <p>
                                                <a href="#">http://themeforest.net/user/ThemeREX/portfolio</a>
                                            </p>
                                        </div>
                                        <div className="postSharing inited">
                                            <ul>
                                                <li className="squareButton light ico">
                                                    <a className="fa-link" title="More" href="#">More</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-eye" title="Views - 0" href="#">0</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-comment" title="Comments - 0" href="#">0</a>
                                                </li>
                                                <li className="squareButton light ico likeButton like" data-postid={584} data-likes={1} data-title-like="Like" data-title-dislike="Dislike">
                                                    <a className="fa-heart" title="Like - 1" href="#">
                                                        <span className="likePost">1</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                    <article className="postDefault hrShadow post">
                                        <div className="post_info infoPost">
                                            Posted
                                            <a href="#" className="post_date">February 18, 2014</a>
                                            <span className="separator">|</span>
                                            by
                                            <a href="#" className="post_author">John Doe</a>
                                            <span className="separator">|</span>
                                            <span className="post_cats">
                                                in
                                                <a className="cat_link" href="#">Post Formats,</a>
                                                <a className="cat_link" href="#">Post formats fullwidth</a>
                                            </span>
                                        </div>
                                        <div className="postStatus">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                        <div className="postSharing inited">
                                            <ul>
                                                <li className="squareButton light ico">
                                                    <a className="fa-link" title="More" href="#">More</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-eye" title="Views - 6" href="#">6</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-comment" title="Comments - 0" href="#">0</a>
                                                </li>
                                                <li className="squareButton light ico likeButton like" data-postid={586} data-likes={1} data-title-like="Like" data-title-dislike="Dislike">
                                                    <a className="fa-heart" title="Like - 1" href="#">
                                                        <span className="likePost">1</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                    <article className="postDefault hrShadow post">
                                        <div className="post_info infoPost">
                                            Posted
                                            <a href="#" className="post_date">February 17, 2014</a>
                                            <span className="separator">|</span>
                                            by
                                            <a href="#" className="post_author">John Doe</a>
                                            <span className="separator">|</span>
                                            <span className="post_cats">
                                                in
                                                <a className="cat_link" href="#">Post Formats,</a>
                                                <a className="cat_link" href="#">Post formats fullwidth</a>
                                            </span>
                                        </div>
                                        <div className="postAside">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                        <div className="postSharing inited">
                                            <ul>
                                                <li className="squareButton light ico">
                                                    <a className="fa-link" title="More" href="#">More</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-eye" title="Views - 5" href="#">5</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-comment" title="Comments - 0" href="#">0</a>
                                                </li>
                                                <li className="squareButton light ico likeButton like" data-postid={588} data-likes={0} data-title-like="Like" data-title-dislike="Dislike">
                                                    <a className="fa-heart" title="Like - 0" href="#">
                                                        <span className="likePost">0</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                    <article className="postDefault hrShadow post">
                                        <div className="post_info infoPost">
                                            Posted
                                            <a href="#" className="post_date">February 16, 2014</a>
                                            <span className="separator">|</span>
                                            by
                                            <a href="#" className="post_author">John Doe</a>
                                            <span className="separator">|</span>
                                            <span className="post_cats">
                                                in
                                                <a className="cat_link" href="#">Post Formats,</a>
                                                <a className="cat_link" href="#">Post formats fullwidth</a>
                                            </span>
                                        </div>
                                        <div className="postChat">
                                            <div className="sc_chat">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <p className="sc_quote_title">
                                                    <a href="#">Mike</a>
                                                </p>
                                            </div>
                                            <div className="sc_chat">
                                                <p>Vivamus nec quam nec elit porta dictum. Praesent dignissim eget ligula vel posuere. Proin sed mauris faucibus, euismod erat a, placerat odio.</p>
                                                <p className="sc_quote_title">
                                                    <a href="#">Lisa</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="postSharing inited">
                                            <ul>
                                                <li className="squareButton light ico">
                                                    <a className="fa-link" title="More" href="#">More</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-eye" title="Views - 3" href="#">3</a>
                                                </li>
                                                <li className="squareButton light ico">
                                                    <a className="fa-comment" title="Comments - 0" href="#">0</a>
                                                </li>
                                                <li className="squareButton light ico likeButton like" data-postid={593} data-likes={1} data-title-like="Like" data-title-dislike="Dislike">
                                                    <a className="fa-heart" title="Like - 1" href="#">
                                                        <span className="likePost">1</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>
                                <div className="tab-pane fade widgetTop widget widget_calendar" id="calendar">
                                    <div>
                                        <table className="calendar">
                                            <thead>
                                                <tr>
                                                    <th className="prevMonth">
                                                        <div className="left roundButton">
                                                            <a href="#" data-type="post" data-year={2014} data-month={5} title="View posts for May 2014" />
                                                        </div>
                                                    </th>
                                                    <th className="curMonth" colSpan={5}>
                                                        <a href="archives.html" title="View posts for July 2015">July <span>2015</span></a>
                                                    </th>
                                                    <th className="nextMonth">
                                                        <div className="right roundButton">
                                                            <a href="#" data-type="post" data-year={2014} data-month={5} title="View posts for May 2014" />
                                                        </div>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th scope="col" title="Monday">M</th>
                                                    <th scope="col" title="Tuesday">T</th>
                                                    <th scope="col" title="Wednesday">W</th>
                                                    <th scope="col" title="Thursday">T</th>
                                                    <th scope="col" title="Friday">F</th>
                                                    <th scope="col" title="Saturday">S</th>
                                                    <th scope="col" title="Sunday">S</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colSpan={2} className="pad">&nbsp;</td>
                                                    <td>1</td>
                                                    <td>2</td>
                                                    <td>3</td>
                                                    <td>4</td>
                                                    <td>5</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>7</td>
                                                    <td>8</td>
                                                    <td>9</td>
                                                    <td>10</td>
                                                    <td>11</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr>
                                                    <td>13</td>
                                                    <td>14</td>
                                                    <td>15</td>
                                                    <td>16</td>
                                                    <td>17</td>
                                                    <td>18</td>
                                                    <td>19</td>
                                                </tr>
                                                <tr>
                                                    <td>20</td>
                                                    <td>21</td>
                                                    <td>22</td>
                                                    <td>23</td>
                                                    <td>24</td>
                                                    <td>25</td>
                                                    <td>26</td>
                                                </tr>
                                                <tr>
                                                    <td>27</td>
                                                    <td>28</td>
                                                    <td>29</td>
                                                    <td className="today">30</td>
                                                    <td>31</td>
                                                    <td className="pad" colSpan={2}>&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade widgetTop widget widget_archive" id="archives">
                                    <ul>
                                        <li>
                                            <a href="archives.html">
                                                May
                                                <span>2014</span>
                                                <span /></a>&nbsp;(7)
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                April
                                                <span>2014</span>
                                                <span /></a>
                                            &nbsp;(2)
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                March
                                                <span>2014</span>
                                                <span /></a>
                                            &nbsp;(37)
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                February
                                                <span>2014</span>
                                                <span /></a>
                                            &nbsp;(58)
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                January
                                                <span>2014</span>
                                                <span /></a>
                                            &nbsp;(10)
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <a href="archives.html">
                                                December
                                                <span>2013</span>
                                                <span /></a>
                                            &nbsp;(4)
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                November
                                                <span>2013</span>
                                                <span /></a>
                                            &nbsp;(3)
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                October
                                                <span>2013</span>
                                                <span /></a>
                                            &nbsp;(3)
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                September
                                                <span>2013</span>
                                                <span /></a>
                                            &nbsp;(6)
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                August
                                                <span>2013</span>
                                                <span /></a>
                                            &nbsp;(2)
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade widgetTop widget widget_flickr" id="flickr-widget">
                                    <div className="flickr_images">
                                        <div className="flickr_badge_image">
                                            <a href="http://www.flickr.com">
                                                <img src="img/flickr/10323784405_44d211ce56_m.jpg" alt="A photo on Flickr" title="Doing &quot;Responsive&quot; on Envato.com" />
                                            </a>
                                        </div>
                                        <div className="flickr_badge_image">
                                            <a href="http://www.flickr.com">
                                                <img src="img/flickr/4971973996_4bff1a4df5_m.jpg" alt="A photo on Flickr" title="The Envato Remote Team" />
                                            </a>
                                        </div>
                                        <div className="flickr_badge_image">
                                            <a href="http://www.flickr.com">
                                                <img src="img/flickr/15485436268_846ccca178_m.jpg" alt="A photo on Flickr" title="Halloween 2014 at Envato in Melbourne" />
                                            </a>
                                        </div>
                                        <div className="flickr_badge_image">
                                            <a href="http://www.flickr.com">
                                                <img src="img/flickr/13090549273_ee5c732ce1_m.jpg" alt="A photo on Flickr" title="Around the Envato Office - Highfive!" />
                                            </a>
                                        </div>
                                        <div className="flickr_badge_image">
                                            <a href="http://www.flickr.com">
                                                <img src="img/flickr/7694603486_1c63eb5824_m.jpg" alt="A photo on Flickr" title="New York Meetup 2012" />
                                            </a>
                                        </div>
                                        <div className="flickr_badge_image">
                                            <a href="http://www.flickr.com">
                                                <img src="img/flickr/8953389069_9dd71d2d32_m.jpg" alt="A photo on Flickr" title="The garden!" />
                                            </a>
                                        </div>
                                        <div className="flickr_badge_image">
                                            <a href="http://www.flickr.com">
                                                <img src="img/flickr/11299036283_2574e60edc_m.jpg" alt="A photo on Flickr" title="Envato Adventures" />
                                            </a>
                                        </div>
                                        <div className="flickr_badge_image">
                                            <a href="http://www.flickr.com">
                                                <img src="img/flickr/5908024086_0550dfbfab_m.jpg" alt="A photo on Flickr" title="South View from Office (Night)" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade widgetTop widget widget_recent_posts" id="recent-posts-widget">
                                    <div className="col-sm-6 margin_bottom_small">
                                        <article className="post_item with_thumb">
                                            <div className="post_thumb">
                                                <img alt="Morbi eget rutrum" src="img/51-75x75.jpg" />
                                            </div>
                                            <h5 className="post_title">
                                                <a href="images_style_3.html">Morbi eget rutrum</a>
                                            </h5>
                                            <div className="post_info">
                                                <span className="post_date">May 7, 2014</span>
                                                <span className="post_author">
                                                    by
                                                    <a href="#">John Doe</a>
                                                </span>
                                                <span className="post_comments">
                                                    <a href="images_style_3.html">
                                                        <span className="comments_icon fa-eye" />
                                                        <span className="post_comments_number">126</span>
                                                    </a>
                                                </span>
                                            </div>
                                        </article>
                                        <article className="post_item with_thumb">
                                            <div className="post_thumb">
                                                <img alt="Duis tempus ac risus id fringilla" src="img/1-75x75.jpg" />
                                            </div>
                                            <h5 className="post_title">
                                                <a href="images_style_1.html">Duis tempus ac risus id fringilla</a>
                                            </h5>
                                            <div className="post_info">
                                                <span className="post_date">May 6, 2014</span>
                                                <span className="post_author">
                                                    by
                                                    <a href="#">John Doe</a>
                                                </span>
                                                <span className="post_comments">
                                                    <a href="images_style_1.html">
                                                        <span className="comments_icon fa-eye" />
                                                        <span className="post_comments_number">64</span>
                                                    </a>
                                                </span>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-sm-6">
                                        <article className="post_item with_thumb">
                                            <div className="post_thumb">
                                                <img alt="Aenean at quam pharetra, aliquet odio at" src="img/2-75x75.jpg" />
                                            </div>
                                            <h5 className="post_title">
                                                <a href="images_style_2.html">Aenean at quam pharetra, aliquet odio at</a>
                                            </h5>
                                            <div className="post_info">
                                                <span className="post_date">May 5, 2014</span>
                                                <span className="post_author">
                                                    by
                                                    <a href="#">John Doe</a>
                                                </span>
                                                <span className="post_comments">
                                                    <a href="images_style_2.html">
                                                        <span className="comments_icon fa-eye" />
                                                        <span className="post_comments_number">25</span>
                                                    </a>
                                                </span>
                                            </div>
                                        </article>
                                        <article className="post_item with_thumb">
                                            <div className="post_thumb">
                                                <img alt="Cras pulvinar sodales placerat" src="img/3-75x75.jpg" />
                                            </div>
                                            <h5 className="post_title">
                                                <a href="images_style_3.html">Cras pulvinar sodales placerat</a>
                                            </h5>
                                            <div className="post_info">
                                                <span className="post_date">May 4, 2014</span>
                                                <span className="post_author">
                                                    by
                                                    <a href="#">John Doe</a>
                                                </span>
                                                <span className="post_comments">
                                                    <a href="images_style_3.html">
                                                        <span className="comments_icon fa-eye" />
                                                        <span className="post_comments_number">40</span>
                                                    </a>
                                                </span>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="tab-pane fade widgetTop widget widget_meta" id="meta">
                                    <ul>
                                        <li>
                                            <a href="#">Log in</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Entries
                                                <abbr title="Really Simple Syndication">RSS</abbr>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                Comments
                                                <abbr title="Really Simple Syndication">RSS</abbr>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://wordpress.org/" title="Powered by WordPress, state-of-the-art semantic personal publishing platform.">WordPress.org</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Blog