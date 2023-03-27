import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function feedbackPage(props) {
  return (
    <ul>
      {props.feedBackItems.map((item) => {
        return <li id={item.id}>{item.text}</li>;
      })}
    </ul>
  );
}

// Prerendering
export async function getStaticProps() {
  //   Never use fetch() to call own API in getStaticProps
}

export default feedbackPage;
