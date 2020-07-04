import React from 'react';
import Card from '../components/Card.js'


import deathp from '../Assets/Images/deathp.jpg';
import nba_logo from '../Assets/Images/nba_logo.png';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';

class Carasoul extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[
                {
                    id: 0,
                    title: 'The 2018 NBA Playoffs',
                    subTitle: 'A Data Visualization of every shot taken during the playoffs.',
                    process:'https://medium.com/@valliappan.lakshmanan9/2018-nba-playoffs-shot-location-data-80007be22484',
                    imgSrc: nba_logo,
                    link: 'https://v-lax.github.io/Portfolio/Project1/Code/',
                    selected: false   
                },
                {
                    id: 1,
                    title: '40 Years of the American Death Penalty',
                    subTitle: 'A narative exploration of data collected on 40 years of the death penalty.',
                    process:'https://medium.com/@valliappan.lakshmanan9/40-years-of-the-american-death-penalty-c947a1a7b78b',
                    imgSrc: deathp,
                    link: 'https://v-lax.github.io/Portfolio/Project2/Code/',
                    selected: false
                }
            ]
        };
    }

    handleCardClick= (id,card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false:true;

        items.forEach(item=>{
            if(item.id !== id){
                item.selected=false;
            }
        });
        this.setState({
            items
        });
    }

    makeItems = (items)=>{
        return items.map(item => {
            return <Card item={item} click={(e=>this.handleCardClick(item.id,e))} key={item.id}/>
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className='justify-content-around text-warning'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    };
};

export default Carasoul; 