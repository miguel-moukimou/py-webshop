import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem } from 'react-bootstrap';
import Message from '../components/Message';
import { register } from '../actions/userActions'

import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

function RegisterScreen() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const redirect = useLocation();
    const redirectLocation = redirect.search ? redirect.search.split('=')[1] : undefined;
    console.log(redirectLocation);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.userRegister);
    const { error, loading, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo, redirectLocation]);

    const RegisterFormSubmitHandler = (event) => {
        event.preventDefault();
        if(password != confirmPassword ){
            setMessage('Password do not match');
        } else{
            dispatch(register(name, email, password));
        }
       
    }

  return (
    <FormContainer>
        <h1>Sign in</h1>
            {message && <Message variant='danger'>{message}</Message>}
             {error && <Message variant='danger'>{error}</Message>}
             {loading && <Loader/>}
             <Form onSubmit={RegisterFormSubmitHandler}>
             <Form.Group controlId='name' className='mb-5 mt-5'>
                <Form.Label>Name</Form.Label>
                    <Form.Control required type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                 </Form.Group>
                 <Form.Group controlId='email' className='mb-5 mt-5'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control required type='email' placeholder='Enter your email address' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                 </Form.Group>
                 <Form.Group controlId='password' className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                 </Form.Group>
                 <Form.Group controlId='passwordConfirm' className='mb-3'>
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control required type='password' placeholder='Confirm your password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                 </Form.Group>
                 <Button type='submit' variant='primary'>Register</Button>
             </Form>
             <Row className='py-3'>
                <Col>
                  Do you already have an account   ? <Link to={redirectLocation ? `/register?redirect=${redirectLocation}` : '/login'}>Sign in</Link>
                </Col>
             </Row>
    </FormContainer>
  )
}

export default RegisterScreen