import React from 'react';

const Ads = () => {
    React.useEffect(() => {
        const pushAd = () => {
            try {
                const adsbygoogle = window.adsbygoogle
                // console.log(adsbygoogle)
                adsbygoogle.push({})
            } catch (e) {
                console.error(e)
            }
        }
        let interval = setInterval(() => {
            if (window.adsbygoogle) {
                pushAd()
                clearInterval(interval)
            }
        }, 500)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <ins className="adsbygoogle"
            style={{ display: "inline-block", width: "100%", height: "auto" }}
            data-ad-client="ca-pub-4007744418062861"
            data-ad-slot="2835914651"
            data-ad-format="auto"
            data-full-width-responsive="true">
        </ins>
    );
};

export default Ads;