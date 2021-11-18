import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import data from '../data';

export default function OneArticlePage() {
    const [article, setArticle] = useState({
        title: '',
        img: '',
        data: ''
    });

    const location = useLocation();

    const query = new URLSearchParams(location.search);
    const q = query.get('a');

    useEffect(() => {
        data.map(e => {
            if (e.id.toString() === q) {
                setArticle({ title: e.title, img: e.img, data: e.data });
            }
        })
    }, [])

    return (
        <>
            <Container>
                <h3 className="mt-4 text-center text-primary">{article.title}</h3>
                <hr />
                <Card>
                    <Card.Img src={article.img} />
                    <Card.Body className="text-center">
                        <p>{article.data}</p>
                        <NavLink to="/">regresar</NavLink>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
