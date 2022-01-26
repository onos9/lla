import React from "react";

const Footer = () => {
    return <section className="footerContentWrap">
            <footer className="footerWrap footerStyleDark">
                <div className="container footerWidget widget_area">
                    <div className="row columnsWrap">
                    <aside className="col-md-3 col-sm-6 widgetWrap widget widget_advert">
                        <div className="widget_advert_inner">
                            <h3 className="sc_title sc_title_iconed">
                                <span className="sc_title_image sc_title_left sc_size_small">
                                    <img src="img/logo/logo.png" alt="" />
                                </span>
                                Kindergarten
                            </h3>
                            <br></br> 
                            <div className="sc_video_player" data-width="100%" data-height="150" data-last-width="250">
                                <div className="sc_video_frame sc_video_play_button" data-video="<iframe className=&quot;video_frame&quot; src=&quot;http://www.youtube.com/embed/636Dp8eHWnM?autoplay=1&quot; width=&quot;100%&quot; height=&quot;150&quot; frameborder=&quot;0&quot; webkitAllowFullScreen=&quot;webkitAllowFullScreen&quot; mozallowfullscreen=&quot;mozallowfullscreen&quot; allowFullScreen=&quot;allowFullScreen&quot;></iframe>" style={{opacity: 1}}>
                                    <img alt="" src="img/portfolio16x9_13-212x150.jpg"/>
                                </div>
                            </div>
                            <br></br>
                            <span className="sc_icon fa-home"></span>
                            378 Main Street London England
                            <br></br>
                            <span className="sc_icon fa-envelope"></span>
                            info@themerex.net
                            <br></br>
                            <span className="sc_icon fa-phone"></span>
                            +1 (44) 123-45-67 
                        </div>
                    </aside>
                    <aside className="col-md-3 col-sm-6 widgetWrap widget widget_calendar">
                        <h3 className="title">Calendar</h3>
                        <div id="calendar_wrap">
                            <table className="calendar">
                                <thead>
                                    <tr>
                                        <th className="prevMonth">
                                            <div className="left roundButton">
                                                <a href="#" data-type="post" data-year="2014" data-month="5" title="View posts for May 2014"></a>
                                            </div>
                                        </th>
                                        <th className="curMonth" colSpan="5">
                                            <a href="#" title="View posts for July 2015">
                                                July 
                                                <span>2015</span>
                                            </a>
                                        </th>
                                        <th className="nextMonth">
                                            <div className="right roundButton">
                                                <a href="#" data-type="post" data-year="2014" data-month="5" title="View posts for May 2014"></a>
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
                                        <td colSpan="2" className="pad">&nbsp;</td>
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
                                        <td className="today">21</td>
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
                                        <td>30</td>
                                        <td>31</td>
                                        <td className="pad" colSpan="2">&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </aside>
                    <aside className="col-md-3 col-sm-6 widgetWrap widget widget_flickr">
                        <h3 className="title">Flickr</h3>
                        <div className="flickr_images">
                            <div className="flickr_badge_image">
                                <a href="http://www.flickr.com/">
                                    <img src="img/social/12334281344_d9b279095f_s.jpg" alt="A photo on Flickr" title="Melbourne Meetup" height="75" width="75"/>
                                </a>
                            </div>
                            <div className="flickr_badge_image">
                                <a href="http://www.flickr.com/">
                                    <img src="img/social/7694606750_4ce650332c_s.jpg" alt="A photo on Flickr" title="New York Meetup 2012" height="75" width="75"/>
                                </a>
                            </div>
                            <div className="flickr_badge_image">
                                <a href="http://www.flickr.com/">
                                    <img src="img/social/11062642534_c4a14959e6_s.jpg" alt="A photo on Flickr" title="Ibrahim and Adrien" height="75" width="75"/>
                                </a>
                            </div>
                            <div className="flickr_badge_image">
                                <a href="http://www.flickr.com/">
                                    <img src="img/social/6468476079_c7db9db7cb_s.jpg" alt="A photo on Flickr" title="Pete After" height="75" width="75"/>
                                </a>
                            </div>
                            <div className="flickr_badge_image">
                                <a href="http://www.flickr.com/">
                                    <img src="img/social/5840915999_2ed9fb4a81_s.jpg" alt="A photo on Flickr" title="Degraves" height="75" width="75"/>
                                </a>
                            </div>
                            <div className="flickr_badge_image">
                                <a href="http://www.flickr.com/">
                                    <img src="img/social/10546541013_1dfd083bcd_s.jpg" alt="A photo on Flickr" title="#Envato CEO Collis in his office" height="75" width="75"/>
                                </a>
                            </div>
                            <div className="flickr_badge_image">
                                <a href="http://www.flickr.com/">
                                    <img src="img/social/13090549273_ee5c732ce1_s.jpg" alt="A photo on Flickr" title="Around the Envato Office - Highfive!" height="75" width="75"/>
                                </a>
                            </div>
                            <div className="flickr_badge_image">
                                <a href="http://www.flickr.com/">
                                    <img src="img/social/4865381192_bef72681e1_s.jpg" alt="A photo on Flickr" title="Collis Presenting at WebDU 2010" height="75" width="75"/>
                                </a>
                            </div>
                            <div className="flickr_badge_image">
                                <a href="http://www.flickr.com/">
                                    <img src="img/social/7694603642_e6181c8b6a_s.jpg" alt="A photo on Flickr" title="New York Meetup 2012" height="75" width="75"/>
                                </a>
                            </div>
                        </div>
                    </aside>
                    <aside className="col-md-3 col-sm-6 widgetWrap widget widget_instagram">
                        <h3 className="title">Instagram</h3>
                        <div className="instagram-pics">
                            <div className="instagram_badge_image">
                                <a href="http://www.instagram.com/">
                                    <img src="img/social/11062642534_c4a14959e6_s.jpg" alt="A photo on instagram" title="Ibrahim and Adrien" height="75" width="75"/>
                                </a>
                            </div>
                            <div className="instagram_badge_image">
                                <a href="http://www.instagram.com/">
                                    <img src="img/social/7694603642_e6181c8b6a_s.jpg" alt="A photo on instagram" title="New York Meetup 2012" height="75" width="75"/>
                                </a>
                            </div>
                            <div className="instagram_badge_image">
                                <a href="http://www.instagram.com/">
                                    <img src="img/social/4865381192_bef72681e1_s.jpg" alt="A photo on instagram" title="Collis Presenting at WebDU 2010" height="75" width="75"/>
                                </a>
                            </div>
                            <div className="instagram_badge_image">
                                <a href="http://www.instagram.com/">
                                    <img src="img/social/13090549273_ee5c732ce1_s.jpg" alt="A photo on instagram" title="Around the Envato Office - Highfive!" height="75" width="75"/>
                                </a>
                            </div>
                            <div className="instagram_badge_image">
                                <a href="http://www.instagram.com/">
                                    <img src="img/social/10546541013_1dfd083bcd_s.jpg" alt="A photo on instagram" title="#Envato CEO Collis in his office" height="75" width="75"/>
                                </a>
                            </div>
                            <div className="instagram_badge_image">
                                <a href="http://www.instagram.com/">
                                    <img src="img/social/5840915999_2ed9fb4a81_s.jpg" alt="A photo on instagram" title="Degraves" height="75" width="75"/>
                                </a>
                            </div>
                            <div className="instagram_badge_image">
                                <a href="http://www.instagram.com/">
                                    <img src="img/social/6468476079_c7db9db7cb_s.jpg" alt="A photo on instagram" title="Pete After" height="75" width="75"/>
                                </a>
                            </div>
                            <div className="instagram_badge_image">
                                <a href="http://www.instagram.com/">
                                    <img src="img/social/7694606750_4ce650332c_s.jpg" alt="A photo on instagram" title="New York Meetup 2012" height="75" width="75"/>
                                </a>
                            </div>
                            <div className="instagram_badge_image">
                                <a href="http://www.instagram.com/">
                                    <img src="img/social/12334281344_d9b279095f_s.jpg" alt="A photo on instagram" title="Melbourne Meetup" height="75" width="75"/>
                                </a>
                            </div>
                        </div>
                    </aside>
                    </div>
                </div>
            </footer>
            <div className="copyWrap">
            <div className="container copy">
                <div className="copyright">
                    <a href="http://themeforest.net/item/grecko-multipurpose-wordpress-theme/7755453">ThemeREX</a> 
                    © 2014 All Rights Reserved
                    <a href="#">Terms of Use</a>
                    and 
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="copy_socials socPage">
                    <ul>
                        <li>
                            <a className="social_icons social_facebook" target="_blank" href="http://facebook.com">
                                <span></span>
                            </a>
                        </li>
                        <li>
                            <a className="social_icons social_pinterest" target="_blank" href="http://pinterest.com">
                                <span></span>
                            </a>
                        </li>
                        <li>
                            <a className="social_icons social_twitter" target="_blank" href="http://twitter.com">
                                <span></span>
                            </a>
                        </li>
                        <li>
                            <a className="social_icons social_gplus" target="_blank" href="http://gplus.com">
                                <span></span>
                            </a>
                        </li>
                        <li>
                            <a className="social_icons social_rss" target="_blank" href="http://rss.com">
                                <span></span>
                            </a>
                        </li>
                        <li>
                            <a className="social_icons social_dribbble" target="_blank" href="http://dribbble.com">
                                <span></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </section> 
}

export default Footer