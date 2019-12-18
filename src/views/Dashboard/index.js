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
function Dashboard () {
  return (
    <div>
        <Row>

            <Col span={18}>
            <span>年新增歌曲数量曲线</span>
            <Bar />
        </Col>
        </Row>
        <Row>
            <Col span={8}>
                <span>歌手歌曲数分布玫瑰图</span>
                <Distributed/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span>抖音歌曲情绪分析</span>
                <Mood/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span>歌手出生日期分析</span>
                <Borndate/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span>歌手公司分析</span>
                <Company/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span>歌手毕业院校分析</span>
                <Edu/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span>歌手职业分析</span>
                <Job/>
            </Col>

        </Row>
        <Row>
            <Col >
                <span>歌手国籍分析</span>
                <Country/>
            </Col>

        </Row>
    </div>
  )
}

export default Dashboard
