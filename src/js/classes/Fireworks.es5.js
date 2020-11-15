import { createElement } from '../modules/dom';
import { requireFile } from '../modules/request';

const cdnURL = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';

/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=

BackupFireworks

-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

export class BackupFireworks {
  constructor(elm, isOffset) {
    this.target = elm;
    this.canvas = createCanvas();
    // this.fireworks = new Spark(this.target, this.canvas);

    this.ray = this.fireworks.generateBomb('ray');
    this.buble = this.fireworks.generateBomb('buble');
    this.shockwave = this.fireworks.generateBomb();

    this.isOffset = isOffset;
    this.fireworks.update(this.isOffset);
    setCanvas(this.target, this.canvas);
  }

  get(name) {
    return this[name];
  }

  ray(x, y, ex) {
    this.ray(x, y, ex);
  }

  buble(x, y, ex) {
    this.ray(x, y, ex);
  }

  shockWave(x, y, ex) {
    this.ray(x, y, ex);
  }

  large(x, y, ex) {
    this.buble(x, y, {
      circle: {
        isRing: false,
      },
    });
    this.buble(x, y, {
      circle: {
        isRing: true,
        radius: 1,
        lineWidth: 4,
      },
      perticles: {
        count: 1,
      },
      anime: {
        duration: function () {
          return 1500;
        },
        radius: function () {
          return 10;
        },
        alpha: [
          {
            value: 0,
            delay: 400,
          },
        ],
      },
    });
    this.shockwave(x, y);
    this.ray(x, y);
  }
}

/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Fireworks

-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

export class Fireworks {
  constructor(elm, canvas) {
    this.elm = elm;
    this.canvas = canvas || createCanvas();
    this.ctx = this.canvas.getContext('2d');
    setCanvas(this.elm, this.canvas);
    this.animations = [];
    this.defaultAnime = {
      x: (p, i) => p.x,
      y: (p, i) => p.y,
      delay: (p, i) => 0,
      duration: (p, i) => 1000,
      easing: 'easeOutExpo',
    };
    this.offset = false;
    requireFile(cdnURL, 'anime').then(() => {
      this.loop();
      this.assignEvents();
    });
  }

  init() {}

  get(name) {
    return this[name];
  }

  loop() {
    anime({
      duration: Infinity,
      update: () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.animations.forEach(draw);
      },
    });

