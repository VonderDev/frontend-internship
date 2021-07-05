import { useState, useContext, useEffect, useRef } from "react";
import * as PIXI from 'pixi.js'

  const PixiApp = ({ content }: any) => {
    let app = new PIXI.Application({ 
        width: 256, 
        height: 256,                       
        transparent: false, 
        resolution: 1
      }
    );
    const viewRef = useRef();
    const appRef = useRef();
    document.body.appendChild(app.view);
    app.renderer.view.style.position = "absolute"
    app.renderer.view.style.display = "block";  
    app.renderer.view.style.border = "1px dashed black";
    app.renderer.resize(512, 512);
    app.renderer.backgroundColor = 0x061639;
    return (
        <canvas
        // ref={viewRef}
        style={{
          width: 256,
          height: 256,
          maxWidth: 600,
          maxHeight: 100,
          zIndex: 1,
        }}
      />
    );
  };
  
  export default PixiApp;