import Graph from "./neo4j";
import React from "react";

const GraphComponent=({name,option})=>{
    return  <Graph name={name} option={option}/>
}

export default GraphComponent
