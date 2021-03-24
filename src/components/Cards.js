import React from "react";
import "./Cards.css";
import { Button } from "./Button";

function Cards() {
  return (
    <div className="cards">
      <h1>Focus Group Discussion!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <section id="faq" class="faq section-bg">
              <div class="section-title">
                <p>Form 1 : (Save the details to Database)</p>
              </div>
              <ul class="faq-list" data-aos="fade-up" data-aos-delay="100">
                <li>
                  <div class="collapsed question" href="#faq1">
                    Geographic Location:
                  </div>
                  <div class="collapsed question" href="#faq1">
                    Name (optional):
                  </div>
                </li>
              </ul>
              <ul class="faq-list" data-aos="fade-up" data-aos-delay="100">
                <li>
                  <div class="collapsed question" href="#faq1">
                    Interview date:
                  </div>
                  <div class="collapsed question" href="#faq1">
                    Place of interview:
                  </div>
                </li>
              </ul>
              <ul class="faq-list" data-aos="fade-up" data-aos-delay="100">
                <li>
                  <div class="collapsed question" href="#faq1">
                    Gender:
                  </div>
                  <div class="collapsed question" href="#faq1">
                    Age:
                  </div>
                  <div class="collapsed question" href="#faq1">
                    Translation necessary for the interview: Yes No
                  </div>
                </li>
              </ul>
              <div class="container" data-aos="fade-up">
                <div class="section-title">
                  <p>Form 2 : Display the below contents ..Just Display</p>
                </div>

                <ul class="faq-list" data-aos="fade-up" data-aos-delay="100">
                  <h3>Introduction</h3>
                  <hr></hr>
                  <li>
                    <div
                      data-bs-toggle="collapse"
                      href="#faq2"
                      class="collapsed question"
                    >
                      1.Thank the informants for participating in interview.
                    </div>
                  </li>

                  <li>
                    <div
                      data-bs-toggle="collapse"
                      href="#faq3"
                      class="collapsed question"
                    >
                      2.Explain the objectives and expectations of the
                      interview.
                    </div>
                  </li>

                  <li>
                    <div
                      data-bs-toggle="collapse"
                      href="#faq4"
                      class="collapsed question"
                    >
                      3.Outline the session and the amount of time the interview
                      will take.
                    </div>
                  </li>

                  <li>
                    <div
                      data-bs-toggle="collapse"
                      href="#faq5"
                      class="collapsed question"
                    >
                      4.Obtain informed consent to record the interview and/or
                      take pictures.
                    </div>
                  </li>
                </ul>
                <Button
                  className="btn"
                  buttonStyle="btn-outline"
                  buttonSize="btn--small"
                >
                  Translate
                </Button>
              </div>
              <div class="container" data-aos="fade-up">
                <div class="section-title">
                  <p>Form 3 : Discussion Questions</p>
                </div>

                <ul class="faq-list" data-aos="fade-up" data-aos-delay="100">
                  <li>
                    <div
                      data-bs-toggle="collapse"
                      class="collapsed question"
                      href="#faq1"
                    >
                      What are the main differences in your roles and
                      responsibilities now, comparedto before the crisis?
                    </div>
                    <div className="input-areas">
                      <form>
                        <input
                          className="body-input"
                          name="answers"
                          type="input"
                          placeholder="Your answers "
                        />
                      </form>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="container" data-aos="fade-up">
                <div class="section-title">
                  <p>Form 4 : Access to Resources</p>
                </div>

                <ul class="faq-list" data-aos="fade-up" data-aos-delay="100">
                  <p>Resources :  Yes or No</p>
                  <li>
                    <div
                      data-bs-toggle="collapse"
                      class="collapsed question"
                      href="#faq1"
                    >
                      Water :
                    </div>
                    <div
                      data-bs-toggle="collapse"
                      class="collapsed question"
                      href="#faq1"
                    >
                      Food :
                    </div>
                    <div
                      data-bs-toggle="collapse"
                      class="collapsed question"
                      href="#faq1"
                    >
                      Clothes :
                    </div>
                    <div
                      data-bs-toggle="collapse"
                      class="collapsed question"
                      href="#faq1"
                    >
                      NFI Distributions :
                    </div>
                    <div
                      data-bs-toggle="collapse"
                      class="collapsed question"
                      href="#faq1"
                    >
                      Health Services :
                    </div>
                  </li>
                </ul>
              </div>
              <div class="container" data-aos="fade-up">
                <div class="section-title">
                  <p>
                    Form 5 : Additional Questions (Store all the responses in
                    database)
                  </p>
                </div>

                <ul class="faq-list" data-aos="fade-up" data-aos-delay="100">
                  <li>
                    <div
                      data-bs-toggle="collapse"
                      class="collapsed question"
                      href="#faq1"
                    >
                      How are food items and non-food items accessed and
                      controlled? <i class="bi bi-chevron-down icon-show"></i>
                      <i class="bi bi-chevron-up icon-close"></i>
                    </div>
                  </li>

                  <li>
                    <div
                      data-bs-toggle="collapse"
                      href="#faq2"
                      class="collapsed question"
                    >
                      What has changed since the crisis happened?{" "}
                      <i class="bi bi-chevron-down icon-show"></i>
                      <i class="bi bi-chevron-up icon-close"></i>
                    </div>
                  </li>

                  <li>
                    <div
                      data-bs-toggle="collapse"
                      href="#faq3"
                      class="collapsed question"
                    >
                      What are the primary needs?{" "}
                      <i class="bi bi-chevron-down icon-show"></i>
                      <i class="bi bi-chevron-up icon-close"></i>
                    </div>
                  </li>

                  <li>
                    <div
                      data-bs-toggle="collapse"
                      href="#faq4"
                      class="collapsed question"
                    >
                      What are the different vulnerabilities?{" "}
                      <i class="bi bi-chevron-down icon-show"></i>
                      <i class="bi bi-chevron-up icon-close"></i>
                    </div>
                  </li>

                  <li>
                    <div
                      data-bs-toggle="collapse"
                      href="#faq5"
                      class="collapsed question"
                    >
                      What are yours different skills and capacities?
                      <i class="bi bi-chevron-down icon-show"></i>
                      <i class="bi bi-chevron-up icon-close"></i>
                    </div>
                  </li>

                  <li>
                    <div
                      data-bs-toggle="collapse"
                      href="#faq6"
                      class="collapsed question"
                    >
                      What resources or support are they relying on? How can
                      CARE programme interventions best support these
                      mechanisms? <i class="bi bi-chevron-down icon-show"></i>
                      <i class="bi bi-chevron-up icon-close"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
