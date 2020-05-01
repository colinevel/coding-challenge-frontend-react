import React from 'react'

export default function Adress(props) {
    return (
        <React.Fragment>
            <h2>Address</h2>
            <p>Street: {props.street}</p>
            <p>Suite: {props.suite}</p>
            <p>City: {props.city}</p>
            <p>Zipcode: {props.zipcode}</p>
            <p>Lat: {props.geo.lat}</p>
            <p>Lng: {props.geo.lng}</p>
        </React.Fragment>
    )
}
