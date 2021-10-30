import { Card, CardImg, CardImgOverlay,
    CardTitle,} from 'reactstrap';
function RenderLeader(props) {
    return(
    <div class="row row-content2 align-items-center">
        <div class="col ">
            <div class="media">
                <img class="d-flex mr-5 img-thumbnail" src={props.leader.image} alt={props.leader.name}/>
                <div class="media-body">
                    <h2 class="mt-0">{props.leader.name}</h2>
                    <h4>{props.leader.designation}</h4>
                    <p class="d-none d-sm-block">{props.leader.description}</p>
                </div>
            </div>
        </div>
    </div>
    );
}
export default RenderLeader;