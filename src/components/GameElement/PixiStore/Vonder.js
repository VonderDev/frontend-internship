import * as PIXI from "pixi.js";
import PIXISpine from "Plugins/pixi-spine";
import VonderParticle from "Game/PixiCores/Particles/Vonder/VonderParticle.js";
import trail from "Game/Assets/trail.png";
import utils from "Service/UtilsCalculate";
import { Tween, Tweener } from "Classes/Tween";

let character = {
  controller: {},
  scale: 0.1,
  sequence: {
    idle: [{ name: "Idle", loop: true }],
    move: [{ name: "Move", loop: true }],
    charge: [
      { name: "Charging", loop: false },
      { name: "ChargingLoop", loop: true, delay: 0 },
    ],
    attack: [
      { name: "Attack", loop: false },
      { name: "Idle", loop: true, delay: 0 },
    ],
    attackOnce: [
      { name: "Charging", loop: false },
      { name: "Attack", loop: false, delay: 0 },
      { name: "Idle", loop: true, delay: 0 },
    ],
    hit: [
      { name: "Hit", loop: false },
      { name: "Idle", loop: true, delay: 0 },
    ],
    win: [{ name: "Win", loop: true }],
    lose: [{ name: "Lose", loop: false }],
  },
  event: {
    Attack: () => {
      // character.controller.setParticleActive(false);
      // console.log("character.controller.name", character.controller.name);
      // console.log(
      //   "character.controller.targetPosition",
      //   character.controller.targetPosition
      // );
      // console.log("character.targetPosition", character.targetPosition);
      // // character.controller.setFiredBulletTo();
      // character.controller.setFiredBulletTo(
      //   character.controller.targetPosition
      // );
      // character.controller.setFiredBulletTo(
      //   character.controller.targetPosition
      // );
    },
    Charge: () => {
      // character.controller.setParticleActive(true);
    },
    ChargeLoop: () => {
      // character.controller.setParticleActive(true);
    },
  },
  eventListener: {
    event: (entry, { data }) => {
      const { name } = data;
      character.event[name]?.();
    },
  },

  playSequence: (spine, sequenceData) => {
    if (!sequenceData || sequenceData.length === 0) return;
    spine.state.setAnimation(0, sequenceData[0].name, sequenceData[0].loop);
    for (let i = 1; i < sequenceData.length; i++)
      spine.state.addAnimation(
        0,
        sequenceData[i].name,
        sequenceData[i].loop,
        sequenceData[i].delay
      );
  },
  initial: async (app, path) => {
    return new Promise((resolve, reject) => {
      const preload = new PIXI.Loader();
      preload.add("character_VND_001", path);
      preload.load(async (loader, resources) => {
        // console.log("resources", resources);
        if (app.loader.resources) {
          app.loader.resources.character_VND_001 = resources;
        }
        // console.log("app", app);
      });
      preload.onComplete.add(async () => {
        await VonderParticle.initial(app);
        resolve("load Vonder complete");
      });
      preload.onError.add((e) => {
        reject(e);
      });
    });
  },
  create: async (app, audioRef, path, preload) => {
    console.log("preload", preload);
    return new Promise((resolve, reject) => {
      // console.log("path", path);
      let promises = [
        new Promise((resolve, reject) => {
          // const preload = new PIXI.Loader();
          // let preload = loader;
          // console.log("preload", preload);

          if (!preload.resources.character_VND_001) {
            preload.add(
              "character_VND_001",
              // process.env.REACT_APP_API_URL_GO_CHARACTER + "/VND-001/VND-001.json"
              path
            );
          }

          preload.load(async (loader, resources) => {
            console.log("resources from app loader", resources);
            let spineData =
              resources["character_VND_001"].character_VND_001.spineData;
            if (spineData) {
              let spine = new PIXISpine.Spine(spineData);
              spine.scale.set(character.scale);
              spine.state.addListener(character.eventListener);
              let container = new PIXI.Container();
              let containerParticle = new PIXI.Container();
              let containerBullet = new PIXI.Container();
              let containerTrail = new PIXI.Container();
              let emitterController;

              container.addChild(spine);
              container.addChild(containerParticle);
              container.addChild(containerBullet);
              container.addChild(containerTrail);

              // containerBullet.addChild(containerTrail);

              containerParticle.visible = false;

              await VonderParticle.load(
                app,
                containerParticle,
                containerBullet,
                loader
              ).then((particle) => {
                emitterController = particle;
              });
              const controller = {
                spine,
                container,
                containerParticle,
                containerBullet,
                emitterController,
                targetPosition: {
                  x: 0,
                  y: 0,
                },
                moveSpeed: 100,
                isMoving: false,
                setActive: (isActive) => {
                  container.visible = isActive;
                },
                setTargetPosition: (x, y) => {
                  character.targetPosition = {
                    x: x,
                    y: y,
                  };
                  character.controller.targetPosition = {
                    x: x,
                    y: y,
                  };
                },
                setParticleActive: (isActive) => {
                  containerParticle.visible = isActive;
                  new Tweener(app.ticker)
                    .insert(
                      0.0,
                      new Tween(3, (pos, dt) => {
                        emitterController.outerPortal.emitter.emit = true;
                        emitterController.innerPortal.emitter.emit = true;
                        emitterController.acorn.emitter.emit = true;
                        emitterController.outerPortal.emitter.update(dt);
                        emitterController.innerPortal.emitter.update(dt);
                        emitterController.acorn.emitter.update(dt);
                      })
                    )
                    .play();
                },
                charging: () => {
                  containerParticle.visible = true;
                  emitterController.outerPortal.emitter.cleanup();
                  emitterController.innerPortal.emitter.cleanup();
                  emitterController.acorn.emitter.cleanup();
                  emitterController.outerPortalLoop.emitter.cleanup();
                  emitterController.innerPortalLoop.emitter.cleanup();
                  emitterController.acornLoop.emitter.cleanup();
                  console.log("charge!!!!");
                  new Tweener(app.ticker)
                    .insert(
                      0.0,
                      new Tween(60, (pos, dt) => {
                        if (pos > 0.03) {
                          emitterController.outerPortalLoop.emitter.update(dt);
                          emitterController.innerPortalLoop.emitter.update(dt);
                          emitterController.acornLoop.emitter.update(dt);
                        }

                        emitterController.outerPortal.emitter.update(dt);
                        emitterController.innerPortal.emitter.update(dt);
                        emitterController.acorn.emitter.update(dt);
                      })
                    )
                    .play();
                },
                setFiredBulletTo: async (targetPosition) => {
                  emitterController.outerPortal.emitter.cleanup();
                  emitterController.innerPortal.emitter.cleanup();
                  emitterController.acorn.emitter.cleanup();
                  // emitterController.outerPortalLoop.emitter.cleanup();
                  // emitterController.innerPortalLoop.emitter.cleanup();
                  // emitterController.acornLoop.emitter.cleanup();
                  containerBullet.position.set(0, 0);
                  containerTrail.position.set(0, 0);
                  const trailTexture = PIXI.Texture.from(trail);
                  const historyX = [];
                  const historyY = [];
                  const historySize = 20;
                  const ropeSize = 20;
                  const points = [];

                  for (let i = 0; i < historySize; i++) {
                    historyX.push(containerBullet.position.x);
                    historyY.push(containerBullet.position.y);
                  }

                  for (let i = 0; i < ropeSize; i++) {
                    points.push(new PIXI.Point(0, 0));
                  }

                  const rope = new PIXI.SimpleRope(trailTexture, points);
                  rope.blendmode = PIXI.BLEND_MODES.ADD;
                  containerTrail.position.set(containerBullet.position.x, -160);
                  containerTrail.addChild(rope);

                  new Tweener(app.ticker)
                    .insert(
                      0,
                      new Tween(0.5, (pos, dt) => {
                        if (pos === 0) {
                          audioRef.current._group["VND-001"]._list[0].play(
                            "attack"
                          );
                        }
                        if (pos === 1) {
                          audioRef.current._group["VND-001"]._list[0].play(
                            "hitTarget"
                          );
                          if (containerBullet.visible)
                            containerBullet.visible = false;
                          containerBullet.position.set(0, 0);
                          containerTrail.position.set(0, 0);
                          containerTrail.removeChildren();
                          containerParticle.visible = false;
                          emitterController.outerPortal.emitter.cleanup();
                          emitterController.innerPortal.emitter.cleanup();
                          emitterController.acorn.emitter.cleanup();
                          emitterController.outerPortalLoop.emitter.cleanup();
                          emitterController.innerPortalLoop.emitter.cleanup();
                          emitterController.acornLoop.emitter.cleanup();
                        } else {
                          containerBullet.position.x = pos * targetPosition.x;
                          containerBullet.position.y = pos * 80;
                          emitterController.acornBullet.emitter.update(dt);
                          if (!containerBullet.visible)
                            containerBullet.visible = true;
                          historyX.pop();
                          historyX.unshift(containerBullet.position.x);
                          historyY.pop();
                          historyY.unshift(containerBullet.position.y);
                          for (let i = 0; i < ropeSize; i++) {
                            const p = points[i];
                            const ix = utils.cubicInterpolation(
                              historyX,
                              (i / ropeSize) * historySize
                            );
                            const iy = utils.cubicInterpolation(
                              historyY,
                              (i / ropeSize) * historySize
                            );
                            p.x = ix;
                            p.y = iy;
                          }
                        }
                      })
                    )
                    .play();
                  await character.controller.routineWait(0.5).then(() => {
                    console.log("particle hit");
                  });
                },
                hurt: () => {},
                playState: (stateName) => {
                  if (character.sequence[stateName]) {
                    character.playSequence(
                      controller.spine,
                      character.sequence[stateName]
                    );
                  }
                },
                destroy: () => {
                  controller.spine?.destroy();
                  controller.container?.destroy();
                  controller.containerParticle?.destroy();
                  controller.containerBullet?.destroy();
                },
                routineWait: async (second) => {
                  await new Promise((resolve) => {
                    const ticker = app.ticker;
                    let current = 0;
                    const onUpdate = (elapsedTime) => {
                      const deltaTime = (1 / ticker.FPS) * ticker.speed;
                      current += deltaTime;
                      if (current > second) {
                        ticker.remove(onUpdate);
                        resolve();
                      }
                    };
                    ticker.add(onUpdate);
                  });
                },
              };
              character.controller = controller;
              resolve(controller);
            } else {
              reject({ error: "VONDER_NO_SPINE_DATA" });
            }
          });
        }),
      ];
      Promise.all(promises)
        .then((results) => {
          const [character] = results;
          resolve(character);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};

export default character;
