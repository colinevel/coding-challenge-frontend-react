import React from 'react'

export default function Company(props) {
    return (
        <React.Fragment>
            <h2>Company</h2>
            <p>Name: {props.companyName}</p>
            <p>Catchphrase: "{props.companyCatchPhrase}"</p>
            <p>Bs: {props.companyBS}</p>
        </React.Fragment>
    )
}
