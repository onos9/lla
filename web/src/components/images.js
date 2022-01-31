import React from "react"

const Images = () => {
    return (
        <ul className="menu-panel thumb">
            <li>
                <ul className="custom-menu-style thumb sub-menu">
                    <li>
                        <a href="images_style_1.html" data-author="John Doe" data-pubdate="March 8, 2014" data-thumb="img/menu/masonry6-400x266.jpg" data-title="Maecenas tristique sem ante" data-link="images_style_3.html">
                            <img width={75} height={75} alt="Maecenas tristique sem ante" src="img/menu/masonry6-75x75.jpg" />
                        </a>
                    </li>
                    <li>
                        <a href="images_style_2.html" data-author="John Doe" data-pubdate="March 3, 2014" data-thumb="img/menu/portfolio_item-400x257.jpg" data-title="Vivamus pharetra justo eget" data-link="images_style_3.html">
                            <img width={75} height={75} alt="Vivamus pharetra justo eget" src="img/menu/portfolio_item-75x75.jpg" />
                        </a>
                    </li>
                    <li>
                        <a href="images_style_3.html" data-author="John Doe" data-pubdate="February 28, 2014" data-thumb="img/menu/9435123826_a4c3b35c08_o-400x266.jpg" data-title="Sed orci odio" data-link="images_style_3.html">
                            <img width={75} height={75} alt="Sed orci odio" src="img/menu/9435123826_a4c3b35c08_o-75x75.jpg" />
                        </a>
                    </li>
                    <li>
                        <a href="images_style_1.html" data-author="John Doe" data-pubdate="February 26, 2014" data-thumb="img/menu/portfolio16x9_2-400x300.jpg" data-title="Ut vitae lacus pretium" data-link="images_style_3.html">
                            <img width={75} height={75} alt="Ut vitae lacus pretium" src="img/menu/portfolio16x9_2-75x75.jpg" />
                        </a>
                    </li>
                    <li>
                        <a href="images_style_2.html" data-author="John Doe" data-pubdate="February 20, 2014" data-thumb="img/menu/masonry4-400x300.jpg" data-title="Duis consequat arcu et lacus" data-link="images_style_3.html">
                            <img width={75} height={75} alt="Duis consequat arcu et lacus" src="img/menu/masonry4-75x75.jpg" />
                        </a>
                    </li>
                    <li>
                        <a href="blog_post_review.html" data-author="John Doe" data-pubdate="February 19, 2014" data-thumb="img/menu/masonry3-400x266.jpg" data-title="Proin vel odio eu velit pellentesque al" data-link="images_style_3.html">
                            <img width={75} height={75} alt="Proin vel odio eu velit pellentesque al" src="img/menu/masonry3-75x75.jpg" />
                        </a>
                    </li>
                    <li>
                        <a href="images_style_3.html" data-author="John Doe" data-pubdate="February 18, 2014" data-thumb="img/menu/masonry12-400x266.jpg" data-title="Duis facilisis enim quis tortor" data-link="images_style_3.html">
                            <img width={75} height={75} alt="Duis facilisis enim quis tortor" src="img/menu/masonry12-75x75.jpg" />
                        </a>
                    </li>
                    <li>
                        <a href="images_style_1.html" data-author="John Doe" data-pubdate="February 17, 2014" data-thumb="img/menu/masonry1-400x266.jpg" data-title="Lorem ipsum dolor sit amet" data-link="images_style_3.html">
                            <img width={75} height={75} alt="Lorem ipsum dolor sit amet" src="img/menu/masonry1-75x75.jpg" />
                        </a>
                    </li>
                    <li>
                        <a href="images_style_2.html" data-author="John Doe" data-pubdate="February 16, 2014" data-thumb="img/menu/Depositphotos_34399519_original-400x266.jpg" data-title="Curabitur auctor adipiscing risus sed ornare" data-link="images_style_3.html">
                            <img width={75} height={75} alt="Curabitur auctor adipiscing risus sed ornare" src="img/menu/Depositphotos_34399519_original-75x75.jpg" />
                        </a>
                    </li>
                    <li>
                        <a href="images_style_3.html" data-author="John Doe" data-pubdate="February 5, 2014" data-thumb="img/menu/masonry10-400x266.jpg" data-title="Etiam faucibus euismod sapien" data-link="images_style_3.html">
                            <img width={75} height={75} alt="Etiam faucibus euismod sapien" src="img/menu/masonry10-75x75.jpg" />
                        </a>
                    </li>
                </ul>
                <div className="item_placeholder">
                    <div className="thumb_wrap">
                        <img width={400} alt="Maecenas tristique sem ante" src="img/menu/masonry6-400x266.jpg" />
                    </div>
                    <h4 className="item_title">
                        <a href="images_style_3.html">Maecenas tristique sem ante</a>
                    </h4>
                    <div className="item_info">
                        <div className="item_pubdate">
                            <span>Posted</span>
                            &nbsp;
                            <em>March 8, 2014</em>
                        </div>
                        <div className="item_author">
                            <span>by</span>
                            &nbsp;
                            <em>John Doe</em>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default Images