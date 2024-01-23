import React from "react";
import "./header.css";

const Header = () => {
    return (
        <div className="container">
            <div className="header_main">
                <div className="header_img"></div>

                <div className="header_info">
                    <div className="header_contacts">
                        <div className="header_tel">+996 000 000 000</div>
                        <div className="header_mail">default@default.com</div>
                    </div>
                    <div className="button_wrapper">
                        <button className="burger_btn"></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
