/**
 * Created by admin on 07/04/2016.
 */
import React from 'react'
import {render} from 'react-dom'
import Table from 'react-bootstrap/lib/Table'

class OriginsStatsTableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    loadStatsData() {
        $.ajax({
            url: 'http://stats.adm.afrostream.net/api/getOrigins',
            dataType: 'json',
            success: function(data) {
                this.setState({data: data.origins});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error('#GET Error', status, err.toString());
            }.bind(this)
        });
    }

    componentDidMount() {
        this.loadStatsData();
        this.timerId = setInterval(this.loadStatsData.bind(this), this.props.pollInterval);
    }

    componentWillUnmount() {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
    }

    render() {
        return (
            <Table striped bordered condensed hover responsive>
                <thead>
                <tr>
                    <th>Origin</th>
                    <th>Total Users</th>
                    <th>Total Bandwidth</th>
                    <th>Average Bandwidth</th>
                    <th>Total Buffering</th>
                    <th>Buffering Ratio</th>
                    <th>CDN</th>
                    <th>P2P</th>
                </tr>
                </thead>
                <tbody>
                { this.state.data.map(function(d, k) {
                    return (
                        <tr key={k}>
                            <td>{d.origin}</td>
                            <td>{d.UserCount}</td>
                            <td>{Math.trunc(d.TotalBandwidth)}</td>
                            <td>{Math.trunc(d.AverageBandwidth)}</td>
                            <td>{d.TotalBufferings}</td>
                            <td>{Math.trunc(d.AverageBufferings)}</td>
                            <td>{d.ChunksFromCDN}</td>
                            <td>{d.ChunksFromP2P}</td>
                        </tr>
                    );
                }) }
                </tbody>
            </Table>
        );
    }
}

export default OriginsStatsTableComponent;