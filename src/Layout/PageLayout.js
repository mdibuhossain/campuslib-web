import React from 'react';

const PageLayout = ({ children }) => {
    return (
        <div style={{ "height": "calc(100vh - 64px)" }}>
            {children}
        </div>
    );
};

export default PageLayout;