import React from 'react';
import Bar from './subpage/bar';
import Distributed from "./subpage/Distributed";
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


    </div>
  )
}

export default Dashboard
