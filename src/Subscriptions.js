import React from 'react'
import free from './photos/free-sam.png'
import popular from './photos/popular.png'
import hair from './photos/hair.png'
import holler from './photos/holler.png'
import house from './photos/houseblend.png'
import frenchro from './photos/frenchro.png'
import trapper from './photos/trapper.png'
import FormModal from './FormModal'





class Subscriptions extends React.Component {
    render() {
        return (
            <>
                <h1 className="choose">Choose your beans</h1>
                <h3 className="choose1">Fresh coffee delivered every two weeks. Change or cancel anytime. </h3>
                <div className="sub">
                    <img src={free} className="free" alt="free"></img>
                    <img src={popular} className="popular" alt="popular"></img>
                    <img src={hair} alt="hair" className="hair" />
                </div>
                
                <div className="sub1">
                    <h1 className="free-sam1">Free Sample</h1>
                    <h1 className="free-sam1">Roaster's Pick</h1>
                    <h1 className="free-sam1">Hairbender</h1>
                </div>

                <div className="sub-2">
                    <p className="free-sam">We’ll send you a 2 oz. sample of Hair Bender to try, on us. Lucky you! If you love it, and we think you will, we'll automatically start your 2 week subscription.</p>
                    <p className="free-sam">The best of the best. Whatever we here at Stumptown are loving (and drinking), we’ll send to you.</p>
                    <p className="free-sam">The sweet, savory blend that started it all; a beautiful mix of coffees from Latin America, Africa and Indonesia.</p>
                </div>

                <div className="sub-3">
                    <button ><FormModal/></button>
                    <button><FormModal/></button>
                    <button ><FormModal/></button>

                </div>

                <div className="sub-row">
                    <img src={holler} alt="holler" className="holler" />
                    <img src={house} alt="" className="house" />
                    <img src={frenchro} alt="" className="frenchro" />
                    <img src={trapper} alt="" className="trapper" />
                </div>

                <div className="sub-row2">

                    <h1 className="free-sam1">Holler Mountain</h1>
                    <h1 className="free-sam1">House Blend</h1>
                    <h1 className="free-sam1">French Roast</h1>
                    <h1 className="free-sam1">Trapper Creek</h1>
                </div>

              

                <div className="sub-row3">
                    <p className="free-sam">Our signature organic blend that brings a sweet, full-bodied cup. Perfect for espresso or a cup of Joe.</p>
                    <p className="free-sam">Quintessential coffee with fruit, florals and toasty nuts. Drink it all day, every day.</p>
                    <p className="free-sam">A toasty, roasty cup for those who love darker flavors — look for chocolate and clove.</p>
                    <p className="free-sam">You’ve never tasted a decaf like this. Ever. Indistinguishable from its caffeinated sisters. </p>
                </div>

                <div className="sub-3">
                    <button ><FormModal/></button>
                    <button ><FormModal/></button>
                    <button ><FormModal/></button>
                    <button ><FormModal/></button>

                </div>
            </>
        )
    }
}


export default Subscriptions