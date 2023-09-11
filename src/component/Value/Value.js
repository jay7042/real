import React from "react";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {AiOutlineArrowDown} from 'react-icons/ai'
import './Value.css'
import { useState } from "react";

import data from "../../utils/accordion";
const Value = () => {
    const [className, setClassName] = useState(null)
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/*left Side*/}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt=""/>
                    </div>
                </div>
                {/* right side */}
                <div className="flexColStart v-right">
                    <span className="orangeText ">Our Value</span>
                    <span className="primaryText">Value we give to you</span>
                    <span className="secondaryText">
                        We are always ready to help you by providing the Best service.
                        <br/>
                        We believe a good place to live can change your life
                    </span>
                    <Accordion
                    className="accordion"
                    allowMultipleExpanded={false}
                    preExpanded={[0]}
                    >
                        { data.map((item,i) => {
                                
                                return (
                                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="flexCenter accordionButton">
                                                <AccordionItemState>
                                                    {({expanded})=> expanded ? setClassName("expanded") : setClassName("collapsed")}
                                                </AccordionItemState>
                                                <div className="flexCenter icon">{item.icon}</div>
                                                <span className="primartText">
                                                    {item.heading}
                                                </span>
                                                <div className="flexcenter icon">
                                                    <AiOutlineArrowDown size ={20}/>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>

                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value