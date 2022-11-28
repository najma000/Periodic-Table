
  function myFunction(n,h1,n1,n2){
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

    modal.style.display = "block";
 
    $(document).ready(function(){
    $('#name').text(n);
    $('#name1').text(n1);
    $('#name2').text(n2);
    $('#header').text(h1);
    console.log(n);
   });

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}