function functionValidation(){
    var check1 = document.getElementById("user").value;
    var check2 = document.getElementById("email").value;
    var check3 = document.getElementById("pass").value;
    var check4 = document.getElementById("passcheck").value;
    if(check1==="" || check2==="" || check3==="" || check4==="")
    {
        document.getElementById("demo").innerHTML="Completati toate campurile";
    }
    else if(check3!=check4)
    {
        document.getElementById("demo3").innerHTML="Parolele nu coincid"
    }
    else
    {
        save();
    }

var usersNr=0;

}


let users = [
    {
        nr:1,
        user:"Veaceslav",   
        email:"a@gmail.com",
        pass:"123123123"
    },
    {
        nr:2,
        user:"Jhon",
        email:"a@gmail.com",
        pass:"123123123"
    }
]

var usersNr=0;

function save(){

    let userInfo ={     
        nr: users.length+1,
        user: document.getElementById("user").value,
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value
    }
    users.push(userInfo);

    drawTable();
 
}

function drawTable(){
        var table = document.getElementById("dataStorage");

        removeAllRows();
        

        debugger
        var len = users.length;
        var row;

        var contor;
        var user;
        var email;
        var pass;   
            for(let i=1;i<=len;i++){

                row= table.insertRow(i);
                contor = row.insertCell(0);
                user = row.insertCell(1);
                email = row.insertCell(2);
                pass = row.insertCell(3);
                

                row.setAttribute("id" , i);
                const currentUser = users[i-1];
    
                contor.innerHTML = currentUser.nr;
                user.innerHTML = currentUser.user;
                email.innerHTML = currentUser.email;
                pass.innerHTML = currentUser.pass;   
            }
    
}

function removeAllRows(){
    if(document.getElementById("dataStorage").rows.length>1){
        for(let i=1 ; i<users.length ; i++){
            document.getElementById(i).remove();
        }
    }
}