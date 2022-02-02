import React, { useState, useEffect, useRef } from 'react'
import { Slider, UserHeader } from "../components/site"

const Home = () => {

    const homeWrapper = useRef(null)
    const _isMounted = useRef(false);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    useEffect(async () => {

        if (_isMounted.current) return
        setAppState({ loading: true });

        const endpoint = `http://localhost:8080/images`;
        let repos = await (await fetch(endpoint)).json()

        if (_isMounted.current) return
        setAppState({ loading: false, repos: repos });

        //console.log(repos)

        if (repos === null) {
            let images = homeWrapper.current.getElementsByTagName("img")
            let src = Array.from(images).map(img => img.src)
            console.log({ home: src })
        }

    }, [])

    return (
        <main ref={homeWrapper}>
            <Slider />
            <UserHeader />
            <section className="mainWrap with_sidebar sideBarRight">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div id="multi_slider" className="sc_slider_pagination_area sc_slider_pagination_full">
                                        <div id="multi_slider_left" className="sc_slider sc_slider_swiper sc_slider_controls sc_slider_nopagination swiper-container slider-left swiper-container-horizontal" style={{ cursor: 'grab' }}>
                                            <div className="slides swiper-wrapper" style={{ transitionDuration: '0ms', transform: 'translate3d(-2000px, 0px, 0px)' }}><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={0} style={{ width: 500 }}>
                                                <img src="img/slider/51-550x310.jpg" alt='true' />
                                                <a href="#" title="Morbi eget rutrum" />
                                                <div className="sc_slider_info content-slide">
                                                    <a href="#" title="Morbi eget rutrum" />
                                                    <div className="sc_slider_category">
                                                        <a href="#" title="Morbi eget rutrum" />
                                                        <a href="#">News demo</a>
                                                    </div>
                                                    <div className="sc_slider_reviews reviews_summary blog_reviews after_category">
                                                        <div className="criteria_summary criteria_row">
                                                            <div className="ratingItem" data-mark="84.5">
                                                                <div className="starDefault">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                                <div className="starHover">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h2 className="sc_slider_subtitle">
                                                        <a href="#">Morbi eget rutrum</a></h2>
                                                </div>
                                            </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={1} style={{ width: 500 }}>
                                                    <img src="img/slider/41-550x310.jpg" alt='true'/>
                                                    <a href="#" title="Nulla ut dictum est" />
                                                    <div className="sc_slider_info content-slide">
                                                        <a href="#" title="Nulla ut dictum est" />
                                                        <div className="sc_slider_category">
                                                            <a href="#" title="Nulla ut dictum est" />
                                                            <a href="#">News demo</a>
                                                        </div>
                                                        <div className="sc_slider_reviews reviews_summary blog_reviews after_category">
                                                            <div className="criteria_summary criteria_row">
                                                                <div className="ratingItem" data-mark="87.8">
                                                                    <div className="starDefault">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                    <div className="starHover">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h2 className="sc_slider_subtitle">
                                                            <a href="#">Nulla ut dictum est</a></h2>
                                                    </div>
                                                </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={2} style={{ width: 500 }}>
                                                    <img src="img/slider/4-550x310.jpg" alt='true'/>
                                                    <a href="#" title="Phasellus pulvinar" />
                                                    <div className="sc_slider_info content-slide">
                                                        <a href="#" title="Phasellus pulvinar" />
                                                        <div className="sc_slider_category">
                                                            <a href="#" title="Phasellus pulvinar" />
                                                            <a href="#">News demo</a>
                                                        </div>
                                                        <div className="sc_slider_reviews reviews_summary blog_reviews after_category">
                                                            <div className="criteria_summary criteria_row">
                                                                <div className="ratingItem" data-mark="79.3">
                                                                    <div className="starDefault">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                    <div className="starHover">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h2 className="sc_slider_subtitle">
                                                            <a href="#">Phasellus pulvinar</a></h2>
                                                    </div>
                                                </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index={3} style={{ width: 500 }}>
                                                    <img src="img/slider/3-550x310.jpg" alt='true'/>
                                                    <a href="#" title="Cras pulvinar sodales" />
                                                    <div className="sc_slider_info content-slide">
                                                        <a href="#" title="Cras pulvinar sodales" />
                                                        <div className="sc_slider_category">
                                                            <a href="#" title="Cras pulvinar sodales" />
                                                            <a href="#">News demo</a>
                                                        </div>
                                                        <div className="sc_slider_reviews reviews_summary blog_reviews after_category">
                                                            <div className="criteria_summary criteria_row">
                                                                <div className="ratingItem" data-mark="78.8">
                                                                    <div className="starDefault">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                    <div className="starHover">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h2 className="sc_slider_subtitle">
                                                            <a href="#">Cras pulvinar sodales</a></h2>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide swiper-slide-active" data-swiper-slide-index={0} style={{ width: 500 }}>
                                                    <img src="img/slider/51-550x310.jpg" alt='true'/>
                                                    <a href="#" title="Morbi eget rutrum" />
                                                    <div className="sc_slider_info content-slide">
                                                        <a href="#" title="Morbi eget rutrum" />
                                                        <div className="sc_slider_category">
                                                            <a href="#" title="Morbi eget rutrum" />
                                                            <a href="#">News demo</a>
                                                        </div>
                                                        <div className="sc_slider_reviews reviews_summary blog_reviews after_category">
                                                            <div className="criteria_summary criteria_row">
                                                                <div className="ratingItem" data-mark="84.5">
                                                                    <div className="starDefault">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                    <div className="starHover">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h2 className="sc_slider_subtitle">
                                                            <a href="#">Morbi eget rutrum</a></h2>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide swiper-slide-next" data-swiper-slide-index={1} style={{ width: 500 }}>
                                                    <img src="img/slider/41-550x310.jpg" alt='true'/>
                                                    <a href="#" title="Nulla ut dictum est" />
                                                    <div className="sc_slider_info content-slide">
                                                        <a href="#" title="Nulla ut dictum est" />
                                                        <div className="sc_slider_category">
                                                            <a href="#" title="Nulla ut dictum est" />
                                                            <a href="#">News demo</a>
                                                        </div>
                                                        <div className="sc_slider_reviews reviews_summary blog_reviews after_category">
                                                            <div className="criteria_summary criteria_row">
                                                                <div className="ratingItem" data-mark="87.8">
                                                                    <div className="starDefault">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                    <div className="starHover">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h2 className="sc_slider_subtitle">
                                                            <a href="#">Nulla ut dictum est</a></h2>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide" data-swiper-slide-index={2} style={{ width: 500 }}>
                                                    <img src="img/slider/4-550x310.jpg" alt='true'/>
                                                    <a href="#" title="Phasellus pulvinar" />
                                                    <div className="sc_slider_info content-slide">
                                                        <a href="#" title="Phasellus pulvinar" />
                                                        <div className="sc_slider_category">
                                                            <a href="#" title="Phasellus pulvinar" />
                                                            <a href="#">News demo</a>
                                                        </div>
                                                        <div className="sc_slider_reviews reviews_summary blog_reviews after_category">
                                                            <div className="criteria_summary criteria_row">
                                                                <div className="ratingItem" data-mark="79.3">
                                                                    <div className="starDefault">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                    <div className="starHover">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h2 className="sc_slider_subtitle">
                                                            <a href="#">Phasellus pulvinar</a></h2>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide" data-swiper-slide-index={3} style={{ width: 500 }}>
                                                    <img src="img/slider/3-550x310.jpg" alt='true'/>
                                                    <a href="#" title="Cras pulvinar sodales" />
                                                    <div className="sc_slider_info content-slide">
                                                        <a href="#" title="Cras pulvinar sodales" />
                                                        <div className="sc_slider_category">
                                                            <a href="#" title="Cras pulvinar sodales" />
                                                            <a href="#">News demo</a>
                                                        </div>
                                                        <div className="sc_slider_reviews reviews_summary blog_reviews after_category">
                                                            <div className="criteria_summary criteria_row">
                                                                <div className="ratingItem" data-mark="78.8">
                                                                    <div className="starDefault">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                    <div className="starHover">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h2 className="sc_slider_subtitle">
                                                            <a href="#">Cras pulvinar sodales</a></h2>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={0} style={{ width: 500 }}>
                                                    <img src="img/slider/51-550x310.jpg" alt='true'/>
                                                    <a href="#" title="Morbi eget rutrum" />
                                                    <div className="sc_slider_info content-slide">
                                                        <a href="#" title="Morbi eget rutrum" />
                                                        <div className="sc_slider_category">
                                                            <a href="#" title="Morbi eget rutrum" />
                                                            <a href="#">News demo</a>
                                                        </div>
                                                        <div className="sc_slider_reviews reviews_summary blog_reviews after_category">
                                                            <div className="criteria_summary criteria_row">
                                                                <div className="ratingItem" data-mark="84.5">
                                                                    <div className="starDefault">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                    <div className="starHover">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h2 className="sc_slider_subtitle">
                                                            <a href="#">Morbi eget rutrum</a></h2>
                                                    </div>
                                                </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={1} style={{ width: 500 }}>
                                                    <img src="img/slider/41-550x310.jpg" alt='true'/>
                                                    <a href="#" title="Nulla ut dictum est" />
                                                    <div className="sc_slider_info content-slide">
                                                        <a href="#" title="Nulla ut dictum est" />
                                                        <div className="sc_slider_category">
                                                            <a href="#" title="Nulla ut dictum est" />
                                                            <a href="#">News demo</a>
                                                        </div>
                                                        <div className="sc_slider_reviews reviews_summary blog_reviews after_category">
                                                            <div className="criteria_summary criteria_row">
                                                                <div className="ratingItem" data-mark="87.8">
                                                                    <div className="starDefault">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                    <div className="starHover">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h2 className="sc_slider_subtitle">
                                                            <a href="#">Nulla ut dictum est</a></h2>
                                                    </div>
                                                </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={2} style={{ width: 500 }}>
                                                    <img src="img/slider/4-550x310.jpg" alt='true'/>
                                                    <a href="#" title="Phasellus pulvinar" />
                                                    <div className="sc_slider_info content-slide">
                                                        <a href="#" title="Phasellus pulvinar" />
                                                        <div className="sc_slider_category">
                                                            <a href="#" title="Phasellus pulvinar" />
                                                            <a href="#">News demo</a>
                                                        </div>
                                                        <div className="sc_slider_reviews reviews_summary blog_reviews after_category">
                                                            <div className="criteria_summary criteria_row">
                                                                <div className="ratingItem" data-mark="79.3">
                                                                    <div className="starDefault">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                    <div className="starHover">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h2 className="sc_slider_subtitle">
                                                            <a href="#">Phasellus pulvinar</a></h2>
                                                    </div>
                                                </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={3} style={{ width: 500 }}>
                                                    <img src="img/slider/3-550x310.jpg" alt='true'/>
                                                    <a href="#" title="Cras pulvinar sodales" />
                                                    <div className="sc_slider_info content-slide">
                                                        <a href="#" title="Cras pulvinar sodales" />
                                                        <div className="sc_slider_category">
                                                            <a href="#" title="Cras pulvinar sodales" />
                                                            <a href="#">News demo</a>
                                                        </div>
                                                        <div className="sc_slider_reviews reviews_summary blog_reviews after_category">
                                                            <div className="criteria_summary criteria_row">
                                                                <div className="ratingItem" data-mark="78.8">
                                                                    <div className="starDefault">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                    <div className="starHover">
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                        <span className="starReview" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h2 className="sc_slider_subtitle">
                                                            <a href="#">Cras pulvinar sodales</a></h2>
                                                    </div>
                                                </div></div>
                                            <ul className="flex-direction-nav">
                                                <li>
                                                    <a className="flex-prev" href="#" />
                                                </li>
                                                <li>
                                                    <a className="flex-next" href="#" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex-control-nav manual">
                                            <div id="multi_slider_right" className="sc_scroll sc_scroll_vertical swiper-container gallery-thumbs scroll-container slider-right swiper-container-vertical" style={{ cursor: 'grab' }}>
                                                <div className="sc_scroll_wrapper swiper-wrapper" style={{ transitionDuration: '0ms', transform: 'translate3d(0px, -310px, 0px)' }}><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={0} style={{ height: '103.333px' }}>
                                                    <div className="slide_pager">
                                                        <div className="slide_date">07.05.14</div>
                                                        <div className="slide_info">
                                                            <h4 className="slide_title">Morbi eget rutrum</h4>
                                                            <div className="slide_tags">
                                                                <span className="slide_tag">news</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={1} style={{ height: '103.333px' }}>
                                                        <div className="slide_pager">
                                                            <div className="slide_date">28.04.14</div>
                                                            <div className="slide_info">
                                                                <h4 className="slide_title">Nulla ut dictum est</h4>
                                                                <div className="slide_tags">
                                                                    <span className="slide_tag">news</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={2} style={{ height: '103.333px' }}>
                                                        <div className="slide_pager">
                                                            <div className="slide_date">21.04.14</div>
                                                            <div className="slide_info">
                                                                <h4 className="slide_title">Phasellus pulvinar</h4>
                                                                <div className="slide_tags">
                                                                    <span className="slide_tag">news</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index={3} style={{ height: '103.333px' }}>
                                                        <div className="slide_pager">
                                                            <div className="slide_date">15.03.14</div>
                                                            <div className="slide_info">
                                                                <h4 className="slide_title">Cras pulvinar sodales</h4>
                                                                <div className="slide_tags">
                                                                    <span className="slide_tag">news</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide swiper-slide-active" data-swiper-slide-index={0} style={{ height: '103.333px' }}>
                                                        <div className="slide_pager">
                                                            <div className="slide_date">07.05.14</div>
                                                            <div className="slide_info">
                                                                <h4 className="slide_title">Morbi eget rutrum</h4>
                                                                <div className="slide_tags">
                                                                    <span className="slide_tag">news</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide swiper-slide-next" data-swiper-slide-index={1} style={{ height: '103.333px' }}>
                                                        <div className="slide_pager">
                                                            <div className="slide_date">28.04.14</div>
                                                            <div className="slide_info">
                                                                <h4 className="slide_title">Nulla ut dictum est</h4>
                                                                <div className="slide_tags">
                                                                    <span className="slide_tag">news</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide" data-swiper-slide-index={2} style={{ height: '103.333px' }}>
                                                        <div className="slide_pager">
                                                            <div className="slide_date">21.04.14</div>
                                                            <div className="slide_info">
                                                                <h4 className="slide_title">Phasellus pulvinar</h4>
                                                                <div className="slide_tags">
                                                                    <span className="slide_tag">news</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide" data-swiper-slide-index={3} style={{ height: '103.333px' }}>
                                                        <div className="slide_pager">
                                                            <div className="slide_date">15.03.14</div>
                                                            <div className="slide_info">
                                                                <h4 className="slide_title">Cras pulvinar sodales</h4>
                                                                <div className="slide_tags">
                                                                    <span className="slide_tag">news</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={0} style={{ height: '103.333px' }}>
                                                        <div className="slide_pager">
                                                            <div className="slide_date">07.05.14</div>
                                                            <div className="slide_info">
                                                                <h4 className="slide_title">Morbi eget rutrum</h4>
                                                                <div className="slide_tags">
                                                                    <span className="slide_tag">news</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={1} style={{ height: '103.333px' }}>
                                                        <div className="slide_pager">
                                                            <div className="slide_date">28.04.14</div>
                                                            <div className="slide_info">
                                                                <h4 className="slide_title">Nulla ut dictum est</h4>
                                                                <div className="slide_tags">
                                                                    <span className="slide_tag">news</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={2} style={{ height: '103.333px' }}>
                                                        <div className="slide_pager">
                                                            <div className="slide_date">21.04.14</div>
                                                            <div className="slide_info">
                                                                <h4 className="slide_title">Phasellus pulvinar</h4>
                                                                <div className="slide_tags">
                                                                    <span className="slide_tag">news</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={3} style={{ height: '103.333px' }}>
                                                        <div className="slide_pager">
                                                            <div className="slide_date">15.03.14</div>
                                                            <div className="slide_info">
                                                                <h4 className="slide_title">Cras pulvinar sodales</h4>
                                                                <div className="slide_tags">
                                                                    <span className="slide_tag">news</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div></div>
                                                <div className="sc_scroll_bar1 sc_scroll_bar_vertical" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc_line sc_line_style_shadow margin_top_big" />
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="sc_tabs sc_tabs_style_2 inited ui-tabs ui-widget ui-widget-content ui-corner-all" data-active={0}>
                                        <ul className="sc_tabs_titles ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">
                                            <li className="tab_names ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab" tabIndex={0} aria-controls="tab5_popular" aria-labelledby="tab4_tab" aria-selected="true" aria-expanded="true">
                                                <a href="#tab5_popular" className="theme_button ui-tabs-anchor" id="tab4_tab" role="presentation" tabIndex={-1}>POPULAR</a>
                                            </li>
                                            <li className="tab_names ui-state-default ui-corner-top" role="tab" tabIndex={-1} aria-controls="tab5_recent" aria-labelledby="tab5_tab" aria-selected="false" aria-expanded="false">
                                                <a href="#tab5_recent" className="theme_button ui-tabs-anchor" id="tab5_tab" role="presentation" tabIndex={-1}>RECENT</a>
                                            </li>
                                            <li className="tab_names ui-state-default ui-corner-top" role="tab" tabIndex={-1} aria-controls="tab5_commented" aria-labelledby="tab6_tab" aria-selected="false" aria-expanded="false">
                                                <a href="#tab5_commented" className="theme_button ui-tabs-anchor" id="tab6_tab" role="presentation" tabIndex={-1}>COMMENTED</a>
                                            </li>
                                        </ul>
                                        <div id="tab5_popular" className="sc_tabs_content ui-tabs-panel ui-widget-content ui-corner-bottom" aria-labelledby="tab4_tab" role="tabpanel" aria-hidden="false" style={{ display: 'block' }}>
                                            <div className="sc_blogger sc_blogger_vertical style_regular no_description">
                                                <article className="sc_blogger_item">
                                                    <h4 className="sc_blogger_title sc_title">
                                                        <a href="#">Morbi eget rutrum</a>
                                                    </h4>
                                                    <div className="reviews_summary blog_reviews">
                                                        <div className="criteria_summary criteria_row">
                                                            <div className="ratingItem" data-mark="84.5">
                                                                <div className="starDefault">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                                <div className="starHover">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sc_blogger_content" />
                                                    <div className="sc_blogger_info">
                                                        by
                                                        <a href="#" className="post_author">John Doe</a>
                                                        <span className="separator">|</span>
                                                        Views
                                                        <span className="comments_number">126</span>
                                                    </div>
                                                </article>
                                                <article className="sc_blogger_item">
                                                    <h4 className="sc_blogger_title sc_title">
                                                        <a href="#">Cras pulvinar sodales</a>
                                                    </h4>
                                                    <div className="reviews_summary blog_reviews">
                                                        <div className="criteria_summary criteria_row">
                                                            <div className="ratingItem" data-mark="78.8">
                                                                <div className="starDefault">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                                <div className="starHover">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sc_blogger_content" />
                                                    <div className="sc_blogger_info">
                                                        by
                                                        <a href="#" className="post_author">John Doe</a>
                                                        <span className="separator">|</span>
                                                        Views
                                                        <span className="comments_number">39</span>
                                                    </div>
                                                </article>
                                                <article className="sc_blogger_item">
                                                    <h4 className="sc_blogger_title sc_title">
                                                        <a href="#">Nulla ut dictum est</a>
                                                    </h4>
                                                    <div className="reviews_summary blog_reviews">
                                                        <div className="criteria_summary criteria_row">
                                                            <div className="ratingItem" data-mark="87.8">
                                                                <div className="starDefault">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                                <div className="starHover">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sc_blogger_content" />
                                                    <div className="sc_blogger_info">
                                                        by
                                                        <a href="#" className="post_author">John Doe</a>
                                                        <span className="separator">|</span>
                                                        Views
                                                        <span className="comments_number">33</span>
                                                    </div>
                                                </article>
                                                <article className="sc_blogger_item">
                                                    <h4 className="sc_blogger_title sc_title">
                                                        <a href="#">Donec elementum</a>
                                                    </h4>
                                                    <div className="reviews_summary blog_reviews">
                                                        <div className="criteria_summary criteria_row">
                                                            <div className="ratingItem" data-mark="84.5">
                                                                <div className="starDefault">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                                <div className="starHover">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sc_blogger_content" />
                                                    <div className="sc_blogger_info">
                                                        by
                                                        <a href="#" className="post_author">John Doe</a>
                                                        <span className="separator">|</span>
                                                        Views
                                                        <span className="comments_number">28</span>
                                                    </div>
                                                </article>
                                                <article className="sc_blogger_item sc_blogger_item_last">
                                                    <h4 className="sc_blogger_title sc_title">
                                                        <a href="#">Phasellus pulvinar</a>
                                                    </h4>
                                                    <div className="reviews_summary blog_reviews">
                                                        <div className="criteria_summary criteria_row">
                                                            <div className="ratingItem" data-mark="79.3">
                                                                <div className="starDefault">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                                <div className="starHover">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sc_blogger_content" />
                                                    <div className="sc_blogger_info">
                                                        by
                                                        <a href="#" className="post_author">John Doe</a>
                                                        <span className="separator">|</span>
                                                        Views
                                                        <span className="comments_number">26</span>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                        <div id="tab5_recent" className="sc_tabs_content ui-tabs-panel ui-widget-content ui-corner-bottom" aria-labelledby="tab5_tab" role="tabpanel" aria-hidden="true" style={{ display: 'none' }}>
                                            <div className="sc_blogger sc_blogger_vertical style_regular no_description">
                                                <article className="sc_blogger_item">
                                                    <h4 className="sc_blogger_title sc_title">
                                                        <a href="#">Nulla ut dictum est</a>
                                                    </h4>
                                                    <div className="reviews_summary blog_reviews">
                                                        <div className="criteria_summary criteria_row">
                                                            <div className="ratingItem" data-mark="87.8">
                                                                <div className="starDefault">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                                <div className="starHover">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sc_blogger_content" />
                                                    <div className="sc_blogger_info">
                                                        by
                                                        <a href="#" className="post_author">John Doe</a>
                                                        <span className="separator">|</span>
                                                        Views
                                                        <span className="comments_number">33</span>
                                                    </div>
                                                </article>
                                                <article className="sc_blogger_item">
                                                    <h4 className="sc_blogger_title sc_title">
                                                        <a href="#">Donec elementum</a>
                                                    </h4>
                                                    <div className="reviews_summary blog_reviews">
                                                        <div className="criteria_summary criteria_row">
                                                            <div className="ratingItem" data-mark="84.5">
                                                                <div className="starDefault">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                                <div className="starHover">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sc_blogger_content" />
                                                    <div className="sc_blogger_info">
                                                        by
                                                        <a href="#" className="post_author">John Doe</a>
                                                        <span className="separator">|</span>
                                                        Views
                                                        <span className="comments_number">28</span>
                                                    </div>
                                                </article>
                                                <article className="sc_blogger_item">
                                                    <h4 className="sc_blogger_title sc_title">
                                                        <a href="#">Morbi eget rutrum</a>
                                                    </h4>
                                                    <div className="reviews_summary blog_reviews">
                                                        <div className="criteria_summary criteria_row">
                                                            <div className="ratingItem" data-mark="84.5">
                                                                <div className="starDefault">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                                <div className="starHover">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sc_blogger_content" />
                                                    <div className="sc_blogger_info">
                                                        by
                                                        <a href="#" className="post_author">John Doe</a>
                                                        <span className="separator">|</span>
                                                        Views
                                                        <span className="comments_number">126</span>
                                                    </div>
                                                </article>
                                                <article className="sc_blogger_item">
                                                    <h4 className="sc_blogger_title sc_title">
                                                        <a href="#">Cras pulvinar sodales</a>
                                                    </h4>
                                                    <div className="reviews_summary blog_reviews">
                                                        <div className="criteria_summary criteria_row">
                                                            <div className="ratingItem" data-mark="78.8">
                                                                <div className="starDefault">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                                <div className="starHover">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sc_blogger_content" />
                                                    <div className="sc_blogger_info">
                                                        by
                                                        <a href="#" className="post_author">John Doe</a>
                                                        <span className="separator">|</span>
                                                        Views
                                                        <span className="comments_number">39</span>
                                                    </div>
                                                </article>
                                                <article className="sc_blogger_item sc_blogger_item_last">
                                                    <h4 className="sc_blogger_title sc_title">
                                                        <a href="#">Phasellus pulvinar</a>
                                                    </h4>
                                                    <div className="reviews_summary blog_reviews">
                                                        <div className="criteria_summary criteria_row">
                                                            <div className="ratingItem" data-mark="79.3">
                                                                <div className="starDefault">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                                <div className="starHover">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sc_blogger_content" />
                                                    <div className="sc_blogger_info">
                                                        by
                                                        <a href="#" className="post_author">John Doe</a>
                                                        <span className="separator">|</span>
                                                        Views
                                                        <span className="comments_number">26</span>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                        <div id="tab5_commented" className="sc_tabs_content ui-tabs-panel ui-widget-content ui-corner-bottom" aria-labelledby="tab6_tab" role="tabpanel" aria-hidden="true" style={{ display: 'none' }}>
                                            <div className="sc_blogger sc_blogger_vertical style_regular no_description">
                                                <article className="sc_blogger_item">
                                                    <h4 className="sc_blogger_title sc_title">
                                                        <a href="#">Morbi eget rutrum</a>
                                                    </h4>
                                                    <div className="reviews_summary blog_reviews">
                                                        <div className="criteria_summary criteria_row">
                                                            <div className="ratingItem" data-mark="84.5">
                                                                <div className="starDefault">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                                <div className="starHover">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sc_blogger_content" />
                                                    <div className="sc_blogger_info">
                                                        by
                                                        <a href="#" className="post_author">John Doe</a>
                                                        <span className="separator">|</span>
                                                        Comments
                                                        <span className="comments_number">126</span>
                                                    </div>
                                                </article>
                                                <article className="sc_blogger_item">
                                                    <h4 className="sc_blogger_title sc_title">
                                                        <a href="#">Cras pulvinar sodales</a>
                                                    </h4>
                                                    <div className="reviews_summary blog_reviews">
                                                        <div className="criteria_summary criteria_row">
                                                            <div className="ratingItem" data-mark="78.8">
                                                                <div className="starDefault">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                                <div className="starHover">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sc_blogger_content" />
                                                    <div className="sc_blogger_info">
                                                        by
                                                        <a href="#" className="post_author">John Doe</a>
                                                        <span className="separator">|</span>
                                                        Comments
                                                        <span className="comments_number">39</span>
                                                    </div>
                                                </article>
                                                <article className="sc_blogger_item">
                                                    <h4 className="sc_blogger_title sc_title">
                                                        <a href="#">Nulla ut dictum est</a>
                                                    </h4>
                                                    <div className="reviews_summary blog_reviews">
                                                        <div className="criteria_summary criteria_row">
                                                            <div className="ratingItem" data-mark="87.8">
                                                                <div className="starDefault">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                                <div className="starHover">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sc_blogger_content" />
                                                    <div className="sc_blogger_info">
                                                        by
                                                        <a href="#" className="post_author">John Doe</a>
                                                        <span className="separator">|</span>
                                                        Views
                                                        <span className="comments_number">33</span>
                                                    </div>
                                                </article>
                                                <article className="sc_blogger_item">
                                                    <h4 className="sc_blogger_title sc_title">
                                                        <a href="#">Donec elementum</a>
                                                    </h4>
                                                    <div className="reviews_summary blog_reviews">
                                                        <div className="criteria_summary criteria_row">
                                                            <div className="ratingItem" data-mark="84.5">
                                                                <div className="starDefault">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                                <div className="starHover">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sc_blogger_content" />
                                                    <div className="sc_blogger_info">
                                                        by
                                                        <a href="#" className="post_author">John Doe</a>
                                                        <span className="separator">|</span>
                                                        Comments
                                                        <span className="comments_number">28</span>
                                                    </div>
                                                </article>
                                                <article className="sc_blogger_item sc_blogger_item_last">
                                                    <h4 className="sc_blogger_title sc_title">
                                                        <a href="#">Phasellus pulvinar</a>
                                                    </h4>
                                                    <div className="reviews_summary blog_reviews">
                                                        <div className="criteria_summary criteria_row">
                                                            <div className="ratingItem" data-mark="79.3">
                                                                <div className="starDefault">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                                <div className="starHover">
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                    <span className="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sc_blogger_content" />
                                                    <div className="sc_blogger_info">
                                                        by
                                                        <a href="#" className="post_author">John Doe</a>
                                                        <span className="separator">|</span>
                                                        Views
                                                        <span className="comments_number">26</span>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="sc_timeline timeline_s4 style_date sc_scroll_controls">
                                            <h2 className="sc_title margin_bottom_small">Timeline</h2>
                                            <div id="swiper_container_16" className="sc_scroll sc_scroll_vertical swiper-container_16 swiper-container-vertical swiper-container-free-mode" style={{ cursor: 'grab' }}>
                                                <div className="sc_blogger sc_blogger_vertical style_date swiper-wrapper">
                                                    <div className="sc_timeline_item sc_scroll_slide swiper-slide swiper-slide-active" style={{ height: '106.667px' }}>
                                                        <article className="sc_blogger_item">
                                                            <div className="sc_blogger_date">
                                                                <span className="day_month">08.03</span>
                                                                <span className="year">2014</span>
                                                            </div>
                                                            <h4 className="sc_blogger_title sc_title">
                                                                <a href="images_style_1.html">Maecenas tristique sem ante</a>
                                                            </h4>
                                                            <div className="sc_blogger_info">
                                                                by
                                                                <a href="#" className="post_author">John Doe</a>
                                                                <span className="separator">|</span>
                                                                Views
                                                                <span className="comments_number">1255</span>
                                                            </div>
                                                        </article>
                                                    </div>
                                                    <div className="sc_timeline_item sc_scroll_slide swiper-slide swiper-slide-next" style={{ height: '106.667px' }}>
                                                        <article className="sc_blogger_item">
                                                            <div className="sc_blogger_date">
                                                                <span className="day_month">03.03</span>
                                                                <span className="year">2014</span>
                                                            </div>
                                                            <h4 className="sc_blogger_title sc_title">
                                                                <a href="images_style_2.html">Vivamus pharetra justo eget</a>
                                                            </h4>
                                                            <div className="sc_blogger_info">
                                                                by
                                                                <a href="#" className="post_author">John Doe</a>
                                                                <span className="separator">|</span>
                                                                Views
                                                                <span className="comments_number">798</span>
                                                            </div>
                                                        </article>
                                                    </div>
                                                    <div className="sc_timeline_item sc_scroll_slide swiper-slide" style={{ height: '106.667px' }}>
                                                        <article className="sc_blogger_item">
                                                            <div className="sc_blogger_date">
                                                                <span className="day_month">28.02</span>
                                                                <span className="year">2014</span>
                                                            </div>
                                                            <h4 className="sc_blogger_title sc_title">
                                                                <a href="images_style_3.html">Sed orci odio</a>
                                                            </h4>
                                                            <div className="sc_blogger_info">
                                                                by
                                                                <a href="#" className="post_author">John Doe</a>
                                                                <span className="separator">|</span>
                                                                Views
                                                                <span className="comments_number">555</span>
                                                            </div>
                                                        </article>
                                                    </div>
                                                    <div className="sc_timeline_item sc_scroll_slide swiper-slide" style={{ height: '106.667px' }}>
                                                        <article className="sc_blogger_item sc_blogger_item_last">
                                                            <div className="sc_blogger_date">
                                                                <span className="day_month">26.02</span>
                                                                <span className="year">2014</span>
                                                            </div>
                                                            <h4 className="sc_blogger_title sc_title">
                                                                <a href="images_style_1.html">Ut vitae lacus pretium</a>
                                                            </h4>
                                                            <div className="sc_blogger_info">
                                                                by
                                                                <a href="#" className="post_author">John Doe</a>
                                                                <span className="separator">|</span>
                                                                Views
                                                                <span className="comments_number">355</span>
                                                            </div>
                                                        </article>
                                                    </div>
                                                </div>
                                                <div className="swiper-scrollbar16 sc_scroll_bar" style={{ opacity: 0 }}><div className="swiper-scrollbar-drag" style={{ height: 240 }} /></div>
                                            </div>
                                            <ul className="flex-direction-nav">
                                                <li>
                                                    <div className="swiper-button-prev16 swiper-button-disabled" />
                                                </li>
                                                <li>
                                                    <div className="swiper-button-next16" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="sc_blogger sc_blogger_vertical style_image style_image_large">
                                        <article className="sc_blogger_item">
                                            <div className="thumb">
                                                <a href="#">
                                                    <img alt="Donec elementum" src="img/11-400x225.jpg" />
                                                </a>
                                            </div>
                                            <h4 className="sc_blogger_title sc_title">
                                                <a href="#">Donec elementum</a>
                                            </h4>
                                            <div className="reviews_summary blog_reviews">
                                                <div className="criteria_summary criteria_row">
                                                    <div className="ratingItem" data-mark="84.5">
                                                        <div className="starDefault">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                        <div className="starHover">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sc_blogger_content">
                                                Donec vel elementum mi. Phasellus et pretium felis, sit amet malesuada odio. Nulla in quam ac diam consectetur aliquet vel et sapien. Phasellus...
                                            </div>
                                            <div className="sc_blogger_info">
                                                <div className="squareButton light ico sc_blogger_more">
                                                    <a className="fa-link" title='true' href="#">More</a>
                                                </div>
                                                <div className="sc_blogger_author">
                                                    Posted by
                                                    <a href="#" className="post_author">John Doe</a>
                                                    <span className="separator">|</span>
                                                    Views
                                                    <span className="comments_number">28</span>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="sc_blogger_item sc_blogger_item_last">
                                            <div className="thumb">
                                                <a href="#">
                                                    <img alt="Cras pulvinar sodales" src="img/3-400x225.jpg" />
                                                </a>
                                            </div>
                                            <h4 className="sc_blogger_title sc_title">
                                                <a href="#">Cras pulvinar sodales</a>
                                            </h4>
                                            <div className="reviews_summary blog_reviews">
                                                <div className="criteria_summary criteria_row">
                                                    <div className="ratingItem" data-mark="64.5">
                                                        <div className="starDefault">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                        <div className="starHover">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sc_blogger_content">
                                                Integer elementum eros nisl, id fermentum tortor convallis vel. Cras pulvinar sodales placerat. Nulla diam justo, dictum sit amet elit sed...
                                            </div>
                                            <div className="sc_blogger_info">
                                                <div className="squareButton light ico sc_blogger_more">
                                                    <a className="fa-link" title='true' href="#">More</a>
                                                </div>
                                                <div className="sc_blogger_author">
                                                    Posted by
                                                    <a href="#" className="post_author">John Doe</a>
                                                    <span className="separator">|</span>
                                                    Views
                                                    <span className="comments_number">39</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            <div className="sc_line sc_line_style_shadow margin_top_mini" />
                            <div className="row">
                                <div className="col-sm-12">
                                    <h2>Recent news</h2>
                                    <div className="sc_blogger relatedPostWrap">
                                        <article className="col-md-4 col-sm-6 margin_bottom_small">
                                            <div className="thumb hoverIncrease inited" data-image="img/portfolio_item.jpg" data-title="Vivamus pharetra justo eget">
                                                <img alt="Vivamus pharetra justo eget" src="img/portfolio_item-400x225.jpg" />
                                                <span className="hoverShadow" /><a href="img/portfolio_item.jpg" title="Vivamus pharetra justo eget" rel="magnific" className="inited"><span className="hoverIcon" /></a></div>
                                            <h4>
                                                <a href="#">Vivamus pharetra justo eget</a>
                                            </h4>
                                            <div className="reviews_summary blog_reviews">
                                                <div className="criteria_summary criteria_row">
                                                    <div className="ratingItem" data-mark="84.5">
                                                        <div className="starDefault">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                        <div className="starHover">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Vivamus pharetra justo eget placerat commodo. Class aptent taciti sociosqu ad litora torquent...</p>
                                            <div className="relatedInfo">
                                                Posted
                                                <a href="#" className="post_date">March 3, 2014</a>
                                                <span className="separator">|</span>
                                                <span className="infoTags">
                                                    <a className="tag_link" href="#">news</a>
                                                </span>
                                            </div>
                                            <div className="relatedMore">
                                                <ul>
                                                    <li className="squareButton light ico">
                                                        <a className="fa-link" title="More" href="#">More</a>
                                                    </li>
                                                    <li className="squareButton light ico">
                                                        <a className="fa-comment" title="Comments - 0" href="#comments">0</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                        <article className="col-md-4 col-sm-6 margin_bottom_small">
                                            <div className="thumb hoverIncrease inited" data-image="img/9435123826_a4c3b35c08_o.jpg" data-title="Sed orci odio">
                                                <img alt="Sed orci odio" src="img/9435123826_a4c3b35c08_o-400x225.jpg" />
                                                <span className="hoverShadow" /><a href="img/9435123826_a4c3b35c08_o.jpg" title="Sed orci odio" rel="magnific" className="inited"><span className="hoverIcon" /></a></div>
                                            <h4>
                                                <a href="#">Sed orci odio</a>
                                            </h4>
                                            <div className="reviews_summary blog_reviews">
                                                <div className="criteria_summary criteria_row">
                                                    <div className="ratingItem" data-mark="74.5">
                                                        <div className="starDefault">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                        <div className="starHover">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Sed orci odio, adipiscing vel libero eget, volutpat dictum orci. Donec eu euismod dui, nec...</p>
                                            <div className="relatedInfo">
                                                Posted
                                                <a href="#" className="post_date">February 28, 2014</a>
                                                <span className="separator">|</span>
                                                <span className="infoTags">
                                                    <a className="tag_link" href="#">news</a>
                                                </span>
                                            </div>
                                            <div className="relatedMore">
                                                <ul>
                                                    <li className="squareButton light ico">
                                                        <a className="fa-link" title="More" href="#">More</a>
                                                    </li>
                                                    <li className="squareButton light ico">
                                                        <a className="fa-comment" title="Comments - 0" href="#comments">0</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                        <article className="col-md-4 col-sm-6 margin_bottom_small">
                                            <div className="thumb hoverIncrease inited" data-image="img/portfolio16x9_2.jpg" data-title="Ut vitae lacus pretium">
                                                <img alt="Ut vitae lacus pretium" src="img/portfolio16x9_2-400x225.jpg" />
                                                <span className="hoverShadow" /><a href="img/portfolio16x9_2.jpg" title="Ut vitae lacus pretium" rel="magnific" className="inited"><span className="hoverIcon" /></a></div>
                                            <h4>
                                                <a href="#">Ut vitae lacus pretium</a>
                                            </h4>
                                            <div className="reviews_summary blog_reviews">
                                                <div className="criteria_summary criteria_row">
                                                    <div className="ratingItem" data-mark="34.5">
                                                        <div className="starDefault">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                        <div className="starHover">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Ut vitae lacus pretium, molestie massa a, placerat urna. Donec viverra nisl id nisl accumsan, ac...</p>
                                            <div className="relatedInfo">
                                                Posted
                                                <a href="#" className="post_date">February 26, 2014</a>
                                                <span className="separator">|</span>
                                                <span className="infoTags">
                                                    <a className="tag_link" href="#">news</a>
                                                </span>
                                            </div>
                                            <div className="relatedMore">
                                                <ul>
                                                    <li className="squareButton light ico">
                                                        <a className="fa-link" title="More" href="#">More</a>
                                                    </li>
                                                    <li className="squareButton light ico">
                                                        <a className="fa-comment" title="Comments - 0" href="#comments">0</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            <div className="sc_line sc_line_style_shadow margin_top_mini margin_bottom_mini" />
                            <div className="row">
                                <div className="col-sm-12">
                                    <h2>Top news</h2>
                                    <div className="sc_blogger relatedPostWrap">
                                        <article className="col-md-4 col-sm-6 margin_bottom_small">
                                            <div className="thumb hoverIncrease inited" data-image="img/portfolio_item.jpg" data-title="Vivamus pharetra justo eget">
                                                <img alt="Vivamus pharetra justo eget" src="img/portfolio_item-400x225.jpg" />
                                                <span className="hoverShadow" /><a href="img/portfolio_item.jpg" title="Vivamus pharetra justo eget" rel="magnific" className="inited"><span className="hoverIcon" /></a></div>
                                            <h4>
                                                <a href="#">Vivamus pharetra justo eget</a>
                                            </h4>
                                            <div className="reviews_summary blog_reviews">
                                                <div className="criteria_summary criteria_row">
                                                    <div className="ratingItem" data-mark="24.5">
                                                        <div className="starDefault">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                        <div className="starHover">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Vivamus pharetra justo eget placerat commodo. Class aptent taciti sociosqu ad litora torquent...</p>
                                            <div className="relatedInfo">
                                                Posted
                                                <a href="#" className="post_date">March 3, 2014</a>
                                                <span className="separator">|</span>
                                                <span className="infoTags">
                                                    <a className="tag_link" href="#">news</a>
                                                </span>
                                            </div>
                                            <div className="relatedMore">
                                                <ul>
                                                    <li className="squareButton light ico">
                                                        <a className="fa-link" title="More" href="#">More</a>
                                                    </li>
                                                    <li className="squareButton light ico">
                                                        <a className="fa-comment" title="Comments - 0" href="#comments">0</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                        <article className="col-md-4 col-sm-6 margin_bottom_small">
                                            <div className="thumb hoverIncrease inited" data-image="img/9435123826_a4c3b35c08_o.jpg" data-title="Sed orci odio">
                                                <img alt="Sed orci odio" src="img/9435123826_a4c3b35c08_o-400x225.jpg" />
                                                <span className="hoverShadow" /><a href="img/9435123826_a4c3b35c08_o.jpg" title="Sed orci odio" rel="magnific" className="inited"><span className="hoverIcon" /></a></div>
                                            <h4>
                                                <a href="#">Sed orci odio</a>
                                            </h4>
                                            <div className="reviews_summary blog_reviews">
                                                <div className="criteria_summary criteria_row">
                                                    <div className="ratingItem" data-mark={100}>
                                                        <div className="starDefault">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                        <div className="starHover">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Sed orci odio, adipiscing vel libero eget, volutpat dictum orci. Donec eu euismod dui, nec...</p>
                                            <div className="relatedInfo">
                                                Posted
                                                <a href="#" className="post_date">February 28, 2014</a>
                                                <span className="separator">|</span>
                                                <span className="infoTags">
                                                    <a className="tag_link" href="#">news</a>
                                                </span>
                                            </div>
                                            <div className="relatedMore">
                                                <ul>
                                                    <li className="squareButton light ico">
                                                        <a className="fa-link" title="More" href="#">More</a>
                                                    </li>
                                                    <li className="squareButton light ico">
                                                        <a className="fa-comment" title="Comments - 0" href="#comments">0</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                        <article className="col-md-4 col-sm-6 margin_bottom_small">
                                            <div className="thumb hoverIncrease inited" data-image="img/portfolio16x9_2.jpg" data-title="Ut vitae lacus pretium">
                                                <img alt="Ut vitae lacus pretium" src="img/portfolio16x9_2-400x225.jpg" />
                                                <span className="hoverShadow" /><a href="img/portfolio16x9_2.jpg" title="Ut vitae lacus pretium" rel="magnific" className="inited"><span className="hoverIcon" /></a></div>
                                            <h4>
                                                <a href="#">Ut vitae lacus pretium</a>
                                            </h4>
                                            <div className="reviews_summary blog_reviews">
                                                <div className="criteria_summary criteria_row">
                                                    <div className="ratingItem" data-mark="94.5">
                                                        <div className="starDefault">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                        <div className="starHover">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Ut vitae lacus pretium, molestie massa a, placerat urna. Donec viverra nisl id nisl accumsan, ac...</p>
                                            <div className="relatedInfo">
                                                Posted
                                                <a href="#" className="post_date">February 26, 2014</a>
                                                <span className="separator">|</span>
                                                <span className="infoTags">
                                                    <a className="tag_link" href="#">news</a>
                                                </span>
                                            </div>
                                            <div className="relatedMore">
                                                <ul>
                                                    <li className="squareButton light ico">
                                                        <a className="fa-link" title="More" href="#">More</a>
                                                    </li>
                                                    <li className="squareButton light ico">
                                                        <a className="fa-comment" title="Comments - 0" href="#comments">0</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            <div className="sc_line sc_line_style_shadow margin_top_mini" />
                            <div className="row">
                                <div className="col-sm-12">
                                    <h2>Recommended posts</h2>
                                    <div className="sc_blogger relatedPostWrap">
                                        <article className="col-md-4 col-sm-6 margin_bottom_small">
                                            <div className="thumb hoverIncrease inited" data-image="img/portfolio_item.jpg" data-title="Vivamus pharetra justo eget">
                                                <img alt="Vivamus pharetra justo eget" src="img/portfolio_item-400x225.jpg" />
                                                <span className="hoverShadow" /><a href="img/portfolio_item.jpg" title="Vivamus pharetra justo eget" rel="magnific" className="inited"><span className="hoverIcon" /></a></div>
                                            <h4>
                                                <a href="#">Vivamus pharetra justo eget</a>
                                            </h4>
                                            <div className="reviews_summary blog_reviews">
                                                <div className="criteria_summary criteria_row">
                                                    <div className="ratingItem" data-mark="24.5">
                                                        <div className="starDefault">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                        <div className="starHover">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Vivamus pharetra justo eget placerat commodo. Class aptent taciti sociosqu ad litora torquent...</p>
                                            <div className="relatedInfo">
                                                Posted
                                                <a href="#" className="post_date">March 3, 2014</a>
                                                <span className="separator">|</span>
                                                <span className="infoTags">
                                                    <a className="tag_link" href="#">news</a>
                                                </span>
                                            </div>
                                            <div className="relatedMore">
                                                <ul>
                                                    <li className="squareButton light ico">
                                                        <a className="fa-link" title="More" href="#">More</a>
                                                    </li>
                                                    <li className="squareButton light ico">
                                                        <a className="fa-comment" title="Comments - 0" href="#comments">0</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                        <article className="col-md-4 col-sm-6 margin_bottom_small">
                                            <div className="thumb hoverIncrease inited" data-image="img/9435123826_a4c3b35c08_o.jpg" data-title="Sed orci odio">
                                                <img alt="Sed orci odio" src="img/9435123826_a4c3b35c08_o-400x225.jpg" />
                                                <span className="hoverShadow" /><a href="img/9435123826_a4c3b35c08_o.jpg" title="Sed orci odio" rel="magnific" className="inited"><span className="hoverIcon" /></a></div>
                                            <h4>
                                                <a href="#">Sed orci odio</a>
                                            </h4>
                                            <div className="reviews_summary blog_reviews">
                                                <div className="criteria_summary criteria_row">
                                                    <div className="ratingItem" data-mark="64.5">
                                                        <div className="starDefault">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                        <div className="starHover">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Sed orci odio, adipiscing vel libero eget, volutpat dictum orci. Donec eu euismod dui, nec...</p>
                                            <div className="relatedInfo">
                                                Posted
                                                <a href="#" className="post_date">February 28, 2014</a>
                                                <span className="separator">|</span>
                                                <span className="infoTags">
                                                    <a className="tag_link" href="#">news</a>
                                                </span>
                                            </div>
                                            <div className="relatedMore">
                                                <ul>
                                                    <li className="squareButton light ico">
                                                        <a className="fa-link" title="More" href="#">More</a>
                                                    </li>
                                                    <li className="squareButton light ico">
                                                        <a className="fa-comment" title="Comments - 0" href="#comments">0</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                        <article className="col-md-4 col-sm-6 margin_bottom_small">
                                            <div className="thumb hoverIncrease inited" data-image="img/portfolio16x9_2.jpg" data-title="Ut vitae lacus pretium">
                                                <img alt="Ut vitae lacus pretium" src="img/portfolio16x9_2-400x225.jpg" />
                                                <span className="hoverShadow" /><a href="img/portfolio16x9_2.jpg" title="Ut vitae lacus pretium" rel="magnific" className="inited"><span className="hoverIcon" /></a></div>
                                            <h4>
                                                <a href="#">Ut vitae lacus pretium</a>
                                            </h4>
                                            <div className="reviews_summary blog_reviews">
                                                <div className="criteria_summary criteria_row">
                                                    <div className="ratingItem" data-mark="44.5">
                                                        <div className="starDefault">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                        <div className="starHover">
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                            <span className="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Ut vitae lacus pretium, molestie massa a, placerat urna. Donec viverra nisl id nisl accumsan, ac...</p>
                                            <div className="relatedInfo">
                                                Posted
                                                <a href="#" className="post_date">February 26, 2014</a>
                                                <span className="separator">|</span>
                                                <span className="infoTags">
                                                    <a className="tag_link" href="#">news</a>
                                                </span>
                                            </div>
                                            <div className="relatedMore">
                                                <ul>
                                                    <li className="squareButton light ico">
                                                        <a className="fa-link" title="More" href="#">More</a>
                                                    </li>
                                                    <li className="squareButton light ico">
                                                        <a className="fa-comment" title="Comments - 0" href="#comments">0</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div id="sidebar_main" className="widget_area sidebar_main sidebar">
                                <aside className="widgetWrap hrShadow widget widget_categories">
                                    <h3 className="title">Categories</h3>
                                    <ul>
                                        <li className="cat-item">
                                            <a href="categories_slider.html">Categories slider</a>
                                        </li>
                                        <li className="cat-item">
                                            <a href="gallery_demo.html">Gallery demo</a>
                                        </li>
                                        <li className="cat-item">
                                            <a href="homepage_style_4.html">Home style blog</a>
                                        </li>
                                        <li className="cat-item dropMenu">
                                            <a href="blog_masonry_4_columns.html">Masonry demo</a>
                                            <ul className="children">
                                                <li className="cat-item">
                                                    <a href="blog_masonry_2_columns.html">2 columns</a>
                                                </li>
                                                <li className="cat-item">
                                                    <a href="blog_masonry_2_columns_sidebar.html">2 columns + sidebar</a>
                                                </li>
                                                <li className="cat-item">
                                                    <a href="blog_masonry_3_columns.html">3 columns</a>
                                                </li>
                                                <li className="cat-item">
                                                    <a href="blog_masonry_3_columns_sidebar.html">3 columns + sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="cat-item">
                                            <a href="blog_news_demo.html">News demo</a>
                                        </li>
                                        <li className="cat-item dropMenu">
                                            <a href="portfolio_classic_4_columns.html">Portfolio Classic</a>
                                            <ul className="children">
                                                <li className="cat-item">
                                                    <a href="portfolio_classic_1_column_sidebar.html">1 column + sidebar</a>
                                                </li>
                                                <li className="cat-item">
                                                    <a href="portfolio_classic_2_columns.html">2 columns</a>
                                                </li>
                                                <li className="cat-item">
                                                    <a href="portfolio_classic_2_columns_sidebar.html">2 columns + sidebar</a>
                                                </li>
                                                <li className="cat-item">
                                                    <a href="portfolio_classic_3_columns.html">3 columns</a>
                                                </li>
                                                <li className="cat-item">
                                                    <a href="portfolio_classic_3_columns_sidebar.html">3 columns + sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="cat-item dropMenu">
                                            <a href="portfolio_grid_4_columns.html">Portfolio Grid</a>
                                            <ul className="children">
                                                <li className="cat-item">
                                                    <a href="portfolio_grid_1_column.html">1 columns</a>
                                                </li>
                                                <li className="cat-item">
                                                    <a href="portfolio_grid_2_columns.html">2 columns</a>
                                                </li>
                                                <li className="cat-item">
                                                    <a href="portfolio_grid_3_columns.html">3 columns</a>
                                                </li>
                                                <li className="cat-item">
                                                    <a href="portfolio_grid_4_columns.html">4 columns</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="cat-item dropMenu">
                                            <a href="portfolio_masonry_4_columns.html">Portfolio Masonry</a>
                                            <ul className="children">
                                                <li className="cat-item">
                                                    <a href="portfolio_masonry_2_columns.html">2 columns</a>
                                                </li>
                                                <li className="cat-item">
                                                    <a href="portfolio_masonry_2_columns_sidebar.html">2 columns + sidebar</a>
                                                </li>
                                                <li className="cat-item">
                                                    <a href="portfolio_masonry_3_columns.html">3 columns</a>
                                                </li>
                                                <li className="cat-item">
                                                    <a href="portfolio_masonry_3_columns_sidebar.html">3 columns + sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="cat-item dropMenu">
                                            <a href="features_widgets.html">Post Formats</a>
                                            <ul className="children">
                                                <li className="cat-item">
                                                    <a href="features_post_formats.html">Post formats fullwidth</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="cat-item">
                                            <a href="blog_timeline_style.html">Timeline example</a>
                                        </li>
                                    </ul>
                                </aside>
                                <aside className="widgetWrap hrShadow widget widget_calendar">
                                    <h3 className="title">Calendar</h3>
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
                                                        <a href="#" title="View posts for July 2015">
                                                            July
                                                            <span>2015</span>
                                                        </a>
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
                                                    <td className="today">29</td>
                                                    <td>30</td>
                                                    <td>31</td>
                                                    <td className="pad" colSpan={2}>&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </aside>
                                <aside className="widgetWrap hrShadow widget widget_archive">
                                    <h3 className="title">Archives</h3>
                                    <ul>
                                        <li>
                                            <a href="archives.html">
                                                May
                                                <span>2014</span>
                                                <span /></a>
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                April
                                                <span>2014</span>
                                                <span /></a>
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                March
                                                <span>2014</span>
                                                <span /></a>
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                February
                                                <span>2014</span>
                                                <span /></a>
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                January
                                                <span>2014</span>
                                                <span /></a>
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                December <span>2013</span>
                                                <span /></a>
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                November
                                                <span>2013</span>
                                                <span /></a>
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                October
                                                <span>2013</span>
                                                <span /></a>
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                September
                                                <span>2013</span>
                                                <span /></a>
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                August
                                                <span>2013</span>
                                                <span /></a>
                                        </li>
                                    </ul>
                                </aside>
                                <aside className="widgetWrap hrShadow widget widget_popular_posts">
                                    <h3 className="title">Popular</h3>
                                    <div className="popular_and_commented_tabs tabs_area inited ui-tabs ui-widget ui-widget-content ui-corner-all">
                                        <ul className="tabs ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">
                                            <li className="squareButtonlite ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab" aria-controls="widget_popular_1" tabIndex={0} aria-labelledby="ui-id-1" aria-selected="true" aria-expanded="true">
                                                <a href="#widget_popular_1" className="ui-tabs-anchor" role="presentation" tabIndex={-1} id="ui-id-1">Views</a>
                                            </li>
                                            <li className="squareButtonlite ui-state-default ui-corner-top" role="tab" aria-controls="widget_popular_2" tabIndex={-1} aria-labelledby="ui-id-2" aria-selected="false" aria-expanded="false">
                                                <a href="#widget_popular_2" className="ui-tabs-anchor" role="presentation" tabIndex={-1} id="ui-id-2">Comments</a>
                                            </li>
                                            <li className="squareButtonlite ui-state-default ui-corner-top" role="tab" aria-controls="widget_popular_3" tabIndex={-1} aria-labelledby="ui-id-3" aria-selected="false" aria-expanded="false">
                                                <a href="#widget_popular_3" className="ui-tabs-anchor" role="presentation" tabIndex={-1} id="ui-id-3">Likes</a>
                                            </li>
                                        </ul>
                                        <div className="tab_content ui-tabs-panel ui-widget-content ui-corner-bottom" id="widget_popular_1" role="tabpanel" aria-labelledby="ui-id-1" aria-hidden="false" style={{ display: 'block' }}>
                                            <article className="post_item no_thumb">
                                                <h5 className="post_title">
                                                    <a href="images_style_1.html">Maecenas tristique sem ante</a>
                                                </h5>
                                                <div className="post_info">
                                                    <span className="post_date">March 8, 2014</span>
                                                    <span className="post_comments">
                                                        <a href="images_style_1.html">
                                                            <span className="comments_icon fa-eye" />
                                                            <span className="post_comments_number">1258</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article className="post_item no_thumb">
                                                <h5 className="post_title">
                                                    <a href="images_style_2.html">Donec lacinia elementum nunc</a>
                                                </h5>
                                                <div className="post_info">
                                                    <span className="post_date">February 17, 2014</span>
                                                    <span className="post_comments">
                                                        <a href="images_style_2.html">
                                                            <span className="comments_icon fa-eye" />
                                                            <span className="post_comments_number">1050</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article className="post_item no_thumb">
                                                <h5 className="post_title">
                                                    <a href="images_style_3.html">Vivamus pharetra justo</a>
                                                </h5>
                                                <div className="post_info">
                                                    <span className="post_date">March 15, 2014</span>
                                                    <span className="post_comments">
                                                        <a href="images_style_3.html">
                                                            <span className="comments_icon fa-eye" />
                                                            <span className="post_comments_number">864</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article className="post_item no_thumb">
                                                <h5 className="post_title">
                                                    <a href="images_style_1.html">Unique Blog Style!</a>
                                                </h5>
                                                <div className="post_info">
                                                    <span className="post_date">February 25, 2014</span>
                                                    <span className="post_comments">
                                                        <a href="images_style_1.html">
                                                            <span className="comments_icon fa-eye" />
                                                            <span className="post_comments_number">802</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article className="post_item no_thumb">
                                                <h5 className="post_title">
                                                    <a href="images_style_2.html">Vivamus pharetra justo eget</a>
                                                </h5>
                                                <div className="post_info">
                                                    <span className="post_date">March 3, 2014</span>
                                                    <span className="post_comments">
                                                        <a href="images_style_2.html">
                                                            <span className="comments_icon fa-eye" />
                                                            <span className="post_comments_number">802</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article className="post_item no_thumb">
                                                <h5 className="post_title">
                                                    <a href="images_style_3.html">Audio post example with cover image</a>
                                                </h5>
                                                <div className="post_info">
                                                    <span className="post_date">February 22, 2014</span>
                                                    <span className="post_comments">
                                                        <a href="images_style_3.html">
                                                            <span className="comments_icon fa-eye" />
                                                            <span className="post_comments_number">765</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="tab_content ui-tabs-panel ui-widget-content ui-corner-bottom" id="widget_popular_2" role="tabpanel" aria-labelledby="ui-id-2" aria-hidden="true" style={{ display: 'none' }}>
                                            <article className="post_item no_thumb">
                                                <h5 className="post_title">
                                                    <a href="images_style_1.html">Unique Blog Style!</a>
                                                </h5>
                                                <div className="post_info">
                                                    <span className="post_date">February 25, 2014</span>
                                                    <span className="post_comments">
                                                        <a href="images_style_1.html#comments">
                                                            <span className="comments_icon fa-comment" />
                                                            <span className="post_comments_number">4</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article className="post_item no_thumb">
                                                <h5 className="post_title">
                                                    <a href="images_style_1.html">Theme is easy to use with any type of displays</a>
                                                </h5>
                                                <div className="post_info">
                                                    <span className="post_date">February 24, 2014</span>
                                                    <span className="post_comments">
                                                        <a href="images_style_1.html#comments">
                                                            <span className="comments_icon fa-comment" />
                                                            <span className="post_comments_number">1</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article className="post_item no_thumb">
                                                <h5 className="post_title">
                                                    <a href="images_style_2.html">Donec lacinia elementum nunc</a>
                                                </h5>
                                                <div className="post_info">
                                                    <span className="post_date">February 1, 2014</span>
                                                    <span className="post_comments">
                                                        <a href="images_style_2.html#comments">
                                                            <span className="comments_icon fa-comment" />
                                                            <span className="post_comments_number">1</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article className="post_item no_thumb">
                                                <h5 className="post_title">
                                                    <a href="images_style_3.html">Ut vitae lacus pretium</a>
                                                </h5>
                                                <div className="post_info">
                                                    <span className="post_date">February 26, 2014</span>
                                                    <span className="post_comments">
                                                        <a href="images_style_3.html#comments">
                                                            <span className="comments_icon fa-comment" />
                                                            <span className="post_comments_number">0</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article className="post_item no_thumb">
                                                <h5 className="post_title">
                                                    <a href="images_style_1.html">Sed orci odio</a>
                                                </h5>
                                                <div className="post_info">
                                                    <span className="post_date">February 28, 2014</span>
                                                    <span className="post_comments">
                                                        <a href="images_style_1.html#comments">
                                                            <span className="comments_icon fa-comment" />
                                                            <span className="post_comments_number">0</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article className="post_item no_thumb">
                                                <h5 className="post_title">
                                                    <a href="images_style_2.html">Vivamus pharetra justo eget</a>
                                                </h5>
                                                <div className="post_info">
                                                    <span className="post_date">March 3, 2014</span>
                                                    <span className="post_comments">
                                                        <a href="images_style_2.html#comments">
                                                            <span className="comments_icon fa-comment" />
                                                            <span className="post_comments_number">0</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="tab_content ui-tabs-panel ui-widget-content ui-corner-bottom" id="widget_popular_3" role="tabpanel" aria-labelledby="ui-id-3" aria-hidden="true" style={{ display: 'none' }}>
                                            <article className="post_item no_thumb">
                                                <h5 className="post_title">
                                                    <a href="images_style_1.html">Unique Blog Style!</a>
                                                </h5>
                                                <div className="post_info">
                                                    <span className="post_date">February 25, 2014</span>
                                                    <span className="post_comments">
                                                        <a href="images_style_1.html">
                                                            <span className="comments_icon fa-heart" />
                                                            <span className="post_comments_number">26</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article className="post_item no_thumb">
                                                <h5 className="post_title">
                                                    <a href="images_style_1.html">Maecenas tristique sem ante</a>
                                                </h5>
                                                <div className="post_info">
                                                    <span className="post_date">March 8, 2014</span>
                                                    <span className="post_comments">
                                                        <a href="images_style_1.html">
                                                            <span className="comments_icon fa-heart" />
                                                            <span className="post_comments_number">11</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article className="post_item no_thumb">
                                                <h5 className="post_title">
                                                    <a href="images_style_1.html">Theme is easy to use with any type of displays</a>
                                                </h5>
                                                <div className="post_info">
                                                    <span className="post_date">February 24, 2014</span>
                                                    <span className="post_comments">
                                                        <a href="images_style_1.html">
                                                            <span className="comments_icon fa-heart" />
                                                            <span className="post_comments_number">10</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article className="post_item no_thumb">
                                                <h5 className="post_title">
                                                    <a href="blog_post_standard_with_sidebar.html">Video post example</a>
                                                </h5>
                                                <div className="post_info">
                                                    <span className="post_date">February 23, 2014</span>
                                                    <span className="post_comments">
                                                        <a href="blog_post_standard_with_sidebar.html">
                                                            <span className="comments_icon fa-heart" />
                                                            <span className="post_comments_number">8</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article className="post_item no_thumb">
                                                <h5 className="post_title">
                                                    <a href="images_style_2.html">Vivamus pharetra justo eget</a>
                                                </h5>
                                                <div className="post_info">
                                                    <span className="post_date">March 3, 2014</span>
                                                    <span className="post_comments">
                                                        <a href="images_style_2.html">
                                                            <span className="comments_icon fa-heart" />
                                                            <span className="post_comments_number">7</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article className="post_item no_thumb">
                                                <h5 className="post_title">
                                                    <a href="images_style_3.html">Audio post example with cover image</a>
                                                </h5>
                                                <div className="post_info">
                                                    <span className="post_date">February 22, 2014</span>
                                                    <span className="post_comments">
                                                        <a href="images_style_3.html">
                                                            <span className="comments_icon fa-heart" />
                                                            <span className="post_comments_number">6</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </aside>
                                <aside className="widgetWrap widget widget_recent_posts">
                                    <h3 className="title">Recent posts</h3>
                                    <article className="post_item with_thumb">
                                        <div className="post_thumb">
                                            <img alt="Morbi eget rutrum" src="img/51-75x75.jpg" />
                                        </div>
                                        <h5 className="post_title">
                                            <a href="images_style_1.html">Morbi eget rutrum</a>
                                        </h5>
                                        <div className="post_info">
                                            <span className="post_date">May 7, 2014</span>
                                            <span className="post_author">by <a href="#">John Doe</a></span>
                                            <span className="post_comments">
                                                <a href="images_style_1.html">
                                                    <span className="comments_icon fa-eye" />
                                                    <span className="post_comments_number">126</span>
                                                </a>
                                            </span>
                                        </div>
                                    </article>
                                    <article className="post_item with_thumb">
                                        <div className="post_thumb"><img alt="Duis tempus ac risus id fringilla" src="img/1-75x75.jpg" /></div>
                                        <h5 className="post_title">
                                            <a href="images_style_2.html">Duis tempus ac risus id fringilla</a>
                                        </h5>
                                        <div className="post_info">
                                            <span className="post_date">May 6, 2014</span>
                                            <span className="post_author">by <a href="#">John Doe</a></span>
                                            <span className="post_comments">
                                                <a href="images_style_2.html">
                                                    <span className="comments_icon fa-eye" />
                                                    <span className="post_comments_number">64</span>
                                                </a>
                                            </span>
                                        </div>
                                    </article>
                                    <article className="post_item with_thumb">
                                        <div className="post_thumb"><img alt="Aenean at quam pharetra, aliquet odio at" src="img/2-75x75.jpg" /></div>
                                        <h5 className="post_title">
                                            <a href="images_style_3.html">Aenean at quam pharetra, aliquet odio at</a>
                                        </h5>
                                        <div className="post_info">
                                            <span className="post_date">May 5, 2014</span>
                                            <span className="post_author">by <a href="#">John Doe</a></span>
                                            <span className="post_comments">
                                                <a href="images_style_3.html">
                                                    <span className="comments_icon fa-eye" />
                                                    <span className="post_comments_number">25</span>
                                                </a>
                                            </span>
                                        </div>
                                    </article>
                                    <article className="post_item with_thumb">
                                        <div className="post_thumb"><img alt="Cras pulvinar sodales placerat" src="img/3-75x75.jpg" /></div>
                                        <h5 className="post_title">
                                            <a href="images_style_1.html">Cras pulvinar sodales placerat</a>
                                        </h5>
                                        <div className="post_info">
                                            <span className="post_date">May 4, 2014</span>
                                            <span className="post_author">by <a href="#">John Doe</a></span>
                                            <span className="post_comments">
                                                <a href="images_style_1.html">
                                                    <span className="comments_icon fa-eye" />
                                                    <span className="post_comments_number">40</span>
                                                </a>
                                            </span>
                                        </div>
                                    </article>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home