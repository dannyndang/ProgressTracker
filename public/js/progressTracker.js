 $(document).ready(function(){  
     $(".button-collapse").sideNav(); //materialize navbar
      
     
     $("#CPstart").click(function(){
        console.log("Clicked!"); 
                  
         //remove class CPactive on current, and add CPdone
         
         //Add class CPactive to next on list,
         

     });
 });  

//Add friend button
function addfriend() // no ';' here
{
    var elem = document.getElementById("addFriendButton");
    elem.type = "button";
    if (elem.value=="Add friend") 
        {
            elem.value = "Added";
        }
    else elem.value = "Add friend";
};
