import _ from "lodash";
import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines"; 

function average(data){
    let avg = _.sum(data) / data.length;
    return _.round(avg);
}

const Chart = (props) => {
    return(
        <div>
            <Sparklines height={120} width={180} data={props.data} unit={props.unit}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{average(props.data) + " " + props.unit}</div>
        </div>
    );    
}

export default Chart;