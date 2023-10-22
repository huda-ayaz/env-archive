import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, Link, Router } from 'react-router-dom';
import "../App.css";
import "../stylesheets/BlogUnlocked.css";


const BlogUnlocked = () => {
    return(
        <div className="page-back">
            <div className="banner"></div>
            <img className= "fish-banner" src='https://media.istockphoto.com/photos/underwater-coral-reef-landscape-wide-2to1-panorama-background-in-the-picture-id1169446263?k=6&m=1169446263&s=170667a&w=0&h=I3_w1oMhEIEuwfaCf2lEqCjAVUrpaUPMSkTAK-qiXy0='/>
            <header className="unblocked-header">
                <h1 className="unblocked-header-fill">Unraveling the Threads: Exploring Mercury Content in Fish and its Connection to the Logging Industry</h1>
            </header>
            <div>
                {/* <div className="subtitle"><h3>Introduction</h3></div> */}
                <p className="introduction">With the growing conversation surrounding environmentally conscious eating habits diverging around the subject of protein sources, it is pertinent to the conversation to consider the impact that human intervention has on the marine life that is consumed. With so much outrage garnered for a decrease in genetically modified organisms, there needs to be more transparency in regards to unintentional modification as well. The article today will discuss the increasing concentrations of mercury found in fish. So what is mercury? How does it affect human beings? And how are industries contributing to said impact on marine life?</p>
            </div>
            <div className="content"><p>Mercury contamination in fish has become a pressing concern for both environmentalists and consumers alike. However, the connection between mercury content in fish and the logging industry remains a relatively unexplored territory. In this article, we will delve into the intricate relationship between these two seemingly unrelated topics, shedding light on the impact of logging activities on mercury levels in aquatic ecosystems and the subsequent consequences for human health and the environment.</p></div>
            <div className="subtitle"><h3>The Mercury Cycle</h3></div>
            <div className="content"><p>To understand the correlation between mercury content in fish and the logging industry, it's essential to comprehend the mercury cycle. Mercury is released into the atmosphere through natural processes and human activities, including coal burning, mining, and logging. Once airborne, mercury settles into water bodies, where it undergoes a transformation into methylmercury, a highly toxic form that accumulates in aquatic organisms, including fish.</p></div>
            <div className="subtitle"><h3>Logging Industry's Role</h3></div>
            <img className= "logging" src='https://npr.brightspotcdn.com/dims4/default/a887971/2147483647/strip/true/crop/3728x2475+0+0/resize/880x584!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F0b%2Fd1%2Fc8e67c4349c3b7bd035bafdd870a%2Fap18156533712250.jpg'/>
            <div className="content"><p>Logging operations, particularly in areas close to water bodies, can significantly contribute to mercury contamination. Clear-cutting forests and disturbing soil can release mercury that was previously trapped in the trees and soil. Rainwater washes this mercury into nearby rivers and lakes, where it enters the aquatic food chain, ultimately affecting fish and other aquatic life.</p></div>
            <div className="subtitle"><h3>Impact on Fish and Human Health</h3></div>
            <div className="content"><p>Fish, being a vital part of many diets, especially in coastal communities, absorb methylmercury from their surroundings. High levels of mercury in fish can lead to severe health issues in humans, including neurological disorders, developmental problems in children, and cardiovascular diseases. Understanding the correlation between logging activities and mercury content in fish is crucial for regulating both industries effectively.</p></div>
            <div className="subtitle"><h3>Environmental Consequences</h3></div>
            <div className="content"><p>Beyond human health, mercury contamination poses a threat to entire ecosystems. It can disrupt aquatic habitats, affecting the reproduction and survival of fish and other wildlife. Predators that rely on fish as their primary food source, including birds and mammals, are also at risk. Additionally, mercury pollution can persist in the environment for years, making it a long-term concern for both terrestrial and aquatic ecosystems.</p></div>
            <div className="subtitle"><h3>Regulatory Measures and Solutions</h3></div>
            <img className= "trees" src='https://assets.terrapass.com/wp-content/uploads/2022/01/reforestation-efforts-field-of-planted-trees.jpg'/>
            <div className="content"><p>To mitigate the impact of the logging industry on mercury content in fish, stringent regulations and sustainable logging practices are essential. Implementing best management practices, such as buffer zones around water bodies and reforestation efforts, can help minimize mercury runoff. Moreover, raising awareness among logging companies about the environmental consequences of their activities is crucial for fostering a sense of responsibility.</p></div>
            <div className="subtitle"><h3>Conclusion</h3></div>
            <div className="content"><p>The interconnection between mercury content in fish and the logging industry highlights the importance of holistic environmental management. By recognizing the intricate web of ecological relationships, implementing stringent regulations, and promoting sustainable practices, we can strive for a future where both industries coexist harmoniously, ensuring the well-being of both humans and the environment</p></div>
           
        </div>
    )
}

export default BlogUnlocked;