import React from 'react';

import Hero from '../components/Hero'
import Content from '../components/Content'
function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>In process of making</p>
            </Content>
        </div>
    );
}

export default AboutPage;