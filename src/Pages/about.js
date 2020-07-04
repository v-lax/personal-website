import React from 'react';
import Hero from '../components/hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div className='bg-dark text-warning Times New Roman'>
            <Hero Title={props.Title}/>

            <Content className='Times New Roman'>


                <p>Whats up? Name is Valli (like sully but with a V). My degree says that I have a bachelors in Engineering Science, but what I am
                    really interested in is combining my love for art, code, storytelling and design to create fun and 
                    memorable digital experiences for individuals. 
                </p>

                <p>
                    When I am not working on the above or doing my normal day job, I am usually drawing, learning to code better, taking photos, watching the Knicks loose, or running. Im still in the early phases of 
                    my career and looking to learn as much as possible about code, art, and design. If you wanna teach me the ways or if you are also just starting out and looking for someone to join on
                    this crazy journey, let me <a href='https://twitter.com/Valliwood93' target='_blank'> know!</a>
                </p>
            </Content>
        </div>
    );

}

export default AboutPage;