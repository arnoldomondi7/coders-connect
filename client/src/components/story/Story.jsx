import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react-tabs/style/react-tabs.css'
import './story.css'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

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
                    <div className="storyGroups">
                        <div className="storyGroup">
                            <div className="storyCard">
                                <label htmlFor='add'>
                                    <div className="storyBody">
                                        <img src="/assets/images/user/model.jpg" alt="storybody" className="storyBodyImg" />
                                    </div>
                                    <div className="storyFooter">
                                        <FontAwesomeIcon icon={faAdd} />
                                        <h4 className="storyTitle">Create A Story</h4>
                                    </div>
                                </label>
                                <input type='file' id='add' className='hidden' />
                            </div>
                        </div>
                        <div className="storyGroup">
                            <div className="storyDiv">
                                <div className="storyUserAddImgDiv">
                                    <img src="/assets/images/user/model.jpg" alt="storybody" className="storyUserAddImg" />
                                </div>

                                <div className="storyUser">
                                    <img src="/assets/images/user/girl.jpg" alt="storybody" className="storyUserAddImg" />
                                </div>

                                <div className="storyUserTitle">
                                    <h5>Your Story</h5>
                                </div>
                            </div>
                        </div>

                        <div className="storyGroup">
                            <div className="storyDiv">
                                <div className="storyUserAddImgDiv">
                                    <img src="/assets/images/user/model.jpg" alt="storybody" className="storyUserAddImg" />
                                </div>

                                <div className="storyUser">
                                    <img src="/assets/images/user/girl.jpg" alt="storybody" className="storyUserAddImg" />
                                </div>

                                <div className="storyUserTitle">
                                    <h5>Your Story</h5>
                                </div>
                            </div>
                        </div>

                        <div className="storyGroup">
                            <div className="storyDiv">
                                <div className="storyUserAddImgDiv">
                                    <img src="/assets/images/user/model.jpg" alt="storybody" className="storyUserAddImg" />
                                </div>

                                <div className="storyUser">
                                    <img src="/assets/images/user/girl.jpg" alt="storybody" className="storyUserAddImg" />
                                </div>

                                <div className="storyUserTitle">
                                    <h5>Your Story</h5>
                                </div>
                            </div>
                        </div>

                        <div className="storyGroup">
                            <div className="storyDiv">
                                <div className="storyUserAddImgDiv">
                                    <img src="/assets/images/user/model.jpg" alt="storybody" className="storyUserAddImg" />
                                </div>

                                <div className="storyUser">
                                    <img src="/assets/images/user/girl.jpg" alt="storybody" className="storyUserAddImg" />
                                </div>

                                <div className="storyUserTitle">
                                    <h5>Your Story</h5>
                                </div>
                            </div>
                        </div>

                        <div className="storyGroup">
                            <div className="storyDiv">
                                <div className="storyUserAddImgDiv">
                                    <img src="/assets/images/user/model.jpg" alt="storybody" className="storyUserAddImg" />
                                </div>

                                <div className="storyUser">
                                    <img src="/assets/images/user/girl.jpg" alt="storybody" className="storyUserAddImg" />
                                </div>

                                <div className="storyUserTitle">
                                    <h5>Your Story</h5>
                                </div>
                            </div>
                        </div>

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