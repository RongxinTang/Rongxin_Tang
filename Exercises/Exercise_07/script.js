let flowers = ["violet","rose","lily","tulip"];
let landscapes = ["river","mountain","ocean","sky"];
let someones = ["musician","artist","scientist"];
let days = ["tomorrow","yesterday"];
let nouns = ["phantom","dream","moonlight","shadow","flame"];
let adjectives = ["vague","bright","roaring"];


let flower = flowers[Math.floor(Math.random()*flowers.length)]

let landscape = landscapes[Math.floor(Math.random()*landscapes.length)]

let someone = someones[Math.floor(Math.random()*someones.length)]

let day = days[Math.floor(Math.random()*days.length)]

let noun = nouns[Math.floor(Math.random()*nouns.length)]

let adjective = adjectives[Math.floor(Math.random()*adjectives.length)]

let sentence = `The ${flower} is telling a story about ${landscape}; 
and ${someone} is looking for ${day}, 
only seeing a ${adjective} ${noun}`

document.write(sentence)
console.log(sentence)

