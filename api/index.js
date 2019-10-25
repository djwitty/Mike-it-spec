//import mongoose from 'mongoose';
import express from 'express';
import data from '../src/myInfo';

//mongoose.connect("mongodb://localhost");

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

router.get('/contests', (req, res) => {
  res.send({
    contests: contests
  });
});

router.get('/contests/:contestId', (req, res) => {
  let contest = contests[req.params.contestId];
  contest.summary = `I am a determined, businesslike and enthusiastic
  person, who has a long track record of delivering the business
  and technology solutions that clients want. I have vast experience
  in managing expectations and providing excellent customer
  service. I will always take ownership of any problems that arise
  and works hard to implement the business processes and
  procedures laid down by the company stakeholders.
  I’m fine with moving outside of my comfort zone and really true
  professional who aspires to create a culture of continuous service
  excellence. I have expert knowledge in establishing plans and
  implementing policies that will improve processes. With my last
  employer, I am responsible for playing a critical part in the
  success of all the company’s operations and does this by ensuring
  the highest level of operational service delivery.
  My key strengths include being able to operate in a world of
  fast-moving technologies, team management, customer support
  and acting as the primary face of the department.
  On a personal level, I will always apply sound judgment to resolve
  issues and will be someone who empathizes with customers and
  goes the extra mile to satisfy them.`;
  contest.responsibilities = `Communication with client;
    Implementation and monitoring of project management processes;
    Distribution and prioritization of tasks, implementation of the interaction between project participants;
    Studying and analysis of the project concept, its validation, and determination of project boundaries;
    Collection, analysis, and management of project requirements;
    Participation in the selection and approval of the project team;
    Drawing up and working with project documentation;
    Setting the work process in a team;
    Reporting on progress;
    Working on project documentation.`;
  contest.history = `/* Last work. I have a positive reference.
  07.19 - 10.19:
  482 solutions - PM, Tech Lead, Web-consultant
  Communication with a client; Definition, formation, and implementation of project management processes; Implementation and monitoring of project management processes; Distribution and prioritization of tasks, implementation of the interaction between project participants; Studying and analysis of the project concept, its validation, and determination of project boundaries; Collection, analysis, and management of project requirements; Drawing up an assessment of the terms of work on the project, monitoring their compliance; Participation in the selection and approval of the project team; Planning tasks in the project, determining the scope of work; Drawing up and working with project documentation; Setting the work process in a team; Reporting on progress; Risks analysis;
  /* I got a lot of hard and soft skills.
  06.16 - 02.19:
  Application Cloud - Project Manager, Recruiter/HR
  Working on searching, hiring and code review. Team Leader, WordPress consultant. Projects: on demand.
  Working on searching, hiring and supporting candidates.
  12.10 - 06.16:
  Freelancer at Weblancer.net. Scope of technologies: HTML/CSS/JS/Wordpress/OpenCart.
  In IT-sphere since 2006y.`;
  contest.expectations = `Salary expectations really depend on the hard skills boosting level.
  I want to improve my skills at work.`;
  res.send(contest);
});

export default router;
