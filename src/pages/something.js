import React from "react"
import Topmenu from "../components/topmenu"
import { useState } from "react"
import { StickyContainer, Sticky } from "react-sticky"
import LazyLoad from "react-lazyload"
// import Sticky from "react-stickynode"
import StickyBox from "react-sticky-box/dist/esnext"

import six from "../cvimages/adv.png"
import looi from "../cvimages/looi.png"
import undo from "../cvimages/undo.png"
import freelance from "../cvimages/freelance.png"
import hyper from "../cvimages/hyper.png"
import hse from "../cvimages/hse.png"
import btcx from "../cvimages/btcx.png"
import gigway from "../cvimages/gigway.png"

import gigwayfolio from "../portfolioimages/gigwayfolio.png"
import gigwaytumb from "../portfolioimages/gigwayfolio3.png"
import assistansfolio from "../portfolioimages/assistansfolio.png"
import assistanstumb from "../portfolioimages/assistansfolio3.png"
import dsfolio from "../portfolioimages/DSfolio.png"
import dstumb from "../portfolioimages/DSfolio3.png"
import flacontumb from "../portfolioimages/flaconfolio3.png"
import flaconfolio from "../portfolioimages/flaconfolio.png"
import gztumb from "../portfolioimages/GZfolio3.png"
import gzfolio from "../portfolioimages/GZfolio.png"
import kicktumb from "../portfolioimages/kickicofolio3.png"
import kickfolio from "../portfolioimages/kickicofolio.png"
import undotumb from "../portfolioimages/undofolio3.png"
import undofolio from "../portfolioimages/undofolio.png"
import tbtumb from "../portfolioimages/tbfolio3.png"
import tbfolio from "../portfolioimages/tbfolio.png"
import portaltumb from "../portfolioimages/portalfolio3.png"
import portalfolio from "../portfolioimages/portalfolio.png"
import eyezontumb from "../portfolioimages/eyezonfolio3.png"
import eyezonfolio from "../portfolioimages/eyezonfolio.png"


import { StyledSide } from "../components/cv.styled"
import Heading from "../components/headings"
import PortfolioBlock from "../components/portfolioblock"

