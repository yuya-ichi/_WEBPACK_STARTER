/**
 *  Shuffle Text
 * @param {element} e
 * @param {object} params - extend parameter
 *   @param {string} chars - template characters
 *   @param {}
 */

import { toArray } from '../modules/util';
import { createElement } from '../modules/dom';
import { random } from '../modules/calc';

export class ShuffleShowText {
  constructor(e, params) {
    this.e = e;
    this.chars = '_ABCDEFGHIJKLMNOPQRSTUVWXYZ01234566789';
    this.delay = 100;
    this.choppedText();
  }

  run() {
    this.charsLen = this.chars.length;
    toArray(this.e.children).forEach((e, i) => {
      this.update(e, i);
    });
  }

  update(e, i) {
    const original = e.textContent;
    const delay = this.delay * (i * 0.1);
    const shuffle = (timestamp) => {
      if (timestamp > 400 + delay) {
        e.textContent = original;
        e.classList.add('is-animEnd');
        return true;
      }
      if (timestamp < 100 + delay) {
        e.textContent = this.chars[0];
      } else {
        e.textContent = this.chars[random(1, this.charsLen)];
      }
      requestAnimationFrame(shuffle);
    };
    requestAnimationFrame(shuffle);
  }

  choppedText() {
    let text = this.e.textContent;
    this.e.innerHTML = '';
    toArray(text).forEach((s) => {
      this.e.appendChild(createElement('span', { className: 'is-anim', text: s }));
    });
  }
}
