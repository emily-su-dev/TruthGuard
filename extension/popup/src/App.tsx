import React from "react";

function App() {
  const runContentScript = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs[0]?.id) {
        console.error("No active tab found.");
        return;
      }

      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          if (!(window as any).__misinfo_detector_loaded) {
            (window as any).__misinfo_detector_loaded = true;
            console.log("Running content script!");

            document.querySelectorAll("p").forEach((p) => {
              p.style.backgroundColor = "yellow";
            });
          }
        },
      }).catch(err => console.error("Error executing script:", err));
    });
  };

  return (
    <div>
      <h2>Misinfo Detector</h2>
      <button onClick={runContentScript}>Scan Page</button>
    </div>
  );
}

export default App;
