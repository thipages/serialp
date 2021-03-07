# serialp
Run promises in sequence

## Usage
```javascript

serialp(arrayOfPromisesFunctions,observer).then(
    (x=>{
        console.log(x);
        // ....
    }) // x being an array of [success:boolean,result]
); // no catch
```

_observer_ is
- either a _function (index,success,result)_ which returns a boolean.
- or a _boolean_  

if observer returns false, promises execution stops
