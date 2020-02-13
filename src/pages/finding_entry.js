import React, { Component } from "react"
import moment from "moment"
import axios from "axios"

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

let today = moment(new Date()).format("DD MMMM YYYY")
let today_db_format = moment(new Date()).format("YYYY-MM-DD")

export default class FindingEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                group: group[0],
                cp: cp[0],
                date: today_db_format,
                site: "A",
                lift_id: "A",
                pma_number: "A",
                findings: "A",
                finding_zone: finding[0]["zone"],
                finding_category: finding[0]["category"][0],
                inpection_status: "A"
            },
            button_submit: {
                text: "Submit",
                style_class: "primary"
            },
            form_mode: "new"
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

    handle_change = event => {}

    handle_zone_change = event => {
        this.setState({
            form: {
                ...this.state.form,
                finding_zone: event.target.value
            }
        })
    }

    handle_reset_form = () => {
        this.setState({
            form: {
                group: group[0],
                cp: cp[0],
                date: today_db_format,
                site: "A",
                lift_id: "A",
                pma_number: "A",
                findings: "A",
                finding_zone: finding[0]["zone"],
                finding_category: finding[0]["category"][0],
                inpection_status: "A"
            },
            button_submit: {
                text: "Submit",
                style_class: "primary"
            },
            form_mode: "new"
        })
    }

    handle_submit_form = event => {
        event.preventDefault()
        if (this.state.form_mode === "new") {
            axios
                .post(
                    `${process.env.REACT_APP_API_URL}/pma-report/new-report`,
                    this.state.form
                )
                .then(response => {
                    console.log(this.state.form)
                    console.log(response)
                    this.setState({
                        button_submit: {
                            text: "Submitted",
                            style_class: "success"
                        },
                        form_mode: "completed"
                    })
                    console.log(this.state)
                })
        } else {
            this.handle_reset_form()
        }
    }

    render() {
        return (
            <div>
                <form
                    action=""
                    onSubmit={this.handle_submit_form}
                    className="mb-3"
                >
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="group">Group</label>
                                <select
                                    name=""
                                    id=""
                                    className="form-control"
                                    onChange={e =>
                                        this.setState({
                                            form: {
                                                ...this.state.form,
                                                group: e.target.value
                                            }
                                        })
                                    }
                                    value={this.state.form.group}
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
                                        this.setState({
                                            form: {
                                                ...this.state.form,
                                                cp: e.target.value
                                            }
                                        })
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
                                <input
                                    type="text"
                                    className="form-control-plaintext"
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
                                    onChange={text =>
                                        this.setState({
                                            form: {
                                                ...this.state.form,
                                                site: text.target.value
                                            }
                                        })
                                    }
                                    value={this.state.form.site}
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
                                    onChange={text =>
                                        this.setState({
                                            form: {
                                                ...this.state.form,
                                                lift_id: text.target.value
                                            }
                                        })
                                    }
                                    value={this.state.form.lift_id}
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="">PMA Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={e =>
                                        this.setState({
                                            form: {
                                                ...this.state.form,
                                                pma_number: e.target.value
                                            }
                                        })
                                    }
                                    value={this.state.form.pma_number}
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
                                            form: {
                                                ...this.state.form,
                                                finding_category: e.target.value
                                            }
                                        })
                                    }
                                >
                                    {this.list_of_finding_category(
                                        this.state.form.finding_zone
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
                            value={this.state.form.findings}
                            onChange={ e => this.setState({
                                form:{
                                    ...this.state.form,
                                    findings: e.target.value
                                }
                            })}
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Inspection Status</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={e =>
                                this.setState({
                                    form: {
                                        ...this.state.form,
                                        inpection_status: e.target.value
                                    }
                                })
                            }
                            value={this.state.form.inspection_status}
                        />
                    </div>

                    <button
                        className={`btn btn-${this.state.button_submit.style_class} btn-block text-uppercase`}
                    >
                        {this.state.button_submit.text}
                    </button>
                </form>
            </div>
        )
    }
}
