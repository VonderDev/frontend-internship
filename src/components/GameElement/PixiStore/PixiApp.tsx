import { useState, useContext, useEffect, useRef } from "react";
import * as PIXI from 'pixi.js'
import { AppContext } from "./AppContext";
import { PixiContext } from "./PixiContext";

const createPixiApp = (view:any, options:any) => {
  PIXI.utils.skipHello();
  const newOptions = { ...options, view };
  let app = new PIXI.Application(newOptions);
  return app;
};

  const PixiApp = ({ content }: any) => {
    const {
      width,
      height,
      maxWidth,
      maxHeight,
      gameRef,
    } = useContext(AppContext);
    const pixiContext = useContext(PixiContext);
    const { resolution } = pixiContext;
    const viewRef = useRef<any>();
    const appRef = useRef<any>();
    const [initialOption] = useState({
      ...pixiContext,
      width,
      height,
    });
    const [isCurrent] = useState(appRef.current)
  
    useEffect(() => {
      if (appRef.current) {
        console.error(
          "PIXI Application will be reset if context is changed. Please don't change context!"
        );
      } else {
        const [app, onRelease] = content(
          createPixiApp(viewRef.current, initialOption),
          gameRef
        );
        appRef.current = app;
        return () => {
          onRelease();
        };
      }
    }, [ content, gameRef, initialOption]);
  
    useEffect(() => {
      if(appRef.current){
        appRef.current.renderer.resolution = resolution;
      }
    }, [resolution]);
  
    useEffect(() => {
      if(appRef.current){
        appRef.current.renderer.resize(width, height);
      }
    }, [width, height]);

    return (
        <canvas
        ref={viewRef}
        style={{
          width: width,
          height: height,
          maxWidth: maxWidth,
          maxHeight: maxHeight,
          zIndex: 1,
        }}
      />
    );
  };
  
  export default PixiApp;