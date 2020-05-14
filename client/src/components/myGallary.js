// import ImageGallery from "react-image-gallery";
import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class MyGallery extends Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow className="mb-4">
          {images.map((lst) => (
            <MDBCol md="4 mb-4">
              <img src={lst.original} className="img-fluid" alt="" />
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MyGallery;

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://mdbootstrap.com/img/Others/documentation/1.jpg",
  },
];

// class MyGallery extends React.Component {
//   render() {
//     return (
//       <div>
//         <ImageGallery items={images} />
//       </div>
//     );
//   }
// }
// export default MyGallery;
