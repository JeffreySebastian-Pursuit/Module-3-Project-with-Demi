

const Video = ({showVideo}) => {

    const videoSrc = `https://www.youtube.com/embed/${showVideo}`;
    return(
        <div>

        <iframe scr={videoSrc} title="Video" />
        </div>
    )
}


export default Video