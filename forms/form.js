//<script>
var form = document.getElementById("form-id");
function onSave(){
    console.log('save');
}

document.getElementById("your-id").addEventListener("click", function () {
    console.log(form);
 //return false;
  
  let firstname=document.getElementsByName("firstname").value;
  let lastname=document.getElementsByName("lastname").value;
  console.log(firstname);
  form.submit();
});
// function formSubmit(event){
//     event.preventDefault();
//     // 
//     let firstname=document.getElementsByName("firstname").values;
//     console.log(firstname);
    
// }

//</script>