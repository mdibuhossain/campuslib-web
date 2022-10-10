import React from "react"
import downloadStyles from './downloadStyles.module.css'

const DownloadButtonWithAnimate = () => {
    return (
        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/10jLrS9NrfMze-qSXVp_dLvU-ZJa0ZeoA/view?usp=sharing">
            <div className={`${downloadStyles.outer} ${downloadStyles.button}`}>
                <button>DOWNLOAD APP</button>
                <span></span>
                <span></span>
            </div>
        </a>
    )
}

export default DownloadButtonWithAnimate