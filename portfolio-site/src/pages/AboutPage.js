import React from 'react';

import Hero from '../components/Hero'
import Content from '../components/Content'
function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Roronoa Zoro,[1] also known as "Pirate Hunter" Zoro,[8] is a swordsman and combatant of the Straw Hat Pirates. Formerly a bounty hunter,[5] he is the second member of the crew and the first to join, doing so in the Romance Dawn Arc.[3]</p>

                <p>A master of Santoryu, Zoro is among the four most powerful combatants of the Straw Hats, alongside Luffy, Sanji and Jinbe.[20][21] His dream is to become the greatest swordsman in the world, in order to honor a promise he made to his deceased childhood friend Kuina.[22]</p>

                <p>In addition to his infamy as one of the Straw Hats, Zoro is also regarded as one of twelve pirates who are referred to as the "Worst Generation".[23]</p>

                <p>He currently has a bounty of 320,000,000 Beli.[17]

</p>
            </Content>
        </div>
    );
}

export default AboutPage;