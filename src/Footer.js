import React from 'react'
import horseshoe from './photos/horseshoe.png'
import { Link } from 'react-router-dom'






class Footer extends React.Component {

    render() {

        return (
            <>
                <div className="main-footer" >
                    <div className="container1">
                        <img src={horseshoe} alt="logo" />
                        <div className="row">
                            {/* Column1 */}
                            <div className="col">
                                <h2 className="need-help">NEED HELP? CALL US MONDAY-FRIDAY 8AM-4PM (PT)</h2>
                                <p className="phone">(855) 711-3385</p>
                            </div>
                            {/* Column2 */}
                            <div className="col">
                                <ul className="list-unstyled">
                                    <Link to="/login">
                                        <li className="li-it">Login</li>
                                    </Link>
                                    <li className="li-it">Contact</li>
                                    <li className="li-it">Jobs</li>
                                    <li className="li-it">FAQ</li>
                                </ul>
                            </div>
                            {/* Column3 */}
                            <div className="col">
                                <p>GET SECRET NOTES</p>
                            </div>

                        </div>
                    </div>
                </div>

            </>






        )

    }
}

export default Footer