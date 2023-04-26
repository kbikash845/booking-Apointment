var form=document.getElementById("form");

form.addEventListener("submit",save_in_local)

function save_in_local(event){
    event.preventDefault();
    const name=event.target.fullname.value;
    const email=event.target.email.value;
    const number=event.target.number.value;

    ////---------------- store through array method-----

    // let userdetails;
    // if(localStorage.getItem("userdetails")===null){
    //     userdetails=[];
    // }else{
    //     userdetails=JSON.parse(localStorage.getItem("userdetails"))
    // }
    // userdetails.push({
    //     name,
    //     email,
    //     number
    // })
    // localStorage.setItem("userdetails",JSON.stringify(userdetails))



    ////------------------///////////////////////////////////////////////////////

  //// -----object method convert in to string----

    let obj={
        name,
       email,
       number
    }

    let userdetails=JSON.stringify(obj);
    localStorage.setItem(obj.email,userdetails)

 show_on_screen(obj)
}

function show_on_screen(obj){
    var name=document.getElementById("name");
    var email=document.getElementById("email_id");
    var number=document.getElementById("number");
    var userlists=document.getElementById("userlist");

  


    var li=document.createElement("li");
    li.id="li1"
    li.appendChild(document.createTextNode(`${name.value}  -   ${email.value}  -  ${number.value}`))
    // li.textContent=obj.name + "-" + obj.email + "-" + obj.number;

    userlists.appendChild(li)

    ///----create  delete btn and append;
    var deletebtn=document.createElement("button");
    deletebtn.id="deletebtn";
    deletebtn.appendChild(document.createTextNode("Delete"));

    li.appendChild(deletebtn);

    userlists.appendChild(li)


    ///---After clicking on delete button delate from ul tag  and write code given below------>


      deletebtn.onclick=(event)=>{
      
        localStorage.removeItem(obj.email);
        userlists.removeChild(li);
       }  


    ///--- create edit buttun-------

    var editbtn=document.createElement("button");
    editbtn.id="editbtn"
     editbtn.appendChild(document.createTextNode("Edit"));
     li.appendChild(editbtn);

     userlists.appendChild(li)


     editbtn.onclick=()=>{

        /// ----populating the userdetails------->

        document.getElementById("name").value=obj.name;
        document.getElementById("email_id").value=obj.email;
        document.getElementById("number").value=obj.number;
        localStorage.removeItem(obj.email);
        userlists.removeChild(li);
     }

    
   

  ////----create input field empty after user submit ;

  name.value="";
  email.value="";
  number.value="";


}