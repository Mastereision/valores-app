import {Card} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function ArticleCard({id, img, text}) {
    return (
        <Card>
            <Card.Img src={img}/>
            <Card.Body>
                <NavLink to={`/articles/one?a=${id}`}>ir al article</NavLink>
                <p>{text}</p>
            </Card.Body>
        </Card>
    )
}
