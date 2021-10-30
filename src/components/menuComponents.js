import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
                    <div className="col-12 col-md-5 m-1"  key={dish.id}>
                        <Card>
                            <Link to={`/menu/${dish.id}`}>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardImgOverlay>
                                    <CardTitle>{dish.name}</CardTitle>
                                </CardImgOverlay>
                            </Link>
                        </Card>
                    </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>

                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
    
export default Menu;