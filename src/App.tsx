import { useState } from "react";
import { Row, Col, Card, Select, QRCode, Space } from 'antd';
import { FcCloseUpMode } from "react-icons/fc";
import { data } from "./staticData/poems"
import useWindowSize from "./hooks/useWindowSize";

const App = () => {
  const [val, setVal] = useState(data[0].value)
  const size = useWindowSize()

  const handleChange = (event: any) => {
    setVal(event)
  }

  return (
    <Row  >
      <Col xs={{ span: 16, offset: 4 }} sm={{ span: 8, offset: 8 }}>
        <Card hoverable bordered={false} style={{ textAlign: "center" }} title={<FcCloseUpMode title="test" size={50} />}>
          <Space direction="vertical">
            <Select
              onChange={(event) => handleChange(event)}
              value={val}
              placeholder="Lütfen seçiniz"
              style={{ width: size.width < 580 ? size.width / 2 : size.width / 6 }}
              options={data}
            />
            <QRCode size={size.width < 580 ? size.width / 2 : size.width / 6} value={val} />
          </Space>
        </Card>
      </Col>

    </Row>
  )
}


export default App;