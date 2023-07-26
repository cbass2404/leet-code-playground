// https://leetcode.com/problems/asteroid-collision/

/**
 * @param {number} a
 * @param {number} b
 * @returns boolean
 */
function shouldCollide(a, b) {
  return a * b < 0 && a > b;
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
 * @returns {boolean}
 */
function shouldRunAgain(asteroids) {
  let moreCollisions = false;

  for (let idx = 0; idx < asteroids.length; idx++) {
    if (asteroids[idx] > 0) {
      for (let ldx = idx + 1; ldx < asteroids.length; ldx++) {
        if (asteroids[ldx] < 0) {
          moreCollisions = true;
        }
      }
    }
  }

  return moreCollisions;
}

/**
 * @param {number[]} asteroids
 * @returns number[]
 */
function asteroidCollision(asteroids, left = [], right = []) {
  for (let idx = 0; idx < asteroids.length; idx++) {
    const lastIdx = asteroids.length - 1;
    if (asteroids[idx] < 0) {
      left.push(...asteroids.splice(idx, 1));
      idx--;
    }
    if (asteroids[lastIdx] > 0) {
      right.unshift(...asteroids.splice(lastIdx, 1));
    }

    let victor;
    if (shouldCollide(asteroids[idx], asteroids[idx + 1])) {
      victor = getVictor(asteroids[idx], asteroids[idx + 1]);
      if (victor === asteroids[idx]) {
        asteroids.splice(asteroids[idx + 1], 1);
      } else if (victor === asteroids[idx + 1]) {
        asteroids.splice(idx, 1);
      } else {
        asteroids.splice(idx, 2);
      }
      idx--;
    }
    if (asteroids.length > 3) {
      if (shouldCollide(asteroids[lastIdx - 1], asteroids[lastIdx])) {
        victor = getVictor(asteroids[lastIdx - 1], asteroids[lastIdx]);
        if (victor === asteroids[lastIdx - 1]) {
          asteroids.splice(asteroids[lastIdx], 1);
        } else if (victor === asteroids[lastIdx]) {
          asteroids.splice(lastIdx - 1, 1);
        } else {
          asteroids.splice(lastIdx - 1, 2);
        }
      }
    } else {
      if (shouldCollide(asteroids[idx], asteroids[idx + 1])) {
        victor = getVictor(asteroids[idx], asteroids[idx + 1]);
        if (victor === asteroids[idx]) {
          asteroids.splice(asteroids[idx + 1], 1);
        } else if (victor === asteroids[idx + 1]) {
          asteroids.splice(idx, 1);
        } else {
          asteroids.splice(idx, 2);
        }
      }
      if (shouldCollide(asteroids[idx], asteroids[idx + 1])) {
        victor = getVictor(asteroids[idx], asteroids[idx + 1]);
        if (victor === asteroids[idx]) {
          asteroids.splice(asteroids[idx + 1], 1);
        } else if (victor === asteroids[idx + 1]) {
          asteroids.splice(idx, 1);
        } else {
          asteroids.splice(idx, 2);
        }
      }
    }

    if (asteroids.length === 1) {
      if (asteroids[0] > 0) {
        right.unshift(...asteroids.splice(0, 1));
      } else {
        left.push(asteroids.pop());
      }
    }
  }

  const result = [...left, ...asteroids, ...right];
  if (shouldRunAgain(result)) {
    return asteroidCollision(result);
  } else {
    return result;
  }
}
// function asteroidCollision(asteroids) {
//   for (let idx = 0; idx < asteroids.length; idx++) {
//     const a = asteroids[idx];
//     const b = asteroids[idx + 1];
//     let victor;
//     if (shouldCollide(a, b)) {
//       victor = getVictor(a, b);
//       if (victor === a) {
//         asteroids.splice(idx + 1, 1);
//       } else if (victor === b) {
//         asteroids.splice(idx, 1);
//       } else {
//         asteroids.splice(idx, 2);
//       }
//     }

//     if (idx === asteroids.length - 1 && shouldRunAgain(asteroids)) {
//       idx = 0;
//     }
//   }

//   return asteroids;
// }

module.exports = asteroidCollision;
