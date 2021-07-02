import * as PIXI from 'pixi.js'


const width = 600;
const height = 400;
const options = {
  backgroundColor: 0x56789a,
  resolution: window.devicePixelRatio,
  width: width,
  height: height
};
const style = {
  width: width,
  height: height
  
};
const GameContent = ({app}: any) => {
    const container = new PIXI.Container();
    app.stage.addChild(container);
    return(
    <canvas style={style}>
     <h1>"Hello world!"</h1>
    </canvas>
    )
};

export default GameContent;