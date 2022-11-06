import React, { useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions'

function CartScreen(props) {
    let { id } = useParams();
    const search = useLocation().search;
    const quantity = new URLSearchParams(search).get('qty');
    console.log(quantity);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, quantity))
        }
    }, [dispatch, id, quantity]);

    const removeFromCartHandler = () =>{
        
    }

    const checkouthandler = () =>{
        navigate('/login?redirect=shipping');
    }

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message variant='info'>Your Cart is empty <Link to='/'>Go Back</Link></Message>
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>
                                        ${item.price}
                                    </Col>
                                    <Col md={3}>
                                        <Form.Control as='select' value={item.quantity} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                            {
                                                [...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))
                                            }
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button variant='light' onClick={() => removeFromCartHandler(item.product)}  className='btn-block' type='button' disabled={item.countInStock < 1}>
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>Subtotal ({cartItems.reduce((acc, item) => Number(acc) + Number(item.quantity), 0)}) items</h3>
                            ${cartItems.reduce((acc, item) => Number(acc) + Number(item.quantity) * item.price, 0).toFixed(2)}               
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button onClick={checkouthandler} disabled={cartItems.length === 0}  className='btn btn-block' type='button'>
                                Checkout
                            </Button>
                        </ListGroup.Item>

                    </ListGroup>
                </Card>                           
            </Col>
        </Row>
    )
}

export default CartScreen;