import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './share.css'
import { faLocation, faPhotoFilm, faSmile, faTag } from '@fortawesome/free-solid-svg-icons'

const Share = () => {
    return (
        <div className='share'>
            <div className="shareGroups">
                <div className="shareGroup">
                    <div className="shareGroupLeft">
                        <img src="/assets/images/user/model.jpg" alt="alt" />
                    </div>

                    <div className="shareGroupRight">
                        <input type="text" placeholder='What Are Your thought Today?' />
                    </div>
                </div>

                <div className="shareGroup">
                    <div className="shareGroupIcons">
                        <div className="shareGroupIcon">
                            <FontAwesomeIcon icon={faPhotoFilm} />
                            <span className="iconTitle">Photo or Video</span>
                        </div>
                        <div className="shareGroupIcon">
                            <FontAwesomeIcon icon={faTag} />
                            <span className="iconTitle">Tag</span>
                        </div>
                        <div className="shareGroupIcon">
                            <FontAwesomeIcon icon={faLocation} />
                            <span className="iconTitle">Location</span>
                        </div>
                        <div className="shareGroupIcon">
                            <FontAwesomeIcon icon={faSmile} />
                            <span className="iconTitle">Feelings</span>
                        </div>
                    </div>

                    <div className="shareGroupShareBtn">
                        <button>Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share