let a=[{
    'process':'demo', 'duration':50
},{
    'process':'leap', 'duration':30
},{
    'process':'knowmax', 'duration':20
}];

let data=a.reduce((acc, item, currentIndex) => {
    // console.log('accumulator',acc);
    // console.log('item',item);
    // console.log('currentIndex',currentIndex);
    return (acc + item.duration);
}, 0);
// console.log(data);

let test=a.map((value,index)=>{
   // return value;
    return value['appUsage']=Math.round((value.duration*100)/data,3);
});
console.log(a);

// let data=a.map((key,val) => {
//     return [key.duration]
// });
//let data=a.map(Object.values('process'))\

// a.forEach

// [demo],[leap],[knowmax]

//console.log(data);