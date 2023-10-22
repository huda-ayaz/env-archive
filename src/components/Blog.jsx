import React, { useContext, useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import bridges from "../assets/bridges.jpg";
import salmon from "../assets/fish.png";
import "../App.css";
import "../stylesheets/Blog.css";

const Blog = ({unlockBlog}) => {
    return(
        <div>
            <div class= "profile">
                <div class = "pfp">
                    <img id= "bridges" src={bridges}/>
                    <p class= "reveal">Contact the director</p>
                </div>
                <h3>Everett Bridges</h3>
                <p>Head of Research at US Department of Environment and Sustainability</p>
                <p onClick = {unlockBlog}>ebridges@env.us.gov</p> 
            </div>
            
            <h1 class = 'blog-title'>Archive 20-41: </h1>
         
            <div class = "tbody">
                <div class = "fish">
                    
                    <img class= 'blog-pic' src={salmon}/>
                    <img class= 'blog-pic' src={salmon}/>
                    <img class= 'blog-pic' src={salmon}/>

                </div>
                <div class = "text">
                    
                    <div class = "post">
                        <h3>ENTRY 20-41-5</h3>
                        <p>
                            I find myself at the forefront of a global crisis. It's a solemn duty that carries immense weight and responsibility.</p>
                
                        <p>
                            Today, we reviewed the latest data from our monitoring stations, and the results are disheartening. Sea levels have risen by another centimeter in the past six months, and coastal communities are struggling to adapt. Our team is diligently working on models to predict the consequences of a further increase in sea levels, which is likely inevitable. The urgency of our research cannot be overstated.
                        </p>
                    </div>
                    <div class = "post">
                        <h3>ENTRY 20-41-6</h3>
                        <p>
                            The situation is becoming increasingly dire. Extreme weather events are on the rise, and we're seeing the impact on ecosystems and human populations. 
                            Last month, a powerful hurricane devastated a small island nation in the Pacific, leaving a trail of destruction in its wake. The connection between 
                            these events and climate change is undeniable.</p>
        
                        <p>
                            Our research is focused on understanding these patterns, assessing vulnerabilities, and developing mitigation and adaptation strategies. 
                            We're collaborating with governments, NGOs, and international agencies to ensure our findings are translated into actionable policies.
                        </p>
                    </div>
                    <div class = "post">
                        <h3>ENTRY 20-41-7</h3>
                        <p>
                            The effects of climate change are hitting closer to home than ever. Record-breaking heatwaves are sweeping across our region, causing droughts and wildfires. 
                            This year, we've experienced water shortages and crop failures that are putting immense pressure on food supplies and prices.
                        </p>

                        <p>
                            Our research is now heavily concentrated on developing sustainable agricultural practices, water management systems, and disaster preparedness. 
                            The urgency of these issues is clear, and we're racing against time to find solutions that can help communities adapt and mitigate these challenges.
                        </p>
                    </div>
                    <div class = "post">
                        <h3>ENTRY 20-41-8</h3>
                        <p>
                            The global community's response to the climate crisis has been a mixed bag. 
                            While there have been significant strides in renewable energy adoption and carbon reduction efforts, political will remains a barrier to more drastic action.</p>
                        <p>
                            We're continuously striving to provide accurate, actionable data to policymakers and the public. 
                            Our efforts include educating and raising awareness, and we are involved in international climate conferences and negotiations, pushing for more ambitious targets and commitments.
                        </p>
                        <p>
                            The looming catastrophe is terrifying. The stakes are too high, and the future of our planet depends on our collective efforts to combat climate change.
                        </p>
                    </div>

                    <div class = "post">
                        <h3>ENTRY 20-41-9</h3>
                        <p>
                            We found something today in the depths of the Patapsco. The repercussions of █████████████████ on █████████████ have taken a sinister turn, ████████████ lives in the waters now. 
                            It's as if Mother Nature herself has decided to craft a twisted experiment within these once pristine waters.
                        </p>
                        <p>
                            I have observed numerous species and variations of █████, but what I encountered today was nothing short of astonishing. 
                            The initial signs of something unusual came when we noticed a strange discoloration in the water, not far from the site of █████████████. 
                            My curiosity led me to investigate further--
                        </p>
                        <p>
                            The ███████████, which I have tentatively dubbed ███████████████████ exhibit an array of bizarre characteristics. 
                            They are considerably larger, with some individuals measuring nearly twice the size of the native fish species in the area. 
                        </p>
                        <p>
                            These ███████████ appear to have developed a unique set of features adapted to their altered environment. 
                            The most striking difference is their mouths – these ████████ have evolved jaw structures that allow them to consume a wider range of prey, from small invertebrates to other fish species. 
                            Their teeth are needle-like and formidable, indicating a ████████████.
                        </p>

                        <p>
                            While these ████████████ may be an intriguing discovery from a scientific perspective, the ecological consequences and their potential impact on native species are deeply concerning.
                        </p>
                    </div>

                    <div class = "post">
                        <h3>ENTRY 20-41-11</h3>
                        <p>
                            The sense of hopelessness looms over our work. Despite our best efforts and those of countless activists, the world is still not moving at the necessary speed to combat climate change effectively. 
                            It's easy to become overwhelmed by the sheer scale of the problem and the inertia of political systems.
                            It's painful to see communities suffering from the consequences of a problem they played little part in creating.
                        </p>
                        <p>
                            We're continuously striving to provide accurate, actionable data to policymakers and the public. 
                            Our efforts include educating and raising awareness, and we are involved in international climate conferences and negotiations, pushing for more ambitious targets and commitments.
                        </p>
                        <p>
                            We must hold onto the hope that global consciousness will evolve, and our collective will to address this crisis will prevail. The struggle may be disheartening, but we cannot afford to give up. 
                            Our work remains vital, and we must continue to fight for a more sustainable and equitable world.
                        </p>
                    </div>

                </div>

                
            </div>
        </div>
    )
}

export default Blog;