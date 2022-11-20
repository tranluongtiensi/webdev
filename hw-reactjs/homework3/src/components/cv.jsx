import React from "react";
import "./cv.css";
import logo from "../assets/avatar.png";


const Cv = () => {
  return (
    <div id="content">
        <div class="profile" id="profile">
            <h1 class="profile-head">Profile</h1>
            <h5 class="profile-title">I'm a student</h5>
        </div>
        <hr class="formal-hr"/>

        <div class="profile-info">
    
            <div class="profile-info__item">
                <p class="profile-info__item-head-me">About me</p>
                <p class="profile-info__item-text">I am a lovely person. I have passion in IT and I want to become data scientists</p>
            </div>
    
            <div class="profile-info__item">
                <img src={logo} alt="" class="profile-info__item-img"/>
            </div>
    
            <div class="profile-info__item">
                <p class="profile-info__item-head">Details</p>
                <div class="profile-info__item-head-title">
                    <p class="profile-info__details-text"><b>Name:</b></p>
                    <p class="profile-info__details-text">Tran Luong Tien Si</p>
                    <p class="profile-info__details-text"><b>Age:</b></p>
                    <p class="profile-info__details-text">22</p>
                    <p class="profile-info__details-text"><b>Location:</b></p>
                    <p class="profile-info__details-text">UIT, VNU-HCM</p>
                </div>
            </div>
    
        </div>

        {/* <!-- Experiences --> */}
        <div class="experiences" id="experiences">
            <h1 class="experiences-head">Experiences</h1>
            <hr class="formal-hr"/>
            <p class="experiences-info__head">Educations</p>
            <div class="experiences__list">
                <div class="experiences__item">
                    <h3>UIT, VNU-HCM</h3>
                    <p>Apr 2019 - June 2024</p>
                </div>
                <div class="experiences__item">
                    <h5>Infomation System</h5>
                    <p>The education was mainly System design-based course, but I also learned about Web, Data analysis and more. During my time in college, I specialized in OOP, data science. Now, I'm learning web development</p>
                </div>
            </div>

            <hr class="formal-hr"/>
            <p class="experiences-info__head">Working Experiences</p>
            <div class="experiences__list">
                <div class="experiences__item">
                    <h3>Facebook | Fresher Engineer</h3>
                    <p>Oct 2022 - Current</p>
                </div>
                <div class="experiences__item">
                    <h5>Partime - Fresher Web Developer</h5>
                    <p>Working as a Fresher on a dating function on Facebook page. Dating function is an app as Tinder</p>
                </div>
            </div>
        </div>

        {/* <!-- Abilities --> */}
        <div class="abilities" id="abilities">
            <h1 class="abilities-head">Abilities</h1>
            <hr class="formal-hr"/>
            <p class="abilities-info__head ">Skills</p>
            <div class="abilities-list">
                <div class="abilities-item">
                    <div class="abilities-item__skill">
                        <span class="abilities-item__label">HTML/CSS</span>
                        <div class="abilities-item__icon">
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop"></i>
                            <i class="ti-control-stop"></i> 
                        </div>
                    </div>
                    <div class="abilities-item__skill">
                        <span class="abilities-item__label">SQL</span>
                        <div class="abilities-item__icon">
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i> 
                        </div>
                    </div>
                    <div class="abilities-item__skill">
                        <span class="abilities-item__label">JQuery</span>
                        <div class="abilities-item__icon">
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop"></i>
                            <i class="ti-control-stop"></i> 
                        </div>
                    </div>
                    <div class="abilities-item__skill">
                        <span class="abilities-item__label">JavaScript</span>
                        <div class="abilities-item__icon">
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop"></i> 
                        </div>
                    </div>
                </div>

                <div class="abilities-item">

                    <div class="abilities-item__skill">
                        <span class="abilities-item__label">Object oriented programming</span>
                        <div class="abilities-item__icon">
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop"></i> 
                        </div>
                    </div>
                    <div class="abilities-item__skill">
                        <span class="abilities-item__label">SEO</span>
                        <div class="abilities-item__icon">
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop"></i>
                            <i class="ti-control-stop"></i>
                            <i class="ti-control-stop"></i> 
                        </div>
                    </div>
                    <div class="abilities-item__skill">
                        <span class="abilities-item__label">React</span>
                        <div class="abilities-item__icon">
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop"></i>
                            <i class="ti-control-stop"></i>
                            <i class="ti-control-stop"></i> 
                        </div>
                    </div>

                </div>
            </div>
            <div class="github" id="projects">
                <div class="github__text"><i>See my profile on github</i></div>
                <div class="github__button">
                    <a class="btn" href="https://github.com/tranluongtiensi">See project on Github</a>
                </div>
            </div>


            <hr class="formal-hr"/>
            <p class="abilities-info__head">Languages</p>
            <div class="abilities-list">
                <div class="abilities-item">
                    <div class="abilities-item__skill">
                        <span class="abilities-item__label">Vietnamese (Native)</span>
                        <div class="abilities-item__icon">
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i> 
                        </div>
                    </div>
                    <div class="abilities-item__skill">
                        <span class="abilities-item__label">English (IELTS 6.5)</span>
                        <div class="abilities-item__icon">
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop"></i>
                            <i class="ti-control-stop"></i> 
                        </div>
                    </div>
                </div>

                <div class="abilities-item">
                    <div class="abilities-item__skill">
                        <span class="abilities-item__label">Cat (Mother Tongue)</span>
                        <div class="abilities-item__icon">
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop abilities-item__icon--activity"></i> 
                        </div>
                    </div>
                    <div class="abilities-item__skill">
                        <span class="abilities-item__label">Dog (My enemy)</span>
                        <div class="abilities-item__icon">
                            <i class="ti-control-stop abilities-item__icon--activity"></i>
                            <i class="ti-control-stop"></i>
                            <i class="ti-control-stop"></i>
                            <i class="ti-control-stop"></i>
                            <i class="ti-control-stop"></i> 
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
  );
};

export default Cv;
