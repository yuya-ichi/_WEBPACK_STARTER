/**
 * Parallax
 * @param {string} selector
 * @param {object} params {
 *  @param {string} type - 'parallax'(transform) | 'background' | <css-property-name>
 *  @param {int} friction
 *  @param {int} duration
 *  @param {string} easing
 *  @param {string} unit - CSS Property units
 * }
 */

import { _extends } from './_extends';
import { toArray } from './_toArray';

export class Parallax {

  constructor(selector, params) {
    this.targets = toArray(document.querySelectorAll(selector));
    if (!this.targets.length) return;
    this.type = 'parallax';
    this.friction = -.3;
    this.duration = .5;
    this.ease = 'cubic-bezier(0.075, 0.82, 0.165, 1)';
    this.unit = 'px';
    this.move = null;
    if (params) _extends(this, params);
    this.init();
  }

  init() {
    this.setMovinFromType();
    this.eventBindings();
  }

  setMovinFromType() {
    let transProp = null;
    switch (this.type) {
      case 'parallax':
        transProp = 'transform';
        this.move = (e, offset) => {
          e.style.transform = 'translateY(' + offset + this.unit + ')';
        }
        break;
      case 'background':
        transProp = 'background';
        this.move = (e, offset) => {
          e.style.backgroundPosition = '0px' + ' ' + offset + this.unit;
        }
        break;
      default:
        transProp = this.type;
        this.move = (e, offset) => { e.style[transProp] = offset + this.unit };
    }

    this.targets.forEach((e) => {
      e.style.transition = transProp + ' ' + this.duration + 's ' + this.ease;
    });
  }

  eventBindings() {
    let timer = null;
    window.addEventListener('scroll', this.scrollAction.bind(this));
    window.addEventListener('resize', () => {
      clearTimeout(timer);
      timer = setTimeout(this.scrollAction.bind(this), 200);
    });
  }

  scrollAction() {
    let scrollValue = window.pageYOffset;
    let offset = 0;
    this.targets.forEach(e => {
      offset = scrollValue * this.friction;
      this.move(e, offset);
    });
  }

}
