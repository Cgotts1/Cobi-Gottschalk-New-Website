import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useRef from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef;

  function stopFOUC(event) {
    var i = 0;
    var txt = "Thank you! Your form was submitted.";
    var speed = 50;

    function typeWriter() {
      if (i < txt.length) {
        document.querySelector(".submit-btn").value += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    event.preventDefault();
    let passedValidation = true;

    const formInputs = document.querySelectorAll("input");
    formInputs.forEach((formInput) => {
      if (formInput.value.length === 0) passedValidation = false;
    });

    if (
      !new RegExp("[A-Za-z0-9.]+@[A-Za-z0-9.]+.[A-Za-z0-9.]{1,10}").test(
        document.getElementById("email").value
      )
    ) {
      passedValidation = false;
    }

    if (document.querySelector("textarea").value.length === 0) {
      passedValidation = false;
    }

    if (passedValidation) {
      // Clear all fields

      emailjs
        .sendForm(
          "service_aejadxf",
          "template_fonglvd",
          form.current,
          "3yYZVuNYPo1KCexYf"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      formInputs.forEach((formInput) => {
        formInput.value = "";
      });
      document.querySelector("textarea").value = "";
      typeWriter();
    } else {
      alert("All fields are required!");
    }
  }

  return (
    <div class="contact-container fadeIn">
      <div className="contact-me-container">
        <h1>Contact Me</h1>
      </div>

      <div className="my-email-container">
        <h2 className="my-email">
          My Email:{" "}
          <a class="email-link" href="mailto: gottschalk.cobi@gmail.com">
            gottschalk.cobi@gmail.com
          </a>
        </h2>
      </div>


      <div className="contact-page">
          <Form ref={form} onSubmit={(event) => stopFOUC(event)}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label> <br></br>
              <Form.Control
                type="text"
                placeholder="John Smith"
                name="from_name"
                id="from_name"
              />
              <br></br>
              <Form.Label>Email address</Form.Label> <br></br>
              <Form.Control
                id="email"
                type="email"
                placeholder="name@example.com"
                pattern="[A-Za-z0-9\.]+@[A-Za-z0-9\.]+\.[A-Za-z0-9\.]{1,10}"
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label> <br></br>
              <Form.Control name="message" as="textarea" rows={5} />
            </Form.Group>
            <Button
              className="submit-btn"
              as="input"
              type="submit"
              value="Send"
            />
          </Form>
      </div>
    </div>
  );
}
