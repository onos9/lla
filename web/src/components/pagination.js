import React from "react";

const Pagination = () => {

    return (
        <div id="pagination" className="pagination">
            <ul className="pageLibrary">
                <li className="pager_pages libPage">
                    Page
                    <input className="navInput" readOnly="readonly" type="text" size={1} defaultValue={1} />
                    of 2
                    <div id="pageNavSlider" className="boxShadow pageFocusBlock navPadding" style={{}}>
                        <div className="sc_slider sc_slider_swiper sc_slider_controls sc_slider_controls_top sc_slider_nopagination sc_slider_noautoplay">
                            <ul>
                                <li>
                                    <div className="pageNumber">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <a href="#" className="active">1</a>
                                                    </td>
                                                    <td>
                                                        <a href="#">2</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <ul className="flex-direction-nav">
                            <li>
                                <a className="flex-prev" href="#" />
                            </li>
                            <li>
                                <a className="flex-next" href="#" />
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="pager_next ico right squareButton light">
                    <a href="#">Next </a>
                </li>
                <li className="pager_last ico right squareButton light">
                    <a href="#">Last </a>
                </li>
            </ul>
        </div>
    )
}

export default Pagination