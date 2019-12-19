import React from 'react';
import Bar from './subpage/bar';
import Distributed from "./subpage/Distributed";
import Mood from  './subpage/mood';
import Edu from './subpage/edu'
import Job from "./subpage/job";
import Country from "./subpage/country";
import Company from "./subpage/company";
import Borndate from "./subpage/borndate";
import { Row, Col } from 'antd';
import ElseCountry from './subpage/elseCountry'
import WorstSinger from './subpage/worsestSinger'
import Ktv from './subpage/ktv'
import RanklistWords from './subpage/ranklist_words'
import Ranklist_frequent_words from "./subpage/ranklist_frequent_words";
import SchoolInOut from  './subpage/school_in_out'
import SchoolLevel from './subpage/school_level'

function Dashboard () {
  return (
    <div>
        <Row>
            <Col >
                <span className="wxd">Ktv最多点击歌曲情感分析</span>
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
    </div>
  )
}

export default Dashboard
