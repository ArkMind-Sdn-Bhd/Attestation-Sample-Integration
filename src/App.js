import './App.css';
import {useState} from "react";

function App() {

    const [showIFrame, setShowIFrame] = useState(false);
    const [iframeSrc, setIframeSrc] = useState(null);

  return (
    <>
        {
            showIFrame ? (
                <div style={{ textAlign: 'center' }}>
                    <iframe src={iframeSrc} width={"80%"} height={"800vh"} allow="camera;fullscreen;accelerometer;gyroscope;magnetometer" allowFullScreen/>
                </div>
            ) : (
                <>
                    <h3>iFrame Link</h3>
                    <input type={"text"} onChange={(e) => setIframeSrc(e.target.value)} onPaste={(e) => setIframeSrc(e.target.value)} />
                    <button onClick={() => setShowIFrame(true)}>Proceed</button>
                </>
            )
        }
    </>
  );
}

export default App;
