import React, { useContext, useState } from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import { Container, NavBar, BackButton, BackIcon, Form, InputContainer, SubmitArea } from './styles';

import { AuthContext } from '../../context/auth';
import { useForm } from '../../utils/hook';
import { MenuContext } from '../../context/MenuContext';

function Login(props) {
  const context = useContext(AuthContext);
  const { handleItemClick } = useContext(MenuContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: '',
    password: ''
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: {login: userData} }){
      context.login(userData);
      handleItemClick('home');
      props.history.push('/');
    },
    onError(err){
      const errorsObjetct = err.graphQLErrors[0].extensions.exception.errors;
      setErrors(errorsObjetct);
      if(errorsObjetct.username){
        props.handleErrorToast(errorsObjetct.username);
      } else {
        errorsObjetct.password && props.handleErrorToast(errorsObjetct.password);
      }
      errorsObjetct.general && props.handleErrorToast(errorsObjetct.general);
    },
    variables: values
  })

  function loginUserCallback(){
    loginUser();
  }

  return (
    <Container>
      <NavBar>
        <BackButton as={Link} to="/" onClick={() => handleItemClick('home')}>
          <BackIcon />
        </BackButton>
      </NavBar>
      <h2>Login </h2>
      <Form onSubmit={onSubmit}>
        {!errors.username ? (
          <InputContainer>
            <strong>Username</strong>
            <input name="username" type="text" placeholder="Digite seu Username" onChange={onChange}/>
          </InputContainer>
        ):(
          <InputContainer className="onError">
            <strong>Username</strong>
            <input name="username" type="text" placeholder="Digite seu Username" onChange={onChange} />
          </InputContainer>
        )}
        {!errors.password ? (
          <InputContainer>
            <strong>Senha</strong>
            <input name="password" type="password" placeholder="Digite sua Senha" onChange={onChange}/>
          </InputContainer>
        ):(
          <InputContainer className="onError">
            <strong>Senha</strong>
            <input name="password" type="password" placeholder="Digite sua Senha" onChange={onChange}/>
          </InputContainer>
        )}
        <SubmitArea>
          <input type="submit" value="Entrar" />
        </SubmitArea>
      </Form>
    </Container>
  );
}

const LOGIN_USER = gql`
  mutation login(
    $username: String!
    $password: String!
  ) {
    login(
      username: $username
      password: $password
    ){
      id email username createdAt token
    }
  }
`

export default Login;