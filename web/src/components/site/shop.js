import React from "react"

const Shop = () => {
    return (
        <ul className="menu-panel thumb_title">
            <li>
                <ul className="custom-menu-style thumb_title sub-menu">
                    <li className="items_column">
                        <a href="shop_category.html" className="sf-with-ul">Robotic Toys</a>
                        <ul>
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
                        <a href="shop_category.html" className="sf-with-ul">Building Sets</a>
                        <ul>
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

    )
}

export default Shop