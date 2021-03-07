import serialp from './../esm/index.js';

const arraysEqual=(a, b) =>{
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

const entries =[
    [
        [()=>true, true],
        timeouts([true,true,true]),
        JSON.stringify([[true,10],[true,20],[true,30]])
    ],
    [
        [()=>false,false, (index,success,result)=>index<0],
        timeouts([true,false,true]),
        JSON.stringify([[true,10]])
    ],
    [
        [()=>true, true],
        timeouts([true,false,true]),
        JSON.stringify([[true,10],[false,20],[true,30]])
    ]
];

const test = (validator,timeouts,expected)=> ()=>new Promise(
    resolve=>{
        serialp(timeouts,validator).then(
            x=>{
                const result=JSON.stringify(x);
                resolve([arraysEqual(result,expected),result,expected])
            }
        )
    }
);
const testData=entries.reduce(
    (res,v)=> {
        v[0].forEach(
            observer=>res.push(test(observer,v[1],v[2]))
        )
        return res;
    },[]
);
serialp(testData,(index,success,data)=>{
    console.log(`test ${index} is ${data[0]}`);
    if (!data[0]) {
        console.log('result:'+data[1]);
        console.log('expected:'+data[2]);
    }
    return data[0];
})



