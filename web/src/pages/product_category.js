<section>
  <div className="container">
    <div className="row">
      <div className="col-md-9 col-sm-12">
        <nav className="woocommerce-breadcrumb">
          <a href="index.html">Home</a>&nbsp;/&nbsp;Action Figures
        </nav>
        <h1 className="page-title">Action Figures</h1>
        <div className="term-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="mode_buttons">
          <form action="shop_product_categories_list.html" method="post">
            <input type="hidden" name="themerex_shop_mode" defaultValue="thumbs" />
            <a href="shop_product_categories.html" className="woocommerce_thumbs fa-th" title="Show products as thumbs" />
            <a href="shop_product_categories_list.html" className="woocommerce_list fa-th-list" title="Show products as list" />
          </form>
        </div>
        <p className="woocommerce-result-count">Showing all 3 results</p>
        <form className="woocommerce-ordering" method="get">
          <select name="orderby" className="orderby">
            <option value="menu_order" selected="selected">Default sorting</option>
            <option value="popularity">Sort by popularity</option>
            <option value="rating">Sort by average rating</option>
            <option value="date">Sort by newness</option>
            <option value="price">Sort by price: low to high</option>
            <option value="price-desc">Sort by price: high to low</option>
          </select>
        </form>
        <ul className="products">
          <li className="product">
            <a href="shop_product.html">
              <img src="img/shop/The-Zoomer-Robot-Dog-Toy-1-250x250.jpg" className="attachment-shop_catalog" alt="The Zoomer Robot Dog Toy   1" />
              <h3>Zoomer Robot Dog</h3>
              <span className="price">
                <span className="amount">$89.99</span>
              </span>
            </a>
            <a href="shop_product.html" className="button add_to_cart_button product_type_simple">Add to cart</a>
          </li>
          <li className="product">
            <a href="shop_product.html">
              <img src="img/shop/Ty-Beanie-Boos-Fetch-the-Dalmatian-1-250x250.jpg" className="attachment-shop_catalog" alt="Ty Beanie Boos - Fetch the Dalmatian   1" />
              <h3>Ty Beanie Boos</h3>
              <span className="price">
                <span className="amount">$79.99</span>
              </span>
            </a>
            <a href="shop_product.html" className="button add_to_cart_button product_type_simple">Add to cart</a>
          </li>
          <li className="product">
            <a href="shop_product.html">
              <img src="img/shop/Teksta-Puppy-1-250x250.jpg" className="attachment-shop_catalog" alt="Teksta Puppy   1" />
              <h3>Teksta Puppy</h3>
              <span className="price">
                <span className="amount">$89.99</span>
              </span>
            </a>
            <a href="shop_product.html" className="button add_to_cart_button product_type_simple">Add to cart</a>
          </li>
        </ul>                    
      </div>
      <div className="col-md-3 col-sm-12">
        <div id="sidebar_main" className="widget_area sidebar_main sidebar" role="complementary">
          <aside className="widgetWrap hrShadow widget woocommerce widget_product_categories">
            <h3 className="title">Product Categories</h3>
            <ul className="product-categories">
              <li className="cat-item dropMenu">
                <a href="shop_product_categories.html">Action Figures</a>
                <span className="count">(3)</span>
                <ul className="children">
                  <li className="cat-item">
                    <a href="shop_product_categories.html">Robotic Toys</a>
                    <span className="count">(3)</span>
                  </li>
                </ul>
              </li>
              <li className="cat-item">
                <a href="shop_product_categories.html">Building Sets</a>
                <span className="count">(6)</span>
              </li>
              <li className="cat-item">
                <a href="shop_product_categories.html">Electronic Toys</a>
                <span className="count">(2)</span>
              </li>
              <li className="cat-item">
                <a href="shop_product_categories.html">Learning Toys</a>
                <span className="count">(3)</span>
              </li>
            </ul>
          </aside>
          <aside className="widgetWrap hrShadow widget woocommerce widget_product_search">
            <h3 className="title">Search Products</h3>
            <form method="get" className="search-form" action="#">
              <input type="text" className="search-field" placeholder="Search for products …" defaultValue name="s" title="Search for products:" />
              <span className="search-button squareButton light ico">
                <a className="search-field fa-search" href="#" />
              </span>
              <input type="hidden" name="post_type" defaultValue="product" />
            </form>
          </aside>
          <aside className="widgetWrap hrShadow widget woocommerce widget_price_filter">
            <h3 className="title">Filter by price</h3>
            <form method="get" action="shop_product_categories.html">
              <div className="price_slider_wrapper">
                <p>
                  <label htmlFor="amount">Price range:</label>
                </p>
                <div id="slider-range" className="price_slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><div className="ui-slider-range ui-widget-header ui-corner-all" style={{left: '0%', width: '100%'}} /><span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} style={{left: '0%'}} /><span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} style={{left: '100%'}} /></div>
                <div className="price_slider_amount">
                  <button type="submit" className="button">Filter</button>
                  <div className="price_label">
                    Price: 
                    <input type="text" id="amount" readOnly />
                  </div>
                </div>
              </div>
            </form>
          </aside>
          <aside className="widgetWrap widget woocommerce widget_product_tag_cloud">
            <h3 className="title">Product Tags</h3>
            <div className="tagcloud">
              <a href="#">Action Figure</a>
              <a href="#">building</a>
              <a href="#">lego</a>
              <a href="#">robotics</a>
              <a href="#">set</a>
              <a href="#">toys</a>
            </div>
          </aside> 
        </div>
      </div>
    </div>  
  </div>   
</section>
