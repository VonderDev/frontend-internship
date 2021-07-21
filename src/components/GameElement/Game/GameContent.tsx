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
import groundS3 from '../Assets/Background/bg_groundS3.png'
import bgHouseS3 from '../Assets/Background/bg_houseS3.png'
import door from '../Assets/Item/House/Door.png'
import house from '../Assets/Item/House/house.png'
import fence from '../Assets/Item/House/fenceHouse.png'
import flower from '../Assets/Item/House/Flowers.png'
import bgS4 from '../Assets/Background/bg_s4.png'
import funiture from '../Assets/Item/InHome/Furniture.png'
import sofa from '../Assets/Item/InHome/Sofa.png'
import bgS42 from '../Assets/Background/bg_s42.png'
import sofa2 from '../Assets/Item/InHome/Sofa2.png'
import bgS43 from '../Assets/Background/bg_s43.png'
import sewing from '../Assets/Item/InHome/Sewing.png'
import tools from '../Assets/Item/InHome/Tools.png'
import bigTree from '../Assets//Item/Tree/BigTree.png'
import lake from '../Assets/Background/Background_Lake.png'
import water from '../Assets/Background/Water.png'
import shadow from '../Assets/Background/Shadow.png'
import TreeFnew from '../Assets//Item/Tree/TreeF_1new.png'

