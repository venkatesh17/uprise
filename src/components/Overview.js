import React, { Component }  from 'react';
import './index.css'

class Overview extends React.Component {
    render(){
        return (
            <div className="overview mt-4 bg-white">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="box"></div>
                    </div>
                    <div className="col-sm-6 ">
                    <div className="box1">
                       <h2>ChilledCow</h2>
                       <p>Follower(123345)</p>
                        <button className="btn btn-primary">Follow</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Overview;