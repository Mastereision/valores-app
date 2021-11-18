import { Row, Col, Container } from 'react-bootstrap'

import ArticleCard from "../components/ArticleCard";
import InfoCard from '../components/InfoCard';

import data from '../data'

export default function IndexPage() {
    return (
        <Container className="mt-4">
            <InfoCard />
            <Row xs={1} md={3} className="g-4 mt-4">
                {data.map(e => (
                    <Col key={e.id}>
                        <ArticleCard id={e.id} img={e.img} text={e.text} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