const GameContent = (app: any,gameRef: any, updateRatioRef: any) => {

    const firstScene = new PIXI.Container();
    const secondScene = new PIXI.Container();
    const doorScene = new PIXI.Container();
    const homeScene = new PIXI.Container();
    const inHomeScene = new PIXI.Container();
    const inHome2Scene = new PIXI.Container();
    const inHome3Scene = new PIXI.Container();
    const jungleScene = new PIXI.Container();
    const endScene = new PIXI.Container();
    const lastScene = new PIXI.Container();
    //keep container scene in array 
  
    secondScene.visible = false;
    doorScene.visible = false;
    homeScene.visible = false;
    inHomeScene.visible = false;
    inHome2Scene.visible = false;
    inHome3Scene.visible = false;
    jungleScene.visible = false;
    endScene.visible = false;
    lastScene.visible = false;

    app.stage.addChild(firstScene);
    app.stage.addChild(secondScene);
    app.stage.addChild(homeScene);
    app.stage.addChild(doorScene);
    app.stage.addChild(inHomeScene);
    app.stage.addChild(inHome2Scene);
    app.stage.addChild(inHome3Scene);
    app.stage.addChild(jungleScene);
    app.stage.addChild(endScene);
    app.stage.addChild(lastScene);



    //Preload asset
    let sprites: any = []; 
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
            .add('groundS3',groundS3)
            .add('bgHouseS3', bgHouseS3)
            .add('door', door)
            .add('house', house)
            .add('fence', fence)
            .add('flower', flower)
            .add('bgS4', bgS4)
            .add('funiture', funiture)
            .add('sofa' , sofa)
            .add('bgS42', bgS42)
            .add('sofa2' ,sofa2)
            .add('bgS43' ,bgS43)
            .add('sewing' , sewing)
            .add('tools' , tools)
            .add('bigTree' , bigTree)
            .add('lake',lake)
            .add('water', water)
            .add('shadow', shadow)
            .add('TreeFnew', TreeFnew)
      loader.load((loader, resource) => {
      console.log("resource", resource);
        app.loader.resources = resource
        // Object.assign(sprite, resource)
        // console.log('store:' , sprite)

    });
    const showProgress = (e : any) =>{
      console.log(e.progress + '% loader')
    }
    const loadError = (e : any) =>{
      console.log('Error'+ e.message)
    }

    const doneLoading = (e : any) =>{
      console.log("Sprites", sprites);
      console.log('Done Loading! Scene1 start')
      firstScene.interactive = true;
      firstScene.buttonMode = true;
      firstScene.on('pointerdown', onClick1);
      gameScene1();

    }

    loader.onProgress.add(showProgress);
    loader.onComplete.add(doneLoading);
    loader.onError.add(loadError);

    const ticker = new PIXI.Ticker();
    const cloud1Texture = PIXI.Texture.from(cloud1);
    const cloud2Texture = PIXI.Texture.from(cloud2);
    const Cloud1 = new PIXI.Sprite(cloud1Texture);
    const Cloud2 = new PIXI.Sprite(cloud2Texture);
    // const Cloud2 = PIXI.Sprite.from(app.loader.resources.cloud2.texture);
    // const Cloud2 = PIXI.Sprite.from(app.loader.resource['cloud2'].texture);
    
    function animate() {
      if(Cloud1.x + Cloud1.width < firstScene.width){
        Cloud1.x += 0.1 * 3
      }
      if(Cloud2.x + Cloud2.width < firstScene.width){
        Cloud2.x -= 0.1 * 3
      }
    }

    function onClick1() {
      console.log("chang to Scene2")
      firstScene.visible = false;
      doorScene.visible = false;
      homeScene.visible = false;
      secondScene.visible = true;
      inHomeScene.visible = false;
      secondScene.interactive = true;
      secondScene.buttonMode = true;
      secondScene.on('pointerdown', onClick2);
      gameScene2();
    }
    function onClick2() {
      console.log("chang to Scene3")
      firstScene.visible = false;
      doorScene.visible = false;
      homeScene.visible = true;
      secondScene.visible = false;
      inHomeScene.visible = false;
      homeScene.interactive = true;
      homeScene.buttonMode = true;
      homeScene.on('pointerdown', onClick3);
      gameScene3();
    }
    function onClick3() {
      console.log("chang to doorScene")
      firstScene.visible = false;
      doorScene.visible = true;
      homeScene.visible = false;
      secondScene.visible = false;
      inHomeScene.visible = false;
      doorScene.interactive = true;
      doorScene.buttonMode = true;
      doorScene.on('pointerdown', onClick4);
      doorScene3();
    }
    function onClick4() {
      console.log("chang to inHome")
      firstScene.visible = false;
      doorScene.visible = false;
      homeScene.visible = false;
      secondScene.visible = false;
      inHomeScene.visible = true;
      inHomeScene.interactive = true;
      inHomeScene.buttonMode = true;
      inHomeScene.on('pointerdown', onClick4_2);
      homeScene4();
    }
    function onClick4_2() {
      console.log("chang to inHome 4.2")
      firstScene.visible = false;
      doorScene.visible = false;
      homeScene.visible = false;
      secondScene.visible = false;
      inHome2Scene.visible = true;
      inHomeScene.visible = false;
      inHome2Scene.interactive = true;
      inHome2Scene.buttonMode = true;
      inHome2Scene.on('pointerdown', onClick4_3);
      homeScene4_2();
    }

    function onClick4_3() {
      console.log("chang to inHome 4.3")
      firstScene.visible = false;
      doorScene.visible = false;
      homeScene.visible = false;
      secondScene.visible = false;
      inHome2Scene.visible = false;
      inHomeScene.visible = false;
      inHome3Scene.visible = true;
      inHome3Scene.interactive = true;
      inHome3Scene.buttonMode = true;
      inHome3Scene.on('pointerdown', onClick5);
      homeScene4_3();
    }
    function onClick5() {
      console.log("chang to Scene 5")
      firstScene.visible = false;
      doorScene.visible = false;
      homeScene.visible = false;
      secondScene.visible = false;
      inHome2Scene.visible = false;
      inHomeScene.visible = false;
      inHome3Scene.visible = false;
      jungleScene.visible = true;
      jungleScene.interactive = true;
      jungleScene.buttonMode = true;
      jungleScene.on('pointerdown', onClick6);
      gameScene5();
    }
    function onClick6() {
      console.log("chang to Scene 6")
      firstScene.visible = false;
      doorScene.visible = false;
      homeScene.visible = false;
      secondScene.visible = false;
      inHome2Scene.visible = false;
      inHomeScene.visible = false;
      inHome3Scene.visible = false;
      jungleScene.visible = false;
      endScene.visible = true;
      endScene.interactive = true;
      endScene.buttonMode = true;
      endScene.on('pointerdown', onClick6_1);
      gameScene6();
    }
    function onClick6_1() {
      console.log("chang to Scene End")
      firstScene.visible = false;
      doorScene.visible = false;
      homeScene.visible = false;
      secondScene.visible = false;
      inHome2Scene.visible = false;
      inHomeScene.visible = false;
      inHome3Scene.visible = false;
      jungleScene.visible = false;
      endScene.visible = false;
      lastScene.visible = true;
      gameLastScene();
    }

    function wait(duration = 0) {
      return new Promise((resolve, reject) => {
          setTimeout(resolve, duration);
      });
  }
    if(!gameRef.current) gameRef.current = {};
    console.log('GameRef:',gameRef.current)
// change Name fuction 
// do state machine
    gameRef.current.changeScene = (prop: string) =>{
      console.log('prop to pixi:',prop)
      if(prop == 'S2'){
        
        onClick1()
      }else if (prop == 'S3'){
        onClick2()
        wait(2000).then(() =>{
          onClick3();
        })
        // wait(4000).then(() =>{
        //   onClick4();
        // })
        // wait(6000).then(() =>{
        //   onClick4_2();
        // })
      }else if (prop == 'S4'){
        onClick4();
        wait(2000).then(() =>{
          onClick4_2();
        })
      }else if (prop == 'S4.2'){
        onClick4_2();
      }else if (prop == 'S4.3'){
        onClick4_3()
      }
      else if (prop == 'S5'){
        onClick5()
      }else if (prop == 'S6'){
        onClick6()
      }else if (prop == 'S6.1'){
          onClick6_1();
      }
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

      Cloud1.scale.set(0.5);
      Cloud1.position.set(10, 20);
      firstScene.addChild(Cloud1)

      Cloud2.scale.set(0.5);
      Cloud2.position.set(500, 150);
      firstScene.addChild(Cloud2)

      //Item 

      const treeb2Texture = PIXI.Texture.from(treeb2);
      const Treeb2 = new PIXI.Sprite(treeb2Texture);
      Treeb2.scale.set(0.3);
      Treeb2.position.set(150,230);
      firstScene.addChild(Treeb2)

      const treeb1Texture = PIXI.Texture.from(treeb1);
      const Treeb1 = new PIXI.Sprite(treeb1Texture);
      Treeb1.scale.set(0.5);
      Treeb1.position.set(-20,300);
      firstScene.addChild(Treeb1)

      const treef1Texture = PIXI.Texture.from(treef1);
      const Treef1 = new PIXI.Sprite(treef1Texture);
      Treef1.scale.set(0.8);
      Treef1.position.set(-300,-100);
      firstScene.addChild(Treef1)

      const bush1Texture = PIXI.Texture.from(bush1);
      const Bush1r = new PIXI.Sprite(bush1Texture);
      Bush1r.scale.set(0.4);
      Bush1r.position.set(350,480);
      firstScene.addChild(Bush1r)

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

      const Bush1 = new PIXI.Sprite(bush1Texture);
      Bush1.scale.set(0.7);
      Bush1.position.set(-100,600);
      firstScene.addChild(Bush1)

      //right

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

      ticker.add(animate);
      ticker.start();

      setTimeout(()=>{
        ticker.stop();
        // ticker.remove(animate)
        }, 30000)
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

      Cloud1.scale.set(0.5);
      Cloud1.position.set(10, 20);
      secondScene.addChild(Cloud1)

      Cloud2.scale.set(0.5);
      Cloud2.position.set(500, 150);
      secondScene.addChild(Cloud2)
      //Item 
      const treeb1Texture = PIXI.Texture.from(treeb1);
      const Treeb1 = new PIXI.Sprite(treeb1Texture);
      Treeb1.scale.set(0.4)
      Treeb1.position.set(250,400);
      secondScene.addChild(Treeb1)

      const treeb3Texture = PIXI.Texture.from(treeb3);
      const Treeb3 = new PIXI.Sprite(treeb3Texture);
      Treeb3.scale.set(0.3)
      Treeb3.position.set(160,250);
      secondScene.addChild(Treeb3)

      const treeb2Texture = PIXI.Texture.from(treeb2);
      const Treeb2 = new PIXI.Sprite(treeb2Texture);
      Treeb2.scale.set(0.4)
      Treeb2.position.set(0,300);
      secondScene.addChild(Treeb2)

      const treef1Texture = PIXI.Texture.from(treef1);
      const Treef1 = new PIXI.Sprite(treef1Texture);
      Treef1.scale.set(0.7)
      Treef1.position.set(300,80);
      secondScene.addChild(Treef1)

      const bush3Texture = PIXI.Texture.from(bush3);
      const Bush3 = new PIXI.Sprite(bush3Texture);
      Bush3.scale.set(0.3);
      Bush3.position.set(-80,600);
      secondScene.addChild(Bush3)

      const treef2Texture = PIXI.Texture.from(treef2);
      const Treef2 = new PIXI.Sprite(treef2Texture);
      Treef2.scale.set(0.9);
      Treef2.position.set(-250,-100);
      secondScene.addChild(Treef2)

      const bush4Texture = PIXI.Texture.from(bush4);
      const Bush4 = new PIXI.Sprite(bush4Texture);
      Bush4.scale.set(0.3);
      Bush4.position.set(-5,700);
      secondScene.addChild(Bush4)

      const bush2Texture = PIXI.Texture.from(bush2);
      const Bush2 = new PIXI.Sprite(bush2Texture);
      Bush2.scale.set(0.5);
      Bush2.position.set(350,550);
      secondScene.addChild(Bush2)

      const bush1Texture = PIXI.Texture.from(bush1);
      const Bush1 = new PIXI.Sprite(bush1Texture);
      Bush1.scale.set(0.6);
      Bush1.position.set(450,600);
      secondScene.addChild(Bush1)
    }
    function gameScene3 () {
      //Background 
      const skyTexture = PIXI.Texture.from(sky);
      const bgSky = new PIXI.Sprite(skyTexture);
      bgSky.scale.set(0.7);
      bgSky.anchor.set(0,0);
      homeScene.addChild(bgSky)

      const texture = PIXI.Texture.from(groundS3);
      const dirtS3 = new PIXI.Sprite(texture);
      dirtS3.scale.set(0.7);
      dirtS3.anchor.set(0,-0.5);
      homeScene.addChild(dirtS3)

      const treeTexture = PIXI.Texture.from(tree);
      const bgTree = new PIXI.Sprite(treeTexture);
      bgTree.scale.set(0.6);
      bgTree.position.set(0,100);
      homeScene.addChild(bgTree)

      Cloud1.scale.set(0.5);
      Cloud1.position.set(10, 20);
      homeScene.addChild(Cloud1)

      Cloud2.scale.set(0.5);
      Cloud2.position.set(500, 150);
      homeScene.addChild(Cloud2)

      const houseTexture = PIXI.Texture.from(house);
      const houseS3 = new PIXI.Sprite(houseTexture);
      houseS3.scale.set(0.5);
      houseS3.position.set(100,200);
      homeScene.addChild(houseS3)

      const fenceTexture = PIXI.Texture.from(fence);
      const fenceS3 = new PIXI.Sprite(fenceTexture);
      fenceS3.scale.set(0.8);
      fenceS3.position.set(50,300);
      homeScene.addChild(fenceS3)

      const treef2Texture = PIXI.Texture.from(treef2);
      const Treef2 = new PIXI.Sprite(treef2Texture);
      Treef2.scale.set(1)
      Treef2.position.set(820,-350);
      Treef2.scale.x = -1
      homeScene.addChild(Treef2)

      const bush3Texture = PIXI.Texture.from(bush3);
      const Bush3 = new PIXI.Sprite(bush3Texture);
      Bush3.scale.set(0.7);
      Bush3.position.set(300,450);
      homeScene.addChild(Bush3)

      const treenewTexture = PIXI.Texture.from(TreeFnew);
      const Treefnew = new PIXI.Sprite(treenewTexture);
      Treefnew.scale.set(0.6,1);
      Treefnew.position.set(-450,-400);
      homeScene.addChild(Treefnew)

      const bush1Texture = PIXI.Texture.from(bush1);
      const Bush1 = new PIXI.Sprite(bush1Texture);
      Bush1.scale.set(0.6);
      Bush1.position.set(-100,600);
      homeScene.addChild(Bush1)
    }
    function doorScene3 () {
            //Background 
            const bghouseTexture = PIXI.Texture.from(bgHouseS3);
            const bghouse = new PIXI.Sprite(bghouseTexture);
            bghouse.scale.set(0.7);
            bghouse.anchor.set(0,0);
            doorScene.addChild(bghouse)

            const doorTexture = PIXI.Texture.from(door);
            const doorS3 = new PIXI.Sprite(doorTexture);
            doorS3.scale.set(0.5);
            doorS3.position.set(70,100);
            doorScene.addChild(doorS3)

            const flowerTexture = PIXI.Texture.from(flower);
            const flowerS3 = new PIXI.Sprite(flowerTexture);
            flowerS3.scale.set(0.6);
            flowerS3.position.set(-100,600);
            doorScene.addChild(flowerS3)
    
            const flower2S3 = new PIXI.Sprite(flowerTexture);
            flower2S3.scale.set(0.6);
            flower2S3.position.set(450,600);
            doorScene.addChild(flower2S3)
    }
    function homeScene4 () {
      //Background 
      const bgS4Texture = PIXI.Texture.from(bgS4);
      const bgS4Home = new PIXI.Sprite(bgS4Texture);
      bgS4Home.scale.set(0.7,0.55);
      bgS4Home.position.set(-50,0);
      inHomeScene.addChild(bgS4Home)

      const funitureTexture = PIXI.Texture.from(funiture);
      const funitureS4 = new PIXI.Sprite(funitureTexture);
      funitureS4.scale.set(0.5,0.6);
      funitureS4.position.set(-150,20);
      inHomeScene.addChild(funitureS4)

      const sofaTexture = PIXI.Texture.from(sofa);
      const sofaS4 = new PIXI.Sprite(sofaTexture);
      sofaS4.scale.set(0.5,0.6);
      sofaS4.position.set(150,500);
      inHomeScene.addChild(sofaS4)
    }
    function homeScene4_2 () {
      //Background 
      const bgS42Texture = PIXI.Texture.from(bgS42);
      const bgS42Home = new PIXI.Sprite(bgS42Texture);
      bgS42Home.scale.set(0.7,0.55);
      bgS42Home.position.set(0,0);
      inHome2Scene.addChild(bgS42Home)

      const sofa2Texture = PIXI.Texture.from(sofa2);
      const sofa2S4 = new PIXI.Sprite(sofa2Texture);
      sofa2S4.scale.set(0.5,0.6);
      sofa2S4.position.set(0,0);
      inHome2Scene.addChild( sofa2S4)
    }
    function homeScene4_3 () {
      //Background 
      const bgS43Texture = PIXI.Texture.from(bgS43);
      const bgS43Home = new PIXI.Sprite(bgS43Texture);
      bgS43Home.scale.set(0.7,0.55);
      bgS43Home.position.set(0,0);
      inHome3Scene.addChild(bgS43Home)

      const sewingTexture = PIXI.Texture.from(sewing);
      const sewingS4 = new PIXI.Sprite(sewingTexture);
      sewingS4.scale.set(0.6);
      sewingS4.position.set(100,-50);
      inHome3Scene.addChild( sewingS4)

      const toolsTexture = PIXI.Texture.from(tools);
      const toolsS4 = new PIXI.Sprite(toolsTexture);
      toolsS4.scale.set(0.5,0.5);
      toolsS4.position.set(0,0);
      inHome3Scene.addChild(toolsS4)
    }
    function gameScene5 () {
           //Background 

           const skyTexture = PIXI.Texture.from(sky);
           const bgSky = new PIXI.Sprite(skyTexture);
           bgSky.scale.set(0.7);
           jungleScene.addChild(bgSky)
     
           const texture = PIXI.Texture.from(ground);
           const dirt = new PIXI.Sprite(texture);
           dirt.scale.set(0.7);
           dirt.anchor.set(0,-1);
           jungleScene.addChild(dirt)
     
           const treeTexture = PIXI.Texture.from(tree);
           const bgTree = new PIXI.Sprite(treeTexture);
           bgTree.scale.set(0.7);
           bgTree.anchor.set(0,-1);
           jungleScene.addChild(bgTree)
     
           Cloud1.scale.set(0.5);
           Cloud1.position.set(10, 20);
           jungleScene.addChild(Cloud1)
     
           Cloud2.scale.set(0.5);
           Cloud2.position.set(500, 150);
           jungleScene.addChild(Cloud2)
           //Item 
           const treeb1Texture = PIXI.Texture.from(treeb1);
           const Treeb1 = new PIXI.Sprite(treeb1Texture);
           Treeb1.scale.set(0.4)
           Treeb1.position.set(300,350);
           jungleScene.addChild(Treeb1)
     
           const treeb3Texture = PIXI.Texture.from(treeb3);
           const Treeb3 = new PIXI.Sprite(treeb3Texture);
           Treeb3.scale.set(0.3)
           Treeb3.position.set(160,250);
           jungleScene.addChild(Treeb3)
     
           const treeb2Texture = PIXI.Texture.from(treeb2);
           const Treeb2 = new PIXI.Sprite(treeb2Texture);
           Treeb2.scale.set(0.4)
           Treeb2.position.set(0,300);
           jungleScene.addChild(Treeb2)
     
           const bigTreeTexture = PIXI.Texture.from(bigTree);
           const bigTreeS5 = new PIXI.Sprite(bigTreeTexture);
           bigTreeS5.scale.set(0.7)
           bigTreeS5.position.set(300,30);
           jungleScene.addChild(bigTreeS5)
     
           const bush3Texture = PIXI.Texture.from(bush3);
           const Bush3 = new PIXI.Sprite(bush3Texture);
           Bush3.scale.set(0.3);
           Bush3.position.set(-80,600);
           jungleScene.addChild(Bush3)
     
           const treef2Texture = PIXI.Texture.from(treef2);
           const Treef2 = new PIXI.Sprite(treef2Texture);
           Treef2.scale.set(0.9);
           Treef2.position.set(-250,-100);
           jungleScene.addChild(Treef2)
     
           const bush4Texture = PIXI.Texture.from(bush4);
           const Bush4 = new PIXI.Sprite(bush4Texture);
           Bush4.scale.set(0.3);
           Bush4.position.set(-5,700);
           jungleScene.addChild(Bush4)
     
           const bush2Texture = PIXI.Texture.from(bush2);
           const Bush2 = new PIXI.Sprite(bush2Texture);
           Bush2.scale.set(0.5);
           Bush2.position.set(350,550);
           jungleScene.addChild(Bush2)
     
           const bush1Texture = PIXI.Texture.from(bush1);
           const Bush1 = new PIXI.Sprite(bush1Texture);
           Bush1.scale.set(0.6);
           Bush1.position.set(450,600);
           jungleScene.addChild(Bush1)
    }
    function gameScene6() {
             //Background 
             const skyTexture = PIXI.Texture.from(sky);
             const bgSky = new PIXI.Sprite(skyTexture);
             bgSky.scale.set(0.7);
             endScene.addChild(bgSky)
                    
             const texture = PIXI.Texture.from(ground);
             const dirt = new PIXI.Sprite(texture);
             dirt.scale.set(0.7,0.6);
             dirt.anchor.set(0,-1.5);
             endScene.addChild(dirt)

             const lakeTexture = PIXI.Texture.from(lake);
             const lakeS5 = new PIXI.Sprite(lakeTexture);
             lakeS5.scale.set(0.7);
             lakeS5.position.set(0, 130);
             endScene.addChild(lakeS5)
       
             Cloud1.scale.set(0.5);
             Cloud1.position.set(10, 20);
             endScene.addChild(Cloud1)
       
             Cloud2.scale.set(0.5);
             Cloud2.position.set(500, 150);
             endScene.addChild(Cloud2)

             const treeb2Texture = PIXI.Texture.from(treeb2);
             const Treeb2 = new PIXI.Sprite(treeb2Texture);
             Treeb2 .scale.set(0.5)
             Treeb2 .position.set(380,200);
             endScene.addChild(Treeb2 )

             const bush3Texture = PIXI.Texture.from(bush3);
             const Bush3 = new PIXI.Sprite(bush3Texture);
             Bush3.scale.set(0.6);
             Bush3.position.set(300,450);
             endScene.addChild(Bush3)

             const bush4Texture = PIXI.Texture.from(bush4);
             const Bush4 = new PIXI.Sprite(bush4Texture);
             Bush4.scale.set(0.6);
             Bush4.position.set(350,600);
             endScene.addChild(Bush4)
       
             const bush2Texture = PIXI.Texture.from(bush2);
             const Bush2 = new PIXI.Sprite(bush2Texture);
             Bush2.scale.set(0.5);
             Bush2.position.set(-40,450);
             endScene.addChild(Bush2)

             const treenewTexture = PIXI.Texture.from(TreeFnew);
             const Treefnew = new PIXI.Sprite(treenewTexture);
             Treefnew.scale.set(0.7,0.8);
             Treefnew.position.set(-380,-320);
             endScene.addChild(Treefnew)

             const bush1Texture = PIXI.Texture.from(bush1);
             const Bush1 = new PIXI.Sprite(bush1Texture);
             Bush1.scale.set(0.6);
             Bush1.position.set(-100,600);
             endScene.addChild(Bush1)
 //Item


    }
    function gameLastScene() {

      const verticesX = 5;
      const verticesY = 10;
      const waterTexture = PIXI.Texture.from(water);
      // const bgWater = new PIXI.Sprite(waterTexture);
      // bgWater.scale.set(0.7);
      // lastScene.addChild(bgWater)
      const planeWater = new PIXI.SimplePlane(waterTexture, verticesX, verticesY);
             
      const texture = PIXI.Texture.from(shadow);
      // const shadowS6 = new PIXI.Sprite(texture);
      // shadowS6.scale.set(0.5);
      // shadowS6.position.set(20,150);
      // lastScene.addChild(shadowS6 )

          // Create the simple plane

    const plane = new PIXI.SimplePlane(texture, verticesX, verticesY);

    plane.x = 20;
    plane.y = 150;
    plane.scale.set(0.5);

    planeWater.scale.set(0.7);
    lastScene.addChild(planeWater);
    lastScene.addChild(plane);

    // Get the buffer for vertice positions.
    const bufferWater = planeWater.geometry.getBuffer('aVertexPosition');
    const buffer = plane.geometry.getBuffer('aVertexPosition');

    // Listen for animate update
    app.ticker.add(() => {
        // Randomize the vertice positions a bit to create movement.
        for (let i = 0; i < buffer.data.length; i++) {
            buffer.data[i] += (Math.random() - 0.5);
        }
        buffer.update();
        for (let i = 0; i < bufferWater.data.length; i++) {
          bufferWater.data[i] += (Math.random() - 0.5);
      }
      bufferWater.update();
    });

    }
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