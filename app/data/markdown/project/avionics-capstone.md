## 3-DOF Helicopter Control System Design

##### Avionics Capstone Design Project - Ryerson University

Post date: June 22, 2021
<br>
Project Submission date: April 14, 2016

---

For the final capstone project in the avionics stream of my Aerospace Engineering program, we were tasked with
performing a full system design for a 3-DOF helicopter PID control system. 

Functional requirements included:

1. Robust set-point control and station keeping with demonstrated robustness to external perturbations,
2. Trajectory tracking of a planned position/velocity trajectory with demonstrated stability and accuracy,
3. A human-machine interface for: a) manual flight with helicopter in view, b) manual tele-operation with only an interface
description of actual position/velocity, c) remote execution of an automated trajectory
4. An automated aerial drilling operation consisting of automated localization of a randomly placed board, controlled 
approach, and stable drilling of 3 vertically-equidistant holes (helicopter would need to pitch sufficiently to provide the
necessary lateral force and thus lose vertical lift)

All of these requirements were successfully implemented and as an added bonus, I developed a "teach-and-play" feature which
would allow the operator to manually guide the helicopter along the desired trajectory and later, execute the stored trajectory
autonomously.

I'll update this post in the future with some more details behind how the system was designed and what PID controllers are. 
For now, enjoy this demo video:

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/eRtz15vLFag" height="315" width="560" allowfullscreen="" frameborder="0">
    </iframe>
</div>

