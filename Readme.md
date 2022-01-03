# TrickJS 

## 01 Como esperar unos segundos con await

para este truco lo que unico que vamos hacer es envolver la funcion de
setTimeout en una promesa.

> [ver reto](#01-como-esperar-unos-segundos-con-await 'trick 1')



## 01 Como esperar unos segundos con await

```js
const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

console.log('wait for 5seg 🏃‍♂️' )

await wait(5000)
console.log('time out!!! ⌛')
```

