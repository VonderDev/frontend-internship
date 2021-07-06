import { createContext, useContext, useEffect, useRef, useState } from "react";
// import UpdateRatio from "./UpdateRatio";

const AppContext = createContext<any>(null);

const useWindowSize = (scene: any) => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
    maxWidth: 0,
    maxHeight: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        maxWidth: window.innerWidth,
        maxHeight: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [scene]);

  return windowSize;
}

function AppProvider({ children }: any) {
  const gameRef = useRef({});
//   const audioRef = useRef(new AppAudio());
//   const updateRatioRef = useRef(new UpdateRatio());
  const size = useWindowSize({});
  const [width, setWidth] = useState<number|null>(size.width);
  const [height, setHeight] = useState<number|null>(size.height);

  const [maxWidth, setMaxWidth] = useState<number|null>(size.maxWidth);
  const [maxHeight, setMaxHeight] = useState<number|null>(size.maxHeight);

  useEffect(() => {
    if (size) {
      setWidth(size.width);
      setHeight(size.height);
      setMaxWidth(size.maxWidth);
      setMaxHeight(size.maxHeight);
    }
  }, [size]);

  return (
    <AppContext.Provider
      value={{
        gameRef,
        // audioRef,
        // updateRatioRef,
        width,
        height,
        maxWidth,
        maxHeight,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("Error AppContext undefined");
  }
  return context;
};

export { AppContext, AppProvider, useAppContext };