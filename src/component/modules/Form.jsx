import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { db } from '../../firebase';
import { toast } from "react-toastify";
import { doc, deleteDoc } from "firebase/firestore";

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
// const an = {pass: "123456"};
const FormChuc = () => {
  const [dataSource, setDataSource] = useState([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    db.collection("TimeLove").get().then((querySnapshot) => {
      const tempData = [];
      querySnapshot.forEach((doc) => {
        tempData.push({ ...doc.data(), id: doc.id });
      });
      setDataSource(tempData);
    });
  }, []);

  const onFinish = (values) => {
    db.collection("TimeLove").doc(`id${Math.floor(Math.random() * 10000)}`).set({
      name: `${values.name}`,
      wish: `${values.wish}`,
    })
      .then(function () {
        const newProduct = { ...values };
        const newdataSource = [newProduct, ...dataSource];
        setDataSource(newdataSource);
        toast.success("Gửi lời chúc thành công, Em xin cảm ơn mọi người đã gửi lời chúc đến chúng em <3");
      })
      .catch(function (error) {
        toast.error("Gửi lời chúc thất bại!!!");
      });
  };
  // const { confirm } = Modal;
  // const showDeleteConfirm = () => {
  //   confirm({
  //     title: 'Lưu ý: Chức năng này dành cho admin',
  //     icon: "",
  //     content: 'Bạn có muốn xoá không?',
  //     okText: 'Có',
  //     okType: 'danger',
  //     cancelText: 'Không',
  //     onOk() {
  //       // setIsModalOpen(true);
  //       showModal();
  //     },
  //     onCancel() {
  //       console.log('Cancel');
  //     },
  //   });
  // };

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  // const onFinish1 = (value, id) => {
  //   console.log(id);
  //   if(an.pass === value.password){
  //     console.log("ok");
  //      deleteDoc(doc(db, "TimeLove", id));
  //       setDataSource(dataSource.filter((item) => item.id !== id));
  //       toast.success("Delete Success!");
  //   } else {
  //     console.log("false");
  //   }
  // };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <>
      <div className="row">
        <div className="col col-lg-6 col-6">
          <div className="contact-form">
            <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
              <MyFormItem name="name" label="Họ và Tên:">
                <Input />
              </MyFormItem>
              <MyFormItem name="wish" label="Lời Chúc Của Bạn:">
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
          <div className="wish-box">
            {dataSource.map((textform) => (
              <div key={Math.random()} className="wish-box-item ">
                <strong>{textform.name}</strong>
                <div className="text-and-delete flex justify-content-between">
                  <p>{textform.wish}</p>
                  {/* <Button onClick={showDeleteConfirm(textform.id)} type="dashed">
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                  <Modal open={isModalOpen} footer={null} closable={false} className="modal-pass" >
                    <Form name="form_item_pass" layout="vertical" onFinish={onFinish1}>
                      <MyFormItem name="password" label="Nhập password:">
                        <Input.Password placeholder="Mời bạn nhập password dành cho admin" name='pass' />
                      </MyFormItem>
                      <Button type="primary" htmlType="submit" className="theme-btn">
                         Xoá
                      </Button>
                    </Form>
                  </Modal> */}
                </div>
              </div>
            ))};
          </div>
          <p>Note: Đây là nơi chúng em lưu giữ lại những kỉ niệm đẹp xin mọi người đừng viết bậy vô ạ. Xin cảm ơn mọi người.</p>
        </div>
      </div>

    </>
  );
};
export default FormChuc;


