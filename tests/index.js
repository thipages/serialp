import serialp from './../esm/index.js';

const areArraysEqual=(a, b) =>{
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
const timeout=([duration,valid])=>()=>new Promise(
    (resolve,reject)=>setTimeout(
        ()=>{
            return valid ? resolve(duration) : reject(duration);
        },duration
    )
);

const timeouts=validArray=>[...Array(3).fill('').keys()]
    .map((v,i)=>timeout([10*(v+1),validArray[i]]));

const test_function_cases =[
    [
        [()=>true, true],
        timeouts([true,true,true]),
        JSON.stringify([[true,10],[true,20],[true,30]])
    ],
    [
        [()=>false,false, (index,success,result)=>index<0], // useless cases
        timeouts([true,false,true]),
        JSON.stringify([[true,10]])
    ],
    [
        [()=>true, true],
        timeouts([true,false,true]),
        JSON.stringify([[true,10],[false,20],[true,30]])
    ]
];

const test_function_promise = (observer,timeouts,expected)=> ()=>new Promise(
    resolve=>{
        serialp(timeouts,observer).then(
            x=>{
                const result=JSON.stringify(x);
                resolve([areArraysEqual(result,expected),result,expected])
            }
        )
    }
);
const test_function_promises=test_function_cases.reduce(
    (res,v)=> {
        v[0].forEach(
            observer=>res.push(test_function_promise(observer,v[1],v[2]))
        )
        return res;
    },[]
);
const test_function=()=>serialp(test_function_promises,(index,success,result,results)=>{
    const status=result[0]?'passed':'not passed';
    console.log(`test ${index} ${status}`);
    if (!result[0]) {
        console.log('result:'+result[1]);
        console.log('expected:'+result[2]);
    }
    return result[0];
});
test_function();

/*const test_async=(valid)=>()=>serialp(test_function_promises, async(index,success,result,results)=> {
    let outcome;
    await new Promise((resolve,reject) => {
        setTimeout(()=>{
            outcome=valid;
            if (!valid) reject(results) else resolve(results);
        }, 1000)
    })
    return outcome;
}).then(
    x=>console.log('then',x)
).catch(
    x=>console.log('catch',x)
);

serialp([
    test_function,
    test_async()
]);*/




