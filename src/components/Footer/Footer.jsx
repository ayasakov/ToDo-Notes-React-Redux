import React from "react";
import './footer.scss';

const FILTERS_BTN = [
    {
        text: 'All',
        id: 'all',
    },
    {
        text: 'Active',
        id: 'active',
    },
    {
        text: 'Completed',
        id: 'completed',
    }
];

const Footer = ({amount, activeFilter}) => (
    <div className='footer'>
        <span className="amount">{`${amount} Tasks left`}</span>
        <div className="btn-group">
            {FILTERS_BTN.map(({text, id}) => (
                <button
                    key={id}
                    className={id === activeFilter ? "filter-btn active" : 'filter-btn'}>{text}</button>
            ))}
        </div>
    </div>
);

export default Footer;