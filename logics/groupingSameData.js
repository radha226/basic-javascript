

const arr= [
    {key1: "OUTLOOK.EXE", key2: 23305},
    {key1: "airtelchat.maxicus.com", key2: 11730},
    {key1: "airtelchat.maxicus.com", key2: 12730},  
    {key1: "notepad", key2: 3700},
    {key1: "airtelchat.maxicus.com", key2: 12730}, 
    {key1: "Microsoft.Notes", key2: 3555},
    {key1: "airtelchat.maxicus.com", key2: 1770},
    {key1: "sampark.kochar.com:81", key2: 1625},
     {key1: "Sampark", key2: 30},
     {key1: "sampark.kochar.com:81", key2: 20},
     {key1: "airtelchat.maxicus.com", key2: 12730}, 
       ];
    //    console.log(arr.length);
    const newArray=[]
       for (let i = 0; i < arr.length; i++) {
           console.log("outer",i)
            const index = newArray.findIndex((a) => {
                 console.log("index",i)
                 console.log("findindex",a);
              return  a.key === arr[i].key1});
             console.log("new array",newArray);
          console.log("index",index);
            if (index === -1) {
             console.log("if");
                newArray.push({key: arr[i].key1, val: arr[i].key2})}
            else {
                 console.log("else");
                newArray[index].val += arr[i].key2;
            }
            
       }
       console.log(newArray)
       
       
    //    const getlogic = (arr) => {
    //        const sortedArr = arr.sort();
    //        console.log(sortedArr);
    //    }
       
    //    getlogic(arr);
       
       