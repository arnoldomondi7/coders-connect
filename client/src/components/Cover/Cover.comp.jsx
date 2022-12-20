import React from 'react'

const Cover = () => {
	return (
		<div className='acountDiv'>
			<div className='accountCover'>
				<img src='./assets/account/fwny.jpg' alt='' />
			</div>
			<div className='accountInfo'>
				<div className='accountInfoLeft'>
					<img src='./assets/user/anodi.jpg' alt='' />
				</div>
				<div className='accountInfoRight'>
					<h2 className='userName'>Arnold Omondi</h2>

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
