import * as PIXI from 'pixi.js'
import ground from '../Assets/Background/bg_ground.png'
import sky from '../Assets/Background/bg_sky.png'
import tree from '../Assets/Background/bg_trees.png'
import bush1 from '../Assets/Item/Bush/Bush_1.png'
import bush2 from '../Assets/Item/Bush/Bush_2.png'
import bush3 from '../Assets/Item/Bush/Bush_3.png'
import bush4 from '../Assets/Item/Bush/Bush_4.png'
import treef1 from '../Assets/Item/Tree/TreeF_1.png'
import treef2 from '../Assets/Item/Tree/TreeF_2.png'
import treeb1 from '../Assets/Item/Tree/TreeB_1.png'
import treeb2 from '../Assets/Item/Tree/TreeB_2.png'
import treeb3 from '../Assets/Item/Tree/TreeB_3.png'
import cloud1 from '../Assets/Item/Cloud/Cloud_1.png'
import cloud2 from '../Assets/Item/Cloud/Cloud_2.png'
import cloud3 from '../Assets/Item/Cloud/Cloud_3.png'

const GameContent = (app: any,gameRef: any, updateRatioRef: any) => {

    const firstScene = new PIXI.Container();
    const secondScene = new PIXI.Container();
    const doorSecene = new PIXI.Container();
    const homeSecene = new PIXI.Container();
  
    secondScene.visible = false;
    doorSecene.visible = false;
    homeSecene.visible = false;
  
    app.stage.addChild(firstScene);
    app.stage.addChild(secondScene);
    app.stage.addChild(doorSecene);

    //Preload asset
    window.onload = function(){

      const loader = new PIXI.Loader();
      loader.add("ground", ground)
            .add("sky", sky)
            .add("tree", tree)
            .add("bush1", bush1)
            .add("bush2", bush2)
            .add("bush3", bush3)
            .add("bush4", bush4)
            .add("treef1", treef1)
            .add("treef2", treef2)
            .add("treeb1", treeb1)
            .add("treeb2", treeb2)
            .add("treeb3", treeb3)
            .add("cloud1", cloud1)
            .add("cloud2", cloud2)
            .add("cloud3", cloud3)
      loader.onProgress.add(showProgress);
      loader.onComplete.add(doneLoading);
      loader.onError.add(loadError);
      loader.load((loader, resource) => {
      console.log("resource", resource);
    });
    }
    const showProgress = (e : any) =>{
      console.log(e.progress)
    }
    const loadError = (e : any) =>{
      console.log('Error'+ e.message)
    }

    const doneLoading = (e : any) =>{
      console.log('Done Loading! Scene1 start')
      firstScene.interactive = true;
      firstScene.buttonMode = true;
      firstScene.on('pointerdown', onClick1);
      gameScene1();

    }

    function onClick1() {
      console.log("chang to Scene2")
      firstScene.visible = false;
      doorSecene.visible = false;
      homeSecene.visible = false;
      secondScene.visible = true;
      secondScene.interactive = true;
      secondScene.buttonMode = true;
      secondScene.on('pointerdown', onClick2);
      gameScene2();
    }
    function onClick2() {
      console.log("chang to Scene3")
    }

    function gameScene1() {
      //Background 
      const skyTexture = PIXI.Texture.from(sky);
      const bgSky = new PIXI.Sprite(skyTexture);
      bgSky.scale.set(0.7);
      firstScene.addChild(bgSky)

      const texture = PIXI.Texture.from(ground);
      const dirt = new PIXI.Sprite(texture);
      dirt.scale.set(0.7);
      dirt.anchor.set(0,-1);
      firstScene.addChild(dirt)

      const treeTexture = PIXI.Texture.from(tree);
      const bgTree = new PIXI.Sprite(treeTexture);
      bgTree.scale.set(0.7);
      bgTree.anchor.set(0,-1);
      firstScene.addChild(bgTree)

      const cloud1Texture = PIXI.Texture.from(cloud1);
      const Cloud1 = new PIXI.Sprite(cloud1Texture );
      Cloud1.scale.set(0.5);
      Cloud1.position.set(250, 100);
      firstScene.addChild(Cloud1)

      const cloud2Texture = PIXI.Texture.from(cloud2);
      const Cloud2 = new PIXI.Sprite(cloud2Texture );
      Cloud2.scale.set(0.5);
      Cloud2.position.set(250, 100);
      firstScene.addChild(Cloud2)

      //Item 
      const treef1Texture = PIXI.Texture.from(treef1);
      const Treef1 = new PIXI.Sprite(treef1Texture);
      Treef1.scale.set(0.8);
      Treef1.position.set(-300,-100);
      firstScene.addChild(Treef1)

      const treef2Texture = PIXI.Texture.from(treef2);
      const Treef2 = new PIXI.Sprite(treef2Texture);
      Treef2.scale.set(0.7)
      Treef2.position.set(850,0);
      Treef2.scale.x = -1
      firstScene.addChild(Treef2)


      //left
      const bush2Texture = PIXI.Texture.from(bush2);
      const Bush2 = new PIXI.Sprite(bush2Texture);
      Bush2.scale.set(0.4);
      Bush2.position.set(-50,500);
      firstScene.addChild(Bush2)

      const bush1Texture = PIXI.Texture.from(bush1);
      const Bush1 = new PIXI.Sprite(bush1Texture);
      Bush1.scale.set(0.7);
      Bush1.position.set(-100,600);
      firstScene.addChild(Bush1)

      //right
      const Bush1r = new PIXI.Sprite(bush1Texture);
      Bush1r.scale.set(0.3);
      Bush1r.position.set(350,500);
      firstScene.addChild(Bush1r)

      const bush3Texture = PIXI.Texture.from(bush3);
      const Bush3 = new PIXI.Sprite(bush3Texture);
      Bush3.scale.set(0.4);
      Bush3.position.set(350,550);
      firstScene.addChild(Bush3)

      const bush4Texture = PIXI.Texture.from(bush4);
      const Bush4 = new PIXI.Sprite(bush4Texture);
      Bush4.scale.set(0.4);
      Bush4.position.set(450,620);
      firstScene.addChild(Bush4)
    }

    function gameScene2 () {
      //Background 
      const skyTexture = PIXI.Texture.from(sky);
      const bgSky = new PIXI.Sprite(skyTexture);
      bgSky.scale.set(0.7);
      secondScene.addChild(bgSky)

      const texture = PIXI.Texture.from(ground);
      const dirt = new PIXI.Sprite(texture);
      dirt.scale.set(0.7);
      dirt.anchor.set(0,-1);
      secondScene.addChild(dirt)

      const treeTexture = PIXI.Texture.from(tree);
      const bgTree = new PIXI.Sprite(treeTexture);
      bgTree.scale.set(0.7);
      bgTree.anchor.set(0,-1);
      secondScene.addChild(bgTree)

      //Item 
      const treef1Texture = PIXI.Texture.from(treef1);
      const Treef1 = new PIXI.Sprite(treef1Texture);
      Treef1.scale.set(0.8);
      Treef1.position.set(-300,-100);
      secondScene.addChild(Treef1)

      const treef2Texture = PIXI.Texture.from(treef2);
      const Treef2 = new PIXI.Sprite(treef2Texture);
      Treef2.scale.set(0.8)
      Treef2.position.set(700,-200);
      Treef2.scale.x = -1
      secondScene.addChild(Treef2)

      const bush2Texture = PIXI.Texture.from(bush2);
      const Bush2 = new PIXI.Sprite(bush2Texture);
      Bush2.scale.set(0.4);
      Bush2.position.set(-50,500);
      secondScene.addChild(Bush2)

      const bush1Texture = PIXI.Texture.from(bush1);
      const Bush1 = new PIXI.Sprite(bush1Texture);
      Bush1.scale.set(0.7);
      Bush1.position.set(-100,600);
      secondScene.addChild(Bush1)
    }

    // const onMainResize = (width:number , height:number) => {
    //   // TODO: resize game container at here
    //   container.position.set(width / 2, height / 2);
    // };
    // updateRatioRef.current.add(onMainResize);
    // const onRelease = () => {
    //   updateRatioRef.current.remove(onMainResize);
    //   console.warn("pixi released");
    // };


    const onRelease = () => { console.log('Nothing') }
    console.log("container", firstScene);
    return [app , onRelease]
};

export default GameContent;