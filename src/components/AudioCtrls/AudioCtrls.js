import React, { Component, createRef } from 'react'

class AudioCtrls extends Component {

    state = {
        song: './localStore/flylikeeagle.mp3',
        audio: createRef(),
        /**
        https://reactjs.org/docs/refs-and-the-dom.html
        */
        info: 0
    }
    handlePlay = () => {
        if(this.state.audio.current){ // if a current reference exists, allow play() to be invoked on <audio>
            this.state.audio.current.play()
        }
    }
    handlePause = () => {
        if(this.state.audio.current){ // if a current reference exists, allow play() to be invoked on <audio>
            this.state.audio.current.pause()
        }
    }
    handleCurrentTime = () => {
        if(this.state.audio.current.currentTime){
            console.log('current time =', this.state.audio.current.currentTime);
            return this.state.audio.current.currentTime
        } else {
            return 0;
        }
    }
    setCurrentTime = () => {
        this.setState({
            info: this.handleCurrentTime()
        })
        console.log(this.state.info);
        
    }
    playNext = () => {
        this.setState({
            song: './localStore/pinkFloydTime.mp3'
        })
        this.handlePause()
        this.state.audio.current.load()
        this.handlePlay()
    }
   
   
    render(){

        return(
            <div>
                <p> Lessons learned on 'audio' tag</p>
                    <ul>
                        <li>the audio tag is an HTML5 tag that is actually quite flexible for media audio playback</li>
                        <li><a href="https://www.w3schools.com/tags/tag_audio.asp">W3Schools audio tag</a></li>
                        <li><button onClick={this.handlePlay}>Play Audio</button></li>
                            <li> element.play()</li>
                        <li><button onClick={this.handlePause}>Pause Audio</button></li>
                            <li> element.pause()</li>
                        <li><button onClick={this.setCurrentTime}>Get current position in song</button></li>
                            <li>{this.state.info} setting state === element.currentTime</li>
                        <li><button onClick={this.playNext}>Next track</button></li>
                            <li>audio src = this.state song. set state to new song, then pause, load, play</li>
                    </ul>
                <audio ref={this.state.audio}>
                    <source src={this.state.song} type="audio/mp3"/>
                    Your browser does not support the audio tag.
                </audio>
                
            </div>
            
        )
    }
}

export default AudioCtrls;
