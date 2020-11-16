import React from "react"
import Topmenu from "../components/topmenu"
import { useState } from "react"
import six from "../cvimages/adv.png"
import looi from "../cvimages/looi.png"
import undo from "../cvimages/undo.png"
import freelance from "../cvimages/freelance.png"
import hyper from "../cvimages/hyper.png"
import hse from "../cvimages/hse.png"
import btcx from "../cvimages/btcx.png"
import gigway from "../cvimages/gigway.png"
import { StyledSide } from "../components/cv.styled"
import Heading from "../components/headings"

function App() {
  const [adShown, setAdShown] = useState(false)
  const [looiShown, setLooiShown] = useState(false)
  const [undoShown, setUndoShown] = useState(false)
  const [freelanceShown, setFreelanceShown] = useState(false)
  const [seShown, setSeShown] = useState(false)
  const [hyperShown, setHyperShown] = useState(false)
  const [btcxShown, setBTCXShown] = useState(false)
  const [gigwayShown, setGigwayShown] = useState(false)
  return (
    <div>
      <Topmenu />
      <div className="scrollRibbon heading">
        <Heading headingFirst="SCROLL " size="3vh" speed="30" />
      </div>
      <div className="pageHeadings">
        <div onClick={() => window.open("/cv", "_self")} className="heading">
          <Heading
            headingFirst="CURRICULUM VITAE  "
            size="32vh"
            speed="30"
          />
        </div>
        <div onClick={() => window.open("/cv", "_self")} className="heading">
          <Heading
            headingFirst="SAVE AS PDF  "
            size="22vh"
            speed="13"
          />
        </div>
        <div
          onClick={() => window.open("/portfolio", "_self")}
          className="heading"
        >
          <Heading
            headingFirst="SHARE WITH SOMEONE ELSE  "
            size="16.5vh"
            speed="20"
          />
        </div>
      </div>
      <div className="cvContent">
        <p className="cvTitle">Experience</p>
        <div className="cvWrapper">
          <div className="cvGrid">
            <div className='cvBlock'
              onMouseOver={() => setGigwayShown(true)}
              onMouseLeave={() => setGigwayShown(false)}
            >
              <p>Gigway</p>
            </div>
            <div className='cvBlock'
              onMouseOver={() => setLooiShown(true)}
              onMouseLeave={() => setLooiShown(false)}
            >
              <p>looi design studio</p>
            </div>
            <div className='cvBlock'
              onMouseOver={() => setBTCXShown(true)}
              onMouseLeave={() => setBTCXShown(false)}
            >
              <p>BT.CX</p>
            </div>
            <div className='cvBlock'
              onMouseOver={() => setUndoShown(true)}
              onMouseLeave={() => setUndoShown(false)}
            >
              <p>undo design studio</p>
            </div>
            <div className='cvBlock'
              onMouseOver={() => setAdShown(true)}
              onMouseLeave={() => setAdShown(false)}
            >
              <p>6 years in advertising</p>
            </div>

            <div className='cvBlock'
              onMouseOver={() => setFreelanceShown(true)}
              onMouseLeave={() => setFreelanceShown(false)}
            >
              <p>freelance consulting</p>
            </div>
          </div>
          <StyledSide className="experienceSide" show={adShown}>
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
          <StyledSide className="experienceSide" show={looiShown}>
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
          <StyledSide className="experienceSide" show={freelanceShown}>
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
          <StyledSide className="experienceSide" show={btcxShown}>
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
          <StyledSide className="experienceSide" show={seShown}>
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
          <StyledSide className="experienceSide" show={hyperShown}>
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
        </div>
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
            <div className="scrollCheat" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
