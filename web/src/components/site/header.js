import React from "react";
import NavBar from "../cms/navbar";

const Header = () => {
    return (
        <header id="header" className="menu_right with_user_menu noFixMenu">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="topWrap">
                            <div className="usermenu_area">
                                <div className="container">
                                    <div className="menuUsItem menuItemRight">
                                        <ul id="usermenu" className="usermenu_list sf-arrows">
                                            <li className="usermenu_cart">
                                                <a href="#" className="cart_button sf-with-ul">
                                                    <span>Cart</span>
                                                    <b className="cart_total">
                                                        <span className="amount">$0.00</span>
                                                    </b>
                                                </a>
                                                <ul className="widget_area sidebar_cart sidebar">
                                                    <li>
                                                        <aside className="widgetWrap widget woocommerce widget_shopping_cart">
                                                            <div className="hide_cart_widget_if_empty">
                                                                <div className="widget_shopping_cart_content">
                                                                    <ul className="cart_list product_list_widget ">
                                                                        <li className="empty">No products in the cart.</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </aside>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="usermenu_login">
                                                <a href="#user-popUp" className="user-popup-link fa-sign-in">Login</a>
                                            </li>
                                            <li className="usermenu_sound">
                                                <a href="#" className="fa-volume-up" title="Sounds on/off"></a>
                                                <ul>
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
            <NavBar />
        </header>
    )
}

export default Header