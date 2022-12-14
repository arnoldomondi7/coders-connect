import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { Stories } from '../../data'
import Newstory from './newStory/Newstory.comp'
import './story.css'

const Story = () => {
	return (
		<div className='story'>
			<Tabs>
				<TabList>
					<Tab>Story</Tab>
					<Tab>Reels</Tab>
					<Tab>Rooms</Tab>
				</TabList>

				<TabPanel>
					{/* one */}
					<div className='storyGroups'>
						<div className='storyGroup'>
							<div className='storyCard'>
								<label htmlFor='add'>
									<div className='storyBody'>
										<img
											src='./assets/user/anodi.jpg'
											alt='stryImg'
											className='storyBodyImg'
										/>
									</div>
									<div className='storyFooter'>
										<FontAwesomeIcon icon={faAdd} />
										<h4 className='storyTitle'>Create Story</h4>
									</div>
								</label>
								<input type='file' id='add' className='hidden' />
							</div>
						</div>

						{/* number 2 */}
						{Stories.map((story, i) => (
							<Newstory story={story} key={i} />
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 3</h2>
				</TabPanel>
			</Tabs>
		</div>
	)
}

export default Story
