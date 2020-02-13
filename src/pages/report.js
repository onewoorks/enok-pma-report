import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react'
// import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

const sample_report = [
    {
        group: "PJA",
        cp: "Gun KH",
        date: "3 February 2020",
        site: "Denai Impian",
        lift_id: "PL1",
        pma_number: "SL PMA 29887",
        finding: "To replace traction machine bedplate isolation rubber",
        finding_zone: "Lift Motor Room",
        finding_category: "Machine",
        inspection_status: "Passed"
    },
    {
        group: "PJA",
        cp: "Gun KH",
        date: "3 February 2020",
        site: "Denai Impian",
        lift_id: "PL1",
        pma_number: "SL PMA 29887",
        finding: "To replace traction machine bedplate isolation rubber",
        finding_zone: "Lift Motor Room",
        finding_category: "Machine",
        inspection_status: "Passed"
    },
    {
        group: "PJA",
        cp: "Gun KH",
        date: "3 February 2020",
        site: "Denai Impian",
        lift_id: "PL1",
        pma_number: "SL PMA 29887",
        finding: "To replace traction machine bedplate isolation rubber",
        finding_zone: "Lift Motor Room",
        finding_category: "Machine",
        inspection_status: "Passed"
    },
    {
        group: "PJA",
        cp: "Gun KH",
        date: "3 February 2020",
        site: "Denai Impian",
        lift_id: "PL1",
        pma_number: "SL PMA 29887",
        finding: "To replace traction machine bedplate isolation rubber",
        finding_zone: "Lift Motor Room",
        finding_category: "Machine",
        inspection_status: "Passed"
    }
]

class BarChart extends Component {
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
	render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Current Site Visit Report"
			},
			axisX: {
				title: "Site Visit Report",
				reversed: true,
			},
			axisY: {
				title: "Count Finding Category",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "column",
				dataPoints: [
					{ y:  2, label: "Lift Pit" },
					{ y:  2, label: "Lift Motor Room" },
					{ y:  8, label: "Car Top/Hoistway" },
					{ y:  4, label: "Car" },
					{ y:  2, label: "Document" }
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default class Report extends Component {

    table_render = () => {
        let records = []
        sample_report.forEach((element, key) => {
            records.push(
                <tr>
                    <td>{element.group}</td>
                    <td>{element.cp}</td>
                    <td>{element.date}</td>
                    <td>{element.site}</td>
                    <td>{element.lift_id}</td>
                    <td>{element.pma_number}</td>
                    <td>{element.finding}</td>
                    <td>{element.finding_zone}</td>
                    <td>{element.finding_category}</td>
                    <td>{element.inspection_status}</td>
                </tr>
            )
        })
        return records
    }

    render() {
        return (
            <div>
                <div>Report</div>
                <BarChart />
                <table className='mt-5 table table-bordered'>
                    <thead>
                        <tr>
                            <th>Group</th>
                            <th>CP</th>
                            <th>Date</th>
                            <th>Site</th>
                            <th>Lift Id</th>
                            <th>PMA Number</th>
                            <th>Finding</th>
                            <th>Finding Zone</th>
                            <th>Finding Category</th>
                            <th>Inspection Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.table_render()}
                    </tbody>

                </table>
            </div>
        )
    }
}