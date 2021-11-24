

const arr= [
    // {key1: "OUTLOOK.EXE", key2: 100},
    // {key1: "OUTLOOK.EXE", key2: 100},
    // {key1: "airtelchat.maxicus.com", key2: 200},
    // {key1: "airtelchat.maxicus.com", key2: 100},
    // {key1: "Microsoft.Notes", key2: 150} ,
    // {key1: "Microsoft.Notes", key2: 150} ,


{key1: "OUTLOOK.EXE", key2: 23305},
{key1: "airtelchat.maxicus.com", key2: 11730},
{key1: "airtelchat.maxicus.com", key2: 12730},  

{key1: "notepad", key2: 3700},
{key1: "airtelchat.maxicus.com", key2: 12730}, 

{key1: "Microsoft.Notes", key2: 3555},
{key1: "airtelchat.maxicus.com", key2: 1770},
{key1: "sampark.kochar.com:81", key2: 1625},
{key1: "acsCNTRL", key2: 1090},
{key1: "airtelchat.maxicus.com", key2: 12730},

{key1: "SearchApp", key2: 1010},
{key1: "maxicus.on.spiceworks.com", key2: 980},
{key1: "Calculator", key2: 690},
{key1: "ApplicationFrameHost", key2: 665},
{key1: "vpndownloader", key2: 250},
{key1: "CredentialUIBroker", key2: 145},
{key1: "Dserui", key2: 135},
{key1: "Taskmgr", key2: 95},
{key1: "SymCorpUI", key2: 95},
 {key1: "iexplore", key2: 35},
 {key1: "home - Airtel Broadband", key2: 35},
 {key1: "Sampark", key2: 30},
 {key1: "sampark.kochar.com:81", key2: 20},
 {key1: "SystemSettings", key2: 15},
 {key1: "StartMenuExperienceHost", key2: 10},
 {key1: "airtelchat.maxicus.com", key2: 12730}, 
   ];
//    console.log(arr.length);
const newArray=[]
   for (let i = 0; i < arr.length; i++) {
        const index = newArray.findIndex(a => a.key === arr[i].key1);
        console.log(index)
        if (index === -1) newArray.push({key: arr[i].key1, val: arr[i].key2});
        else {
            newArray[index].val += arr[i].key2;
        }
   }
   console.log(newArray)
   
   
//    const getlogic = (arr) => {
//        const sortedArr = arr.sort();
//        console.log(sortedArr);
//    }
   
//    getlogic(arr);
   
   