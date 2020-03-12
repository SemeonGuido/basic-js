module.exports = function createDreamTeam(members) {
  let nameTeam = [];
  if (Array.isArray(members) === false) {
    return false;
  } else {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        let firstLetter = members[i].match(/[A-Z]/i);
        nameTeam.push(firstLetter[0].toUpperCase());
      }
    }
  }
  return nameTeam.sort().join('');
};