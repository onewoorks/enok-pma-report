import React, { Component } from "react"
import moment from 'moment'

let group = [
    "JHA",
    "JHR",
    "JHS",
    "KDH",
    "KLD",
    "KLE",
    "KLT",
    "MLC",
    "MP1",
    "MP2",
    "NSN",
    "OKB",
    "OKC",
    "PJA",
    "PJC",
    "PJD",
    "PLS",
    "PNA",
    "PNB",
    "PNC",
    "PRK",
    "SBH",
    "TG"
]

let cp = [
    "Tan SK",
    "Bernard",
    "Tung CY",
    "Ooi ES",
    "Alex Koay",
    "Liew VL",
    "Dzul",
    "Gun KH",
    "Saidi",
    "Vellu",
    "Rajan",
    "Iswadi",
    "On BS",
    "Khalil",
    "Thong KM",
    "Nasrum",
    "Khairol Nizam",
    "Yap KF",
    "James",
    "Vignes",
    "Sundarrach",
    "Jeff Ang",
    "Haza",
    "Razali",
    "Calvin Tan",
    "Shamsul",
    "Wong TY"
]

let finding = [
    {
        zone: "Lift Pit",
        category: [
            "Illumination",
            "Housekeeping",
            "Fencing",
            "Runby",
            "Water/Wet",
            "Governor tension weight",
            "Buffer",
            "Switches",
            "Oily",
            "Ladder"
        ]
    },
    {
        zone: "Lift Motor Room",
        category: [
            "Access Way",
            "Signage",
            "Illumination",
            "Housekeeping",
            "Fire Extinguisher",
            "Ventilation",
            "PMA ",
            "Machine",
            "OSG",
            "Brake",
            "Controller",
            "Water/Wet",
            "Sheave/Groove",
            "Structure",
            "Power Point"
        ]
    },
    {
        zone: "Car Top/Hoistway",
        category: [
            "Oil Can",
            "Guide Shoe/ Roller",
            "Counterweight",
            "Illumination",
            "Final limit switch/Cam",
            "Car top railing",
            "Rope",
            "Car top Fan",
            "CDL"
        ]
    },
    {
        zone: "Car",
        category: [
            "Alarm Bell",
            "Mirror/ Glass",
            "Door",
            "Call Button",
            "Car Levelling",
            "PMA",
            "EBOPS",
            "Signage"
        ]
    },
    {
        zone: "Document",
        category: ["Contract", "Logbook", "2nd schedule book"]
    }
]

let today = moment(new Date()).format('DD MMMM YYYY')

export default class FindingEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            group: group[0],
            cp: cp[0],
            date: today,
            site: "",
            lift_id: "",
            pma_number: "",
            findings: "",
            finding_zone: finding[0]["zone"],
            finding_category: finding[0]["category"][0],
            inpection_status: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    list_of_group = object => {
        let options = []
        object.forEach((element, index) => {
            options.push(
                <option key={index} value={element}>
                    {element}
                </option>
            )
        })
        return options
    }

    list_of_finding_zone = () => {
        let zone = []
        finding.forEach((value, key) => {
            zone.push(
                <option value={value["zone"]} key={key}>
                    {value["zone"]}
                </option>
            )
        })
        return zone
    }

    list_of_finding_category = zone_name => {
        let category = []
        finding.forEach((element, key) => {
            if (element["zone"] === zone_name) {
                element["category"].forEach((element, key) => {
                    category.push(
                        <option value={element} key={key}>
                            {element}
                        </option>
                    )
                })
            }
        })
        return category
    }

    handleChange = event => {}

    handle_change = event => {
        console.log(this.state)
    }

    handle_zone_change = event => {
        this.setState({
            finding_zone: event.target.value
        })
    }

    handle_submit_form = event => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.handle_submit_form} className="mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="group">Group</label>
                                <select
                                    name=""
                                    id=""
                                    className="form-control"
                                    onChange={e =>
                                        this.setState({ group: e.target.value })
                                    }
                                    value={this.state.group}
                                >
                                    {this.list_of_group(group)}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Competent Person</label>
                                <select
                                    name=""
                                    id=""
                                    className="form-control"
                                    onChange={e =>
                                        this.setState({ cp: e.target.value })
                                    }
                                >
                                    {this.list_of_group(cp)}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Date</label>
                                <input type="text" className="form-control-plaintext"
                                    value={today}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Site</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    onKeyUp={text =>
                                        this.setState({
                                            site: text.target.value
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Lift Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    onKeyUp={text =>
                                        this.setState({
                                            lift_id: text.target.value
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="">PMA Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onKeyUp={e =>
                                        this.setState({
                                            pma_number: e.target.value
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Finding Zone</label>
                                <select
                                    name=""
                                    id=""
                                    className="form-control"
                                    onChange={this.handle_zone_change}
                                >
                                    {this.list_of_finding_zone()}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Finding Category</label>
                                <select
                                    name=""
                                    id=""
                                    className="form-control"
                                    onChange={e =>
                                        this.setState({
                                            finding_category: e.target.value
                                        })
                                    }
                                >
                                    {this.list_of_finding_category(
                                        this.state.finding_zone
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Finding</label>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            className="form-control"
                        >
                            {this.state.finding}
                        </textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Inspection Status</label>
                        <input
                            type="text"
                            className="form-control"
                            onKeyUp={e =>
                                this.setState({
                                    inpection_status: e.target.value
                                })
                            }
                        />
                    </div>

                    <button className="btn btn-primary btn-block">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
