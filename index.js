var index = async (promises, observer=true)=> {
    const next=(i,s,r,rs)=>typeof observer==='function'?observer(i,s,r,rs):observer;
    const results = [];
    for (let i=0;i<promises.length;i++) {
        let result,success;
        try {
            result=await promises[i]();
            success=true;
        } catch (e) {
            result=e;
            success=false;
        }
        results.push([success,result]);
        if (observer.constructor.name === "AsyncFunction") {
            if (!await next(i,success,result,results)) break;
        } else if (!next(i,success,result)) break;
    }
    return results;
};

export default index;
