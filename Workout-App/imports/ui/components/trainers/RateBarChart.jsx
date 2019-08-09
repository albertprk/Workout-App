import React from "react";
import Chart from 'react-apexcharts'
import {ExtendedPieChartData as percentage} from "react-minimal-pie-chart";


class PieChart extends React.Component {

    constructor(props) {
        super(props);

        const comments = this.props.comments;
        var totalVotes = this.props.comments.filter(function(c){return c!= null && c != undefined;}).length;
        
        var rateLess6 = this.props.comments.filter(function(c){return c.rate < 6;}).length;
        var rate6 = this.props.comments.filter(function(c){return c.rate == 6;}).length;
        var rate7 = this.props.comments.filter(function(c){return c.rate == 7;}).length;
        var rate8 = this.props.comments.filter(function(c){return c.rate == 8;}).length;
        var rate9 = this.props.comments.filter(function(c){return c.rate == 9;}).length;
        var rate10 = this.props.comments.filter(function(c){return c.rate == 10;}).length;

        var percentLess6 = ((rateLess6/totalVotes) * 100).toFixed(0) ;
        var percent6 = ((rate6/totalVotes) * 100).toFixed(0) ;
        var percent7 = ((rate7/totalVotes) * 100).toFixed(0) ;
        var percent8 = ((rate8/totalVotes) * 100).toFixed(0) ;
        var percent9 = ((rate9/totalVotes) * 100).toFixed(0) ;
        var percent10 = ((rate10/totalVotes) * 100).toFixed(0) ;

        this.state = {
            options: {
                title: {
                    text: ''
                },
                chart: {
                    id: 'apexchart-example'
                },
                xaxis: {
                    title: {
                        text: 'Rating'
                    },
                    categories: ['<6', 6, 7, 8, 9, 10]
                },
                yaxis: {
                    title: {
                        text: 'Total votes'
                    },
                }
            },
            series: [
                {
                    name: 'Votes',
                    data: [rateLess6, rate6,rate7, rate8, rate9, rate10]
                }]
        }
    }
    render() {
        return (
            <Chart options={this.state.options} series={this.state.series} type="bar" width={400} height={220} />
        )
    }

}

export default PieChart;
