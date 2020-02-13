import React from "react"
import Report from './report'
import PmaChart from './pma_charts'

class ReportIndex extends React.Component {

    state = {
        current_tab: "all"
    }

    handle_click = (e) => {
        this.setState({
            current_tab: e.target.id
        })
    }

    render() {
        return (
            <div>
                <PmaChart />
                <ul className="nav nav-pills mt-5">
                    <li className="nav-item">
                        <button id="all" className={`btn ${ (this.state.current_tab === 'all') ? 'btn-primary':'btn-default'}`} onClick={(e) => this.handle_click(e)}>
                            All
                        </button>
                    </li>
                    <li className="nav-item">
                        <button id="lift_pit" className={`btn ${ (this.state.current_tab === 'lift_pit') ? 'btn-primary':'btn-default'}`} onClick={(e) => this.handle_click(e)}>
                            Lift Pit
                        </button>
                    </li>
                    <li className="nav-item">
                        <button id="lift_motor_room" className={`btn ${ (this.state.current_tab === 'lift_motor_room') ? 'btn-primary':'btn-default'}`} onClick={(e) => this.handle_click(e)}>
                            Lift Motor Room
                        </button>
                    </li>
                    <li className="nav-item">
                        <button id="car_top_hoistway" className={`btn ${ (this.state.current_tab === 'car_top_hoistway') ? 'btn-primary':'btn-default'}`} onClick={(e) => this.handle_click(e)}>
                            Car Top/Hoistway
                        </button>
                    </li>
                    <li className="nav-item">
                        <button id="car" className={`btn ${ (this.state.current_tab === 'car') ? 'btn-primary':'btn-default'}`} onClick={(e) => this.handle_click(e)}>
                            Car
                        </button>
                    </li>
                    <li className="nav-item">
                        <button id="document" className={`btn ${ (this.state.current_tab === 'document') ? 'btn-primary':'btn-default'}`} onClick={(e) => this.handle_click(e)}>
                            Document
                        </button>
                    </li>
                </ul>
                <hr/>

                <div>
                    <Report filter={this.state.current_tab} />
                </div>
            </div>
        )
    }
}
export default ReportIndex
