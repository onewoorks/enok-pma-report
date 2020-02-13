import React, { Component } from "react"
import axios from "axios"
import moment from "moment"

const match_filter = filter_name => {
    let actual_name = ""
    switch (filter_name) {
        case "lift_pit":
            actual_name = "Lift Pit"
            break
        case "lift_motor_room":
            actual_name = "Lift Motor Room"
            break
        case "car_top_hoistway":
            actual_name = "Car Top/Hoistway"
            break
        case "car":
            actual_name = "Car"
            break
        case "document":
            actual_name = "Document"
            break
        default:
            break
    }
    return actual_name
}

class TableRender extends Component {
    table_data = filter_by => {
        let records = []
        if (!this.props.reports.length > 0) {
            records.push(
                <tr key="1">
                    <td colSpan="10">No report submitted</td>
                </tr>
            )
        } else {
            this.props.reports.forEach((element, key) => {
                if (this.props.filter === "all") {
                    records.push(
                        <tr key={key}>
                            <td>{element.group}</td>
                            <td>{element.cp}</td>
                            <td>
                                {moment(element.report_date).format(
                                    "DD/MM/YYYY"
                                )}
                            </td>
                            <td>{element.site}</td>
                            <td>{element.lift_id}</td>
                            <td>{element.pma_number}</td>
                            <td>{element.finding}</td>
                            <td>{element.finding_zone}</td>
                            <td>{element.finding_category}</td>
                            <td>{element.inspection_status}</td>
                        </tr>
                    )
                } else {
                    if (element.finding_zone === match_filter(this.props.filter)) {
                    records.push(
                        <tr key={key}>
                            <td>{element.group}</td>
                            <td>{element.cp}</td>
                            <td>
                                {moment(element.report_date).format(
                                    "DD/MM/YYYY"
                                )}
                            </td>
                            <td>{element.site}</td>
                            <td>{element.lift_id}</td>
                            <td>{element.pma_number}</td>
                            <td>{element.finding}</td>
                            <td>{element.finding_zone}</td>
                            <td>{element.finding_category}</td>
                            <td>{element.inspection_status}</td>
                        </tr>
                    )
                }
                }
                
            })
        }
        return records
    }

    render() {
        return (
            <table
                className="mt-5 table table-bordered"
                style={{ fontSize: ".8em" }}
            >
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>Group</th>
                        <th style={{ textAlign: "center" }}>CP</th>
                        <th style={{ textAlign: "center" }}>Date</th>
                        <th style={{ textAlign: "center" }}>Site</th>
                        <th style={{ textAlign: "center" }}>Lift Id</th>
                        <th style={{ textAlign: "center" }}>PMA Number</th>
                        <th style={{ textAlign: "center" }}>Finding</th>
                        <th style={{ textAlign: "center" }}>Finding Zone</th>
                        <th style={{ textAlign: "center" }}>
                            Finding Category
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Inspection Status
                        </th>
                    </tr>
                </thead>

                <tbody>{this.table_data(this.props)}</tbody>
            </table>
        )
    }
}

export default class Report extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reports: []
        }
    }

    fetch_report = () => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}/pma-report/submitted`)
            .then(response => {
                return response.data
            })
            .catch(response => {})
    }

    componentDidMount() {
        this.reports_data()
    }

    reports_data = () => {
        let sample_report = new Promise(resolve => {
            resolve(this.fetch_report())
        })
        return sample_report.then(response =>
            this.setState({ reports: response })
        )
    }

    render() {
        return (
            <div>
                <TableRender
                    reports={this.state.reports}
                    filter={this.props.filter}
                />
            </div>
        )
    }
}
