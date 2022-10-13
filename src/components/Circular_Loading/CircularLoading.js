import React from 'react';
import Circular_Loading_Style from './Circular_Loading_Style.module.css'

const CircularLoading = () => {
    return (
        <div>
            <div className={Circular_Loading_Style.loadingBox}>
                <div className={Circular_Loading_Style.loader}></div>
            </div>
        </div>
    );
};

export default CircularLoading;