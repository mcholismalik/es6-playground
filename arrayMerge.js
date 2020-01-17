let survey = [{
  id: 1,
  name: 'A',
  survey: 2
}, {
  id: 2,
  name: 'B',
  survey: 5
}]

let fgd = [{
  id: 1,
  name: 'A',
  fgd: 3
}, {
  id: 4,
  name: 'D',
  fgd: 9
}]

let idsSurvey = survey.map(({ id, name }) => ({ id, name }))
let idsFgd = fgd.map(({ id, name }) => ({ id, name }))
// let idsMerge = [...new Set(fullNameList.map(JSON.stringify))].map(JSON.parse);
let idsMerge = [...new Set([...idsSurvey, ...idsFgd].map(JSON.stringify))].map(JSON.parse)

console.log({ idsSurvey, idsFgd, idsMerge })

// let merge = survey.concat(fgd)
// let reduce = merge.reduce((p, c, i) => p, {})

// console.log(ids)
// console.log(merge)