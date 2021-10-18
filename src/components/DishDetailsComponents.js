import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

const DishDetails = (props) => {

    if (props.dish != null){
        const review = props.dish.comments.map((comm) => {
            return (
                <dl>
                    <dd>{comm.comment}</dd>
                    <dd>-- {comm.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}</dd>
                </dl>
            );
        });
        return(
            <div className="container">
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
                    </div>
                </div>
            </div>
        );
    }
    else
        return(
            <div></div>
        );
}
export default DishDetails;