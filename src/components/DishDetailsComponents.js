import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup,Col,Row, Input, Label } from 'reactstrap';
import { Card, CardImg, CardImgOverlay,
    CardTitle,CardBody, Breadcrumb, BreadcrumbItem,CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

    const DishDetails = (props) => {
        var [isModalOpen,setisModalOpen] = useState(false);
        const toggleModal = () => {
            setisModalOpen(!isModalOpen);
        }
    if (props.dish != null){
        const review = props.comments.map((comm) => {
            return (
                <dl>
                    <dd>{comm.comment}</dd>
                    <dd>-- {comm.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}</dd>
                </dl>
            );
        });
                const maxLength = (len) => (val) => !(val) || (val.length <= len);
                const minLength = (len) => (val) => val && (val.length >= len);
        return(
            <div className="container">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={props.dish.image} alt={props.dish.name} />
                            <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        {review}
                        <button type="button" className="btn btn-outline-secondary" onClick={toggleModal}><i class="fa fa-pencil"></i> Submit Comment</button>
                    </div>
                </div>
                <Modal isOpen={isModalOpen} >
                    <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm>
                            <FormGroup>
                                <label for="exampleFormControlSelect1">Example select</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="firstname">Your Name</Label>
                                <Control.text model=".firstname" id="firstname" name="firstname"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                    />
                                <Errors
                                    className="text-danger"
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label for="exampleFormControlTextarea1">Comment</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
    else
        return(
            <div></div>
        );
}
export default DishDetails;