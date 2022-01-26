import React from "react";

const Header = () => {
    
        return <header id="header" class="menu_right with_user_menu noFixMenu">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="topWrap">
                        <div class="usermenu_area">
                            <div class="container">
                                <div class="menuUsItem menuItemRight">
                                    <ul id="usermenu" class="usermenu_list sf-arrows">
                                        <li class="usermenu_cart">
                                            <a href="#" class="cart_button sf-with-ul">
                                                <span>Cart</span> 
                                                <b class="cart_total">
                                                    <span class="amount">$0.00</span>
                                                </b>
                                            </a>
                                            <ul class="widget_area sidebar_cart sidebar">
                                                <li>
                                                    <aside class="widgetWrap widget woocommerce widget_shopping_cart">
                                                        <div class="hide_cart_widget_if_empty">
                                                            <div class="widget_shopping_cart_content">
                                                                <ul class="cart_list product_list_widget ">
                                                                    <li class="empty">No products in the cart.</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </aside>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="usermenu_login">
                                            <a href="#user-popUp" class="user-popup-link fa-sign-in">Login</a>
                                        </li>
                                        <li class="usermenu_sound">
                                            <a href="#" class="fa-volume-up" title="Sounds on/off"></a>
                                            <ul>
                                                <li>
                                                    <a href="#" class="sound_mainmenu fa fa-close">Main Menu</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sound_othermenu fa fa-close">Other Menus</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sound_buttons fa fa-check">Buttons</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="sound_links fa fa-close">Regular links</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                <div class="menuUsItem menuItemLeft">Contact us on 0800 123 4567 or 
                                    <a href="#">support@themerex.net</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="topWrap">
                            <div class="container">
                                <div class="mainmenu_area">
                                    <div class="logo logo_left with_text">
                                        <a href="index.html" >
                                            <img src="img/logo/logo.png" class="logo_main" alt="" />
                                            <img src="img/logo/logo.png" class="logo_fixed" alt=""/>
                                            <span class="logo_text">Kindergarten</span>
                                            <span class="logo_slogan">Premium Children HTML Theme</span>
                                        </a>
                                    </div>
                                    <div class="search" title="Open/close search form">
                                        <div class="searchForm">
                                            <form method="get" class="search-form" action="#">
                                                <button type="submit" class="searchSubmit" title="Start search">
                                                    <span class="icoSearch"></span>
                                                </button>
                                                <input type="text" class="searchField" placeholder="Search …" value="" name="s" title="Search for:"/>
                                            </form>
                                        </div>
                                        <div class="ajaxSearchResults"></div>
                                    </div>
                                    <a href="#" class="openResponsiveMenu">Menu</a>
                                    <nav id="mainmenu_wrapper" class="menuTopWrap topMenuStyleLine">
                                        <ul id="mainmenu" class="nav sf-menu sf-arrows">
                                            <li class="menu-item menu-item-has-children columns custom_view_item active">
                                                <a href="#" class="sf-with-ul">Home</a>
                                                <ul class="menu-panel columns">
                                                    <li>
                                                        <ul class="custom-menu-style columns sub-menu">
                                                            <li class="menu-item menu-item-has-children">
                                                                <a href="#" class="sf-with-ul">Layout Style</a>
                                                                <ul class="sub-menu">
                                                                    <li class="menu-item">
                                                                        <a href="homepage_standard.html">Standard</a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="homepage_withsidebar.html">With Sidebar</a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="homepage_parallax.html">Parallax</a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="homepage_videobg.html">Video Background</a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="homepage_withsidemenu.html">Side Menu</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="menu-item menu-item-has-children">
                                                                <a href="#" class="sf-with-ul">Topic Style</a>
                                                                <ul class="sub-menu">
                                                                    <li class="menu-item">
                                                                        <a href="homepage_style_1.html">Style 1</a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="homepage_style_2.html">Style 2</a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="homepage_style_3.html">Style 3</a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="homepage_style_4.html">Style 4</a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="homepage_ecommerce.html">eCommerce</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="menu-item menu-item-has-children">
                                                                <a href="#" class="sf-with-ul">Header Style</a>
                                                                <ul class="sub-menu">
                                                                    <li class="menu-item">
                                                                        <a href="homepage_standard.html">Standard</a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="homepage_hide_user_panel.html">Hide User Panel</a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="homepage_fullscreen_slider.html">Fullscreen</a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="homepage_parallax.html">Transparent</a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="homepage_videobg.html">Video Header</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="menu-item menu-item-has-children">
                                                                <a href="#" class="sf-with-ul">Sliders</a>
                                                                <ul class="sub-menu">
                                                                    <li class="menu-item">
                                                                        <a href="homepage_standard.html">Layer Slider</a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="homepage_fullscreen_slider.html">Layer Slider Fullscreen</a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="homepage_posts_slider.html">Posts Slider</a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="homepage_posts_slider_fullscreen.html">Posts Slider Fullscreen</a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="homepage_style_3.html">Boxed slider</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-item current-menu-ancestor menu-item-has-children columns custom_view_item">
                                                <a href="#" class="sf-with-ul">Features</a>
                                                <ul class="menu-panel columns">
                                                    <li>
                                                        <ul class="custom-menu-style columns sub-menu">
                                                            <li class="menu-item current-menu-ancestor current-menu-parent menu-item-has-children">
                                                                <a href="#" class="sf-with-ul">Toolbox</a>
                                                                <ul class="sub-menu">
                                                                    <li class="menu-item">
                                                                        <a href="features_typography.html">
                                                                            <span class="menu_icon fa-paint-brush"></span>
                                                                            Typography
                                                                        </a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="features_shortcodes.html">
                                                                            <span class="menu_icon fa-tag"></span>
                                                                            Shortcodes
                                                                        </a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="features_post_formats.html">
                                                                            <span class="menu_icon fa-bookmark-o"></span>
                                                                            Post Formats
                                                                        </a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="features_widgets.html">
                                                                            <span class="menu_icon fa-image"></span>
                                                                            Widgets
                                                                        </a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="features_post_formats.html">
                                                                            <span class="menu_icon fa-copy"></span>
                                                                            Tabs Widgets
                                                                        </a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="doc/index.html">
                                                                            <span class="menu_icon fa-file-o"></span>
                                                                            Documentation
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="menu-item menu-item-has-children">
                                                                <a href="#" class="sf-with-ul">Pages</a>
                                                                <ul class="sub-menu">
                                                                    <li class="menu-item">
                                                                        <a href="features_about_us.html">
                                                                            <span class="menu_icon fa-info"></span>
                                                                            About Us
                                                                        </a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="features_pricing_tables.html">
                                                                            <span class="menu_icon fa-money"></span>
                                                                            Pricing Tables
                                                                        </a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="features_contact_us.html">
                                                                            <span class="menu_icon fa-phone"></span>
                                                                            Contact Us
                                                                        </a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="features_faq.html">
                                                                            <span class="menu_icon fa-life-ring"></span>
                                                                            FAQ
                                                                        </a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="features_not_existing_page.html">
                                                                            <span class="menu_icon fa-bookmark"></span>
                                                                            Page 404
                                                                        </a>
                                                                    </li>
                                                                    <li class="menu-item">
                                                                        <a href="features_under_construction.html">
                                                                            <span class="menu_icon fa-cog"></span>
                                                                            Under Construction
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-item menu-item-has-children">
                                                <a href="#" class="sf-with-ul">Portfolio</a>
                                                <ul class="sub-menu">
                                                    <li class="menu-item menu-item-has-children">
                                                        <a href="#" class="sf-with-ul">Classic Style</a>
                                                        <ul class="sub-menu">
                                                            <li class="menu-item">
                                                                <a href="portfolio_classic_1_column.html">1 column</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio_classic_2_columns.html">2 columns</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio_classic_3_columns.html">3 columns</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio_classic_4_columns.html">4 columns</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio_classic_1_column_sidebar.html">1 column + sidebar</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio_classic_2_columns_sidebar.html">2 columns + sidebar</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio_classic_3_columns_sidebar.html">3 columns + sidebar</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-item menu-item-has-children">
                                                        <a href="#" class="sf-with-ul">Masonry Style</a>
                                                        <ul class="sub-menu">
                                                            <li class="menu-item">
                                                                <a href="portfolio_masonry_2_columns.html">2 columns</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio_masonry_3_columns.html">3 columns</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio_masonry_4_columns.html">4 columns</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio_masonry_2_columns_sidebar.html">2 columns + sidebar</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio_masonry_3_columns_sidebar.html">3 columns + sidebar</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-item menu-item-has-children">
                                                        <a href="#" class="sf-with-ul">Grid style</a>
                                                        <ul class="sub-menu">
                                                            <li class="menu-item">
                                                                <a href="portfolio_grid_2_columns.html">2 columns</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio_grid_3_columns.html">3 columns</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio_grid_4_columns.html">4 columns</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-item menu-item-has-children">
                                                        <a href="#" class="sf-with-ul">Hovers</a>
                                                        <ul class="sub-menu">
                                                            <li class="menu-item">
                                                                <a href="portfolio_hover_dir.html">Hover Dir</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio_grid_4_columns.html">Hover Book</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio_grid_2_columns.html">Hover Shift</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio_grid_3_columns.html">Hover Cube</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio_hover_circle_20_effects.html">Hover Circle (20 effects)</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="portfolio_hover_square_14_effects.html">Hover Square (14 effects)</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-item menu-item-has-children">
                                                        <a href="#" class="sf-with-ul">Portfolio Post</a>
                                                        <ul class="sub-menu">
                                                        <li class="menu-item">
                                                        <a href="portfolio_post_standard.html">Standard</a>
                                                        </li>
                                                        <li class="menu-item">
                                                        <a href="portfolio_post_fullscreen.html">Fullscreen</a>
                                                        </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-item menu-item-has-children">
                                                <a href="#" class="sf-with-ul">Blog</a>
                                                <ul class="sub-menu">
                                                    <li class="menu-item menu-item-has-children">
                                                        <a href="#" class="sf-with-ul">Classic Style</a>
                                                        <ul class="sub-menu">
                                                            <li class="menu-item">
                                                                <a href="features_widgets.html">With sidebar</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="features_post_formats.html">Fullwidth blog</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-item menu-item-has-children">
                                                        <a href="#" class="sf-with-ul">Masonry Style</a>
                                                        <ul class="sub-menu">
                                                            <li class="menu-item">
                                                            <a href="blog_masonry_2_columns.html">2 columns</a>
                                                            </li>
                                                            <li class="menu-item">
                                                            <a href="blog_masonry_3_columns.html">3 columns</a>
                                                            </li>
                                                            <li class="menu-item">
                                                            <a href="blog_masonry_4_columns.html">4 columns</a>
                                                            </li>
                                                            <li class="menu-item">
                                                            <a href="blog_masonry_2_columns_sidebar.html">2 columns + sidebar</a>
                                                            </li>
                                                            <li class="menu-item">
                                                            <a href="blog_masonry_3_columns_sidebar.html">3 columns + sidebar</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="blog_timeline_style.html">Timeline Style</a>
                                                    </li>
                                                    <li class="menu-item">
                                                        <a href="features_post_formats.html">Tabs Style</a>
                                                    </li>
                                                    <li class="menu-item menu-item-has-children">
                                                        <a href="#" class="sf-with-ul">Blog Post</a>
                                                        <ul class="sub-menu">
                                                            <li class="menu-item menu-item-object-post">
                                                                <a href="blog_post_standard.html">Standard Post</a>
                                                            </li>
                                                            <li class="menu-item menu-item-object-post">
                                                                <a href="blog_post_standard_with_sidebar.html">Standard Post with Sidebar</a>
                                                            </li>
                                                            <li class="menu-item menu-item-object-post">
                                                                <a href="blog_post_review.html">Review post</a>
                                                            </li>
                                                            <li class="menu-item menu-item-object-post">
                                                                <a href="blog_post_review_with_sidebar.html">Review Post with Sidebar</a>
                                                            </li>
                                                            <li class="menu-item menu-item-has-children">
                                                                <a href="#" class="sf-with-ul">Gallery Post</a>
                                                                <ul class="sub-menu">
                                                                    <li class="menu-item menu-item-object-post">
                                                                        <a href="blog_post_gallery_2_columns.html">2 columns</a>
                                                                    </li>
                                                                    <li class="menu-item menu-item-object-post">
                                                                        <a href="blog_post_gallery_3_columns.html">3 columns</a>
                                                                    </li>
                                                                    <li class="menu-item menu-item-object-post">
                                                                        <a href="blog_post_gallery_4_columns.html">4 columns</a>
                                                                    </li>
                                                                    <li class="menu-item menu-item-object-post">
                                                                        <a href="blog_post_gallery_with_attachment.html">With Attachment Page</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children menu-item thumb_title custom_view_item">
                                                <a href="#" class="sf-with-ul">Shop</a>
                                                <ul class="menu-panel thumb_title">
                                                    <li>
                                                        <ul class="custom-menu-style thumb_title sub-menu">
                                                            <li class="items_column">
                                                                <a href="shop_category.html" class="sf-with-ul">Robotic Toys</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="shop_product.html" data-pubdate="June 25, 2014" data-comments="0" data-thumb="img/menu/The-Zoomer-Robot-Dog-Toy-1-287x287.jpg">Zoomer Robot Dog</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop_product.html" data-pubdate="June 25, 2014" data-comments="0" data-thumb="img/menu/Ty-Beanie-Boos-Fetch-the-Dalmatian-1-287x287.jpg">Ty Beanie Boos</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop_product.html" data-pubdate="June 25, 2014" data-comments="0" data-thumb="img/menu/Teksta-Puppy-1-287x287.jpg">Teksta Puppy</a>
                                                                    </li>
                                                                </ul>
                                                                <div class="item_placeholder">
                                                                    <div class="thumb_wrap">
                                                                        <img width="287" height="287" alt="Zoomer Robot Dog" src="img/menu/The-Zoomer-Robot-Dog-Toy-1-287x287.jpg"/>
                                                                    </div>
                                                                    <div class="item_info">
                                                                        <div class="item_pubdate">
                                                                            <span>Posted</span>
                                                                            &nbsp;
                                                                            <em>June 25, 2014</em>
                                                                        </div>
                                                                        <div class="item_comments">
                                                                            <span class="icon rt-icon-chat"></span>
                                                                            &nbsp;
                                                                            <em>0</em>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="items_column">
                                                                <a href="shop_category.html" class="sf-with-ul">Building Sets</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="shop_product.html" data-pubdate="June 25, 2014" data-comments="0" data-thumb="img/menu/Minecraft-The-Nether-1-287x287.jpg">Minecraft The Nether</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop_product.html" data-pubdate="June 25, 2014" data-comments="0" data-thumb="img/menu/Melting-Room-1-287x287.jpg">Melting Room</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop_product.html" data-pubdate="June 25, 2014" data-comments="0" data-thumb="img/menu/LEGO-Superheroes-1-287x287.jpg">Lego Superheroes</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop_product.html" data-pubdate="June 25, 2014" data-comments="0" data-thumb="img/menu/City-Great-Vehicles-1-287x287.jpg">City Great Vehicles</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop_product.html" data-pubdate="June 25, 2014" data-comments="0" data-thumb="img/menu/Builders-of-Tomorrow-1-287x287.jpg">Builders of Tomorrow</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop_product.html" data-pubdate="June 18, 2014" data-comments="0" data-thumb="img/menu/LEGO-Bricks-More-2-287x287.jpg">Bricks &amp; More</a>
                                                                    </li>
                                                                </ul>
                                                                <div class="item_placeholder">
                                                                    <div class="thumb_wrap">
                                                                        <img width="287" height="287" alt="Minecraft The Nether" src="img/menu/Minecraft-The-Nether-1-287x287.jpg"/>
                                                                    </div>
                                                                    <div class="item_info">
                                                                        <div class="item_pubdate">
                                                                            <span>Posted</span>
                                                                            &nbsp;
                                                                            <em>June 25, 2014</em>
                                                                        </div>
                                                                        <div class="item_comments">
                                                                            <span class="icon rt-icon-chat"></span>
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
                                            <li class="menu-item-has-children menu-item thumb custom_view_item">
                                                <a href="blog_masonry_4_columns.html" class="sf-with-ul">Images</a>
                                                <ul class="menu-panel thumb">
                                                    <li>
                                                        <ul class="custom-menu-style thumb sub-menu">
                                                            <li>
                                                                <a href="images_style_1.html" data-author="John Doe" data-pubdate="March 8, 2014" data-thumb="img/menu/masonry6-400x266.jpg" data-title="Maecenas tristique sem ante" data-link="images_style_3.html">
                                                                    <img width="75" height="75" alt="Maecenas tristique sem ante" src="img/menu/masonry6-75x75.jpg"/>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="images_style_2.html" data-author="John Doe" data-pubdate="March 3, 2014" data-thumb="img/menu/portfolio_item-400x257.jpg" data-title="Vivamus pharetra justo eget" data-link="images_style_3.html">
                                                                    <img width="75" height="75" alt="Vivamus pharetra justo eget" src="img/menu/portfolio_item-75x75.jpg"/>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="images_style_3.html" data-author="John Doe" data-pubdate="February 28, 2014" data-thumb="img/menu/9435123826_a4c3b35c08_o-400x266.jpg" data-title="Sed orci odio" data-link="images_style_3.html">
                                                                    <img width="75" height="75" alt="Sed orci odio" src="img/menu/9435123826_a4c3b35c08_o-75x75.jpg"/>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="images_style_1.html" data-author="John Doe" data-pubdate="February 26, 2014" data-thumb="img/menu/portfolio16x9_2-400x300.jpg" data-title="Ut vitae lacus pretium" data-link="images_style_3.html">
                                                                    <img width="75" height="75" alt="Ut vitae lacus pretium" src="img/menu/portfolio16x9_2-75x75.jpg"/>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="images_style_2.html" data-author="John Doe" data-pubdate="February 20, 2014" data-thumb="img/menu/masonry4-400x300.jpg" data-title="Duis consequat arcu et lacus" data-link="images_style_3.html">
                                                                    <img width="75" height="75" alt="Duis consequat arcu et lacus" src="img/menu/masonry4-75x75.jpg"/>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="blog_post_review.html" data-author="John Doe" data-pubdate="February 19, 2014" data-thumb="img/menu/masonry3-400x266.jpg" data-title="Proin vel odio eu velit pellentesque al" data-link="images_style_3.html">
                                                                    <img width="75" height="75" alt="Proin vel odio eu velit pellentesque al" src="img/menu/masonry3-75x75.jpg"/>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="images_style_3.html" data-author="John Doe" data-pubdate="February 18, 2014" data-thumb="img/menu/masonry12-400x266.jpg" data-title="Duis facilisis enim quis tortor" data-link="images_style_3.html">
                                                                    <img width="75" height="75" alt="Duis facilisis enim quis tortor" src="img/menu/masonry12-75x75.jpg"/>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="images_style_1.html" data-author="John Doe" data-pubdate="February 17, 2014" data-thumb="img/menu/masonry1-400x266.jpg" data-title="Lorem ipsum dolor sit amet" data-link="images_style_3.html">
                                                                    <img width="75" height="75" alt="Lorem ipsum dolor sit amet" src="img/menu/masonry1-75x75.jpg"/>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="images_style_2.html" data-author="John Doe" data-pubdate="February 16, 2014" data-thumb="img/menu/Depositphotos_34399519_original-400x266.jpg" data-title="Curabitur auctor adipiscing risus sed ornare" data-link="images_style_3.html">
                                                                    <img width="75" height="75" alt="Curabitur auctor adipiscing risus sed ornare" src="img/menu/Depositphotos_34399519_original-75x75.jpg"/>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="images_style_3.html" data-author="John Doe" data-pubdate="February 5, 2014" data-thumb="img/menu/masonry10-400x266.jpg" data-title="Etiam faucibus euismod sapien" data-link="images_style_3.html">
                                                                    <img width="75" height="75" alt="Etiam faucibus euismod sapien" src="img/menu/masonry10-75x75.jpg"/>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <div class="item_placeholder">
                                                            <div class="thumb_wrap">
                                                                <img width="400" alt="Maecenas tristique sem ante" src="img/menu/masonry6-400x266.jpg" />
                                                            </div>
                                                            <h4 class="item_title">
                                                                <a href="images_style_3.html">Maecenas tristique sem ante</a>
                                                            </h4>
                                                            <div class="item_info">
                                                                <div class="item_pubdate">
                                                                    <span>Posted</span>
                                                                    &nbsp;
                                                                    <em>March 8, 2014</em>
                                                                </div>
                                                                <div class="item_author">
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
}

export default Header