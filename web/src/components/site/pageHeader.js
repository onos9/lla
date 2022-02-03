import React from 'react';

const PageHeader = () => {
    return (
        <header id="header" className="menu_right with_user_menu noFixMenu">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="topWrap">
                            <div className="usermenu_area">
                                <div className="container">
                                    <div className="menuUsItem menuItemRight">
                                        <ul id="usermenu" className="usermenu_list inited sf-js-enabled" style={{ display: 'block' }}>
                                            <li className="usermenu_cart">
                                                <a href="#" className="cart_button">
                                                    <span>Cart</span>
                                                    <b className="cart_total">
                                                        <span className="amount">$0.00</span>
                                                    </b>
                                                </a>
                                                <ul className="widget_area sidebar_cart sidebar" style={{ display: 'none' }}>
                                                    <li>
                                                        <aside className="widgetWrap widget woocommerce widget_shopping_cart">
                                                            <div className="hide_cart_widget_if_empty">
                                                                <div className="widget_shopping_cart_content">
                                                                    <ul className="cart_list product_list_widget ">
                                                                        <li className="empty">No products in the cart.</li>
                                                                    </ul>{/* end product list */}
                                                                </div>
                                                            </div>
                                                        </aside>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="usermenu_login">
                                                <a href="#user-popUp" className="user-popup-link fa fa-sign-in inited">Login</a>
                                            </li>
                                            <li className="usermenu_sound">
                                                <a href="#" className="fa-volume-up sf-with-ul" title="Sounds on/off" />
                                                <ul style={{ display: 'none' }}>
                                                    <li>
                                                        <a href="#" className="sound_mainmenu fa fa-close">Main Menu</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="sound_othermenu fa fa-close">Other Menus</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="sound_buttons fa fa-check">Buttons</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="sound_links fa fa-close">Regular links</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="menuUsItem menuItemLeft">Contact us on 0800 123 4567 or
                                        <a href="#">support@themerex.net</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="topWrap">
                            <div className="container">
                                <div className="mainmenu_area">
                                    <div className="logo logo_left with_text">
                                        <a href="index.html">
                                            <img src="img/logo/logo.png" className="logo_main" alt />
                                            <img src="img/logo/logo.png" className="logo_fixed" alt />
                                            <span className="logo_text">Kindergarten</span>
                                            <span className="logo_slogan">Premium Children HTML Theme</span>
                                        </a>
                                    </div>
                                    <div className="search" title="Open/close search form">
                                        <div className="searchForm">
                                            <form method="get" className="search-form" action="#">
                                                <button type="submit" className="searchSubmit" title="Start search">
                                                    <span className="icoSearch" />
                                                </button>
                                                <input type="text" className="searchField" placeholder="Search …" defaultValue name="s" title="Search for:" />
                                            </form>
                                        </div>
                                        <div className="ajaxSearchResults" />
                                    </div>
                                    <a href="#" className="openResponsiveMenu">Menu</a>
                                    <nav id="mainmenu_wrapper" className="menuTopWrap topMenuStyleLine">
                                        <ul id="mainmenu" className="nav sf-menu inited sf-js-enabled" style={{ display: 'block' }}>
                                            <li className="menu-item menu-item-object-page menu-item-has-children columns custom_view_item active">
                                                <a href="#" className>Home</a>
                                                <ul className="menu-panel columns" style={{ display: 'none', visibility: 'visible', left: 0 }}>
                                                    <li>
                                                        <ul className="custom-menu-style columns sub-menu" style={{ display: 'none', width: 566 }}>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children" style={{ height: 180 }}>
                                                                <a href="#" className>Layout Style</a>
                                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_standard.html">Standard</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_withsidebar.html">With Sidebar</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_parallax.html">Parallax</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_videobg.html">Video Background</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_withsidemenu.html">Side Menu</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children" style={{ height: 180 }}>
                                                                <a href="#" className>Topic Style</a>
                                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_style_1.html">Style 1</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_style_2.html">Style 2</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_style_3.html">Style 3</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                        <a href="homepage_style_4.html">Style 4</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_ecommerce.html">eCommerce</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children" style={{ height: 180 }}>
                                                                <a href="#" className>Header Style</a>
                                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_standard.html">Standard</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_hide_user_panel.html">Hide User Panel</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_fullscreen_slider.html">Fullscreen</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_parallax.html">Transparent</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_videobg.html">Video Header</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children" style={{ height: 180 }}>
                                                                <a href="#" className>Sliders</a>
                                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_standard.html">Layer Slider</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_fullscreen_slider.html">Layer Slider Fullscreen</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_posts_slider.html">Posts Slider</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_posts_slider_fullscreen.html">Posts Slider Fullscreen</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="homepage_style_3.html">Boxed slider</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor menu-item-has-children columns custom_view_item">
                                                <a href="#" className>Features</a>
                                                <ul className="menu-panel columns" style={{ display: 'none', visibility: 'visible', left: '76.0312px' }}>
                                                    <li>
                                                        <ul className="custom-menu-style columns sub-menu" style={{ display: 'none' }}>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children" style={{ height: 210 }}>
                                                                <a href="#" className>Toolbox</a>
                                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="features_typography.html">
                                                                            <span className="menu_icon fa fa-paint-brush" />
                                                                            Typography
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-post current-menu-item">
                                                                        <a href="features_shortcodes.html">
                                                                            <span className="menu_icon fa fa-tag" />
                                                                            Shortcodes
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                        <a href="features_post_formats.html">
                                                                            <span className="menu_icon fa fa-bookmark-o" />
                                                                            Post Formats
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                        <a href="features_widgets.html">
                                                                            <span className="menu_icon fa fa-image" />
                                                                            Widgets
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                        <a href="features_post_formats.html">
                                                                            <span className="menu_icon fa fa-copy" />
                                                                            Tabs Widgets
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                                                        <a href="doc/index.html">
                                                                            <span className="menu_icon fa fa-file-o" />
                                                                            Documentation
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children" style={{ height: 210 }}>
                                                                <a href="#" className>Pages</a>
                                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="features_about_us.html">
                                                                            <span className="menu_icon fa fa-info" />
                                                                            About Us
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="features_pricing_tables.html">
                                                                            <span className="menu_icon fa fa-money" />
                                                                            Pricing Tables
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="features_contact_us.html">
                                                                            <span className="menu_icon fa fa-phone" />
                                                                            Contact Us
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="features_faq.html">
                                                                            <span className="menu_icon fa fa-life-ring" />
                                                                            FAQ
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                                                        <a href="features_not_existing_page.html">
                                                                            <span className="menu_icon fa fa-bookmark" />
                                                                            Page 404
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-page">
                                                                        <a href="features_under_construction.html">
                                                                            <span className="menu_icon fa fa-cog" />
                                                                            Under Construction
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                                <a href="#" className>Portfolio</a>
                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                                        <a href="#" className>Classic Style</a>
                                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_classic_1_column.html">1 column</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_classic_2_columns.html">2 columns</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_classic_3_columns.html">3 columns</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_classic_4_columns.html">4 columns</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_classic_1_column_sidebar.html">1 column + sidebar</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_classic_2_columns_sidebar.html">2 columns + sidebar</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_classic_3_columns_sidebar.html">3 columns + sidebar</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                                        <a href="#" className>Masonry Style</a>
                                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_masonry_2_columns.html">2 columns</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_masonry_3_columns.html">3 columns</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_masonry_4_columns.html">4 columns</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_masonry_2_columns_sidebar.html">2 columns + sidebar</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_masonry_3_columns_sidebar.html">3 columns + sidebar</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                                        <a href="#" className>Grid style</a>
                                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_grid_2_columns.html">2 columns</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_grid_3_columns.html">3 columns</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_grid_4_columns.html">4 columns</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                                        <a href="#" className>Hovers</a>
                                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_hover_dir.html">Hover Dir</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_grid_4_columns.html">Hover Book</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_grid_2_columns.html">Hover Shift</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="portfolio_grid_3_columns.html">Hover Cube</a>
                                                            </li>
                                                            <li className="menu-item menu-item-object-page">
                                                                <a href="portfolio_hover_circle_20_effects.html">Hover Circle (20 effects)</a>
                                                            </li>
                                                            <li className="menu-item menu-item-object-page">
                                                                <a href="portfolio_hover_square_14_effects.html">Hover Square (14 effects)</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                                        <a href="#" className>Portfolio Post</a>
                                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                                                <a href="portfolio_post_standard.html">Standard</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                                                <a href="portfolio_post_fullscreen.html">Fullscreen</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                                <a href="#" className>Blog</a>
                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                                        <a href="#" className>Classic Style</a>
                                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="features_widgets.html">With sidebar</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="features_post_formats.html">Fullwidth blog</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                                        <a href="#" className>Masonry Style</a>
                                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="blog_masonry_2_columns.html">2 columns</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="blog_masonry_3_columns.html">3 columns</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="blog_masonry_4_columns.html">4 columns</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="blog_masonry_2_columns_sidebar.html">2 columns + sidebar</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                                <a href="blog_masonry_3_columns_sidebar.html">3 columns + sidebar</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                        <a href="blog_timeline_style.html">Timeline Style</a>
                                                    </li>
                                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                                        <a href="features_post_formats.html">Tabs Style</a>
                                                    </li>
                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                                        <a href="#" className>Blog Post</a>
                                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                                            <li className="menu-item menu-item-object-post">
                                                                <a href="blog_post_standard.html">Standard Post</a>
                                                            </li>
                                                            <li className="menu-item menu-item-object-post">
                                                                <a href="blog_post_standard_with_sidebar.html">Standard Post with Sidebar</a>
                                                            </li>
                                                            <li className="menu-item menu-item-object-post">
                                                                <a href="blog_post_review.html">Review post</a>
                                                            </li>
                                                            <li className="menu-item menu-item-object-post">
                                                                <a href="blog_post_review_with_sidebar.html">Review Post with Sidebar</a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                                                <a href="#" className>Gallery Post</a>
                                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                                    <li className="menu-item menu-item-object-post">
                                                                        <a href="blog_post_gallery_2_columns.html">2 columns</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-post">
                                                                        <a href="blog_post_gallery_3_columns.html">3 columns</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-post">
                                                                        <a href="blog_post_gallery_4_columns.html">4 columns</a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-object-post">
                                                                        <a href="blog_post_gallery_with_attachment.html">With Attachment Page</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children menu-item menu-item-object-page thumb_title custom_view_item">
                                                <a href="#" className>Shop</a>
                                                <ul className="menu-panel thumb_title" style={{ display: 'none', visibility: 'visible', width: 972, left: '-209.141px' }}>
                                                    <li>
                                                        <ul className="custom-menu-style thumb_title sub-menu" style={{ display: 'none' }}>
                                                            <li className="items_column">
                                                                <a href="shop_category.html" className>Robotic Toys</a>
                                                                <ul style={{ display: 'none' }}>
                                                                    <li>
                                                                        <a href="shop_product.html" data-pubdate="June 25, 2014" data-comments={0} data-thumb="img/menu/The-Zoomer-Robot-Dog-Toy-1-287x287.jpg">Zoomer Robot Dog</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop_product.html" data-pubdate="June 25, 2014" data-comments={0} data-thumb="img/menu/Ty-Beanie-Boos-Fetch-the-Dalmatian-1-287x287.jpg">Ty Beanie Boos</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop_product.html" data-pubdate="June 25, 2014" data-comments={0} data-thumb="img/menu/Teksta-Puppy-1-287x287.jpg">Teksta Puppy</a>
                                                                    </li>
                                                                </ul>
                                                                <div className="item_placeholder">
                                                                    <div className="thumb_wrap">
                                                                        <img width={287} height={287} alt="Zoomer Robot Dog" src="img/menu/The-Zoomer-Robot-Dog-Toy-1-287x287.jpg" />
                                                                    </div>
                                                                    <div className="item_info">
                                                                        <div className="item_pubdate">
                                                                            <span>Posted</span>
                                                                            &nbsp;
                                                                            <em>June 25, 2014</em>
                                                                        </div>
                                                                        <div className="item_comments">
                                                                            <span className="icon rt-icon-chat" />
                                                                            &nbsp;
                                                                            <em>0</em>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="items_column">
                                                                <a href="shop_category.html" className>Building Sets</a>
                                                                <ul style={{ display: 'none' }}>
                                                                    <li>
                                                                        <a href="shop_product.html" data-pubdate="June 25, 2014" data-comments={0} data-thumb="img/menu/Minecraft-The-Nether-1-287x287.jpg">Minecraft The Nether</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop_product.html" data-pubdate="June 25, 2014" data-comments={0} data-thumb="img/menu/Melting-Room-1-287x287.jpg">Melting Room</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop_product.html" data-pubdate="June 25, 2014" data-comments={0} data-thumb="img/menu/LEGO-Superheroes-1-287x287.jpg">Lego Superheroes</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop_product.html" data-pubdate="June 25, 2014" data-comments={0} data-thumb="img/menu/City-Great-Vehicles-1-287x287.jpg">City Great Vehicles</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop_product.html" data-pubdate="June 25, 2014" data-comments={0} data-thumb="img/menu/Builders-of-Tomorrow-1-287x287.jpg">Builders of Tomorrow</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop_product.html" data-pubdate="June 18, 2014" data-comments={0} data-thumb="img/menu/LEGO-Bricks-More-2-287x287.jpg">Bricks &amp; More</a>
                                                                    </li>
                                                                </ul>
                                                                <div className="item_placeholder">
                                                                    <div className="thumb_wrap">
                                                                        <img width={287} height={287} alt="Minecraft The Nether" src="img/menu/Minecraft-The-Nether-1-287x287.jpg" />
                                                                    </div>
                                                                    <div className="item_info">
                                                                        <div className="item_pubdate">
                                                                            <span>Posted</span>
                                                                            &nbsp;
                                                                            <em>June 25, 2014</em>
                                                                        </div>
                                                                        <div className="item_comments">
                                                                            <span className="icon rt-icon-chat" />
                                                                            &nbsp;
                                                                            <em>0</em>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children menu-item menu-item-type-taxonomy menu-item-object-category thumb custom_view_item">
                                                <a href="blog_masonry_4_columns.html" className>Images</a>
                                                <ul className="menu-panel thumb" style={{ display: 'none' }}>
                                                    <li>
                                                        <ul className="custom-menu-style thumb sub-menu" style={{ display: 'none' }}>
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
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default PageHeader;