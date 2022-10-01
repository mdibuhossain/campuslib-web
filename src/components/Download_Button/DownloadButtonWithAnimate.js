import React from "react"
import downloadStyles from './downloadStyles.module.css'

const DownloadButtonWithAnimate = () => {
    return (
        <a target="_blank" href="https://drive.google.com/file/d/1fCZDZR5bjNgZD_58nRqElsaBwGvKv26q/view?usp=sharing">
            <div className={`${downloadStyles.outer} ${downloadStyles.button}`}>
                <button>DOWNLOAD APP</button>
                <span></span>
                <span></span>
            </div>
        </a>
    )
}

export default DownloadButtonWithAnimate