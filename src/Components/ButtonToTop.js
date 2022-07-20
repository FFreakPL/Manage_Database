import React, { useState, useEffect} from 'react';
import { FaAngleUp } from 'react-icons/fa';

export default function ButtonBackToTop() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 90) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="backToTop">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="backToTop_icon"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    );
}