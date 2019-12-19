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
import Tm from './subpage/tm'
import Hjjl from './subpage/hjjl'
import Jjj from "./subpage/jjj"
function Dashboard () {
  return (
    <div>
        <Row>
            <Col >
                <span className="wxd">歌手出生日期分析</span>
                <br/>
                <br/>
                <br/>
                <Borndate/>
                <br/>
                <br/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span className="wxd">歌手公司分析</span>
                <Company/>
                <br/>
                <br/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span className="wxd">歌手毕业院校分布</span>
                <br/>
                <br/>
                <Edu/>
                <br/>
                <br/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span className="wxd">歌手毕业院校地理位置分析</span>
                <SchoolInOut/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span className="wxd">歌手教育水平统计</span>
                <br/>
                <SchoolLevel/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span className="wxd">歌手职业分析</span>
                <Job/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span className="wxd">歌手国籍分析</span>
                <br/>
                <br/>
                <Country/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span className="wxd">歌手负面评论数量</span>
                <WorstSinger/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span className="wxd">歌手提名奖项数量</span>
                <Tm/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span className="wxd">歌手获奖记录分析</span>
                <Hjjl/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span className="wxd">歌手主要成就分析</span>
                <Hjjl/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span className="wxd">网易云歌手分类统计</span>
                <Jjj/>
            </Col>

        </Row>
    </div>
  )
}

export default Dashboard
