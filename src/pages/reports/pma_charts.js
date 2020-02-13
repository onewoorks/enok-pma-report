import React, { Component } from "react"
import CanvasJSReact from "../../assets/canvasjs.react"
import axios from "axios"
var CanvasJSChart = CanvasJSReact.CanvasJSChart
var CanvasJS = CanvasJSReact.CanvasJS

export default class BarChart extends Component {

    state = {
        chart_data: []
    }

    componentDidMount(){
        this.get_summary()
    }

    chart_data = (summary_data) => {
        let formatted_data = []
        summary_data.forEach((k,v)=>{
            formatted_data.push(
                {
                    y: k.total,
                    label: k.finding_zone
                }
            )
        })
        return formatted_data

    }

    get_summary = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/pma-report/submitted/summary`)
        .then(response => {
            this.setState({
                chart_data: this.chart_data(response.data)
            })
        })
    }

    addSymbols(e) {
        var suffixes = ["", "K", "M", "B"]
        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0)
        if (order > suffixes.length - 1) order = suffixes.length - 1
        var suffix = suffixes[order]
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix
    }
    render() {
        const options = {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "Current Site Visit Report"
            },
            axisX: {
                title: "Site Visit Report",
                reversed: true
            },
            axisY: {
                title: "Count Finding Category",
                labelFormatter: this.addSymbols
            },
            data: [
                {
                    type: "column",
                    dataPoints: this.state.chart_data
                }
            ]
        }

        return (
            <div>
                <CanvasJSChart options={options} />
            </div>
        )
    }
}