import React from "react";
import Event from './Event/Event'

const Calendar = () => {
    return (
        <div className="Calendar">
           <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8am</td>
                        {/* <Event event='Fancy Dinner 🎩' color='green' /> */}
                        <Event event='Starbucks ☕️' color ='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Yolk 🍳' color ='green'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink'/>
                        <td></td>
                        <td></td>
                        <Event event='The Bean 🫘' color ='blue'/>
                    </tr>
                    <tr>
                        <td className="time">10am</td>
                        <td></td>
                        <Event event='River Cruise' color ='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Deep Dish' color ='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway' color ='pink'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Art Institute' color ='blue'/>
                        <td></td>
                        <Event event='Girl & the Goat' color ='green'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3pm</td>
                        <Event event='Cubs Game' color ='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway' color ='pink'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Fancy Dinner' color ='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Shopping' color ='blue'/>
                        <td></td>
                    </tr>
                </tbody>
           </table>
        </div>
    )
}

export default Calendar;