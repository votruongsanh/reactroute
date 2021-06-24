import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Component/Header/Header';


export default function LoginTemPlate(props) { //props nhận object, array, string, number, function, component
    //chèn hook HOC Higher order component

    // const {component, path} = props;

    return (
        <Fragment>
            {/* <Route path={path} exact component={component} /> */}

            <Route path={props.path} exact render={(propsRoute) => {
                return <Fragment>
                    <div className="row">
                        <div className="col-6">
                            <img src="https://picsum.photos/100" style={{height:"100vh"}} />
                        </div>
                        <div className="col-6">
                        <props.component {...propsRoute} />
                        </div>
                    </div>
                </Fragment>
            }} />
        </Fragment>
    )
}
