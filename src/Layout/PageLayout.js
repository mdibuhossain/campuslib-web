import React from 'react';
import FooterBar from '../components/FooterBar';

const PageLayout = ({ children }) => {
    return (
        <div style={{ "height": "calc(100vh - 64px)" }}>
            {children}
            <FooterBar />
        </div>
    );
};

export default PageLayout;