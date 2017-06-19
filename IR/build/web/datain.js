/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    $('.btn').on("click", function(e){
       var id = $(this)[0].className.split(' ')[2];
       if(id='wordSeg'){
            var word = document.getElementById("wordSeg").value;
            document.getElementById("rewordSeg").innerHTML = "Result:" + word ; 
        }
        else if(id='name'){
            var word = document.getElementById("name").value;
            document.getElementById("rename").innerHTML = "Result:" + word ; 
        }
        else{
            var word = document.getElementById("om").value;
            document.getElementById("reom").innerHTML = "Result:" + word ; 
        }
    });
