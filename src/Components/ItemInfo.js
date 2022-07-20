import React from 'react';
import { useLocation, Link } from "react-router-dom";

export default function ItemInfo() {
    const location = useLocation()
    const { item } = location.state
    const { selectedItems } = location.state

    //Pobranie koloru elementu z jego adresu url
    const color = item.url.slice(32);

    return (
        <div className="itemInfo">
            <div className="itemInfo_container" style={{
                boxShadow: `0px 0px 50px 2px #${color}`,
                backgroundColor: `#${color}`}}>
                <div className="itemInfo_img"
                     style={{
                         backgroundImage: `url(${item.url})`}}/>
                <div className="itemInfo_info_container">
                    <p className="itemInfo_albumId"><span>AlbumId:</span><br></br>{item.id}</p>
                    <p className="itemInfo_id"><span>ID:</span><br></br>{item.id}</p>
                    <p className="itemInfo_title"><span>Title:</span><br></br>{item.title}</p>
                    <p className="itemInfo_Url"><span>Url:</span><br></br>{item.url}</p>
                    <p className="itemInfo_ThumbnailUrl"><span>ThumbnailUrl:</span><br></br>{item.url}</p>
                    <button type="button" className="btn_back">
                        <Link to={"/"}
                              state={{items: selectedItems}}>Wstecz
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};