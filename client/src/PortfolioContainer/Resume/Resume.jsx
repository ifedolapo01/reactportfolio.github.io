import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.scss";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "UI/UX Design", ratingPercentage: 85 },
    { skill: "Microsoft Word", ratingPercentage: 85 },
    { skill: "Microsoft Excel", ratingPercentage: 85 },
    { skill: "Microsoft Powerpoint", ratingPercentage: 89 },
    { skill: "Figma", ratingPercentage: 89 },
    { skill: "Adobe Photoshop", ratingPercentage: 70 },
  ];

  const projectsDetails = [
    {
      title: "USER PROFILE DESIGN",
      duration: { fromDate: "2020", toDate: "2021" },
      description: (
        <a
          target="_blank"
          href="https://www.behance.net/gallery/126098121/Daily-UI-006-User-profile"
          rel="noreferrer"
        >
          USER PROFILE DESIGN
        </a>
      ),
      subHeading: "The link to this project:",
    },
    {
      title: "FASHION BLOG LANDING PAGE",
      duration: { fromDate: "2020", toDate: "2021" },
      description: (
        <a
          target="_blank"
          href="https://www.behance.net/gallery/125033585/FASHION-FAIRY-Fashion-Blog-Landing-Page"
          rel="noreferrer"
        >
          FASHION BLOG LANDING PAGE
        </a>
      ),
      subHeading: "The link to this project:",
    },
    {
      title: "404 PAGE UI DESIGN",
      duration: { fromDate: "2020", toDate: "2021" },
      description: (
        <a
          target="_blank"
          href="https://www.behance.net/gallery/124991645/404-page-UI-design"
          rel="noreferrer"
        >
          404 PAGE UI DESIGN
        </a>
      ),
      subHeading: "The link to this project:",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Lagos, Nigeria"}
        subHeading={"BACHELOR OF SCIENCE BOTANY"}
        fromDate={"2015"}
        toDate={"2020"}
      />

      <ResumeHeading
        heading={"National Youth Service Corps"}
        subHeading={"International Institute of Tropical Agriculture"}
        fromDate={"2020"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"Oriwu Model College, Ikorodu, Lagos, Nigeria"}
        fromDate={"2009"}
        toDate={"2015"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"E-Settlement Limited"}
          subHeading={"JUNIOR UI/UX DESIGNER"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Creating user-centered designs by understanding business
            requirements, and user feedback.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Creating user flows, wire frames, prototypes, and mockups
          </span>
          <br />
          <span className="resume-description-text">
            - Translating requirements into style guides, design systems, design
            patterns and attractive user interfaces.{" "}
          </span>
          <br />
        </div>
        <ResumeHeading
          heading={"SideHustle"}
          subHeading={"UI/UX DESIGN INTERN"}
          fromDate={"2021"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Training and certification on the concepts of User interface and
            user experience (UI/UX) Design.
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Reading"
        description="Apart from being a tech enthusiast and a designer, I also love to read."
      />
      <ResumeHeading
        heading="Baking"
        description="Baking with my family soothes me."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
