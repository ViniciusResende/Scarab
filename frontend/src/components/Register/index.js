import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

import { Container, NavBar, BackButton, BackIcon, Form, InputContainer, SubmitArea } from './styles';
import { MenuContext } from '../../context/MenuContext';
import { AuthContext } from '../../context/auth';
import { useForm } from '../../utils/hook';

function Register(props) {
  const { handleItemClick } = useContext(MenuContext);

  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  
  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }){
      context.login(userData);
      handleItemClick('home');
      props.history.push('/');
    },
    onError(err){
      const errorsObjetct = err.graphQLErrors[0].extensions.exception.errors;
      setErrors(errorsObjetct);
      if(errorsObjetct.username){
        props.handleErrorToast(errorsObjetct.username);
      } else if(errorsObjetct.email){
        props.handleErrorToast(errorsObjetct.email);
      } else {
        errorsObjetct.password && props.handleErrorToast(errorsObjetct.password);
      }
      errorsObjetct.confirmPassword && props.handleErrorToast(errorsObjetct.confirmPassword);
    },
    variables: values
  })

  function registerUser(){
    addUser();
  }

  return (
    <Container>
      <NavBar>
        <BackButton as={Link} to="/" onClick={() => handleItemClick('home')}>
          <BackIcon />
        </BackButton>
      </NavBar>
      <h2>Register </h2>
      <Form onSubmit={onSubmit}>
        {!errors.username ? (
          <InputContainer>
            <strong>Username</strong>
            <input name="username" type="text" placeholder="Digite seu Username" onChange={onChange} />
          </InputContainer>
        ):(
          <InputContainer className="onError">
            <strong>Username</strong>
            <input name="username" type="text" placeholder="Digite seu Username" onChange={onChange} />
          </InputContainer>
        )}
        {!errors.email ? (
          <InputContainer>
            <strong>E-mail</strong>
            <input name="email" type="email" placeholder="Digite seu E-mail" onChange={onChange} />
          </InputContainer>
        ):(
          <InputContainer className="onError">
            <strong>E-mail</strong>
            <input name="email" type="email" placeholder="Digite seu E-mail" onChange={onChange} />
          </InputContainer>
        )}
        {!errors.password ? (
          <InputContainer>
            <strong>Senha</strong>
            <input name="password" type="password" placeholder="Digite sua Senha" onChange={onChange} />
          </InputContainer>
        ):(
          <InputContainer className="onError">
            <strong>Senha</strong>
            <input name="password" type="password" placeholder="Digite sua Senha" onChange={onChange} />
          </InputContainer>
        )}
        {!errors.confirmPassword ? (
          <InputContainer>
            <strong>Confirmar Senha</strong>
            <input name="confirmPassword" type="password" placeholder="Confirme sua Senha" onChange={onChange} />
          </InputContainer>
        ):(
          <InputContainer className="onError">
            <strong>Confirmar Senha</strong>
            <input name="confirmPassword" type="password" placeholder="Confirme sua Senha" onChange={onChange} />
          </InputContainer>
        )}
        <InputContainer>
            <strong>Url da foto de perfil</strong>
            <input name="pictureURL" type="text" placeholder="http://..." onChange={onChange} />
        </InputContainer>
        <SubmitArea>
          <input type="submit" value="Enviar" />
        </SubmitArea>
      </Form>
    </Container>
  );
}

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
    $pictureURL: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
        pictureURL: $pictureURL
      }
    ){
      id email username pictureURL createdAt token
    }
  }
`

export default Register;