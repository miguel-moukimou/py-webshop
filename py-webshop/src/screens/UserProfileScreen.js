import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem } from 'react-bootstrap';
import Message from '../components/Message';
import { details, updateUserProfile  } from '../actions/userActions'
import {USER_UPDATE_PROFILE_REQUEST_RESET} from '../constants/userConstants';
import Loader from '../components/Loader';

function UserProfileScreen() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const userDetails = useSelector(state => state.userDetails);
    const { error, loading, user } = userDetails;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const { success } = userUpdateProfile;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        } else{
            if(!user || !user.name || success){
                dispatch({type: USER_UPDATE_PROFILE_REQUEST_RESET});
                dispatch(details('profile'));
            } else{
                setName(user.name);
                setEmail(user.email)

            }
        }
    }, [dispatch, navigate, userInfo, user, success]);

    const RegisterFormSubmitHandler = (event) => {
        event.preventDefault();
        if(password == '' || password != confirmPassword ){
            setMessage('Password do not match or empty');
        } else{
            setMessage('');
            dispatch(updateUserProfile({
                'id':user._id,
                'name': name,
                'email': email,
                'password': password
            }));
        }
       
    }

  return (
    <Row>
        <Col md={3}>
            <h2>User Profile</h2>
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
                    <Form.Control type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                 </Form.Group>
                 <Form.Group controlId='passwordConfirm' className='mb-3'>
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type='password' placeholder='Confirm your password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                 </Form.Group>
                 <Button type='submit' variant='primary'>Update</Button>
             </Form>
        </Col>
        <Col md={9}>
            <h2>My Orders</h2>
        </Col>
    </Row>
  )
}

export default UserProfileScreen