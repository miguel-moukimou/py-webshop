import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem } from 'react-bootstrap';
import Message from '../components/Message';
import { login } from '../actions/userActions'

import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';


function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = useLocation();
    const redirectLocation = redirect.search ? redirect.search.split('=')[1] : undefined;
    console.log(redirectLocation);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
           
        }
    }, [navigate, userInfo, redirectLocation]);

    const loginFormSubmitHandler = (event) => {
        dispatch(login(email, password));
    }

    return (
        <FormContainer>
             <h1>Sign in</h1>
             {error && <Message variant='danger'>{error}</Message>}
             {loading && <Loader/>}
             <Form>
                
                 <Form.Group controlId='email' className='mb-5 mt-5'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter your email address' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                 </Form.Group>

                 <Form.Group controlId='password' className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                 </Form.Group>
                 <Button type='button' onClick={loginFormSubmitHandler} variant='primary'>Login</Button>
             </Form>

             <Row className='py-3'>
                <Col>
                    New Customer ? <Link to={redirectLocation ? `/register?redirect=${redirectLocation}` : '/register'}>Register</Link>
                </Col>
             </Row>
        </FormContainer>
       
    )
}

export default LoginScreen;