import * as React from 'react';
import './styles.css';

export class ImageUpload extends React.Component {  
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      hasImage: false,
      imageUrl: null,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.dragArea.ondragenter = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.setState({
          isActive: true,
        });
      }
  
      this.dragArea.ondragleave = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.setState({
          isActive: false,
        });
      }
  
      this.dragArea.ondragover = (e) => {
        e.stopPropagation();
        e.preventDefault();
      }
  
      this.dragArea.ondrop = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.uploadAndPreviewImage(e);
      }
    }, 0);
  }

  uploadAndPreviewImage(e) {
    if (this.state.hasImage) {
      window.URL.revokeObjectURL(this.state.imgUrl);      
    }
    const rawImage = e.dataTransfer.files[0];
    const imageUrl = window.URL.createObjectURL(rawImage);
    this.setState({
      hasImage: true,
      imageUrl: imageUrl,
    });
  }
  
  render() {
    return (
      <div
        id="image-upload"
        className="image-drag-and-drop"
        ref={ (area) => { this.dragArea = area; } }
        style={ this.state.imageUrl && { 'backgroundImage': `url(${ this.state.imageUrl })` }}
        data-imageurl={ this.state.imageUrl }
      >
        { !this.state.hasImage && (this.state.isActive ? "Drop image" : "Drag image here") }
      </div>
    );
  }
}