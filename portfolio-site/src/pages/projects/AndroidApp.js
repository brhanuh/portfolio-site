import React from 'react';
import ReactPlayer from "react-player";

import Hero from '../../components/Hero'
import Content from '../../components/Content'

function AndroidApp(props) {
    return(
        <div>
        <Hero title={props.title} />
        <Content>
        <p>
            <h5> <b>Project Title: </b>Designing and Building an Android App </h5>
            <h5><b>App Name:</b>  MyBook</h5>
            <h5><b>Completion Date:</b>  11/12/2019</h5>
            <h5><b>Project Grade:</b> 80/100, 80% </h5>
            <h5><a style={{display: "table-cell"}} href="https://github.coventry.ac.uk/300CEM-1920OCTJAN/hanibal7988254" target="_blank"><b>Github Link</b></a></h5>
        </p>
        </Content>
        <Content>
            <h1>Video using the app - <a href="https://www.youtube.com/watch?v=FPKYcvsg5sY&feature=youtu.be">MyBook App</a></h1>
            <ReactPlayer url="https://www.youtube.com/watch?v=FPKYcvsg5sY&feature=youtu.be"/>
            <h1>Overview</h1>
            <p>
            myBook is a searching app where user can find information about a book. Sometimes, 
            when I am in the library, I want to know more about a book to see if its worth reading. 
            Well, myBook finds book info such as author, ratings, publisher and description. 
            How good is that? You can even add a book to your favourites to look at later on or for reference.
            </p>
            <h2>Key Features</h2>
            <p>My app is 'feature packed' so here are some of the interesting things.</p>

            <h5>Firebase</h5>
            <p>
            I wanted my users to login with an account they registered on multiple devices. What better way to do this then using Firebase authentication. 
            User detials are stored online on Google servers and my app fetches user instances so they can sign in from any app.
            </p>
            <h5>Googel Vision API</h5>
            <p>
            Google Vision is a machine learning API. I have used one of its features which is detecting text from an image. 
            Users can take a picture of a book cover, then the API extracts text from the image. 
            This is used to search for a book based on the image taken. I love this feature as its unique from other apps.
            </p>
            <h5>Google Books API</h5>
            <p>
            The purpose of my app is to find book detials and for this I have used Google Books API. There were other options such as GoodReads and Amazon API's. 
            However, Google had the best documentation for how to use their API and the contents they provided was perfect for the app purpose.
            </p>
            <h5>Sensors</h5>
            <p>
            Whilst creating the app, I wanted to use as amny sensors as I can. I wanted the user to have as many features as it was possible. The Camera was used to take image of the book cover. Microphone was to convert speech to text. 
            The GPS was used to get user location (Latitude and Longitude) for Google Maps API. I enjoyed learning on how to implement these sensors as part of my app.
            </p>
            <h5>Layouts</h5>
            <p>One of the most fascinating development skill I learnt was creating multiple layouts on Android Studio. 
                I enjoyed this becuase when I tested my app on different screens, there was no layout issues.</p>
            <h5>SmartWatch</h5>
            <p>
            I created a SmartWatch version for my app. There was persistence as user was able to login and register. 
            The SmartWatch version was very simple. The user can store notes about a book using the Microphone sensor.
            </p>
            <h1>Reflection</h1>
            <p>
            Overall, the project was a fantastic learning experience. 
            I learnt new development skills such as Github, integrating apis, Firebase and local database and in general my app development skills.
            </p>
            <p>
            One of the major learning experiences was integrating Google Vision API into my app. 
            It was very difficult as it was my first time doing it. However, once I implemented it into mine, it worked like a charm.
            </p>
            <p>
            As I continued to work on the app, my designs and decision making improved.
            </p>
            <p>
            All I can say is, the learning experience in this module was positive in many ways. 
            The resources on Moodle was useful when developing my app and I enjoyed this successful journey.
            </p>
        </Content>
    </div>    
    );
}

export default AndroidApp;