// https://leetcode.com/problems/asteroid-collision/

/**
 * @param {number} a
 * @param {number} b
 * @returns boolean
 */
function shouldCollide(a, b) {
  if (!a || !b) {
    return false;
  } else {
    return a * b < 0;
  }
}

/**
 * @param {number} a
 * @param {number} b
 * @returns number || null
 */
function getVictor(a, b) {
  const absA = Math.abs(a);
  const absB = Math.abs(b);

  if (absA > absB) {
    return a;
  } else if (absA < absB) {
    return b;
  } else {
    return null;
  }
}

/**
 * @param {number[]} asteroids
 * @returns number[]
 */

function asteroidCollision(asteroids) {
  const initialLength = asteroids.length;

  for (let length = asteroids.length; length >= 0; length--) {
    let a = asteroids[length - 3];
    let b = asteroids[length - 2];
    let c = asteroids[length - 1];
    let victor;

    if (b > c && shouldCollide(b, c)) {
      victor = getVictor(b, c);
      if (victor === b) {
        asteroids.splice(length - 1, 1);
        c = null;
      } else if (victor === c) {
        asteroids.splice(length - 2, 1);
        b = null;
      } else {
        asteroids.splice(length - 2, 2);
        b = null;
        c = null;
        length--;
      }
    }

    if (a > b && shouldCollide(a, b)) {
      victor = getVictor(a, b);
      if (victor === a) {
        asteroids.splice(length - 2, 1);
        b = null;
      } else if (victor === b) {
        asteroids.splice(length - 3, 1);
        a = null;
      } else {
        asteroids.splice(length - 3, 2);
        a = null;
        b = null;
        length--;
      }
    }

    if (!b && a > c && shouldCollide(a, c)) {
      victor = getVictor(a, c);
      if (victor === a) {
        asteroids.pop();
        c = null;
        length--;
      } else if (victor === c) {
        asteroids.splice(length - 3, 1);
        a = null;
        length--;
      } else {
        asteroids.splice(length - 3, 2);
        a = null;
        c = null;
        length--;
        length--;
      }
    }
  }

  if (asteroids.length < initialLength) {
    return asteroidCollision(asteroids);
  }
  return asteroids;
}

module.exports = asteroidCollision;
