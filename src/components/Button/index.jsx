import React from 'react';
import './button.css'
export default function Button({ data, onClick }) {


    return (
        <div className='container-'>
            <div className='container-btn'>
                <div className='text-button' onClick={onClick}>{data}</div>
            </div>
        </div>
    );
}