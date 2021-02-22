import React, { useCallback, useRef } from 'react'
import Head from 'next/head'
import ReduxToastr from 'react-redux-toastr';

import { Container, Content, Forget, Welcome, TextLogin } from "../styles/pages/SignIn";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../store/ducks/auth';


import getValidationErrors from "../utils/getValidationErrors";

import LoginImage from '../assets/login_image.svg'
import Input from "../components/Input";
import Button from "../components/Button";


interface StateProps {}

interface DispatchProps {
  signInRequest(email: string, password: string): void
}

type Props = StateProps & DispatchProps

const Home: React.FC<Props> = (props: Props) => {
  // return (
  //   <div>
  //     <Head>
  //       <title>Create Next App</title>
  //     </Head>

  //     <main>
  //       <SignIn />
  //       <ReduxToastr />
  //     </main>
  //   </div>
  // )
  const formRef = useRef<FormHandles>(null)
  const { signInRequest } = props;

  interface FormData {
    email: string;
    password: string;
    token: string;
  }

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signInRequest(data.email, data.password);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },[]
  );

  return (
    <Container>
      <LoginImage />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>

          <Welcome>
            <h1>Olá, seja bem vindo</h1>
          </Welcome>

          <TextLogin>
            <h3>Para acessar a plataforma, faça seu login.</h3>
          </TextLogin>

          <label>E-MAIL</label>
          <Input name="email" type="text" placeholder="user.name@mail.com"/>
          <label>SENHA</label>
          <Input name="password" type="password" placeholder="*******"/>

          <Button type="submit">Entrar</Button>

          <Forget>
            <p>Esqueceu seu login ou senha?</p>
            <p>Clique <a href="#">aqui</a></p>
          </Forget>

        </Form>
      </Content>
      <ReduxToastr />
    </Container>
  )
}

// export default Home
const mapDispatchToProps = (dispatch) => bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
