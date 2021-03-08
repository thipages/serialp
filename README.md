# serialp
Run promises in sequence

## Installation
_npm i serialp_

## Basic example
```javascript
const timeout=duration=>()=>new Promise(
    resolve=>setTimeout(
        ()=>{
            resolve(duration)
        },duration
    )
);
const promises = [
    () => timeout(100),
    () => timeout(200)
];
serialp(promises).then(
    results=>console.log(results) // [[true,100],[true,200]]
);
```

## Usage
```javascript

serialp(arrayOfPromisesFunctions,observer)
  .then((x=>{}))
  .catch (x=>{}) // trigered only if observer is an async function
```
1.  x is an array of [success:boolean,result]

2. _observer_ is
 - either _true_ (default)
 - or a _function (index,success,result,results)_ which returns a boolean.

3. if observer function returns false, promises execution stops.
   
4. _observer_ function can be an async function
