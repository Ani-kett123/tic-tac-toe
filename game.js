
var currentState =  true;
let button = $(".btn").click(function () {

   
   if(currentState)
   {
   // below statement is use to write the sentence in the button.
   // When the button is clicked the click func. is triggered and $(this).text() writes whatever written in the () of text.
    $(this).text("O");
    currentState = false;

   }
   else{
    $(this).text("X");
    currentState = true;
   }

   //if we write something in a box , then we are unable to change it. It is done with the help of below statement.
   $(this).prop("disabled", true);
   winner();
});



const winPatterns = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6],
]



// most imp winner function
function winner(){
      
      for (let Pattern of winPatterns){
         // basically this are positions i.e. indices.
         let value1 = button[Pattern[0]].innerText;
         let value2 = button[Pattern[1]].innerText;
         let value3 = button[Pattern[2]].innerText;

         if(value1!=""&& value2!="" && value3!=""){
            if(value1===value2 && value2===value3){
               showWinner(value1);
               disableAfterWin(); 
               return;   
            }  
         }   
   }
}
   function showWinner(win){
      $("h1").html(`winner is ${win}`);
      
   }
   function disableAfterWin(){
      $(".btn").prop("disabled", true);
   }



   // below statement is use to refresh the page.
   $("#Reset").click(function(){
      location.reload(true);
   });