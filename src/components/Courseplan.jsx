import React, { useState } from 'react'
import './Courseplan.css'
import plus from '../assets/add.png'
import minus from '../assets/minus.png'

function Courseplan() {
    const dayplan = [{
        daycount: 'Day 1',
        Chapter: 'Course Overview',
        duration: '2 hours 40 minutes',
        date: '12/12/2003',
        day: 'Wednesday',
        Chapterdes: 'Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.'

    }, {
        daycount: 'Day 2',
        Chapter: 'Course Overview',
        duration: '2 hours 40 minutes',
        date: '12/12/2003',
        day: 'Wednesday',
        Chapterdes: 'Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.'

    }, {
        daycount: 'Day 3',
        Chapter: 'Course Overview',
        duration: '2 hours 40 minutes',
        date: '12/12/2003',
        day: 'Wednesday',
        Chapterdes: 'Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.'

    }, {
        daycount: 'Day 4',
        Chapter: 'Course Overview',
        duration: '2 hours 40 minutes',
        date: '12/12/2003',
        day: 'Wednesday',
        Chapterdes: 'Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.'

    }, {
        daycount: 'Day 5',
        Chapter: 'Course Overview',
        duration: '2 hours 40 minutes',
        date: '12/12/2003',
        day: 'Wednesday',
        Chapterdes: 'Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.'

    }, {
        daycount: 'Day 6',
        Chapter: 'Course Overview',
        duration: '2 hours 40 minutes',
        date: '12/12/2003',
        day: 'Wednesday',
        Chapterdes: 'Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.'

    }, {
        daycount: 'Day 7',
        Chapter: 'Course Overview',
        duration: '2 hours 40 minutes',
        date: '12/12/2003',
        day: 'Wednesday',
        Chapterdes: 'Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.'

    }, {
        daycount: 'Day 8',
        Chapter: 'Course Overview',
        duration: '2 hours 40 minutes',
        date: '12/12/2003',
        day: 'Wednesday',
        Chapterdes: 'Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.'

    }, {
        daycount: 'Day 9',
        Chapter: 'Course Overview',
        duration: '2 hours 40 minutes',
        date: '12/12/2003',
        day: 'Wednesday',
        Chapterdes: 'Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.'

    }, {
        daycount: 'Day 10',
        Chapter: 'Course Overview',
        duration: '2 hours 40 minutes',
        date: '12/12/2003',
        day: 'Wednesday',
        Chapterdes: 'Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.'

    }, {
        daycount: 'Day 11',
        Chapter: 'Course Overview',
        duration: '2 hours 40 minutes',
        date: '12/12/2003',
        day: 'Wednesday',
        Chapterdes: 'Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.'

    }, {
        daycount: 'Day 12',
        Chapter: 'Course Overview',
        duration: '2 hours 40 minutes',
        date: '12/12/2003',
        day: 'Wednesday',
        Chapterdes: 'Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.'

    }, {
        daycount: 'Day 13',
        Chapter: 'Course Overview',
        duration: '2 hours 40 minutes',
        date: '12/12/2003',
        day: 'Wednesday',
        Chapterdes: 'Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.'

    }, {
        daycount: 'Day 14',
        Chapter: 'Course Overview',
        duration: '2 hours 40 minutes',
        date: '12/12/2003',
        day: 'Wednesday',
        Chapterdes: 'Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.'

    }, {
        daycount: 'Day 15',
        Chapter: 'Course Overview',
        duration: '2 hours 40 minutes',
        date: '12/12/2003',
        day: 'Wednesday',
        Chapterdes: 'Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.'

    }, {
        daycount: 'Day 16',
        Chapter: 'Course Overview',
        duration: '2 hours 40 minutes',
        date: '12/12/2003',
        day: 'Wednesday',
        Chapterdes: 'Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.Joe Natoli has launched five successful online courses with Udemy on the topics of User Experience (UX) and User Interface (UI) Design, with more than 180,000+ students enrolled to date.'

    },]

    function Dayplan(e) {
        const [toggle, settoggle] = useState(false)

        function toggleswitch() {
            if (toggle) {
                settoggle(false)
            }
            else {
                settoggle(true)
            }
        }
        return (
            <div className='dayplanbox'>
                <div className='dayplan'>
                    <div className='sign' onClick={toggleswitch}>
                        {toggle ?
                            <>
                                <div>
                                    <img src={minus} alt="" />
                                </div>
                            </>
                            :
                            <>
                                <div>
                                    <img src={plus} alt="" />
                                </div>
                            </>
                        }
                    </div>
                    <div className='daycount'>{e.value.daycount}</div>
                    <div className='topicname'>{e.value.Chapter} </div>
                    <div className='duration'>{e.value.date}</div>
                    <div className='duration'>{e.value.day}</div>
                    <div className='duration'>{e.value.duration}</div>
                </div>
                <div className={`daydescription ${toggle ? '': 'nonedisplay'}`}>{e.value.Chapterdes}</div>
            </div>
        )
    }

    return (
        <div className='Courseplanbox'>
            <div className='eighty'>
                <div className='courseplanbox'>
                    <div className='courseplanboxheading'>
                        <div className='line'></div>
                        <div className='abouttext'>Course Plan</div>
                    </div>
                    <div className='courseplanheading'>Our courses are balanced mix of videos & articles</div>
                    <div className='coursedistribution'>
                        <div className='distributionpoints'>
                            <div className='grey circle'></div>
                            <div className='distributionpoint'>18 Days</div>
                        </div>
                        <div className='distributionpoints'>
                            <div className='grey circle'></div>
                            <div className='distributionpoint'>20 Videos</div>
                        </div>
                        <div className='distributionpoints'>
                            <div className='grey circle'></div>
                            <div className='distributionpoint'>18 Assignment</div>
                        </div>
                        <div className='distributionpoints'>
                            <div className='grey circle'></div>
                            <div className='distributionpoint'>15 Articles</div>
                        </div>
                        <div className='distributionpoints'>
                            <div className='grey circle'></div>
                            <div className='distributionpoint'>24h 20m Complition Time</div>
                        </div>
                    </div>
                    <div className='dayplans'>
                        {dayplan.map((e) => {
                            return (
                                <Dayplan value={e} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courseplan
