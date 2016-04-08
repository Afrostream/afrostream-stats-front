/**
 * Created by admin on 07/04/2016.
 */
import React from 'react'
import {render} from 'react-dom'
import Table from 'react-bootstrap/lib/Table'

class StatsTableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    loadStatsData() {
        $.ajax({
            url: 'http://stats.adm.afrostream.net/api/getUsers',
            dataType: 'json',
            success: function(data) {
                this.setState({data: data.users});
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
            console.log('clear timer');
        }
    }

    render() {
        return (
            <Table striped bordered condensed hover responsive>
                <thead>
                <tr>
                    <th>Origin</th>
                    <th>User ID</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>IP</th>
                    <th>ASNumber</th>
                    <th>ASName</th>
                    <th>Bitrate AVG</th>
                    <th>Bitrate CUR</th>
                    <th>BFR</th>
                    <th>Timeout</th>
                </tr>
                </thead>
                <tbody>
                { this.state.data.map(function(d, k) {
                    return (
                        <tr key={k}>
                            <td>
                                { d.Fqdn }
                            </td>
                            <td>
                                { d.User_id }
                            </td>
                            <td>
                                { d.Country }
                            </td>
                            <td>
                                { d.City }
                            </td>
                            <td>
                                { d.Ip }
                            </td>
                            <td>
                                { d.As_number }
                            </td>
                            <td>
                                { d.As_name }
                            </td>
                            <td>
                                { Math.trunc(d.Bandwidth_avg) }
                            </td>
                            <td>
                                { Math.trunc(d.Bandwidth_current) }
                            </td>
                            <td>
                                { d.Buffering_number }
                            </td>
                            <td>
                                { d.ttl }
                            </td>
                        </tr>
                    );
                }) }
                </tbody>
            </Table>
        );
    }
}

export default StatsTableComponent;