import React from 'react';
import Circular_Loading_Style from './Circular_Loading_Style.module.css'

const CircularLoading = () => {
    return (
        <>
            <div className={Circular_Loading_Style.animeBody}>
                <div className={Circular_Loading_Style.loader}>
                    <span></span>
                </div>
            </div>
        </>
    );
};

export default CircularLoading;