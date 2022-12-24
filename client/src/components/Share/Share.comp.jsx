import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faLocation,
	faPhotoFilm,
	faSmile,
	faTag,
} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { toast } from 'react-toastify'
import './share.css'

const Share = () => {
	//get the data in the localstorage.
	const userInfo = window.localStorage.getItem('userInfo')
		? JSON.parse(window.localStorage.getItem('userInfo'))
		: null

	const desc = useRef()

	const [file, setFile] = useState(null)

	//handle the share icon.

	const handleShare = async event => {
		event.preventDefault()

		const newPost = {
			userId: userInfo._id,
			description: desc.current.value,
		}

		if (file) {
			const data = new FormData()
			const fileName = Date.now() + file.name
			data.append('name', fileName)
			data.append('file', file)
			newPost.image = fileName

			try {
				await axios.post(`${process.env.REACT_APP_API}/upload`, data)
			} catch (error) {
				toast.error('Error Adding Image.')
			}
		}

		try {
			await axios.post(`${process.env.REACT_APP_API}/create-post`, newPost)
			window.location.reload()
		} catch (error) {
			toast.error('Error Creating A Post.')
		}
	}
	return (
		<div className='share'>
			<div className='shareGroups'>
				{/* number 1 */}
				<div className='shareGroup'>
					<div className='shareGroupLeft'>
						<img src={userInfo.imageProfile} alt={userInfo.username} />
					</div>
					<div className='shareGroupRight'>
						<input
							type='text'
							placeholder={`Whats Happening,  ${userInfo.username} ?`}
							ref={desc}
						/>
					</div>
				</div>

				{/* number 2 */}
				<form className='shareGroup' onSubmit={handleShare}>
					<div className='shareGroupIcons'>
						<label htmlFor='file' className='shareGroupIcon'>
							<FontAwesomeIcon icon={faPhotoFilm} />
							<span className='iconTitle'>Photo or Video</span>
							<input
								type='file'
								id='file'
								accept='.png, .jpg, .jpeg'
								onChange={event => setFile(event.target.files[0])}
								hidden
							/>
						</label>

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
				</form>
			</div>
		</div>
	)
}

export default Share
