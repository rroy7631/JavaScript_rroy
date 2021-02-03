// Question 1
// By how many ways we can access elements in the DOM and write about them in brief?

// ANS
 document.getElementById('id');
 document.getElementsByClassName('class');
 document.getElementsByTagName('html tag');
 

// QUESTION 2:

function add(){
    var fNum=document.getElementById("first");
    var sNum=document.getElementById("second");
    var result=parseInt(fNum.value) + parseInt(sNum.value)
    document.getElementById("answer").value=result
}