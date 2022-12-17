import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faLocation,
	faPhotoFilm,
	faSmile,
	faTag,
} from '@fortawesome/free-solid-svg-icons'
import './share.css'

const Share = () => {
	return (
		<div className='share'>
			<div className='shareGroups'>
				<div className='shareGroup'>
					<div className='shareGroupLeft'>
						<img src='./assets/user/anodi.jpg' alt='anodi' />
					</div>
					<div className='shareGroupRight'>
						<input type='text' placeholder='What Are Your Thoughts Today?' />
					</div>
				</div>
				<div className='shareGroup'>
					<div className='shareGroupIcons'>
						<div className='shareGroupIcon'>
							<FontAwesomeIcon icon={faPhotoFilm} />
							<span className='iconTitle'>Photo or Video</span>
						</div>

						<div className='shareGroupIcon'>
							<FontAwesomeIcon icon={faTag} />
							<span className='iconTitle'>Tags</span>
						</div>

						<div className='shareGroupIcon'>
							<FontAwesomeIcon icon={faLocation} />
							<span className='iconTitle'>Location</span>
						</div>

						<div className='shareGroupIcon'>
							<FontAwesomeIcon icon={faSmile} />
							<span className='iconTitle'>Feelings</span>
						</div>
					</div>

					<div className='shareGroupButton'>
						<button>Share</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Share
