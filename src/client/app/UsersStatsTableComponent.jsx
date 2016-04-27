/**
 * Created by admin on 07/04/2016.
 */
import React from 'react'
import {render} from 'react-dom'
import Table from 'react-bootstrap/lib/Table'
import Label from 'react-bootstrap/lib/Label'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

class StatsTableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            usersCount: 0,
            order: '',
            orderType: ''
        };
    }

    sortDatasFqdn(a, b) {
        return a.localCompare(b)
    }

    loadStatsData() {
        $.ajax({
            url: 'http://stats.adm.afrostream.net/api/getUsers',
            dataType: 'json',
            success: function(data) {
                this.setState({
                    data: data.users,
                    usersCount: data.usersCount
                });
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

    onClick(type, order) {
        this.setState({
            order: type,
            orderType: order
        });
    }

    dataOrderAsc(type) {
        return function(a, b) {
            if (typeof a[type] == 'number') {
                return a[type] - b[type];
            }
            if (typeof a[type] == 'string') {
                return a[type].localeCompare(b[type]);
            }
        }
    }

    dataOrderDesc(type) {
        return function(a, b) {
            if (typeof a[type] == 'number') {
                return b[type] - a[type];
            }
            if (typeof a[type] == 'string') {
                return (a[type].localeCompare(b[type]) * -1);
            }
        }
    }

    render() {
        var datas = this.state.data;
        if (this.state.orderType == 'asc') {
            datas = this.state.data.sort(this.dataOrderAsc(this.state.order));
        } else {
            datas = this.state.data.sort(this.dataOrderDesc(this.state.order));
        }
        return (
            <div>
            <Label bsStyle="warning" id="lblUsers">Total Users: {this.state.usersCount}</Label>
            <Table striped bordered condensed hover responsive>
                <thead>
                <tr>
                    <th>
                        Origin
                        <a onClick={this.onClick.bind(this, 'Fqdn', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'Fqdn', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                    <th>
                        User ID
                        <a onClick={this.onClick.bind(this, 'User_id', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'User_id', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                    <th>
                        Country
                        <a onClick={this.onClick.bind(this, 'Country', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'Country', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                    <th>
                        City
                        <a onClick={this.onClick.bind(this, 'City', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'City', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                    <th>
                        IP
                        <a onClick={this.onClick.bind(this, 'Ip', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'Ip', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                    <th>
                        ASNumber
                        <a onClick={this.onClick.bind(this, 'As_number', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'As_number', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                    <th>
                        ASName
                        <a onClick={this.onClick.bind(this, 'As_name', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'As_name', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                    <th>
                        Bitrate AVG
                        <a onClick={this.onClick.bind(this, 'Bandwidth_avg', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'Bandwidth_avg', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                    <th>
                        Bitrate CUR
                        <a onClick={this.onClick.bind(this, 'Bandwidth_current', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'Bandwidth_current', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                    <th>
                        BFR
                        <a onClick={this.onClick.bind(this, 'Buffering_number', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'Buffering_number', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                    <th>
                        Timeout
                        <a onClick={this.onClick.bind(this, 'ttl', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'ttl', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                </tr>
                </thead>
                <tbody>
                { datas.map(function(d, k) {
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
            </div>
        );
    }
}

export default StatsTableComponent;