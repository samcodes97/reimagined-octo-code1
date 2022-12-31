function myValidate() {

    let n = document.getElementById("input1").value;
    let p = document.getElementById("input2").value;
    let e = document.getElementById("input3").value;

    var nam = /^[A-Za-z]\w{2,12}$/;
    var passw = /^[A-Za-z]\w{8,12}$/;
    var emlchk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var nameErr = PswdErr = emailErr= true;
    
    // ****Validate Name****
    if(n == "") {
        document.getElementById("myp").innerHTML = "Please Fill out this field";
        document.getElementById("myp").style.color = "red"
    } else {              
        if(n.match(nam) == null) {
            document.getElementById("myp").innerHTML = "Enter at least 3 characters";
            document.getElementById("myp").style.color = "red"
        } else {
            document.getElementById("myp").innerHTML = "";
            nameErr = false;
        }
    }

   // ****Validate Password****
    if(p == "") {
        document.getElementById("myp2").innerHTML = "Please Fill out this field";
        document.getElementById("myp2").style.color = "red"
    } else {              
        if(p.match(passw) == null) {
            document.getElementById("myp2").innerHTML = "Password must contain 8 to 12 characters";
            document.getElementById("myp2").style.color = "red"
        } else {
            document.getElementById("myp2").innerHTML = "";
            PswdErr = false;
        }
    }

       // ****Validate Email****
    if(e == "") {
        document.getElementById("myp3").innerHTML = "Please Fill out this field";
        document.getElementById("myp3").style.color = "red"
    } else {        
        if(e.match(emlchk) == null) {
            document.getElementById("myp3").innerHTML = "Invalid Email format";
            document.getElementById("myp3").style.color = "red"
        } else {
            document.getElementById("myp3").innerHTML = "";
            emailErr = false;
        }
    }

    if (nameErr ||  PswdErr || emailErr == true) {
        return false;
     } else {
        document.write("SIGN UP SUCCESSFULL");
     }
}

