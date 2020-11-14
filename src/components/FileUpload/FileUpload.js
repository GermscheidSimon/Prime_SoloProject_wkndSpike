import React, { Component } from 'react'
import Axios from 'axios'

class FileUpload extends Component{

    state = {
        file: undefined
    }

    componentDidMount = () => {
        Axios({
            method: 'GET',
            url: '/song'
              }).then( (response) => {
            console.log(response);
        }).catch( (error) => {
            console.log(error);
        })
    }
    handleUpload = () => {

        const formData = new FormData(); 
        // Update the formData object 
        formData.append( 
          "file", 
          this.state.file
        ); 

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
          }
        Axios({
            method: 'POST',
            url: '/song/upload',
            data: formData,
            config: config
        })
        .then( (response) => {
            console.log(response);

        }).catch( (error) => {
            console.log(error);
        })
    }
    handleChange = (event) => {
        console.log(event.target);
        
        this.setState({
            file: event.target.files[0]
        })
    }
    logState = () => {
        console.log(this.state);
    }
    logEvent = (event) => {
        console.log(event.target);
    }

    render() {
        return(
            <p>Upload a File::   <input name="newSong" onChange={this.handleChange} type="file"></input> <button onClick={this.handleUpload}>submit</button> <button onClick={this.logEvent}>check if file is stored in state</button></p>
        )
    }
}
export default FileUpload;