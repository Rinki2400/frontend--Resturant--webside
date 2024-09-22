
		function layout()
		{
			document.getElementById("title").innerHTML="exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui";
		}
		function prelayout()
		{
			document.getElementById("title").innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
		// / home img text  js code/ 
		function mydemo()
		{
			var mylen="freshness <br>in every bite";
			document.getElementById("demo").innerHTML=mylen;
			
		}
		function mydemo1()
		{
			document.getElementById("demo").innerHTML="it's not just<br> food ,it's an <br> experience"	;
		}

// validation  for booking form

//  function Display()
//  {
//     if(document.f1.n1.value=""){
//         document.getElementById("err").innerHTML="please enter your name..."
//         document.f1.n1.focus();
//         return false;
//     }
//  }


function validation() {
    //      NAME VALIDATION
    var myname=document.f1.n1.value;
    var myemail=document.f1.e1.value;



    if( myname == "" ) {
       document.getElementById("err").innerHTML=( "Please provide your name!" );
       document.f1.n1.focus() ;
       return false;
    }else{
        document.getElementById("err").innerHTML=(  " " );
        // return true;
    }
        if(myemail ==" "){
                document.getElementById("er1").innerHTML=( "Please enter your email id!" );
                document.f1.e1.focus() ;
                return false;
            }else{
                document.getElementById("er1").innerHTML=(  " " );
                // return true;
        

    

}

}
