import React from 'react';
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function ItemInfo() {
    const navigate = useNavigate();
    const location = useLocation()
    const { item } = location.state
console.log(item)

    const handleBack = () => {
        navigate("/")
    }

    return (
        <div className="itemInfo">
            <div className="itemInfo_img"
                 style={{
                     backgroundImage: `url(${item.url})`}}/>
            <div className="itemInfo_container">
            <p className="itemInfo_albumId">AlbumId: {item.id}</p>
            <p className="itemInfo_id">ID: {item.id}</p>
            <p className="itemInfo_title">Title: {item.title}</p>
            <p className="itemInfo_Url">Url: {item.url}</p>
            <p className="itemInfo_ThumbnailUrl">ThumbnailUrl: {item.url}</p>
            <button type="button" className="btn_back" onClick={handleBack}>Wstecz</button>
            </div>
        </div>
    );
};