import React from 'react';
import './Car.css';

function Car(props) {
    return(
        <div className="wrap">
            <img src={props.carImg} alt={props.altText}/>
            <div className="pricing">
                <div className="rrpDiv">
                    <h5 id="rrp">RRP</h5>
                    <h6 id="rrpPrice">{props.rrpPrice}</h6>
                </div>
                <h5 id="currentPrice">{props.currentPrice}</h5>
                <div className="saveDiv">
                    <h5 id="save">Save</h5>
                    <button type="submit" id="saving">{props.saving}</button>
                </div>
            </div>
            <h4 id="carTitle">{props.carTitle}</h4>
            <h5 id="carAbout">{props.aboutCar}</h5>
            <h5 id="greenText">BRAND NEW - IN STOCK</h5>
        </div>
    )
};


export default Car;