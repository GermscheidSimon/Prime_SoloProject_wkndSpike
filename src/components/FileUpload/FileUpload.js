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

        const headers = {
            headers: { 'content-type': 'multipart/form-data' }
          }
        Axios({
            method: 'POST',
            url: '/song/upload',
            data: formData,
            config: headers
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
            file: event.target.files[0] // files from a form is an array. multiple files can be attached easily for transport
        })
    }
    logState = () => {
        console.log(this.state);
    }
   

    render() {
        return(
            <p>Upload a File::   
                <input name="newSong" onChange={this.handleChange} type="file"></input> 
                <button onClick={this.handleUpload}>submit</button>
            </p>
        )
    }
}
export default FileUpload;