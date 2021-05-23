import { useParams, useHistory } from "react-router-dom";
import CommentForm from "./CommentForm";
import "./Video.css";

const Video = (props) => {
//   const [inputName, setInputName] = useState("");
//   const [input, setInput] = useState([])
  const { id } = useParams();
  const history = useHistory();

//   const handleChange = (e)=> {
//     setInputName(e.target.value)
//   }

// const handleSubmit = (e) => {
//     e.preventDefault()
// }


  const goBack = () => {
    history.goBack();
  };
  const videoSrc = `https://www.youtube.com/embed/${id}`;
  debugger;
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
