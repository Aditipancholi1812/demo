import React, { useRef,useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

const UploadImg = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const webcamRef = useRef(null);
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const intArray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }

    return new Blob([arrayBuffer], { type: mimeString });
  };
  const captureFrame = async () => {
    // Get the screenshot as a data URL (base64-encoded string)
    const screenshot = webcamRef.current.getScreenshot();
    setCapturedImage(screenshot);
    console.log(screenshot, "image captured");
    const imageBlob = dataURItoBlob(screenshot);
    const capturedFile = new File([imageBlob], "captured_image.jpg", { type: "image/jpeg" });
    console.log(capturedFile);

    try {
      // Save the captured frame on the server
      await axios.post('/api/save-screenshot', { capturedFile });
      console.log('Screenshot saved successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
    
      <Webcam
        audio={false}
        ref={webcamRef}
      />

      <button onClick={captureFrame}>Capture Frame</button>
    </div>
  );
};

export default UploadImg;


// import React, { useRef } from 'react';
// import Webcam from 'react-webcam';
// import axios from 'axios';

// const UploadImg = () => {
//   const webcamRef = useRef(null);

//   const captureFrame = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();

//     try {
//       // Save the captured frame on the server
//       await axios.post('/api/save-screenshot', { imageSrc });
//       console.log('Screenshot saved successfully!');
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       {/* Login form code */}

//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//       />

//       <button onClick={captureFrame}>Capture Frame</button>
//     </div>
//   );
// };

// export default UploadImg;
