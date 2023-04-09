import { Fragment, useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function feedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();
  function loadFeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  }
  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => {
          return (
            <li id={item.id}>
              {item.text}
              <button onClick={loadFeedbackHandler.bind(null, item.id)}>
                Show details
              </button>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

// Prerendering
export async function getStaticProps() {
  //   Never use fetch() to call own API in getStaticProps
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default feedbackPage;
