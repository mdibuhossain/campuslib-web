import React, { Suspense } from 'react';
import { lazy } from 'react';
import LinearLoadin from '../components/Linear_Loading/LinearLoadin';
// import FooterBar from '../components/FooterBar';
const FooterBar = lazy(() => import('../components/FooterBar'))

const PageLayout = ({ children }) => {
    return (
        <Suspense fallback={<LinearLoadin />}>
            <div style={{ "height": "calc(100vh - 64px)" }}>
                {children}
                <FooterBar />
            </div>
        </Suspense>
    );
};

export default PageLayout;