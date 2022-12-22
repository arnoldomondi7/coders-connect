import React from 'react'

const Cover = () => {
	//get the data in the localstorage.
	const userInfo = window.localStorage.getItem('userInfo')
		? JSON.parse(window.localStorage.getItem('userInfo'))
		: null
	return (
		<div className='acountDiv'>
			{/* step1 */}
			<div className='accountCover'>
				<img src={userInfo.imageCover} alt={userInfo.username} />
			</div>

			{/* step2 */}
			<div className='accountInfo'>
				<div className='accountInfoLeft'>
					<img src={userInfo.imageProfile} alt={userInfo.username} />
				</div>
				{/* step 3 */}
				<div className='accountInfoRight'>
					<h2 className='userName'>{userInfo.username}</h2>

					<span className='userFriends'>Friends: 6</span>

					<div className='friends'>
						<img src='./assets/user/girlmod1.jpg' alt='' />
						<img src='./assets/user/manmod2.jpg' alt='' />
						<img src='./assets/user/woman2.jpg' alt='' />
						<img src='./assets/user/meji.jpg' alt='' />
						<span className='dots'>...</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cover
