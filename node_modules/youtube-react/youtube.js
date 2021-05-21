import React, {Component} from 'react';

export default class YouTube extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videoSrc: "http://www.youtube.com/embed/" + this.props.video + "?autoplay=" + this.props.autoplay
        };
    }

    render() {
        return (
            <div className="container">
                <iframe type="text/html" width={this.props.width} height={this.props.height} src={this.state.videoSrc} frameborder="0"/>
            </div>
        );
    }
}
