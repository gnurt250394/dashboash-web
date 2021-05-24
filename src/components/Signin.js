import { Button, message, Row } from "antd";
import { Eye, Mail, Triangle } from "react-feather";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { onActionLogin } from "redux-store/actions/auth/authAction";
import { Form, Input, InputNumber, Checkbox, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import * as Yup from "yup";
import { LoginApi } from "src/network/apis/auth/AuthApi";
import { getPageQuery } from "src/utils/utils";
const Content = styled.div`
  max-width: 400px;
  z-index: 2;
  min-width: 300px;
`;
let schema = Yup.object().shape({
  username: Yup.string().required("Tên tài khoản không được để trống"),
  password: Yup.string().required("Mật khẩu không được để trống"),
});
const Signin = ({ form }) => {
  const dispatch = useDispatch();
  const onLogin = async (values) => {
    console.log("values: ", values);
    dispatch(onActionLogin(values.username, values.password));
  };
  return (
    <Row
      type="flex"
      align="middle"
      justify="center"
      className="px-3 bg-white mh-page"
      style={{ minHeight: "100vh" }}
    >
      <Content>
        <div className="text-center mb-5">
          <Link href="/signin">
            <a className="brand mr-0">
              <Triangle size={32} strokeWidth={1} />
            </a>
          </Link>
          <h5 className="mb-0 mt-3">Sign in</h5>

          <p className="text-muted">get started with our service</p>
        </div>
        <Formik
          validationSchema={schema}
          initialValues={{ username: "", password: "", rememberMe: true }}
          onSubmit={onLogin}
          render={({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
          }) => {
            return (
              <Form layout="vertical" onSubmit={handleSubmit}>
                <Form.Item name="username" label="Tên tài khoản">
                  <Input
                    name="username"
                    prefix={
                      <Mail
                        size={16}
                        strokeWidth={1}
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    value={values.username}
                    onChange={handleChange("username")}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item name="password" label="Mật khẩu">
                  <Input
                    name="password"
                    prefix={
                      <Eye
                        size={16}
                        strokeWidth={1}
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    value={values.password}
                    onChange={handleChange("password")}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Checkbox
                  onChange={handleChange("rememberMe")}
                  checked={values.rememberMe}
                >
                  Remember me
                </Checkbox>
                <Link href="/forgot">
                  <a className="text-xs-right">
                    <small>Forgot password</small>
                  </a>
                </Link>
                <Button htmlType="submit" type="primary" block className="mt-5">
                  Log in
                </Button>

                <div className="text-center">
                  <small className="text-muted">
                    <span>Don't have an account yet?</span>{" "}
                    <Link href="/signup">
                      <a>&nbsp;Create one now!</a>
                    </Link>
                  </small>
                </div>
              </Form>
            );
          }}
        />
      </Content>
    </Row>
  );
};

export default Signin;