function App() {
  const [eyezonShown, setEyezonShown] = useState(false)
  const [assistansShown, setAssistansShown] = useState(false)
  const [undoShown, setUndoShown] = useState(false)
  const [gzShown, setGzShown] = useState(false)
  const [seShown, setSeShown] = useState(false)
  const [hyperShown, setHyperShown] = useState(false)
  const [dsShown, setDsShown] = useState(false)
  const [gigwayShown, setGigwayShown] = useState(false)
  const [tbShown, setTbShown] = useState(false)
  const [flaconShown, setFlaconShown] = useState(false)
  const [kickShown, setKickShown] = useState(false)
  const [portalShown, setPortalShown] = useState(false)

  var section = "ALL"
  var arr = ["STRATEGY", "ALL", "UX"]
  const [type, setType] = useState("ALL")
  var portarr = [[["STRATEGY", "UX"], "Lokh", "I’m alright in gen but getting pretty tiresome with this new lockdown"], [["UX"], "EYEZON", "Some text"], [["STRATEGY", "UX"], "GIGWAY", "Some text"]]


  return (
    <div>
      <Topmenu />
      <div className="scrollRibbon heading">
        <Heading headingFirst="SCROLL " size="3vh" speed="30" />
      </div>

      {/*<div className="menuHint">*/}
      {/*  <Heading headingFirst="Click on a filter to choose a theme" size="2vh" speed="10" />*/}
      {/*</div>*/}

      <div className="portfolioLinks">
        {
          (type == "ALL") ? (
            <span
              style={{ color: "#0057ff", transform: "scale(1.03)" }}>ALL</span>
          ) : (
            <span onClick={() => setType("ALL")}>ALL</span>
          )
        }
        {
          (type == "STRATEGY") ? (
            <span
              style={{ color: "#0057ff", transform: "scale(1.03)" }}>STRATEGY</span>
          ) : (
            <span onClick={() => setType("STRATEGY")}>STRATEGY</span>
          )
        }
        {
          (type == "DESIGN") ? (
            <span
              style={{ color: "#0057ff", transform: "scale(1.03)" }}>DESIGN</span>
          ) : (
            <span onClick={() => setType("DESIGN")}>DESIGN</span>
          )
        }
        {
          (type == "PRODUCT") ? (
            <span
              style={{ color: "#0057ff", transform: "scale(1.03)" }}>PRODUCT</span>
          ) : (
            <span onClick={() => setType("PRODUCT")}>PRODUCT</span>
          )
        }
      </div>
      {/*<div className="menuHint"><p>Click on a filter to choose a theme</p> </div>*/}
      {
        (type == "DESIGN") ? (
          <div className="sectionDescription">
            <p>For a Designer I have quite a complicated relationship with Design. I'm all up for deep understanding of
              human behaviour. I'm also a big fan of "good enough" and pick experimentation over preparation any
              day. <span
                style={{ fontFamily: "RobotoBold" }}>Design for me is a way of thinking rather than a craft. </span>
            </p>
          </div>
        ) : null
      }
      {
        (type == "ALL") ? (
          <div className="sectionDescription">
            <p>I’m a product designer and strategist focusing on working with startups. Everything I do falls into
              Strategy, Design and Product; any given project usually ticks off two of the three. <span
                style={{ fontFamily: "RobotoBold" }}> Feel free to explore the projects below or click on a topic to filter them by. </span>
            </p>
          </div>
        ) : null
      }
      {
        (type == "PRODUCT") ? (
          <div className="sectionDescription">
            <p>Product is where I mostly apply my creative thinking. Over the years I’ve spoken to, consulted and worked
              with a large number of startups operating in various industries. <span
                style={{ fontFamily: "RobotoBold" }}>I don't believe in anything until it's
                built.</span></p>
          </div>
        ) : null
      }
      {
        (type == "STRATEGY") ? (
          <div className="sectionDescription">
            <p>Strategy is where it's all started for me. I've worked as a Strategist back in the ad business, I
              tend to
              focus on strategic aspects when doing Design. Execution is key but <span
                style={{ fontFamily: "RobotoBold" }}> before you go execute your vision, you need to make sure that your vision makes sense.</span>
            </p>
          </div>
        ) : null
      }

      <div className="cvContent">
        {/*<p className="cvTitle">Experience</p>*/}
        <StickyContainer className="cvWrapper">
          <div className="cvGrid">
            {
              (type == "PRODUCT" || type == "ALL" || type == "DESIGN") ? (
                <div className="portfolioImage"

                >
                  <img
                    src={eyezontumb}
                    onMouseOver={() => setEyezonShown(true)}
                    onMouseLeave={() => setEyezonShown(false)}
                  />
                  <div className="boroda" id="borodaEyezon">
                    <img src={eyezonfolio} />
                  </div>
                </div>
              ) : null
            }
            {
              (type == "STRATEGY") ? (
                <div className="portfolioImage"
                >
                  <img
                    src={dstumb}
                    onMouseEnter={() => setDsShown(true)}
                    onMouseLeave={() => setDsShown(false)}
                  />
                  <div className="boroda">
                    <img src={dsfolio} />
                  </div>
                </div>
              ) : null
            }
            {
              (type == "ALL" || type == "PRODUCT") ? (
                <div className="portfolioImage"
                >
                  <img
                    src={dstumb}
                    onMouseEnter={() => setDsShown(true)}
                    onMouseLeave={() => setDsShown(false)}
                  />
                  <div className="borodaRight">
                    <img src={dsfolio} />
                  </div>
                </div>
              ) : null
            }
            {
              (type == "ALL" || type == "PRODUCT") ? (
                <div className="portfolioImage">
                  <img
                    src={gigwaytumb}
                    onMouseEnter={() => setGigwayShown(true)}
                    onMouseLeave={() => setGigwayShown(false)}
                  />
                  <div className="boroda">
                    <img src={gigwayfolio} />
                  </div>
                </div>
              ) : null
            }
            {
              (type == "STRATEGY" || type == "DESIGN") ? (
                <div className="portfolioImage">
                  <img
                    src={gigwaytumb}
                    onMouseEnter={() => setGigwayShown(true)}
                    onMouseLeave={() => setGigwayShown(false)}
                  />
                  <div className="borodaRight">
                    <img src={gigwayfolio} />
                  </div>
                </div>
              ) : null
            }
            {
              (type == "STRATEGY" || type == "DESIGN") ? (
                <div className="portfolioImage">
                  <img
                    src={assistanstumb}
                    onMouseEnter={() => setAssistansShown(true)}
                    onMouseLeave={() => setAssistansShown(false)}
                  />
                  <div className="boroda">
                    <img src={assistansfolio} />
                  </div>
                </div>
              ) : null
            }
            {
              (type == "ALL") ? (
                <div className="portfolioImage">
                  <img
                    src={assistanstumb}
                    onMouseEnter={() => setAssistansShown(true)}
                    onMouseLeave={() => setAssistansShown(false)}
                  />
                  <div className="borodaRight">
                    <img src={assistansfolio} />
                  </div>
                </div>
              ) : null
            }
            {
              (type == "ALL") ? (
                <div className="portfolioImage">
                  <img
                    src={undotumb}
                    onMouseEnter={() => setUndoShown(true)}
                    onMouseLeave={() => setUndoShown(false)}
                  />
                  <div className="boroda">
                    <img src={undofolio} />
                  </div>
                </div>
              ) : null
            }
            {
              (type == "STRATEGY" || type == "PRODUCT") ? (
                <div className="portfolioImage">
                  <img
                    src={undotumb}
                    onMouseEnter={() => setUndoShown(true)}
                    onMouseLeave={() => setUndoShown(false)}
                  />
                  <div className="borodaRight">
                    <img src={undofolio} />
                  </div>
                </div>
              ) : null
            }
            {
              (type == "ALL" || type == "DESIGN") ? (
                <div className="portfolioImage">
                  <img
                    src={gztumb}
                    onMouseOver={() => setGzShown(true)}
                    onMouseLeave={() => setGzShown(false)}
                  />
                  <div className="borodaRight">
                    <img src={gzfolio} />
                  </div>
                </div>
              ) : null
            }
            {
              (type == "STRATEGY" || type == "ALL" || type == "PRODUCT" || type == "DESIGN") ? (
                <div className="portfolioImage">
                  <img
                    src={tbtumb}
                    onMouseEnter={() => setTbShown(true)}
                    onMouseLeave={() => setTbShown(false)}
                  />
                  <div className="boroda">
                    <img src={tbfolio} />
                  </div>
                </div>
              ) : null
            }
            {
              (type == "STRATEGY" || type == "ALL" || type == "PRODUCT") ? (
                <div className="portfolioImage">
                  <img
                    src={flacontumb}
                    onMouseEnter={() => setFlaconShown(true)}
                    onMouseLeave={() => setFlaconShown(false)} />
                  <div className="borodaRight">
                    <img src={flaconfolio} />
                  </div>
                </div>
              ) : null
            }
            {
              (type == "STRATEGY" || type == "ALL" || type == "PRODUCT") ? (
                <div className="portfolioImage">
                  <img
                    src={kicktumb}
                    onMouseEnter={() => setKickShown(true)}
                    onMouseLeave={() => setKickShown(false)}
                  />
                  <div className="boroda">
                    <img src={kickfolio} />
                  </div>
                </div>
              ) : null
            }
            {
              (type == "DESIGN") ? (
                <div className="portfolioImage">
                  <img
                    src={kicktumb}
                    onMouseEnter={() => setKickShown(true)}
                    onMouseLeave={() => setKickShown(false)}
                  />
                  <div className="borodaRight">
                    <img src={kickfolio} />
                  </div>
                  }
                </div>
              ) : null
            }
            {
              (type == "DESIGN") ? (
                <div className="portfolioImage">
                  <img
                    src={portaltumb}
                    onMouseEnter={() => setPortalShown(true)}
                    onMouseLeave={() => setPortalShown(false)}
                  />
                  <div className="boroda">
                    <img src={portalfolio} />
                  </div>
                </div>
              ) : null
            }
            {
              (type == "ALL" || type == "PRODUCT") ? (
                <div className="portfolioImage">
                  <img
                    src={portaltumb}
                    onMouseEnter={() => setPortalShown(true)}
                    onMouseLeave={() => setPortalShown(false)}
                  />
                  <div className="borodaRight">
                    <img src={portalfolio} />
                  </div>
                </div>
              ) : null
            }
          </div>
          <Sticky>
            {({
                style = {
                  position: "fixed",
                },
              }) => (
              <div style={style}>
                <StyledSide className="experienceSide" show={gigwayShown}>
                  <div className="experienceHead">
                    <img src={gigway} alt={"gigway's logo"} />
                    <p className="experienceSideTitle">Experience & <br /> Product Lead</p>
                    <p className="experienceSideSub">
                      SINCE FEB 2020
                      <br />
                      <br />
                      DESIGN, USER EXPERIENCE, PRODUCT MANAGEMENT
                    </p>
                  </div>
                  <div className="experienceText">
                    <p>
                      In 2017 joined BT.CX, a swedish crypto startup.
                      <br /> <br /> Worked closely with the Engineering teams as the
                      only Product Designer, delivering small UI and UX fixes as well
                      as a full redesign of the app and the platform
                    </p>
                  </div>
                </StyledSide>
              </div>
            )}
          </Sticky>

          <Sticky>
            {({
                style = {
                  position: "fixed",
                },
              }) => (
              <div style={style}>
                <StyledSide className="experienceSide" show={eyezonShown}>
                  <div className="experienceHead">
                    <img src={six} alt={"logo"} />
                    <p className="experienceSideTitle">DIGITAL STRATEGIST</p>
                    <p className="experienceSideSub">
                      2010-2017
                      <br />
                      <br />
                      Creative strategy, Creative concepting, art-direction, SMM,
                      copywriting, client management, coaching, lecturing
                    </p>
                  </div>
                  <div className="experienceText">
                    <p>
                      Last place of work in the ad business – Publicis Media (part of
                      the French Publicis Groupe,was responsible for establishing a
                      creative unit in the media counterpart of Publicis.
                      <br />
                      <br />
                      Helped the team grow from 2 to 9 and the agency got into the Top
                      10 in "Digital Creative" category of the biggest Russian
                      industry rating
                    </p>
                  </div>
                </StyledSide>
              </div>)}
          </Sticky>

          <Sticky>
            {({
                style = {
                  position: "fixed",
                },
              }) => (
              <div style={style}>
                <StyledSide className="experienceSide" show={assistansShown}>
                  <div className="experienceHead">
                    <img src={looi} alt={"Looi's Logo"} />
                    <p className="experienceSideTitle">PRODUCT OWNER</p>
                    <p className="experienceSideSub">
                      2019-2020
                      <br />
                      <br />
                      DESIGN, PROJECT MANAGEMENT, CLIENT RELATIONSHIPS, BUSINESS
                      DEVELOPMENT
                    </p>
                  </div>
                  <div className="experienceText">
                    <p>
                      Joined one of the first Product Design studios in Russia, am
                      involved in various projects with both corporate and startup
                      clients, focusing on client relationships, product strategy and
                      design, hypotheses testing and process facilitation
                    </p>
                  </div>
                </StyledSide>
              </div>)}
          </Sticky>

          <Sticky>
            {({
                style = {
                  position: "fixed",
                },
              }) => (
              <div style={style}>
                <StyledSide className="experienceSide" show={undoShown}>
                  <div className="experienceHead">
                    <img src={undo} alt={"undo design logo"} />
                    <p className="experienceSideTitle">FOUNDER</p>
                    <p className="experienceSideSub">
                      2016-CURRENT
                      <br />
                      <br />
                      FOUNDER, DESIGN, PRODUCT & MANAGEMENT
                    </p>
                  </div>
                  <div className="experienceText">
                    <p>
                      Started a boutique design studio focused on working with
                      early-stage startups.
                      <br />
                      <br />
                      Over the years I’ve spoken to, consulted and worked with a large
                      number of startups operating in various industries, helping them
                      with all sorts of things: from UI and web design fixes, to
                      product strategy and branding
                    </p>
                  </div>
                </StyledSide>
              </div>)}
          </Sticky>
          <Sticky>
            {({
                style = {
                  position: "fixed",
                },
              }) => (
              <div style={style}>
                <StyledSide className="experienceSide" show={gzShown}>
                  <div className="experienceHead">
                    <img src={freelance} alt={"logos of the random companies I freelanced for"} />
                    <p className="experienceSideTitle">DESIGNER, STRATEGIST</p>
                    <p className="experienceSideSub">
                      MY WHOLE LIFE
                      <br />
                      <br />
                      PROJECT MANAGEMENT, UX DESIGN, PRODUCT DESIGN, PRODUCT STRATEGY,
                      BUSINESS STRATEGY, CREATIVE, USER RESEARCH
                    </p>
                  </div>
                  <div className="experienceText">
                    <p>
                      Freelanced since 2010 with a focus on tech startups. (in
                      addition to strategy and design work for companies like
                      Mövenpick, Castorama, Yandex).
                      <br />
                      <br />
                      Afte moving to Sweden in 2017 continued doing work in Product
                      Design & Development for clients like Vimla, TrainBrain, Habity,
                      BT.CX, Assistans För Dig.
                    </p>
                  </div>
                </StyledSide>
              </div>)}
          </Sticky>
          <Sticky>
            {({
                style = {
                  position: "fixed",
                },
              }) => (
              <div style={style}>
                <StyledSide className="experienceSide" show={dsShown}>
                  <div className="experienceHead">
                    <img src={btcx} alt={"BTCX logo"} />
                    <p className="experienceSideTitle">DESIGNER, STRATEGIST</p>
                    <p className="experienceSideSub">
                      2017-2018
                      <br />
                      <br />
                      DESIGN, STRATEGY, RESEARCH, STAKEHOLDER MANAGEMENT
                    </p>
                  </div>
                  <div className="experienceText">
                    <p>
                      In 2017 joined BT.CX, a swedish crypto startup.
                      <br /> <br /> Worked closely with the Engineering teams as the
                      only Product Designer, delivering small UI and UX fixes as well
                      as a full redesign of the app and the platform
                    </p>
                  </div>
                </StyledSide>
              </div>)}
          </Sticky>

        </StickyContainer>
        <StickyContainer className="StickySkills">
          <p className="cvTitle">Education</p>
          <div className="cvWrapper">
            <div className="cvGrid">
              <div
                onMouseOver={() => setSeShown(true)}
                onMouseLeave={() => setSeShown(false)}
              >
                <p>Software Engineering</p>
              </div>
              <div
                onMouseOver={() => setHyperShown(true)}
                onMouseLeave={() => setHyperShown(false)}
              >
                <p>Hyper Island</p>
              </div>
            </div>

          </div>

          <StyledSide className="educationSide" show={seShown}>
            <div className="experienceHead">
              <img src={hse} alt={"hse logo"} />
              <p className="experienceSideTitle">SOFTWARE ENGINEERING</p>
              <p className="experienceSideSub">
                BSC, 2010-2014, Higher School of Economics, Moscow
                <br />
                <br />
                SOFTWARE DEVELOPMENT, MACHINE LEARNING, SOFTWARE ARCHITECTURE,
                quality assurance, mathematics, economics, research methods
              </p>
            </div>
            <div className="experienceText">
              <p>
                The educational programme fully complies with international
                recommendations on teaching software engineering, including
                Computer Science 2001/2008/2013 and Software Engineering
                2004/2014
              </p>
            </div>
          </StyledSide>


          <StyledSide className="educationSide" show={hyperShown}>
            <div className="experienceHead">
              <img src={hyper} alt={"Hyper Island's logo"} />
              <p className="experienceSideTitle">DIGITAL MEDIA CREATIVE</p>
              <p className="experienceSideSub">
                2017-2019
                <br />
                <br />
                CHANGE MANAGEMENT, SELF-LEADERSHIP, DESIGN THINKING, TEAM
                DEVELOPMENT, PROCESS DESIGN, PROJECT MANAGEMENT
              </p>
            </div>
            <div className="experienceText">
              <p>
                In 2017 moved to Sweden to study in Hyper Island (Digital Media
                Creative program).
                <br />
                <br />
                During the course of the program worked on strategic briefs from
                clients like SAS, SVT, MTG (Viaplay), including 3-month-long
                in-house work at Sveriges Utbildningsradio with focus on team,
                culture and innovation management.
              </p>
            </div>
          </StyledSide>

        </StickyContainer>
        <div className="skillHeadline">
          <div className="skillGrid">
            <div className="skillTitle">
              <p>SKILLS</p>
            </div>
            <div className="skillSub">
              <p>CAN DO WELL</p>
            </div>
            <div className="skillSub">
              <p>CAN DO WHEN NEEDED</p>
            </div>
            <div className="scrollCheat" />
          </div>
        </div>
        <div className="cvWrapper">
          <div className="skillGrid">
            <div className="goodSkills" />
            <div className="goodSkills">
              <div>
                <p>
                  UX DESIGN
                </p>
                <p>
                  FACILITATION
                </p>
                <p>
                  PRODUCT DESIGN
                </p>
                <p>
                  PROJECT MANAGEMENT
                </p>
                <p>
                  UX STRATEGY
                </p>
                <p>
                  CONCEPT DESIGN
                </p>
                <p>
                  PROTOTYPING
                </p>
                <p>
                  USER RESEARCH
                </p>
              </div>
            </div>
            <div className="goodishSkills">
              <div>
                <p>FRONTEND DEVELOPMENT </p>
                <p>ACCOUNT MANAGEMENT</p>
                <p>UI ANIMATION</p>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="scrollCheat" />
    </div>
  )
}

export default App