    function draw(anime) {
      anime.animatables.forEach(function (animatable) {
        animatable.target.draw();
      });
    }
  }

  assignEvents() {
    let timer = null;
    window.addEventListener(
      'resize',
      () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          this.update(this.isOffset);
        }, 1000);
      },
      false
    );
  }

  update() {
    const rect = this.elm.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = this.offset ? rect.height + rect.top + window.pageYOffset : rect.height;
    return this.canvas;
  }

  generateBomb(type, initParams) {
    let perticleParams = {};
    let circleParams = {};
    let animeParams = {};
    let fire = () => {
      this.fire(this.createPerticles(circleParams, perticleParams), animeParams);
    };
    switch (type) {
      case 'ray':
        circleParams = {
          radius: 10,
        };
        perticleParams = {
          lineNum: 6,
          distance: 200,
          count: 8,
          color: 'hsl(70, 100%, 50%)',
          morph: 'hsl(0, 100%, 100%)',
          offset: 10,
        };
        animeParams = copy(this.defaultAnime, {
          x: (p, i, l) => p.x + (perticleParams.degPos.x * i) / l,
          y: (p, i, l) => p.y + (perticleParams.degPos.y * i) / l,
          radius: () => 0,
          duration: (p, i, l) => (perticleParams.count / 0.01) * i,
          delay: (p, i, l) => 0,
        });
        fire = () => {
          for (let i = 0; i < perticleParams.lineNum; i++) {
            const startDeg = perticleParams.lineNum === 1 ? -90 : 0;
            const perticles = this.createPerticles(circleParams, perticleParams);
            const angle = 360 / perticleParams.lineNum;
            const deg = angle * i + angle / 2 + startDeg;
            if (perticleParams.offset) {
              const offset = degreeToPos(deg, perticleParams.offset);
              perticles.forEach(function (circle) {
                circle.x += offset.x;
                circle.y += offset.y;
              });
            }
            perticleParams.degPos = degreeToPos(deg, perticleParams.distance);
            this.fire(perticles, animeParams);
          }
        };
        break;

      case 'buble':
        perticleParams = {
          distance: 400,
          count: 10,
          radiusRange: [10, 60],
        };
        animeParams = copy(this.defaultAnime, {
          x: (p) => p.x + anime.random(-perticleParams.distance, perticleParams.distance),
          y: (p) => p.y + anime.random(-perticleParams.distance, perticleParams.distance),
          duration: (p, i) => 2000,
          radius: () => 0,
        });
        break;

      default:
        circleParams = {
          color: '#fff',
          radius: 100,
          isRing: true,
        };
        perticleParams = {
          count: 1,
        };
        animeParams = copy(this.defaultAnime, {
          radius: () => 500,
          duration: () => 2000,
          alpha: () => 0,
        });
    }

    if (initParams) {
      if (initParams.circle) Object.assign(circleParams, initParams.circle);
      if (initParams.perticles) Object.assign(perticleParams, initParams.perticles);
      if (initParams.anime) Object.assign(animeParams, initParams.anime);
    }

    return (x, y, params) => {
      circleParams.x = x;
      circleParams.y = y;
      if (params) {
        if (params.circle) Object.assign(circleParams, params.circle);
        if (params.perticles) Object.assign(perticleParams, params.perticles);
        if (params.anime) Object.assign(animeParams, params.anime);
      }
      fire();
    };
  }

  createPerticles(circleParams, perticleParams) {
    let n = perticleParams.count || 10;
    let perticles = [];
    let morphSequence;
    if (perticleParams.morph) {
      morphSequence = getMorphHSL(perticleParams.color, perticleParams.morph, n);
    }
    for (let i = 0; i < n; i++) {
      if (perticleParams.morph) circleParams.color = morphSequence[i];
      if (perticleParams.radiusRange) circleParams.radius = anime.random(perticleParams.radiusRange[0], perticleParams.radiusRange[1]);
      perticles.push(new Circle(this.ctx, circleParams));
    }
    return perticles;

    function getMorphHSL(beforeHSL, afterHSL, divideCount) {
      let morphSequenceHSL = [];
      let beforeHSLParams = getHSLtoParams(beforeHSL);
      let afterHSLParams = getHSLtoParams(afterHSL);
      let offsetHSL = {
        h: (afterHSLParams[0] - beforeHSLParams[0]) / divideCount,
        s: (afterHSLParams[1] - beforeHSLParams[1]) / divideCount,
        l: (afterHSLParams[2] - beforeHSLParams[2]) / divideCount,
      };
      for (let i = 1; i < divideCount + 1; i++) {
        let morphHSLParams = [];
        morphHSLParams[0] = beforeHSLParams[0] + offsetHSL.h * i;
        morphHSLParams[1] = beforeHSLParams[1] + offsetHSL.s * i;
        morphHSLParams[2] = beforeHSLParams[2] + offsetHSL.l * i;
        morphSequenceHSL.push(getParamsToHSL(morphHSLParams));
      }
      return morphSequenceHSL;
    }

    function getHSLtoParams(hsl) {
      let h = Number(hsl.match(/\((\d+)/)[1]);
      let s = Number(hsl.match(/\(\d+,\s?(\d+)/)[1]);
      let l = Number(hsl.match(/\(\d+,\s?\d.+,\s?(\d+)/)[1]);
      return [h, s, l];
    }

    function getParamsToHSL(hslParams) {
      return 'hsl(' + hslParams[0] + ', ' + hslParams[1] + '%, ' + hslParams[2] + '%)';
    }
  }

  removeAnimation(anim) {
    var index = this.animations.indexOf(anim);
    if (index > -1) this.animations.splice(index, 1);
  }

  fire(perticles, animParams) {
    var animation = anime({
      targets: perticles,
      x: animParams.x,
      y: animParams.y,
      radius: animParams.radius,
      delay: animParams.delay,
      // loop: true,
      duration: animParams.duration,
      alpha: animParams.alpha,
      easing: animParams.easing,
      update: (p, i) => {
        if (animParams.update) animParams.update();
      },
      complete: () => {
        this.removeAnimation(this);
        if (animParams.complete) animParams.complete();
      },
    });
    this.animations.push(animation);
  }
}

/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Circle

-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

const colors = ['#ED1A2D', '#ff5a69', '#f88f4a', '#d41522', '#FAA634', '#fac034', '#D1D2D4', '#c0c6d2', '#6EACDD', '#9AC23B', '#d7d508'];

class Circle {
  constructor(ctx, params) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.color = colors[anime.random(0, colors.length - 1)];
    this.radius = Math.round(anime.random(10, 20));
    this.alpha = 1;
    this.lineWidth = 2;
    this.isRing = false;
    Object.assign(this, params);
  }
  draw() {
    this.ctx.globalAlpha = this.alpha;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    if (this.isRing) {
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.strokeStyle = this.color;
      this.ctx.stroke();
    } else {
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
    }
    this.ctx.globalAlpha = 1;
  }
}

/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Private functions

-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

function canvasID() {
  let id = 0;
  return () => ++id;
}

function createCanvas() {
  return createElement('canvas', {
    className: 'js-fireworks',
    attr: {
      id: 'js-fireworks-' + canvasID(),
    },
  });
}

function setCanvas(elm, canvas) {
  elm.appendChild(canvas);
  setFitStyle(elm, canvas);

  return canvas;

  function setFitStyle(area, canvas) {
    area.style.cssText = `
    position: relative;
  `;
    canvas.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.1);
    pointer-events: none;
  `;
  }
}

function copy(obj, mergeObj) {
  var copyObj = {};
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) copyObj[key] = obj[key];
  }
  if (mergeObj) Object.assign(copyObj, mergeObj);
  return copyObj;
}

function degreeToPos(degree, radius, offset) {
  var radian = degree * (Math.PI / 180);
  return {
    x: Math.cos(radian) * radius,
    y: Math.sin(radian) * radius,
  };
}
