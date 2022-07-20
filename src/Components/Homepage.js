import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {BASE_URL} from "./API"

export default function Homepage() {
    const [list, setList] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        fetch(BASE_URL)
            .then(resp => resp.json())
            .then(data => setList(data))
            .catch(error => console.error(error));
    }, [])
    if(!list.length){
        return <div>No items yet...</div>
    }

    const handleChange = ({ target }) => {
        if (selectedItems.includes(target.value)) {
            setSelectedItems(prev => prev.filter(el => el !== target.value))
            return;
        }
        setSelectedItems(prev => [...prev, target.value])
    }

    const slicedList = list.slice(0,20);

    return (
        <>
            <div className="list_checked">Liczba zaznaczonych elementów:
                <span className="list_checked_counter">{selectedItems.length}</span></div>
            <ul className="list">
                {slicedList.map((item, index) => (
                    <li className="list_item" key={index}>
                        <div className="list_item_container">
                        <input
                            value={item.title}
                            className="list_item_checkbox"
                            id={item.id}
                            checked={selectedItems.includes(item.title)}
                            type="checkbox"
                            onChange={handleChange}/>
                        <label htmlFor={index}>{item.title}</label>
                    </div>
                        <Link className="list_link" to={`/item/${index + 1}`} state={{ item : item}} key={index}>
                        <img className="list_item_img" src={item.url}/>
                    </Link>
                    </li>

                ))}
            </ul>
        </>
    )
}