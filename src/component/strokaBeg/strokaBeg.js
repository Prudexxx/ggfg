import React from "react";
import './strokaBeg.css'; // Импортируйте стили

const Marquee = (props) => {
    return (
        <div className="marquee">
            <div className="marquee-content"> {props.name}
            </div>
        </div>
    );
};

export default Marquee;
