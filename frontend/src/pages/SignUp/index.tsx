import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.png';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content, AnimationContainer, Background } from './styles';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: Object) => {
    try {
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 digitos')
      })
      await schema.validate(data, {
        abortEarly: false
      })
    } catch (err) {
      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors)
      return
    }
  }, [])

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="LigPop" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input name="name" icon={FiUser} placeholder="Nome completo" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft />
          Voltar para logon
        </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
