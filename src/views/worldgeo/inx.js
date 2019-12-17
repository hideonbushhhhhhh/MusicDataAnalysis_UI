import React, {useEffect, useState} from 'react';
import {Button, Input,  Select} from 'antd';
import G6 from "@antv/g6";
import ReactDOM from "react-dom";
import axios from "axios";
const { Option } = Select;
const acs = {
    nodes: [],
    edges: [],

}

function List (){
    const [stat,setStat]=useState({
        option:'artist',
        name:''
    })


    const onSelect=(e)=> {
        stat.option=e;
    }
    const onChange=(e)=> {
        console.log(e.keyCode)
        if (e.keyCode===0){
            setStat({
                option:stat.option,
                name:e.target.value
            })
            if (graph) graph.destroy()
        }
    }
    const ref = React.useRef(null);
    let graph = null;
    useEffect(() => {

        if (!graph) {
            graph = new G6.Graph({
                container: ReactDOM.findDOMNode(ref.current),
                width: 2000.,
                height: 1200,
                modes: {
                    default: ['drag-canvas','drag-node'],
                    edit: [ 'click-select' ]
                },
                layout: {
                    type: 'force',
                    preventOverlap: true,
                    linkDistance: 200,
                    nodeSize:75,
                    collideStrength:1,
                    nodeStrength: d => {
                        if (d.class===1) {
                            return -50;
                        }
                        else if (d.class===2){
                            return -30;
                        }
                        return -10;
                    },

                },
                defaultNode: {
                    shape: 'node',
                    labelCfg: {
                        style: {
                            fontSize: 10,
                        },
                    },
                    style: {
                        width: 150,
                    },
                },
            });
        }
        var url='http://localhost:8080'
        if(stat.option==='artist'){
            url=url+'/getArtistNode'
        }
        else if (stat.option==='song'){
            url=url+'/getSongNode'
        }
        else if(stat.option==='album'){
            url=url+'/getAlbumNode'
        }
        console.log(url)

        axios.get(url, {params: {name: stat.name }}).then(function (req) {
            const  nodes=req.data['data'].nodes
            const  edges=req.data['data'].edges
            var i=0;
            for (i=0;i<nodes.length; i++){
                acs.nodes.push(nodes[i])
            }
            for (i=0;i<edges.length;i++){
                acs.edges.push(edges[i])
            }
            graph.data({
                nodes: acs.nodes,
                edges: acs.edges.map(function (edge, i) {
                    edge.id = 'edge' + edge.target.toString()+edge.source.toString()
                    return Object.assign({}, edge)
                })
            })
            graph.render()
            //graph.changeData({
            // nodes: acs.nodes,
            // edges: acs.edges.map(function (edge, i) {
            //  edge.id = 'edge' + edge.target.toString()+edge.source.toString()
            //    return Object.assign({}, edge)
            //  })
            //})
        })
        function refreshDragedNodePosition(e) {
            const model = e.item.get('model');
            model.fx = e.x;
            model.fy = e.y;
        }
        graph.on('node:dragstart', e => {
            graph.layout();
            refreshDragedNodePosition(e);
        });
        graph.on('node:drag', e => {
            refreshDragedNodePosition(e);
        });

        graph.on('node:dblclick', ev => {
            const model=ev.item.get('model')

            updateNodes(model)



        });




    }, [stat.name,stat.option]);
    function updateNodes(model){
        var url='http://localhost:8080'
        if (model.class===2){
            url=url+'/dbclickAlbum'
        }
        else if (model.class===1){
            url=url+'/dbclickArtist'
        }
        else if (model.class===3){
            url=url+'/dbclickSong'
        }
        else if (model.class===4){
            url=url+'/dbclickComment'
        }
        else if (model.class===5){
            url=url+'/dbclickUser'
        }
        axios.get(url, {params: {id: model.factId,lid:model.id }}).then(function (req) {
            // const da={
            //     nodes:req.data['data'].nodes,
            //     edges:req.data['data'].edges.map(function (edge, i) {
            //         edge.id = 'edge' + i
            //         return Object.assign({}, edge)
            //     })
            // }
            // graph.addItem("edge",req.data['data'].edges[0] )
            const  nodes=req.data['data'].nodes
            const  edges=req.data['data'].edges
            var i=0;
            for (i=0;i<nodes.length; i++){
                acs.nodes.push(nodes[i])
            }
            for (i=0;i<edges.length;i++){
                acs.edges.push(edges[i])
            }
            console.log(acs.edges.length)
            graph.changeData({
                nodes: acs.nodes,
                edges: acs.edges.map(function (edge, i) {
                    edge.id = 'edge' + edge.target.toString()+edge.source.toString()
                    return Object.assign({}, edge)
                })
            })

        })
    }
    return (
        <div>
            <Select defaultValue="artist" style={{ width: 120 }} onChange={onSelect}>
                <Option value="song">song</Option>
                <Option value="album">album</Option>
                <Option value="artist">artist</Option>
                <Option value="other">other</Option>
            </Select>
            <Input  type="text" onKeyPress={onChange} defaultValue={stat.name}/>
            <div ref={ref}>

            </div>
        </div>
    )


}

export default List
