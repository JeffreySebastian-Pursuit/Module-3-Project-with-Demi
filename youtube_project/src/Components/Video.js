import { useParams, useHistory } from "react-router-dom";
import "./Video.css";

const Video = (props) => {
  const { id } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  const videoSrc = `https://www.youtube.com/embed/${id}`;
  debugger;
  return (
    <div>
      <iframe src={videoSrc} title="Video" allowFullScreen />
      <br></br>
      <button onClick={goBack} className="videoButton">Back</button>
    </div>
  );
};

export default Video;
