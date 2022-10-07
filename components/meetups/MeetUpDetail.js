import { Fragment } from "react";
import classes from './MeetUpDetail.module.css';
function MeetupDetail(props){
    return (<Fragment>
        <img 
            src = {props.img}
            alt = {props.title}
            />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
    </Fragment>);
}