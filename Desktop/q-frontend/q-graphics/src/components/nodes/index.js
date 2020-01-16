import React from 'react';
import { Link, Route } from 'react-router-dom'
import Node from './Node'
 
export default ({ match: {url}, nodes }) =>
    <>
    <ul>
        {nodes.map( ({ id, name}) => 
            <li key={id}>
                <Link to={`${ url }/${ id }`}>{ name }</Link>
            </li>
        )}
    </ul>

    <Route to={`${url}/:id`} render={() => <Node  />} />
    </>
 