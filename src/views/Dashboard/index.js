import React from 'react';
import Bar from './subpage/bar';
import Mood from  './subpage/mood';
import { Row, Col } from 'antd';
import Ktv from './subpage/ktv'
import RanklistWords from './subpage/ranklist_words'
import Ranklist_frequent_words from "./subpage/ranklist_frequent_words";
import Scbd from "./subpage/scbd"
import Hj from '../Singers/subpage/hj'
import  Al from './subpage/Al'
function Dashboard () {
  return (
    <div>
        <Row>
            <Col>
                <span className="wxd">每年新增歌曲数量曲线</span>
                <Bar />
                <br/>
                <br/>
            </Col>
        </Row>
        <Row>
            <Col>
                <span className="wxd">每年新增专辑数量曲线</span>
                <Al />
                <br/>
                <br/>
            </Col>
        </Row>
        <Row>
            <Col >
                <span className="wxd">抖音榜歌曲情绪分析</span>
                <Mood/>
                <br/>
                <br/>
            </Col>
        </Row>
        <Row>
            <Col >
                <span className="wxd">Ktv榜最多点击歌曲情感分析</span>
                <Ktv/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span className="wxd">原创歌曲榜词性分析</span>
                <br/><br/>
                <RanklistWords/>
                <br/><br/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span className="wxd">原创歌曲榜词频统计</span>
                <br/><br/>
                <Ranklist_frequent_words/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span className="wxd">说唱歌曲榜词性分析</span>
                <br/><br/>
                <Scbd/>
            </Col>

        </Row>

    </div>
  )
}

export default Dashboard
