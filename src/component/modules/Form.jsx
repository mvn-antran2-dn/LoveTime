import React,{useState} from 'react';
import { Button, Form, Input } from 'antd';

const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}

const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const { TextArea } = Input;

const TextFrom = [
  {
    name: "Lưu Vĩnh Toàn",
    Text: "Chúc hai bạn trăm năm hạnh phúc"
  },
  {
    name: "Tào Quang Trường",
    Text: "Chúc mừng hạnh phúc hai bạn. Chúc hai bạn bên nhau đầu bạc răng long nha <3"
  },
  {
    name: "Lê Viết Tính",
    Text: "Tui thành tâm chúc hai bạn thật nhiều hạnh phúc và sống đời vui vẻ cùng nhau mãi mãi!"
  },
  {
    name: "Nguyễn Quốc Khánh",
    Text: "Chúc đôi trai tài gái sắc hạnh phúc trọn vẹn, luôn yêu thương nhau thật nhiều!"
  },
  {
    name: "Phan Công Minh",
    Text: "Anh mong tình yêu của hai em thật bền chặt, gắn bó để xây dựng tổ ấm yên bình, hạnh phúc."
  },
];


const FormChuc = () => {
  const [array, setArray] = useState(TextFrom);
  const onFinish = (value) => {
    setArray([value,...array])
  };

  return (
    <>
      <div className="row">
        <div className="col col-lg-6 col-6">
          <div className="contact-form">
            <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
              <MyFormItem name="name" label="Họ và Tên:">
                <Input />
              </MyFormItem>
              <MyFormItem name="Text" label="Lời Chúc Của Bạn:">
                <TextArea rows={4} />
              </MyFormItem>
              <div className="submit-btn">
                <Button type="primary" htmlType="submit" className="theme-btn">
                  Gừi lời chúc
                </Button>
              </div>
            </Form>
          </div>
        </div>
        <div className="col col-lg-6 col-6">
          <div className=" wish-box">
            {array.map((textform) => (
              <div key={Math.random()} className="wish-box-item ">
                <strong>{textform.name}</strong>
                <p>{textform.Text}</p>
              </div>
            ))};
          </div>
        </div>
      </div>

    </>
  );
};
export default FormChuc;


