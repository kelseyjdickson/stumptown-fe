import React from 'react'






class Footer extends React.Component {



    render() {



        return (
            <>
                <div className="main-footer" >
                    <div className="container1">
                        <div className="row">
                            {/* Column1 */}
                            <div className="col">
                                <h2>NEED HELP? CALL US MONDAY-FRIDAY 8AM-4PM (PT)</h2>
                                <p>(855) 711-3385</p>
                            </div>
                            {/* Column2 */}
                            <div className="col">
                            <ul className="list-unstyled">
                                <li>Contact</li>
                                <li>Jobs</li>
                                <li>FAQ</li>
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