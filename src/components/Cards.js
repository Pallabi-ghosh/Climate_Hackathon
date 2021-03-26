import React, { useState } from "react";
import "./Cards.css";
import { Button } from "./Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SubmitModal from "./SubmitModal";

function Cards() {
  const [nextCard, setNextCard] = useState(false);
  const [modal, setModal] = useState(false);
  const hideModal = () => {
    setModal(false);
  };
  return (
    <div className= 'cards'>
      <ol class="faq-list" data-aos="fade-up" data-aos-delay="100">
        <h2>Instruction for the interviewer</h2>
        <li>
          <div
            data-bs-toggle="collapse"
            href="#faq2"
            className="collapsed question"
          >
            Thank the informants for participating in interview.
          </div>
        </li>

        <li>
          <div
            data-bs-toggle="collapse"
            href="#faq3"
            className="collapsed question"
          >
            Explain the objectives and expectations of the interview.
          </div>
        </li>

        <li>
          <div
            data-bs-toggle="collapse"
            href="#faq4"
            className="collapsed question"
          >
            Outline the session and the amount of time the interview will take.
          </div>
        </li>

        <li>
          <div
            data-bs-toggle="collapse"
            href="#faq5"
            className="collapsed question"
          >
            Obtain informed consent to record the interview and/or take
            pictures.
          </div>
        </li>
      </ol>
      <hr></hr>
      <div></div>
      <div className="container translate-btn" data-aos="fade-up">
        <Button
          className="btn"
          buttonStyle="btn-outline"
          buttonSize="btn--small"
        >
          Translate
        </Button>
      </div>
      <h1>Focus Group Discussion Form</h1>
      <div className="cards__container">
        <div className="cards__wrapper" >
          <ul className="cards__items">
            <section id="faq" className="faq section-bg">
              {!nextCard ? (
                <div>
                  <div className="section-title">
                    <h2>Basic information</h2>
                  </div>
                  <ul
                    className="faq-list"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <li>
                      <div className="collapsed" href="#faq1">
                        <label>Name:</label>
                        <input type="text" placeholder="Your name..." />
                      </div>
                      <div className="collapsed" href="#faq1">
                        <label>Geographic Location:</label>
                        <select name="country" id="country">
                          <option value="">Country</option>
                          <option value="dk">Denmark</option>
                          <option value="se">Sweden</option>
                          <option value="no">Norway</option>
                          <option value="fi">Finland</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                  <ul
                    className="faq-list"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <li>
                      <div className="collapsed" href="#faq1">
                        <label htmlFor="date">Interview date:</label>
                        <DatePicker
                          required
                          className="date"
                          name="deadline"
                          minDate={new Date()}
                          placeholderText="Date"
                        />
                      </div>
                      <div className="collapsed" href="#faq1">
                        <label htmlFor="place">Place of interview:</label>
                        <input
                          type="text"
                          placeholder="Place of interview..."
                        />
                      </div>
                    </li>
                  </ul>
                  <ul
                    className="faq-list"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <li>
                      <div className="collapsed" href="#faq1">
                        <label>Gender:</label>
                        <label htmlFor="male">Male</label>
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                        />
                        <label htmlFor="female">Male</label>
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                        />
                        <label htmlFor="other">Other</label>
                        <input
                          type="radio"
                          id="other"
                          name="gender"
                          value="other"
                        />
                      </div>
                      <div className="collapsed" href="#faq1">
                        <label htmlFor="age">Age:</label>
                        <input type="number" min="0" />
                      </div>
                      <div className="collapsed" href="#faq1">
                        <label>Translation necessary for the interview:</label>
                        <label htmlFor="yes">Yes</label>
                        <input
                          type="radio"
                          id="yes"
                          name="translation"
                          value="yes"
                        />
                        <label htmlFor="no">No</label>
                        <input
                          type="radio"
                          id="no"
                          name="translation"
                          value="no"
                        />
                      </div>
                    </li>
                  </ul>

                  <div className="container" data-aos="fade-up">
                    <div className="section-title">
                      <h2>Discussion Questions</h2>
                    </div>

                    <ul
                      className="faq-list"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <li>
                        <div
                          data-bs-toggle="collapse"
                          className="collapsed"
                          href="#faq1"
                        >
                          <p>
                            What are the main differences in your roles and
                            responsibilities now, compared to before the crisis?
                          </p>
                        </div>
                        <div className="input-areas">
                          <input
                            type="text"
                            // className="body-input"
                            name="answers"
                            placeholder="Your answer here..."
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="collapsed" data-aos="fade-up">
                    <div className="section-title">
                      <h2>Access to Resources</h2>
                    </div>

                    <ul
                      className="faq-list"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <li>
                        <div
                          data-bs-toggle="collapse"
                          className="collapsed"
                          href="#faq1"
                        >
                          <label>Water: </label>
                          <label type="yes">Yes</label>
                          <input
                            type="radio"
                            id="yes"
                            name="water"
                            value="yes"
                          />
                          <label type="yes" htmlFor="no">
                            No
                          </label>
                          <input
                            type="radio"
                            id="yes"
                            name="water"
                            value="no"
                          />
                        </div>
                        <div
                          data-bs-toggle="collapse"
                          className="collapsed"
                          href="#faq1"
                        >
                          <label>Food: </label>
                          <label type="yes" htmlFor="yes">
                            Yes
                          </label>
                          <input
                            type="radio"
                            id="yes"
                            name="food"
                            value="yes"
                          />
                          <label type="yes" htmlFor="no">
                            No
                          </label>
                          <input type="radio" id="yes" name="food" value="no" />
                        </div>
                        <div
                          data-bs-toggle="collapse"
                          className="collapsed"
                          href="#faq1"
                        >
                          <label>Clothes: </label>
                          <label type="yes" htmlFor="yes">
                            Yes
                          </label>
                          <input
                            type="radio"
                            id="yes"
                            name="clothes"
                            value="yes"
                          />
                          <label type="yes">No</label>
                          <input
                            type="radio"
                            id="yes"
                            name="clothes"
                            value="no"
                          />
                        </div>
                        <div
                          data-bs-toggle="collapse"
                          className="collapsed"
                          href="#faq1"
                        >
                          <label>NFI Distributions: </label>
                          <label type="yes">Yes</label>
                          <input type="radio" id="yes" name="nfi" value="yes" />
                          <label type="yes">No</label>
                          <input type="radio" id="yes" name="nfi" value="no" />
                        </div>
                        <div
                          data-bs-toggle="collapse"
                          className="collapsed"
                          href="#faq1"
                        >
                          <label>Health Services: </label>
                          <label type="yes">Yes</label>
                          <input
                            type="radio"
                            id="yes"
                            name="health"
                            value="yes"
                          />
                          <label type="yes">No</label>
                          <input
                            type="radio"
                            id="yes"
                            name="health"
                            value="no"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <button className="translate" onClick={() => setNextCard(true)}>Next page</button>
                </div>
              ) : (
                <div>
                  <div className="container" data-aos="fade-up">
                    <div className="section-title">
                      <h2>Additional Questions</h2>
                    </div>

                    <ul
                      className="faq-list"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <li>
                        <div
                          data-bs-toggle="collapse"
                          className="collapsed"
                          href="#faq1"
                        >
                          <p>
                            {" "}
                            How are food items and non-food items accessed and
                            controlled?{" "}
                          </p>
                          <div className="input-areas">
                            <input
                              type="text"
                              // className="body-input"
                              name="answers"
                              placeholder="Your answer here..."
                            />
                          </div>
                        </div>
                      </li>

                      <li>
                        <div
                          data-bs-toggle="collapse"
                          href="#faq2"
                          className="collapsed"
                        >
                          <p>
                            What has changed since the crisis happened?{" "}
                            <i className="bi bi-chevron-down icon-show"></i>
                            <i className="bi bi-chevron-up icon-close"></i>
                          </p>

                          <div className="input-areas">
                            <input
                              type="text"
                              // className="body-input"
                              name="answers"
                              placeholder="Your answer here..."
                            />
                          </div>
                        </div>
                      </li>

                      <li>
                        <div
                          data-bs-toggle="collapse"
                          href="#faq3"
                          className="collapsed"
                        >
                          <p>
                            What are the primary needs?{" "}
                            <i className="bi bi-chevron-down icon-show"></i>
                            <i className="bi bi-chevron-up icon-close"></i>
                          </p>
                          <div className="input-areas">
                            <input
                              type="text"
                              // className="body-input"
                              name="answers"
                              placeholder="Your answer here..."
                            />
                          </div>
                        </div>
                      </li>

                      <li>
                        <div
                          data-bs-toggle="collapse"
                          href="#faq4"
                          className="collapsed"
                        >
                          <p>
                            What are the different vulnerabilities?{" "}
                            <i className="bi bi-chevron-down icon-show"></i>
                            <i className="bi bi-chevron-up icon-close"></i>
                          </p>

                          <div className="input-areas">
                            <input
                              type="text"
                              // className="body-input"
                              name="answers"
                              placeholder="Your answer here..."
                            />
                          </div>
                        </div>
                      </li>

                      <li>
                        <div
                          data-bs-toggle="collapse"
                          href="#faq5"
                          className="collapsed"
                        >
                          <p>
                            What are yours different skills and capacities?
                            <i className="bi bi-chevron-down icon-show"></i>
                            <i className="bi bi-chevron-up icon-close"></i>
                          </p>
                          <div className="input-areas">
                            <input
                              type="text"
                              // className="body-input"
                              name="answers"
                              placeholder="Your answer here..."
                            />
                          </div>
                        </div>
                      </li>

                      <li>
                        <div
                          data-bs-toggle="collapse"
                          href="#faq6"
                          className="collapsed"
                        >
                          <p>
                            What resources or support are they relying on? How
                            can CARE programme interventions best support these
                            mechanisms?{" "}
                            <i className="bi bi-chevron-down icon-show"></i>
                            <i className="bi bi-chevron-up icon-close"></i>
                          </p>

                          <div className="input-areas">
                            <input
                              type="text"
                              // className="body-input"
                              name="answers"
                              placeholder="Your answer here..."
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <button className="translate" onClick={() => setNextCard(false)}>Go back</button>
                </div>
              )}
            </section>
          </ul>
          <div className="container translate-btn" data-aos="fade-up">
            <input
              type="submit"
              value="Submit"
              disabled={!nextCard}
              onClick={() => setModal(true)}
            />
            {modal ? <SubmitModal hideModal={hideModal} /> : <div></div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
