/**
 * Created by admin on 07/04/2016.
 */
import React from 'react'
import {render} from 'react-dom'
import Table from 'react-bootstrap/lib/Table'
import { countryTable } from './CountryCodes.jsx'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

class CountriesStatsTableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    loadStatsData() {
        $.ajax({
            url: 'http://stats.adm.afrostream.net/api/getCountries',
            dataType: 'json',
            success: function(data) {
                this.setState({data: data.countries});
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
            <Table striped bordered condensed hover responsive>
                <thead>
                <tr>
                    <th>
                        Country
                        <a onClick={this.onClick.bind(this, 'country', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'country', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                    <th>
                        Total Users
                        <a onClick={this.onClick.bind(this, 'UserCount', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'UserCount', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                    <th>
                        Total Bandwidth
                        <a onClick={this.onClick.bind(this, 'TotalBandwidth', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'TotalBandwidth', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                    <th>
                        Average Bandwidth
                        <a onClick={this.onClick.bind(this, 'AverageBandwidth', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'AverageBandwidth', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                    <th>
                        Total Buffering
                        <a onClick={this.onClick.bind(this, 'TotalBufferings', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'TotalBufferings', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                    <th>
                        Buffering Ratio
                        <a onClick={this.onClick.bind(this, 'AverageBufferings', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'AverageBufferings', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                    <th>
                        CDN
                        <a onClick={this.onClick.bind(this, 'ChunksFromCDN', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'ChunksFromCDN', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                    <th>
                        P2P
                        <a onClick={this.onClick.bind(this, 'ChunksFromP2P', 'desc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-up" />
                        </a>
                        <a onClick={this.onClick.bind(this, 'ChunksFromP2P', 'asc')}>
                            <Glyphicon style={{float: 'right'}} glyph="glyphicon glyphicon-chevron-down" />
                        </a>
                    </th>
                </tr>
                </thead>
                <tbody>
                { this.state.data.map(function(d, k) {
                    var countryCode = countryTable[d.country];
                    if (countryCode == null) {
                        countryCode = d.country;
                    }
                    return (
                        <tr key={k}>
                            <td>{countryCode}</td>
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

export default CountriesStatsTableComponent;