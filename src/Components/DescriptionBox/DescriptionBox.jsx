import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox"> 
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce is a online paltform that facilitates on buying and selling of products or srvices over the internet. E-commerce website gained immense popularity due to their convinient accessibility and global reach.</p>
        </div>
        </div>
    )
}

export default DescriptionBox