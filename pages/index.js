import { useRef } from "react";

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const requestBody = { email: enteredEmail, text: enteredFeedback };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json().then((data) => console.log(data))); // {email: string, text: string};
  }

  function loadFeedbackHandler() {}

  return (
    <div>
      <h1>The Home Page</h1>
      <form action="" onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send feedback</button>
      </form>
      {/* Horizontal line */}
      <hr />
      <button>Leave Feedback</button>
    </div>
  );
}

export default HomePage;
