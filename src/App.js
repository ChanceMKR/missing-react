import React, {useState} from 'react';

function App() {
  const [fileImage, setFileImage] = useState();
  const saveFileImage = (event)=>{
    setFileImage(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <>
      <div>
        <h2>Missing</h2>
        <form onSubmit={event=>{
          event.preventDefault();
          window.location.href = "http://192.168.1.102:2000"
        }}>
          <img src={fileImage} width="216" height="288"/>
          <p><input id="image" type="file" accept='image/*' onChange={saveFileImage}/></p>
          <p><input type="submit"/></p>
        </form>
      </div>
    </>
  );
}

export default App;