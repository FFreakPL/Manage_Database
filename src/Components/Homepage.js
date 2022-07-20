import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {BASE_URL} from "./API"
import ReactPaginate from "react-paginate";
import ButtonBackToTop from "./ButtonToTop"

export default function Homepage() {
    const [list, setList] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    //Pobieranie danych z serwera
    useEffect(() => {
        fetch(BASE_URL)
            .then(resp => resp.json())
            .then(data => setList(data))
            .catch(error => console.error(error));
    }, [])
    if(!list.length){
        return <div>No items yet...</div>
    }

    //Obsługa wyboru elementu
    const handleChange = ({ target }) => {
        if (selectedItems.includes(target.value)) {
            setSelectedItems(prev => prev.filter(el => el !== target.value))
            return;
        }
        setSelectedItems(prev => [...prev, target.value])
    }

    //Paginacja
    const PER_PAGE = 10;
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const currentPageData = list.slice(offset, offset + PER_PAGE)
    const pageCount = Math.ceil(list.length / PER_PAGE);

    return (
        <>
            <div className="list_checked">Liczba zaznaczonych elementów:
                <span className="list_checked_counter">{selectedItems.length}</span>
            </div>
            <ul className="list">
                {currentPageData.map((item, index) => (
                    <li className="list_item"
                        key={index}
                        style={{
                            backgroundColor: `#${item.url.slice(32)}3D`
                        }}>
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
            <ReactPaginate
                previousLabel={"← Prev"}
                nextLabel={"Next →"}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination_link"}
                nextLinkClassName={"pagination_link"}
                disabledClassName={"pagination_link_disabled"}
                activeClassName={"pagination_link_active"}
            />
            <ButtonBackToTop/>
        </>
    )
}