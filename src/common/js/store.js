export function saveToLocal (id, key, value) {
  let resume = window.localStorage.__resume__
  if (!resume) {
    resume = {}
    resume[id] = {}
  } else {
    resume = JSON.parse(resume)
    if (!resume[id]) {
      resume[id] = {}
    }
  }
  resume[id][key] = value
  window.localStorage.__resume__ = JSON.stringify(resume)
};

export function loadFromLocal (id, key, def) {
  let resume = window.localStorage.__resume__
  if (!resume) {
    return def
  }
  resume = JSON.parse(resume)[id]
  if (!resume) {
    return def
  }
  let ret = resume[key]
  return ret || def
};
