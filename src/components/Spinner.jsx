import { Spin, Space } from "antd";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Space direction='vertical' style={{ width: "100%" }}>
        <Spin tip='Loading' size='large'>
          <div className='content' style={{ marginLeft: 0, paddingLeft: 0 }} />
        </Spin>
      </Space>
    </div>
  );
};

export default Spinner;
