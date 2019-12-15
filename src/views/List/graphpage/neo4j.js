import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';
import axios from 'axios'
const acs = {
    nodes: [],
    edges: [],

}
function Graph(probs) {
    const {name,option}=probs;
    const [obj, Obj] = useState({
        name:name,
        option:option
    });
    console.log(obj)
    const ref = React.useRef(null);
    let graph = null;
    useEffect(() => {


            if (!graph) {
            graph = new G6.Graph({
                container: ReactDOM.findDOMNode(ref.current),
                width: 2000.,
                height: 1600,
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
            axios.get('http://localhost:8080/getArtistNode', {params: {name: name }}).then(function (req) {
                acs.nodes = req.data['data'].nodes
                acs.edges = req.data['data'].edges.map(function (edge, i) {
                    edge.id = 'edge' + i;
                    return Object.assign({}, edge)
                })
                graph.data({
                    nodes: acs.nodes,
                    edges: acs.edges.map(function (edge, i) {
                        edge.id = 'edge' + edge.target.toString()+edge.source.toString()
                        return Object.assign({}, edge)
                    })
                })
                graph.render();
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
                if(model.class < 3){
                    updateNodes(model)
                }


            });
            function updateNodes(model){
                var url='http://localhost:8080'
                if (model.class===2){
                    url=url+'/dbclickAlbum'
                }
                else{
                    url=url+'/dbclickArtist'
                }
                axios.get(url, {params: {id: model.id }}).then(function (req) {
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


                    graph.changeData({
                        nodes: acs.nodes,
                        edges: acs.edges.map(function (edge, i) {
                            edge.id = 'edge' + edge.target.toString()+edge.source.toString()
                            return Object.assign({}, edge)
                        })
                    })

                })
            }



    }, [probs.name]);


    return (
        <div>
            <div>{acs.nodes.length}</div>
            <div ref={ref}>

            </div>
        </div>

    )
}

export default Graph;
