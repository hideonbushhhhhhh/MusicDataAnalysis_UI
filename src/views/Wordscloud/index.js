import React from "react";
import LyricStatistics from './subpage/lyricStatistics';
import Hot from "./subpage/Hot";
import {Row,Col} from 'antd';
import Mood from "../Dashboard/subpage/mood";
import Dygp from "./subpage/dygp";
import Scgp from "./subpage/scgp"
import Ycgp from "./subpage/ycgp"

function WorldCloud() {
    return(
        <div>
            <Row>
                <Col >
                    <span className="wxd">热门话题</span>
                    <Hot />
                    <br/>
                    <br/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span className="wxd">华语乐坛音乐高频词</span>
                    <LyricStatistics />
                    <br/>
                    <br/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span className="wxd">抖音排行榜单高频词</span>
                    <Dygp />
                    <br/>
                    <br/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span className="wxd">网易说唱歌曲榜高频词</span>
                    <Scgp />
                    <br/>
                    <br/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span className="wxd">网易原创歌曲榜高频词</span>
                    <Ycgp />
                    <br/>
                    <br/>
                </Col>
            </Row>


        </div>
    )
}

export default WorldCloud;
