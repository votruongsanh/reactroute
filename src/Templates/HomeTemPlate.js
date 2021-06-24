import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import Header from '../Component/Header/Header';


export default function HomeTemPlate(props) { //props nhận object, array, string, number, function, component
    //chèn hook HOC Higher order component

    // const {component, path} = props;

    const { isLoading } = useSelector(state => state.LoadingReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: "DISPLAY_LOADING" })
        }, 1000);
        return () => {
            dispatch({ type: "HIDE_LOADING" })
        }
    }, [])
    const renderLoading = () => {
        if (isLoading) {
            return (
                <div style={{ position: "fixed", zIndex: 10, width: "100%", top: 0, left: 0, backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="text-white text-center ">
                        Loading...
                    </div>
                </div>
            )
        }
    }

    return (
        <Fragment>
            {/* <Route path={path} exact component={component} /> */}

            <Route path={props.path} exact render={(propsRoute) => {
                return <Fragment>
                    {renderLoading()}
                    <Header {...propsRoute} />
                    <props.component {...propsRoute} />
                </Fragment>
            }} />
        </Fragment>
    )
}
