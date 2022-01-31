import React, { useState, useEffect } from 'react'

const Home = () => {

    return (
        <main>
            <section classname="text-center color_section">
                <div classname="container">
                    <div classname="row">
                        <div classname="sc_content user_header">
                            <div classname="col-md-3 col-sm-6">
                                <a href="#">
                                    <span classname="sc_icon rt-icon-diamond " />
                                </a>
                                <div classname="sc_section">
                                    <a href="#">Professional Teachers</a>
                                </div>
                                <div classname="sc_section">Aliquam erat volutpat</div>
                            </div>
                            <div classname="col-md-3 col-sm-6">
                                <a href="#">
                                    <span classname="sc_icon rt-icon-heart4 " />
                                </a>
                                <div classname="sc_section">
                                    <a href="#">Our Approach</a>
                                </div>
                                <div classname="sc_section">Dipisicing elit</div>
                            </div>
                            <div classname="col-md-3 col-sm-6">
                                <a href="#">
                                    <span classname="sc_icon rt-icon-star " />
                                </a>
                                <div classname="sc_section">
                                    <a href="#">Education Programm</a>
                                </div>
                                <div classname="sc_section">Dolor sit amet</div>
                            </div>
                            <div classname="col-md-3 col-sm-6">
                                <a href="#">
                                    <span classname="sc_icon rt-icon-clipboard " />
                                </a>
                                <div classname="sc_section">
                                    <a href="#">Latest Events</a>
                                </div>
                                <div classname="sc_section">Cras id convallis</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section classname="mainWrap with_sidebar sideBarRight">
                <div classname="container">
                    <div classname="row">
                        <div classname="col-md-9 col-sm-12">
                            <div classname="row">
                                <div classname="col-sm-12">
                                    <div id="multi_slider" classname="sc_slider_pagination_area sc_slider_pagination_full">
                                        <div id="multi_slider_left" classname="sc_slider sc_slider_swiper sc_slider_controls sc_slider_nopagination swiper-container slider-left">
                                            <div classname="slides swiper-wrapper">
                                                <div classname="swiper-slide">
                                                    <img src="img/slider/51-550x310.jpg" alt />
                                                    <a href="#" title="Morbi eget rutrum" />
                                                    <div classname="sc_slider_info content-slide">
                                                        <a href="#" title="Morbi eget rutrum" />
                                                        <div classname="sc_slider_category">
                                                            <a href="#" title="Morbi eget rutrum" />
                                                            <a href="#">News demo</a>
                                                        </div>
                                                        <div classname="sc_slider_reviews reviews_summary blog_reviews after_category">
                                                            <div classname="criteria_summary criteria_row">
                                                                <div classname="ratingItem" data-mark="84.5">
                                                                    <div classname="starDefault">
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                    </div>
                                                                    <div classname="starHover">
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h2 classname="sc_slider_subtitle">
                                                            <a href="#">Morbi eget rutrum</a></h2>
                                                    </div>
                                                </div>
                                                <div classname="swiper-slide">
                                                    <img src="img/slider/41-550x310.jpg" alt />
                                                    <a href="#" title="Nulla ut dictum est" />
                                                    <div classname="sc_slider_info content-slide">
                                                        <a href="#" title="Nulla ut dictum est" />
                                                        <div classname="sc_slider_category">
                                                            <a href="#" title="Nulla ut dictum est" />
                                                            <a href="#">News demo</a>
                                                        </div>
                                                        <div classname="sc_slider_reviews reviews_summary blog_reviews after_category">
                                                            <div classname="criteria_summary criteria_row">
                                                                <div classname="ratingItem" data-mark="87.8">
                                                                    <div classname="starDefault">
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                    </div>
                                                                    <div classname="starHover">
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h2 classname="sc_slider_subtitle">
                                                            <a href="#">Nulla ut dictum est</a></h2>
                                                    </div>
                                                </div>
                                                <div classname="swiper-slide">
                                                    <img src="img/slider/4-550x310.jpg" alt />
                                                    <a href="#" title="Phasellus pulvinar" />
                                                    <div classname="sc_slider_info content-slide">
                                                        <a href="#" title="Phasellus pulvinar" />
                                                        <div classname="sc_slider_category">
                                                            <a href="#" title="Phasellus pulvinar" />
                                                            <a href="#">News demo</a>
                                                        </div>
                                                        <div classname="sc_slider_reviews reviews_summary blog_reviews after_category">
                                                            <div classname="criteria_summary criteria_row">
                                                                <div classname="ratingItem" data-mark="79.3">
                                                                    <div classname="starDefault">
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                    </div>
                                                                    <div classname="starHover">
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h2 classname="sc_slider_subtitle">
                                                            <a href="#">Phasellus pulvinar</a></h2>
                                                    </div>
                                                </div>
                                                <div classname="swiper-slide">
                                                    <img src="img/slider/3-550x310.jpg" alt />
                                                    <a href="#" title="Cras pulvinar sodales" />
                                                    <div classname="sc_slider_info content-slide">
                                                        <a href="#" title="Cras pulvinar sodales" />
                                                        <div classname="sc_slider_category">
                                                            <a href="#" title="Cras pulvinar sodales" />
                                                            <a href="#">News demo</a>
                                                        </div>
                                                        <div classname="sc_slider_reviews reviews_summary blog_reviews after_category">
                                                            <div classname="criteria_summary criteria_row">
                                                                <div classname="ratingItem" data-mark="78.8">
                                                                    <div classname="starDefault">
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                    </div>
                                                                    <div classname="starHover">
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                        <span classname="starReview" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h2 classname="sc_slider_subtitle">
                                                            <a href="#">Cras pulvinar sodales</a></h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul classname="flex-direction-nav">
                                                <li>
                                                    <a classname="flex-prev" href="#" />
                                                </li>
                                                <li>
                                                    <a classname="flex-next" href="#" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div classname="flex-control-nav manual">
                                            <div id="multi_slider_right" classname="sc_scroll sc_scroll_vertical swiper-container gallery-thumbs scroll-container slider-right">
                                                <div classname="sc_scroll_wrapper swiper-wrapper">
                                                    <div classname="swiper-slide">
                                                        <div classname="slide_pager">
                                                            <div classname="slide_date">07.05.14</div>
                                                            <div classname="slide_info">
                                                                <h4 classname="slide_title">Morbi eget rutrum</h4>
                                                                <div classname="slide_tags">
                                                                    <span classname="slide_tag">news</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="swiper-slide">
                                                        <div classname="slide_pager">
                                                            <div classname="slide_date">28.04.14</div>
                                                            <div classname="slide_info">
                                                                <h4 classname="slide_title">Nulla ut dictum est</h4>
                                                                <div classname="slide_tags">
                                                                    <span classname="slide_tag">news</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="swiper-slide">
                                                        <div classname="slide_pager">
                                                            <div classname="slide_date">21.04.14</div>
                                                            <div classname="slide_info">
                                                                <h4 classname="slide_title">Phasellus pulvinar</h4>
                                                                <div classname="slide_tags">
                                                                    <span classname="slide_tag">news</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="swiper-slide">
                                                        <div classname="slide_pager">
                                                            <div classname="slide_date">15.03.14</div>
                                                            <div classname="slide_info">
                                                                <h4 classname="slide_title">Cras pulvinar sodales</h4>
                                                                <div classname="slide_tags">
                                                                    <span classname="slide_tag">news</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div classname="sc_scroll_bar1 sc_scroll_bar_vertical" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div classname="sc_line sc_line_style_shadow margin_top_big" />
                            <div classname="row">
                                <div classname="col-md-6 col-sm-12">
                                    <div classname="sc_tabs sc_tabs_style_2" data-active={0}>
                                        <ul classname="sc_tabs_titles" role="tablist">
                                            <li classname="tab_names" role="tab">
                                                <a href="#tab5_popular" classname="theme_button" id="tab4_tab">POPULAR</a>
                                            </li>
                                            <li classname="tab_names" role="tab">
                                                <a href="#tab5_recent" classname="theme_button" id="tab5_tab">RECENT</a>
                                            </li>
                                            <li classname="tab_names" role="tab">
                                                <a href="#tab5_commented" classname="theme_button" id="tab6_tab">COMMENTED</a>
                                            </li>
                                        </ul>
                                        <div id="tab5_popular" classname="sc_tabs_content">
                                            <div classname="sc_blogger sc_blogger_vertical style_regular no_description">
                                                <article classname="sc_blogger_item">
                                                    <h4 classname="sc_blogger_title sc_title">
                                                        <a href="#">Morbi eget rutrum</a>
                                                    </h4>
                                                    <div classname="reviews_summary blog_reviews">
                                                        <div classname="criteria_summary criteria_row">
                                                            <div classname="ratingItem" data-mark="84.5">
                                                                <div classname="starDefault">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                                <div classname="starHover">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="sc_blogger_content" />
                                                    <div classname="sc_blogger_info">
                                                        by
                                                        <a href="#" classname="post_author">John Doe</a>
                                                        <span classname="separator">|</span>
                                                        Views
                                                        <span classname="comments_number">126</span>
                                                    </div>
                                                </article>
                                                <article classname="sc_blogger_item">
                                                    <h4 classname="sc_blogger_title sc_title">
                                                        <a href="#">Cras pulvinar sodales</a>
                                                    </h4>
                                                    <div classname="reviews_summary blog_reviews">
                                                        <div classname="criteria_summary criteria_row">
                                                            <div classname="ratingItem" data-mark="78.8">
                                                                <div classname="starDefault">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                                <div classname="starHover">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="sc_blogger_content" />
                                                    <div classname="sc_blogger_info">
                                                        by
                                                        <a href="#" classname="post_author">John Doe</a>
                                                        <span classname="separator">|</span>
                                                        Views
                                                        <span classname="comments_number">39</span>
                                                    </div>
                                                </article>
                                                <article classname="sc_blogger_item">
                                                    <h4 classname="sc_blogger_title sc_title">
                                                        <a href="#">Nulla ut dictum est</a>
                                                    </h4>
                                                    <div classname="reviews_summary blog_reviews">
                                                        <div classname="criteria_summary criteria_row">
                                                            <div classname="ratingItem" data-mark="87.8">
                                                                <div classname="starDefault">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                                <div classname="starHover">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="sc_blogger_content" />
                                                    <div classname="sc_blogger_info">
                                                        by
                                                        <a href="#" classname="post_author">John Doe</a>
                                                        <span classname="separator">|</span>
                                                        Views
                                                        <span classname="comments_number">33</span>
                                                    </div>
                                                </article>
                                                <article classname="sc_blogger_item">
                                                    <h4 classname="sc_blogger_title sc_title">
                                                        <a href="#">Donec elementum</a>
                                                    </h4>
                                                    <div classname="reviews_summary blog_reviews">
                                                        <div classname="criteria_summary criteria_row">
                                                            <div classname="ratingItem" data-mark="84.5">
                                                                <div classname="starDefault">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                                <div classname="starHover">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="sc_blogger_content" />
                                                    <div classname="sc_blogger_info">
                                                        by
                                                        <a href="#" classname="post_author">John Doe</a>
                                                        <span classname="separator">|</span>
                                                        Views
                                                        <span classname="comments_number">28</span>
                                                    </div>
                                                </article>
                                                <article classname="sc_blogger_item sc_blogger_item_last">
                                                    <h4 classname="sc_blogger_title sc_title">
                                                        <a href="#">Phasellus pulvinar</a>
                                                    </h4>
                                                    <div classname="reviews_summary blog_reviews">
                                                        <div classname="criteria_summary criteria_row">
                                                            <div classname="ratingItem" data-mark="79.3">
                                                                <div classname="starDefault">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                                <div classname="starHover">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="sc_blogger_content" />
                                                    <div classname="sc_blogger_info">
                                                        by
                                                        <a href="#" classname="post_author">John Doe</a>
                                                        <span classname="separator">|</span>
                                                        Views
                                                        <span classname="comments_number">26</span>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                        <div id="tab5_recent" classname="sc_tabs_content">
                                            <div classname="sc_blogger sc_blogger_vertical style_regular no_description">
                                                <article classname="sc_blogger_item">
                                                    <h4 classname="sc_blogger_title sc_title">
                                                        <a href="#">Nulla ut dictum est</a>
                                                    </h4>
                                                    <div classname="reviews_summary blog_reviews">
                                                        <div classname="criteria_summary criteria_row">
                                                            <div classname="ratingItem" data-mark="87.8">
                                                                <div classname="starDefault">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                                <div classname="starHover">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="sc_blogger_content" />
                                                    <div classname="sc_blogger_info">
                                                        by
                                                        <a href="#" classname="post_author">John Doe</a>
                                                        <span classname="separator">|</span>
                                                        Views
                                                        <span classname="comments_number">33</span>
                                                    </div>
                                                </article>
                                                <article classname="sc_blogger_item">
                                                    <h4 classname="sc_blogger_title sc_title">
                                                        <a href="#">Donec elementum</a>
                                                    </h4>
                                                    <div classname="reviews_summary blog_reviews">
                                                        <div classname="criteria_summary criteria_row">
                                                            <div classname="ratingItem" data-mark="84.5">
                                                                <div classname="starDefault">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                                <div classname="starHover">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="sc_blogger_content" />
                                                    <div classname="sc_blogger_info">
                                                        by
                                                        <a href="#" classname="post_author">John Doe</a>
                                                        <span classname="separator">|</span>
                                                        Views
                                                        <span classname="comments_number">28</span>
                                                    </div>
                                                </article>
                                                <article classname="sc_blogger_item">
                                                    <h4 classname="sc_blogger_title sc_title">
                                                        <a href="#">Morbi eget rutrum</a>
                                                    </h4>
                                                    <div classname="reviews_summary blog_reviews">
                                                        <div classname="criteria_summary criteria_row">
                                                            <div classname="ratingItem" data-mark="84.5">
                                                                <div classname="starDefault">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                                <div classname="starHover">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="sc_blogger_content" />
                                                    <div classname="sc_blogger_info">
                                                        by
                                                        <a href="#" classname="post_author">John Doe</a>
                                                        <span classname="separator">|</span>
                                                        Views
                                                        <span classname="comments_number">126</span>
                                                    </div>
                                                </article>
                                                <article classname="sc_blogger_item">
                                                    <h4 classname="sc_blogger_title sc_title">
                                                        <a href="#">Cras pulvinar sodales</a>
                                                    </h4>
                                                    <div classname="reviews_summary blog_reviews">
                                                        <div classname="criteria_summary criteria_row">
                                                            <div classname="ratingItem" data-mark="78.8">
                                                                <div classname="starDefault">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                                <div classname="starHover">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="sc_blogger_content" />
                                                    <div classname="sc_blogger_info">
                                                        by
                                                        <a href="#" classname="post_author">John Doe</a>
                                                        <span classname="separator">|</span>
                                                        Views
                                                        <span classname="comments_number">39</span>
                                                    </div>
                                                </article>
                                                <article classname="sc_blogger_item sc_blogger_item_last">
                                                    <h4 classname="sc_blogger_title sc_title">
                                                        <a href="#">Phasellus pulvinar</a>
                                                    </h4>
                                                    <div classname="reviews_summary blog_reviews">
                                                        <div classname="criteria_summary criteria_row">
                                                            <div classname="ratingItem" data-mark="79.3">
                                                                <div classname="starDefault">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                                <div classname="starHover">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="sc_blogger_content" />
                                                    <div classname="sc_blogger_info">
                                                        by
                                                        <a href="#" classname="post_author">John Doe</a>
                                                        <span classname="separator">|</span>
                                                        Views
                                                        <span classname="comments_number">26</span>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                        <div id="tab5_commented" classname="sc_tabs_content">
                                            <div classname="sc_blogger sc_blogger_vertical style_regular no_description">
                                                <article classname="sc_blogger_item">
                                                    <h4 classname="sc_blogger_title sc_title">
                                                        <a href="#">Morbi eget rutrum</a>
                                                    </h4>
                                                    <div classname="reviews_summary blog_reviews">
                                                        <div classname="criteria_summary criteria_row">
                                                            <div classname="ratingItem" data-mark="84.5">
                                                                <div classname="starDefault">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                                <div classname="starHover">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="sc_blogger_content" />
                                                    <div classname="sc_blogger_info">
                                                        by
                                                        <a href="#" classname="post_author">John Doe</a>
                                                        <span classname="separator">|</span>
                                                        Comments
                                                        <span classname="comments_number">126</span>
                                                    </div>
                                                </article>
                                                <article classname="sc_blogger_item">
                                                    <h4 classname="sc_blogger_title sc_title">
                                                        <a href="#">Cras pulvinar sodales</a>
                                                    </h4>
                                                    <div classname="reviews_summary blog_reviews">
                                                        <div classname="criteria_summary criteria_row">
                                                            <div classname="ratingItem" data-mark="78.8">
                                                                <div classname="starDefault">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                                <div classname="starHover">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="sc_blogger_content" />
                                                    <div classname="sc_blogger_info">
                                                        by
                                                        <a href="#" classname="post_author">John Doe</a>
                                                        <span classname="separator">|</span>
                                                        Comments
                                                        <span classname="comments_number">39</span>
                                                    </div>
                                                </article>
                                                <article classname="sc_blogger_item">
                                                    <h4 classname="sc_blogger_title sc_title">
                                                        <a href="#">Nulla ut dictum est</a>
                                                    </h4>
                                                    <div classname="reviews_summary blog_reviews">
                                                        <div classname="criteria_summary criteria_row">
                                                            <div classname="ratingItem" data-mark="87.8">
                                                                <div classname="starDefault">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                                <div classname="starHover">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="sc_blogger_content" />
                                                    <div classname="sc_blogger_info">
                                                        by
                                                        <a href="#" classname="post_author">John Doe</a>
                                                        <span classname="separator">|</span>
                                                        Views
                                                        <span classname="comments_number">33</span>
                                                    </div>
                                                </article>
                                                <article classname="sc_blogger_item">
                                                    <h4 classname="sc_blogger_title sc_title">
                                                        <a href="#">Donec elementum</a>
                                                    </h4>
                                                    <div classname="reviews_summary blog_reviews">
                                                        <div classname="criteria_summary criteria_row">
                                                            <div classname="ratingItem" data-mark="84.5">
                                                                <div classname="starDefault">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                                <div classname="starHover">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="sc_blogger_content" />
                                                    <div classname="sc_blogger_info">
                                                        by
                                                        <a href="#" classname="post_author">John Doe</a>
                                                        <span classname="separator">|</span>
                                                        Comments
                                                        <span classname="comments_number">28</span>
                                                    </div>
                                                </article>
                                                <article classname="sc_blogger_item sc_blogger_item_last">
                                                    <h4 classname="sc_blogger_title sc_title">
                                                        <a href="#">Phasellus pulvinar</a>
                                                    </h4>
                                                    <div classname="reviews_summary blog_reviews">
                                                        <div classname="criteria_summary criteria_row">
                                                            <div classname="ratingItem" data-mark="79.3">
                                                                <div classname="starDefault">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                                <div classname="starHover">
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                    <span classname="starReview" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div classname="sc_blogger_content" />
                                                    <div classname="sc_blogger_info">
                                                        by
                                                        <a href="#" classname="post_author">John Doe</a>
                                                        <span classname="separator">|</span>
                                                        Views
                                                        <span classname="comments_number">26</span>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div classname="sc_timeline timeline_s4 style_date sc_scroll_controls">
                                            <h2 classname="sc_title margin_bottom_small">Timeline</h2>
                                            <div id="swiper_container_16" classname="sc_scroll sc_scroll_vertical swiper-container_16">
                                                <div classname="sc_blogger sc_blogger_vertical style_date swiper-wrapper">
                                                    <div classname="sc_timeline_item sc_scroll_slide swiper-slide">
                                                        <article classname="sc_blogger_item">
                                                            <div classname="sc_blogger_date">
                                                                <span classname="day_month">08.03</span>
                                                                <span classname="year">2014</span>
                                                            </div>
                                                            <h4 classname="sc_blogger_title sc_title">
                                                                <a href="images_style_1.html">Maecenas tristique sem ante</a>
                                                            </h4>
                                                            <div classname="sc_blogger_info">
                                                                by
                                                                <a href="#" classname="post_author">John Doe</a>
                                                                <span classname="separator">|</span>
                                                                Views
                                                                <span classname="comments_number">1255</span>
                                                            </div>
                                                        </article>
                                                    </div>
                                                    <div classname="sc_timeline_item sc_scroll_slide swiper-slide">
                                                        <article classname="sc_blogger_item">
                                                            <div classname="sc_blogger_date">
                                                                <span classname="day_month">03.03</span>
                                                                <span classname="year">2014</span>
                                                            </div>
                                                            <h4 classname="sc_blogger_title sc_title">
                                                                <a href="images_style_2.html">Vivamus pharetra justo eget</a>
                                                            </h4>
                                                            <div classname="sc_blogger_info">
                                                                by
                                                                <a href="#" classname="post_author">John Doe</a>
                                                                <span classname="separator">|</span>
                                                                Views
                                                                <span classname="comments_number">798</span>
                                                            </div>
                                                        </article>
                                                    </div>
                                                    <div classname="sc_timeline_item sc_scroll_slide swiper-slide">
                                                        <article classname="sc_blogger_item">
                                                            <div classname="sc_blogger_date">
                                                                <span classname="day_month">28.02</span>
                                                                <span classname="year">2014</span>
                                                            </div>
                                                            <h4 classname="sc_blogger_title sc_title">
                                                                <a href="images_style_3.html">Sed orci odio</a>
                                                            </h4>
                                                            <div classname="sc_blogger_info">
                                                                by
                                                                <a href="#" classname="post_author">John Doe</a>
                                                                <span classname="separator">|</span>
                                                                Views
                                                                <span classname="comments_number">555</span>
                                                            </div>
                                                        </article>
                                                    </div>
                                                    <div classname="sc_timeline_item sc_scroll_slide swiper-slide">
                                                        <article classname="sc_blogger_item sc_blogger_item_last">
                                                            <div classname="sc_blogger_date">
                                                                <span classname="day_month">26.02</span>
                                                                <span classname="year">2014</span>
                                                            </div>
                                                            <h4 classname="sc_blogger_title sc_title">
                                                                <a href="images_style_1.html">Ut vitae lacus pretium</a>
                                                            </h4>
                                                            <div classname="sc_blogger_info">
                                                                by
                                                                <a href="#" classname="post_author">John Doe</a>
                                                                <span classname="separator">|</span>
                                                                Views
                                                                <span classname="comments_number">355</span>
                                                            </div>
                                                        </article>
                                                    </div>
                                                </div>
                                                <div classname="swiper-scrollbar16 sc_scroll_bar" />
                                            </div>
                                            <ul classname="flex-direction-nav">
                                                <li>
                                                    <div classname="swiper-button-prev16" />
                                                </li>
                                                <li>
                                                    <div classname="swiper-button-next16" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div classname="col-md-6 col-sm-12">
                                    <div classname="sc_blogger sc_blogger_vertical style_image style_image_large">
                                        <article classname="sc_blogger_item">
                                            <div classname="thumb">
                                                <a href="#">
                                                    <img alt="Donec elementum" src="img/11-400x225.jpg" />
                                                </a>
                                            </div>
                                            <h4 classname="sc_blogger_title sc_title">
                                                <a href="#">Donec elementum</a>
                                            </h4>
                                            <div classname="reviews_summary blog_reviews">
                                                <div classname="criteria_summary criteria_row">
                                                    <div classname="ratingItem" data-mark="84.5">
                                                        <div classname="starDefault">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                        <div classname="starHover">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div classname="sc_blogger_content">
                                                Donec vel elementum mi. Phasellus et pretium felis, sit amet malesuada odio. Nulla in quam ac diam consectetur aliquet vel et sapien. Phasellus...
                                            </div>
                                            <div classname="sc_blogger_info">
                                                <div classname="squareButton light ico sc_blogger_more">
                                                    <a classname="fa-link" title href="#">More</a>
                                                </div>
                                                <div classname="sc_blogger_author">
                                                    Posted by
                                                    <a href="#" classname="post_author">John Doe</a>
                                                    <span classname="separator">|</span>
                                                    Views
                                                    <span classname="comments_number">28</span>
                                                </div>
                                            </div>
                                        </article>
                                        <article classname="sc_blogger_item sc_blogger_item_last">
                                            <div classname="thumb">
                                                <a href="#">
                                                    <img alt="Cras pulvinar sodales" src="img/3-400x225.jpg" />
                                                </a>
                                            </div>
                                            <h4 classname="sc_blogger_title sc_title">
                                                <a href="#">Cras pulvinar sodales</a>
                                            </h4>
                                            <div classname="reviews_summary blog_reviews">
                                                <div classname="criteria_summary criteria_row">
                                                    <div classname="ratingItem" data-mark="64.5">
                                                        <div classname="starDefault">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                        <div classname="starHover">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div classname="sc_blogger_content">
                                                Integer elementum eros nisl, id fermentum tortor convallis vel. Cras pulvinar sodales placerat. Nulla diam justo, dictum sit amet elit sed...
                                            </div>
                                            <div classname="sc_blogger_info">
                                                <div classname="squareButton light ico sc_blogger_more">
                                                    <a classname="fa-link" title href="#">More</a>
                                                </div>
                                                <div classname="sc_blogger_author">
                                                    Posted by
                                                    <a href="#" classname="post_author">John Doe</a>
                                                    <span classname="separator">|</span>
                                                    Views
                                                    <span classname="comments_number">39</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            <div classname="sc_line sc_line_style_shadow margin_top_mini" />
                            <div classname="row">
                                <div classname="col-sm-12">
                                    <h2>Recent news</h2>
                                    <div classname="sc_blogger relatedPostWrap">
                                        <article classname="col-md-4 col-sm-6 margin_bottom_small">
                                            <div classname="thumb hoverIncrease" data-image="img/portfolio_item.jpg" data-title="Vivamus pharetra justo eget">
                                                <img alt="Vivamus pharetra justo eget" src="img/portfolio_item-400x225.jpg" />
                                            </div>
                                            <h4>
                                                <a href="#">Vivamus pharetra justo eget</a>
                                            </h4>
                                            <div classname="reviews_summary blog_reviews">
                                                <div classname="criteria_summary criteria_row">
                                                    <div classname="ratingItem" data-mark="84.5">
                                                        <div classname="starDefault">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                        <div classname="starHover">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Vivamus pharetra justo eget placerat commodo. Class aptent taciti sociosqu ad litora torquent...</p>
                                            <div classname="relatedInfo">
                                                Posted
                                                <a href="#" classname="post_date">March 3, 2014</a>
                                                <span classname="separator">|</span>
                                                <span classname="infoTags">
                                                    <a classname="tag_link" href="#">news</a>
                                                </span>
                                            </div>
                                            <div classname="relatedMore">
                                                <ul>
                                                    <li classname="squareButton light ico">
                                                        <a classname="fa-link" title="More" href="#">More</a>
                                                    </li>
                                                    <li classname="squareButton light ico">
                                                        <a classname="fa-comment" title="Comments - 0" href="#comments">0</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                        <article classname="col-md-4 col-sm-6 margin_bottom_small">
                                            <div classname="thumb hoverIncrease" data-image="img/9435123826_a4c3b35c08_o.jpg" data-title="Sed orci odio">
                                                <img alt="Sed orci odio" src="img/9435123826_a4c3b35c08_o-400x225.jpg" />
                                            </div>
                                            <h4>
                                                <a href="#">Sed orci odio</a>
                                            </h4>
                                            <div classname="reviews_summary blog_reviews">
                                                <div classname="criteria_summary criteria_row">
                                                    <div classname="ratingItem" data-mark="74.5">
                                                        <div classname="starDefault">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                        <div classname="starHover">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Sed orci odio, adipiscing vel libero eget, volutpat dictum orci. Donec eu euismod dui, nec...</p>
                                            <div classname="relatedInfo">
                                                Posted
                                                <a href="#" classname="post_date">February 28, 2014</a>
                                                <span classname="separator">|</span>
                                                <span classname="infoTags">
                                                    <a classname="tag_link" href="#">news</a>
                                                </span>
                                            </div>
                                            <div classname="relatedMore">
                                                <ul>
                                                    <li classname="squareButton light ico">
                                                        <a classname="fa-link" title="More" href="#">More</a>
                                                    </li>
                                                    <li classname="squareButton light ico">
                                                        <a classname="fa-comment" title="Comments - 0" href="#comments">0</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                        <article classname="col-md-4 col-sm-6 margin_bottom_small">
                                            <div classname="thumb hoverIncrease" data-image="img/portfolio16x9_2.jpg" data-title="Ut vitae lacus pretium">
                                                <img alt="Ut vitae lacus pretium" src="img/portfolio16x9_2-400x225.jpg" />
                                            </div>
                                            <h4>
                                                <a href="#">Ut vitae lacus pretium</a>
                                            </h4>
                                            <div classname="reviews_summary blog_reviews">
                                                <div classname="criteria_summary criteria_row">
                                                    <div classname="ratingItem" data-mark="34.5">
                                                        <div classname="starDefault">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                        <div classname="starHover">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Ut vitae lacus pretium, molestie massa a, placerat urna. Donec viverra nisl id nisl accumsan, ac...</p>
                                            <div classname="relatedInfo">
                                                Posted
                                                <a href="#" classname="post_date">February 26, 2014</a>
                                                <span classname="separator">|</span>
                                                <span classname="infoTags">
                                                    <a classname="tag_link" href="#">news</a>
                                                </span>
                                            </div>
                                            <div classname="relatedMore">
                                                <ul>
                                                    <li classname="squareButton light ico">
                                                        <a classname="fa-link" title="More" href="#">More</a>
                                                    </li>
                                                    <li classname="squareButton light ico">
                                                        <a classname="fa-comment" title="Comments - 0" href="#comments">0</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            <div classname="sc_line sc_line_style_shadow margin_top_mini margin_bottom_mini" />
                            <div classname="row">
                                <div classname="col-sm-12">
                                    <h2>Top news</h2>
                                    <div classname="sc_blogger relatedPostWrap">
                                        <article classname="col-md-4 col-sm-6 margin_bottom_small">
                                            <div classname="thumb hoverIncrease" data-image="img/portfolio_item.jpg" data-title="Vivamus pharetra justo eget">
                                                <img alt="Vivamus pharetra justo eget" src="img/portfolio_item-400x225.jpg" />
                                            </div>
                                            <h4>
                                                <a href="#">Vivamus pharetra justo eget</a>
                                            </h4>
                                            <div classname="reviews_summary blog_reviews">
                                                <div classname="criteria_summary criteria_row">
                                                    <div classname="ratingItem" data-mark="24.5">
                                                        <div classname="starDefault">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                        <div classname="starHover">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Vivamus pharetra justo eget placerat commodo. Class aptent taciti sociosqu ad litora torquent...</p>
                                            <div classname="relatedInfo">
                                                Posted
                                                <a href="#" classname="post_date">March 3, 2014</a>
                                                <span classname="separator">|</span>
                                                <span classname="infoTags">
                                                    <a classname="tag_link" href="#">news</a>
                                                </span>
                                            </div>
                                            <div classname="relatedMore">
                                                <ul>
                                                    <li classname="squareButton light ico">
                                                        <a classname="fa-link" title="More" href="#">More</a>
                                                    </li>
                                                    <li classname="squareButton light ico">
                                                        <a classname="fa-comment" title="Comments - 0" href="#comments">0</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                        <article classname="col-md-4 col-sm-6 margin_bottom_small">
                                            <div classname="thumb hoverIncrease" data-image="img/9435123826_a4c3b35c08_o.jpg" data-title="Sed orci odio">
                                                <img alt="Sed orci odio" src="img/9435123826_a4c3b35c08_o-400x225.jpg" />
                                            </div>
                                            <h4>
                                                <a href="#">Sed orci odio</a>
                                            </h4>
                                            <div classname="reviews_summary blog_reviews">
                                                <div classname="criteria_summary criteria_row">
                                                    <div classname="ratingItem" data-mark={100}>
                                                        <div classname="starDefault">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                        <div classname="starHover">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Sed orci odio, adipiscing vel libero eget, volutpat dictum orci. Donec eu euismod dui, nec...</p>
                                            <div classname="relatedInfo">
                                                Posted
                                                <a href="#" classname="post_date">February 28, 2014</a>
                                                <span classname="separator">|</span>
                                                <span classname="infoTags">
                                                    <a classname="tag_link" href="#">news</a>
                                                </span>
                                            </div>
                                            <div classname="relatedMore">
                                                <ul>
                                                    <li classname="squareButton light ico">
                                                        <a classname="fa-link" title="More" href="#">More</a>
                                                    </li>
                                                    <li classname="squareButton light ico">
                                                        <a classname="fa-comment" title="Comments - 0" href="#comments">0</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                        <article classname="col-md-4 col-sm-6 margin_bottom_small">
                                            <div classname="thumb hoverIncrease" data-image="img/portfolio16x9_2.jpg" data-title="Ut vitae lacus pretium">
                                                <img alt="Ut vitae lacus pretium" src="img/portfolio16x9_2-400x225.jpg" />
                                            </div>
                                            <h4>
                                                <a href="#">Ut vitae lacus pretium</a>
                                            </h4>
                                            <div classname="reviews_summary blog_reviews">
                                                <div classname="criteria_summary criteria_row">
                                                    <div classname="ratingItem" data-mark="94.5">
                                                        <div classname="starDefault">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                        <div classname="starHover">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Ut vitae lacus pretium, molestie massa a, placerat urna. Donec viverra nisl id nisl accumsan, ac...</p>
                                            <div classname="relatedInfo">
                                                Posted
                                                <a href="#" classname="post_date">February 26, 2014</a>
                                                <span classname="separator">|</span>
                                                <span classname="infoTags">
                                                    <a classname="tag_link" href="#">news</a>
                                                </span>
                                            </div>
                                            <div classname="relatedMore">
                                                <ul>
                                                    <li classname="squareButton light ico">
                                                        <a classname="fa-link" title="More" href="#">More</a>
                                                    </li>
                                                    <li classname="squareButton light ico">
                                                        <a classname="fa-comment" title="Comments - 0" href="#comments">0</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            <div classname="sc_line sc_line_style_shadow margin_top_mini" />
                            <div classname="row">
                                <div classname="col-sm-12">
                                    <h2>Recommended posts</h2>
                                    <div classname="sc_blogger relatedPostWrap">
                                        <article classname="col-md-4 col-sm-6 margin_bottom_small">
                                            <div classname="thumb hoverIncrease" data-image="img/portfolio_item.jpg" data-title="Vivamus pharetra justo eget">
                                                <img alt="Vivamus pharetra justo eget" src="img/portfolio_item-400x225.jpg" />
                                            </div>
                                            <h4>
                                                <a href="#">Vivamus pharetra justo eget</a>
                                            </h4>
                                            <div classname="reviews_summary blog_reviews">
                                                <div classname="criteria_summary criteria_row">
                                                    <div classname="ratingItem" data-mark="24.5">
                                                        <div classname="starDefault">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                        <div classname="starHover">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Vivamus pharetra justo eget placerat commodo. Class aptent taciti sociosqu ad litora torquent...</p>
                                            <div classname="relatedInfo">
                                                Posted
                                                <a href="#" classname="post_date">March 3, 2014</a>
                                                <span classname="separator">|</span>
                                                <span classname="infoTags">
                                                    <a classname="tag_link" href="#">news</a>
                                                </span>
                                            </div>
                                            <div classname="relatedMore">
                                                <ul>
                                                    <li classname="squareButton light ico">
                                                        <a classname="fa-link" title="More" href="#">More</a>
                                                    </li>
                                                    <li classname="squareButton light ico">
                                                        <a classname="fa-comment" title="Comments - 0" href="#comments">0</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                        <article classname="col-md-4 col-sm-6 margin_bottom_small">
                                            <div classname="thumb hoverIncrease" data-image="img/9435123826_a4c3b35c08_o.jpg" data-title="Sed orci odio">
                                                <img alt="Sed orci odio" src="img/9435123826_a4c3b35c08_o-400x225.jpg" />
                                            </div>
                                            <h4>
                                                <a href="#">Sed orci odio</a>
                                            </h4>
                                            <div classname="reviews_summary blog_reviews">
                                                <div classname="criteria_summary criteria_row">
                                                    <div classname="ratingItem" data-mark="64.5">
                                                        <div classname="starDefault">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                        <div classname="starHover">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Sed orci odio, adipiscing vel libero eget, volutpat dictum orci. Donec eu euismod dui, nec...</p>
                                            <div classname="relatedInfo">
                                                Posted
                                                <a href="#" classname="post_date">February 28, 2014</a>
                                                <span classname="separator">|</span>
                                                <span classname="infoTags">
                                                    <a classname="tag_link" href="#">news</a>
                                                </span>
                                            </div>
                                            <div classname="relatedMore">
                                                <ul>
                                                    <li classname="squareButton light ico">
                                                        <a classname="fa-link" title="More" href="#">More</a>
                                                    </li>
                                                    <li classname="squareButton light ico">
                                                        <a classname="fa-comment" title="Comments - 0" href="#comments">0</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                        <article classname="col-md-4 col-sm-6 margin_bottom_small">
                                            <div classname="thumb hoverIncrease" data-image="img/portfolio16x9_2.jpg" data-title="Ut vitae lacus pretium">
                                                <img alt="Ut vitae lacus pretium" src="img/portfolio16x9_2-400x225.jpg" />
                                            </div>
                                            <h4>
                                                <a href="#">Ut vitae lacus pretium</a>
                                            </h4>
                                            <div classname="reviews_summary blog_reviews">
                                                <div classname="criteria_summary criteria_row">
                                                    <div classname="ratingItem" data-mark="44.5">
                                                        <div classname="starDefault">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                        <div classname="starHover">
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                            <span classname="starReview" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Ut vitae lacus pretium, molestie massa a, placerat urna. Donec viverra nisl id nisl accumsan, ac...</p>
                                            <div classname="relatedInfo">
                                                Posted
                                                <a href="#" classname="post_date">February 26, 2014</a>
                                                <span classname="separator">|</span>
                                                <span classname="infoTags">
                                                    <a classname="tag_link" href="#">news</a>
                                                </span>
                                            </div>
                                            <div classname="relatedMore">
                                                <ul>
                                                    <li classname="squareButton light ico">
                                                        <a classname="fa-link" title="More" href="#">More</a>
                                                    </li>
                                                    <li classname="squareButton light ico">
                                                        <a classname="fa-comment" title="Comments - 0" href="#comments">0</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div classname="col-md-3 col-sm-12">
                            <div id="sidebar_main" classname="widget_area sidebar_main sidebar">
                                <aside classname="widgetWrap hrShadow widget widget_categories">
                                    <h3 classname="title">Categories</h3>
                                    <ul>
                                        <li classname="cat-item">
                                            <a href="categories_slider.html">Categories slider</a>
                                        </li>
                                        <li classname="cat-item">
                                            <a href="gallery_demo.html">Gallery demo</a>
                                        </li>
                                        <li classname="cat-item">
                                            <a href="homepage_style_4.html">Home style blog</a>
                                        </li>
                                        <li classname="cat-item dropMenu">
                                            <a href="blog_masonry_4_columns.html">Masonry demo</a>
                                            <ul classname="children">
                                                <li classname="cat-item">
                                                    <a href="blog_masonry_2_columns.html">2 columns</a>
                                                </li>
                                                <li classname="cat-item">
                                                    <a href="blog_masonry_2_columns_sidebar.html">2 columns + sidebar</a>
                                                </li>
                                                <li classname="cat-item">
                                                    <a href="blog_masonry_3_columns.html">3 columns</a>
                                                </li>
                                                <li classname="cat-item">
                                                    <a href="blog_masonry_3_columns_sidebar.html">3 columns + sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li classname="cat-item">
                                            <a href="blog_news_demo.html">News demo</a>
                                        </li>
                                        <li classname="cat-item dropMenu">
                                            <a href="portfolio_classic_4_columns.html">Portfolio Classic</a>
                                            <ul classname="children">
                                                <li classname="cat-item">
                                                    <a href="portfolio_classic_1_column_sidebar.html">1 column + sidebar</a>
                                                </li>
                                                <li classname="cat-item">
                                                    <a href="portfolio_classic_2_columns.html">2 columns</a>
                                                </li>
                                                <li classname="cat-item">
                                                    <a href="portfolio_classic_2_columns_sidebar.html">2 columns + sidebar</a>
                                                </li>
                                                <li classname="cat-item">
                                                    <a href="portfolio_classic_3_columns.html">3 columns</a>
                                                </li>
                                                <li classname="cat-item">
                                                    <a href="portfolio_classic_3_columns_sidebar.html">3 columns + sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li classname="cat-item dropMenu">
                                            <a href="portfolio_grid_4_columns.html">Portfolio Grid</a>
                                            <ul classname="children">
                                                <li classname="cat-item">
                                                    <a href="portfolio_grid_1_column.html">1 columns</a>
                                                </li>
                                                <li classname="cat-item">
                                                    <a href="portfolio_grid_2_columns.html">2 columns</a>
                                                </li>
                                                <li classname="cat-item">
                                                    <a href="portfolio_grid_3_columns.html">3 columns</a>
                                                </li>
                                                <li classname="cat-item">
                                                    <a href="portfolio_grid_4_columns.html">4 columns</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li classname="cat-item dropMenu">
                                            <a href="portfolio_masonry_4_columns.html">Portfolio Masonry</a>
                                            <ul classname="children">
                                                <li classname="cat-item">
                                                    <a href="portfolio_masonry_2_columns.html">2 columns</a>
                                                </li>
                                                <li classname="cat-item">
                                                    <a href="portfolio_masonry_2_columns_sidebar.html">2 columns + sidebar</a>
                                                </li>
                                                <li classname="cat-item">
                                                    <a href="portfolio_masonry_3_columns.html">3 columns</a>
                                                </li>
                                                <li classname="cat-item">
                                                    <a href="portfolio_masonry_3_columns_sidebar.html">3 columns + sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li classname="cat-item dropMenu">
                                            <a href="features_widgets.html">Post Formats</a>
                                            <ul classname="children">
                                                <li classname="cat-item">
                                                    <a href="features_post_formats.html">Post formats fullwidth</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li classname="cat-item">
                                            <a href="blog_timeline_style.html">Timeline example</a>
                                        </li>
                                    </ul>
                                </aside>
                                <aside classname="widgetWrap hrShadow widget widget_calendar">
                                    <h3 classname="title">Calendar</h3>
                                    <div>
                                        <table classname="calendar">
                                            <thead>
                                                <tr>
                                                    <th classname="prevMonth">
                                                        <div classname="left roundButton">
                                                            <a href="#" data-type="post" data-year={2014} data-month={5} title="View posts for May 2014" />
                                                        </div>
                                                    </th>
                                                    <th classname="curMonth" colSpan={5}>
                                                        <a href="#" title="View posts for July 2015">
                                                            July
                                                            <span>2015</span>
                                                        </a>
                                                    </th>
                                                    <th classname="nextMonth">
                                                        <div classname="right roundButton">
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
                                                    <td colSpan={2} classname="pad">&nbsp;</td>
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
                                                    <td classname="today">29</td>
                                                    <td>30</td>
                                                    <td>31</td>
                                                    <td classname="pad" colSpan={2}>&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </aside>
                                <aside classname="widgetWrap hrShadow widget widget_archive">
                                    <h3 classname="title">Archives</h3>
                                    <ul>
                                        <li>
                                            <a href="archives.html">
                                                May
                                                <span>2014</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                April
                                                <span>2014</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                March
                                                <span>2014</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                February
                                                <span>2014</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                January
                                                <span>2014</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                December <span>2013</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                November
                                                <span>2013</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                October
                                                <span>2013</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                September
                                                <span>2013</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="archives.html">
                                                August
                                                <span>2013</span>
                                            </a>
                                        </li>
                                    </ul>
                                </aside>
                                <aside classname="widgetWrap hrShadow widget widget_popular_posts">
                                    <h3 classname="title">Popular</h3>
                                    <div classname="popular_and_commented_tabs tabs_area">
                                        <ul classname="tabs" role="tablist">
                                            <li classname="squareButtonlite" role="tab" aria-controls="widget_popular_1">
                                                <a href="#widget_popular_1" classname="ui-tabs-anchor">Views</a>
                                            </li>
                                            <li classname="squareButtonlite" role="tab" aria-controls="widget_popular_2">
                                                <a href="#widget_popular_2" classname="ui-tabs-anchor">Comments</a>
                                            </li>
                                            <li classname="squareButtonlite" role="tab" aria-controls="widget_popular_3">
                                                <a href="#widget_popular_3">Likes</a>
                                            </li>
                                        </ul>
                                        <div classname="tab_content" id="widget_popular_1" role="tabpanel">
                                            <article classname="post_item no_thumb">
                                                <h5 classname="post_title">
                                                    <a href="images_style_1.html">Maecenas tristique sem ante</a>
                                                </h5>
                                                <div classname="post_info">
                                                    <span classname="post_date">March 8, 2014</span>
                                                    <span classname="post_comments">
                                                        <a href="images_style_1.html">
                                                            <span classname="comments_icon fa-eye" />
                                                            <span classname="post_comments_number">1258</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article classname="post_item no_thumb">
                                                <h5 classname="post_title">
                                                    <a href="images_style_2.html">Donec lacinia elementum nunc</a>
                                                </h5>
                                                <div classname="post_info">
                                                    <span classname="post_date">February 17, 2014</span>
                                                    <span classname="post_comments">
                                                        <a href="images_style_2.html">
                                                            <span classname="comments_icon fa-eye" />
                                                            <span classname="post_comments_number">1050</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article classname="post_item no_thumb">
                                                <h5 classname="post_title">
                                                    <a href="images_style_3.html">Vivamus pharetra justo</a>
                                                </h5>
                                                <div classname="post_info">
                                                    <span classname="post_date">March 15, 2014</span>
                                                    <span classname="post_comments">
                                                        <a href="images_style_3.html">
                                                            <span classname="comments_icon fa-eye" />
                                                            <span classname="post_comments_number">864</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article classname="post_item no_thumb">
                                                <h5 classname="post_title">
                                                    <a href="images_style_1.html">Unique Blog Style!</a>
                                                </h5>
                                                <div classname="post_info">
                                                    <span classname="post_date">February 25, 2014</span>
                                                    <span classname="post_comments">
                                                        <a href="images_style_1.html">
                                                            <span classname="comments_icon fa-eye" />
                                                            <span classname="post_comments_number">802</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article classname="post_item no_thumb">
                                                <h5 classname="post_title">
                                                    <a href="images_style_2.html">Vivamus pharetra justo eget</a>
                                                </h5>
                                                <div classname="post_info">
                                                    <span classname="post_date">March 3, 2014</span>
                                                    <span classname="post_comments">
                                                        <a href="images_style_2.html">
                                                            <span classname="comments_icon fa-eye" />
                                                            <span classname="post_comments_number">802</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article classname="post_item no_thumb">
                                                <h5 classname="post_title">
                                                    <a href="images_style_3.html">Audio post example with cover image</a>
                                                </h5>
                                                <div classname="post_info">
                                                    <span classname="post_date">February 22, 2014</span>
                                                    <span classname="post_comments">
                                                        <a href="images_style_3.html">
                                                            <span classname="comments_icon fa-eye" />
                                                            <span classname="post_comments_number">765</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                        </div>
                                        <div classname="tab_content" id="widget_popular_2" role="tabpanel">
                                            <article classname="post_item no_thumb">
                                                <h5 classname="post_title">
                                                    <a href="images_style_1.html">Unique Blog Style!</a>
                                                </h5>
                                                <div classname="post_info">
                                                    <span classname="post_date">February 25, 2014</span>
                                                    <span classname="post_comments">
                                                        <a href="images_style_1.html#comments">
                                                            <span classname="comments_icon fa-comment" />
                                                            <span classname="post_comments_number">4</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article classname="post_item no_thumb">
                                                <h5 classname="post_title">
                                                    <a href="images_style_1.html">Theme is easy to use with any type of displays</a>
                                                </h5>
                                                <div classname="post_info">
                                                    <span classname="post_date">February 24, 2014</span>
                                                    <span classname="post_comments">
                                                        <a href="images_style_1.html#comments">
                                                            <span classname="comments_icon fa-comment" />
                                                            <span classname="post_comments_number">1</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article classname="post_item no_thumb">
                                                <h5 classname="post_title">
                                                    <a href="images_style_2.html">Donec lacinia elementum nunc</a>
                                                </h5>
                                                <div classname="post_info">
                                                    <span classname="post_date">February 1, 2014</span>
                                                    <span classname="post_comments">
                                                        <a href="images_style_2.html#comments">
                                                            <span classname="comments_icon fa-comment" />
                                                            <span classname="post_comments_number">1</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article classname="post_item no_thumb">
                                                <h5 classname="post_title">
                                                    <a href="images_style_3.html">Ut vitae lacus pretium</a>
                                                </h5>
                                                <div classname="post_info">
                                                    <span classname="post_date">February 26, 2014</span>
                                                    <span classname="post_comments">
                                                        <a href="images_style_3.html#comments">
                                                            <span classname="comments_icon fa-comment" />
                                                            <span classname="post_comments_number">0</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article classname="post_item no_thumb">
                                                <h5 classname="post_title">
                                                    <a href="images_style_1.html">Sed orci odio</a>
                                                </h5>
                                                <div classname="post_info">
                                                    <span classname="post_date">February 28, 2014</span>
                                                    <span classname="post_comments">
                                                        <a href="images_style_1.html#comments">
                                                            <span classname="comments_icon fa-comment" />
                                                            <span classname="post_comments_number">0</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article classname="post_item no_thumb">
                                                <h5 classname="post_title">
                                                    <a href="images_style_2.html">Vivamus pharetra justo eget</a>
                                                </h5>
                                                <div classname="post_info">
                                                    <span classname="post_date">March 3, 2014</span>
                                                    <span classname="post_comments">
                                                        <a href="images_style_2.html#comments">
                                                            <span classname="comments_icon fa-comment" />
                                                            <span classname="post_comments_number">0</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                        </div>
                                        <div classname="tab_content" id="widget_popular_3" role="tabpanel">
                                            <article classname="post_item no_thumb">
                                                <h5 classname="post_title">
                                                    <a href="images_style_1.html">Unique Blog Style!</a>
                                                </h5>
                                                <div classname="post_info">
                                                    <span classname="post_date">February 25, 2014</span>
                                                    <span classname="post_comments">
                                                        <a href="images_style_1.html">
                                                            <span classname="comments_icon fa-heart" />
                                                            <span classname="post_comments_number">26</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article classname="post_item no_thumb">
                                                <h5 classname="post_title">
                                                    <a href="images_style_1.html">Maecenas tristique sem ante</a>
                                                </h5>
                                                <div classname="post_info">
                                                    <span classname="post_date">March 8, 2014</span>
                                                    <span classname="post_comments">
                                                        <a href="images_style_1.html">
                                                            <span classname="comments_icon fa-heart" />
                                                            <span classname="post_comments_number">11</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article classname="post_item no_thumb">
                                                <h5 classname="post_title">
                                                    <a href="images_style_1.html">Theme is easy to use with any type of displays</a>
                                                </h5>
                                                <div classname="post_info">
                                                    <span classname="post_date">February 24, 2014</span>
                                                    <span classname="post_comments">
                                                        <a href="images_style_1.html">
                                                            <span classname="comments_icon fa-heart" />
                                                            <span classname="post_comments_number">10</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article classname="post_item no_thumb">
                                                <h5 classname="post_title">
                                                    <a href="blog_post_standard_with_sidebar.html">Video post example</a>
                                                </h5>
                                                <div classname="post_info">
                                                    <span classname="post_date">February 23, 2014</span>
                                                    <span classname="post_comments">
                                                        <a href="blog_post_standard_with_sidebar.html">
                                                            <span classname="comments_icon fa-heart" />
                                                            <span classname="post_comments_number">8</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article classname="post_item no_thumb">
                                                <h5 classname="post_title">
                                                    <a href="images_style_2.html">Vivamus pharetra justo eget</a>
                                                </h5>
                                                <div classname="post_info">
                                                    <span classname="post_date">March 3, 2014</span>
                                                    <span classname="post_comments">
                                                        <a href="images_style_2.html">
                                                            <span classname="comments_icon fa-heart" />
                                                            <span classname="post_comments_number">7</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                            <article classname="post_item no_thumb">
                                                <h5 classname="post_title">
                                                    <a href="images_style_3.html">Audio post example with cover image</a>
                                                </h5>
                                                <div classname="post_info">
                                                    <span classname="post_date">February 22, 2014</span>
                                                    <span classname="post_comments">
                                                        <a href="images_style_3.html">
                                                            <span classname="comments_icon fa-heart" />
                                                            <span classname="post_comments_number">6</span>
                                                        </a>
                                                    </span>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </aside>
                                <aside classname="widgetWrap widget widget_recent_posts">
                                    <h3 classname="title">Recent posts</h3>
                                    <article classname="post_item with_thumb">
                                        <div classname="post_thumb">
                                            <img alt="Morbi eget rutrum" src="img/51-75x75.jpg" />
                                        </div>
                                        <h5 classname="post_title">
                                            <a href="images_style_1.html">Morbi eget rutrum</a>
                                        </h5>
                                        <div classname="post_info">
                                            <span classname="post_date">May 7, 2014</span>
                                            <span classname="post_author">by <a href="#">John Doe</a></span>
                                            <span classname="post_comments">
                                                <a href="images_style_1.html">
                                                    <span classname="comments_icon fa-eye" />
                                                    <span classname="post_comments_number">126</span>
                                                </a>
                                            </span>
                                        </div>
                                    </article>
                                    <article classname="post_item with_thumb">
                                        <div classname="post_thumb"><img alt="Duis tempus ac risus id fringilla" src="img/1-75x75.jpg" /></div>
                                        <h5 classname="post_title">
                                            <a href="images_style_2.html">Duis tempus ac risus id fringilla</a>
                                        </h5>
                                        <div classname="post_info">
                                            <span classname="post_date">May 6, 2014</span>
                                            <span classname="post_author">by <a href="#">John Doe</a></span>
                                            <span classname="post_comments">
                                                <a href="images_style_2.html">
                                                    <span classname="comments_icon fa-eye" />
                                                    <span classname="post_comments_number">64</span>
                                                </a>
                                            </span>
                                        </div>
                                    </article>
                                    <article classname="post_item with_thumb">
                                        <div classname="post_thumb"><img alt="Aenean at quam pharetra, aliquet odio at" src="img/2-75x75.jpg" /></div>
                                        <h5 classname="post_title">
                                            <a href="images_style_3.html">Aenean at quam pharetra, aliquet odio at</a>
                                        </h5>
                                        <div classname="post_info">
                                            <span classname="post_date">May 5, 2014</span>
                                            <span classname="post_author">by <a href="#">John Doe</a></span>
                                            <span classname="post_comments">
                                                <a href="images_style_3.html">
                                                    <span classname="comments_icon fa-eye" />
                                                    <span classname="post_comments_number">25</span>
                                                </a>
                                            </span>
                                        </div>
                                    </article>
                                    <article classname="post_item with_thumb">
                                        <div classname="post_thumb"><img alt="Cras pulvinar sodales placerat" src="img/3-75x75.jpg" /></div>
                                        <h5 classname="post_title">
                                            <a href="images_style_1.html">Cras pulvinar sodales placerat</a>
                                        </h5>
                                        <div classname="post_info">
                                            <span classname="post_date">May 4, 2014</span>
                                            <span classname="post_author">by <a href="#">John Doe</a></span>
                                            <span classname="post_comments">
                                                <a href="images_style_1.html">
                                                    <span classname="comments_icon fa-eye" />
                                                    <span classname="post_comments_number">40</span>
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