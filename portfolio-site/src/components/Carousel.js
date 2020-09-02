import React from 'react';
import { render } from '@testing-library/react';
import { Container, Row } from 'react-bootstrap';

import Card from '../components/Card'

//image dimension 1000px wide and 1600px tall
import projectLogo from '../assets/images/project.jpg'
import github from '../assets/images/github-logo.png'
import linkedin from '../assets/images/linkedin.png'

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Projects',
                    subTitle: 'Projects I have completed',
                    imgSrc: projectLogo,
                    link: '/projects',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Github',
                    subTitle: 'Projects I have completed',
                    imgSrc: github,
                    link: '/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'LinkedIn',
                    subTitle: 'My LinkedIn profile',
                    imgSrc: linkedin,
                    link: '/',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;