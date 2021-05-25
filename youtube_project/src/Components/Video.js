import { useParams, useHistory } from "react-router-dom";
import CommentForm from "./CommentForm";
import "./Video.css";

const Video = (props) => {
  const { id } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
    
  };
  const videoSrc = `https://www.youtube.com/embed/${id}`;
  return (
    <div>
      <iframe src={videoSrc} title="Video" allowFullScreen />
      <br></br>
      <h3>Comment Form</h3>
      <CommentForm />
      <button onClick={goBack} className="videoButton">
        Back
      </button>
    </div>
  );
};

export default Video;
