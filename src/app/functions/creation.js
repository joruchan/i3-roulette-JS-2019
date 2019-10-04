import $ from 'jquery';
import { randomNumber } from '../helpers/random';


export const createRouletteTable = function (array, whereTo) {
  array.forEach((e) => {
    const div = $('<div></div>');
    div.append(e.number);
    div.addClass('number');
    div.addClass(e.color);
    div.attr('id', e.number);
    div.attr('data-type', 'number');
    div.css('background-color', e.color);
    whereTo.append(div);
  });
};

let newTop = 0;
let amount = 0;
const jetonValues = [100, 50, 10, 5, 1];

const distributeChips = function (chipAmount) {
  while (amount >= chipAmount) {
    const div = $('<div></div>');
    if ($(`.jeton${chipAmount}`).length > 0) {
      newTop -= 3;
      const left = parseInt($(`.jeton${chipAmount}`).css('left'), 10);
      div.css({ top: `${newTop}px`, left: `${randomNumber(-5, 5) + left}px` });
    }
    div.addClass('jeton');
    div.addClass(`jeton${chipAmount}`).attr('id', `${chipAmount}j`);
    div.appendTo($('.boite-a-jetons'));
    amount -= chipAmount;
  }
  newTop = 0;
};

export const createChips = function (nombre) {
  amount = nombre;
  while (amount > 0) {
    for (const chip of jetonValues) {
      distributeChips(chip);
    }
  }
};
