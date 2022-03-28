import React from 'react';
import './mystyle.css'

const TableHeader = () => {

    // boilerplate table header functional component

    return (

        <thead>

            <tr>

                <th >Name</th>

                <th id="table">URL</th>

                <th className="tableheader">Remove</th>

            </tr>

        </thead>

    );

}

const TableBody = props => {

    // boilerplate table body functional component

    // we use Array.map to create table rows from LinkData passed via props

    const rows = props.linkData.map((row, index) => {

        return (

            <tr key={index}>

                

                <td>{row.linkName}</td>

                

                <td><a href={row.url}>{row.url}</a></td>

                <td><button onClick={() => props.removeLink(index)}>Delete</button></td>

            </tr>

        );

    });

    return <tbody>{rows}</tbody>;

}

const Table = (props) => {

//  const {linkData, removelink} = props;

   

    return (

        <div className="tableheader">

            {TableHeader()}

            {TableBody(props)}

        </div>

    )

}

export default Table;