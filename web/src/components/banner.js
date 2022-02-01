import React from "react"

const Banner = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="topWrap">
                        <div className="usermenu_area">
                            <div className="container">
                                <div className="menuUsItem menuItemRight">
                                    <ul id="usermenu" className="usermenu_list inited sf-js-enabled" style={{ display: 'block' }}>
                                        <li className="usermenu_cart"><a href="#" className="cart_button">
                                            <span>Cart</span><b className="cart_total"><span className="amount">$0.00</span></b></a>
                                            <ul className="widget_area sidebar_cart sidebar" style={{ display: 'none' }}>
                                                <li><aside className="widgetWrap widget woocommerce widget_shopping_cart">
                                                    <div className="hide_cart_widget_if_empty"><div className="widget_shopping_cart_content">
                                                        <ul className="cart_list product_list_widget ">
                                                            <li className="empty">No products in the cart.</li>
                                                        </ul>
                                                    </div>
                                                    </div></aside>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="usermenu_login"><a href="#user-popUp" className="user-popup-link fa-sign-in inited">Login</a></li>
                                        <li className="usermenu_sound"><a href="#" className="fa-volume-up sf-with-ul" title="Sounds on/off" />
                                            <ul style={{ display: 'none' }}><li><a href="#" className="sound_mainmenu fa fa-close">Main Menu</a></li>
                                                <li><a href="#" className="sound_othermenu fa fa-close">Other Menus</a></li>
                                                <li><a href="#" className="sound_buttons fa fa-check">Buttons</a></li>
                                                <li><a href="#" className="sound_links fa fa-close">Regular links</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="menuUsItem menuItemLeft">Contact us on 0800 123 4567 or<a href="#">support@themerex.net</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner