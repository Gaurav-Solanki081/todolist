const  input = document.getElementsByTagName('input')[0];
const addbtn = document.getElementById('add-btn');
const list = document.getElementsByTagName('ul')[0];
let count = 1
//test change
addbtn.addEventListener('click',()=>{
    let text = input.value.trim();
  if(text){
    const listItem = document.createElement('li');
    listItem.innerText = text ;
    listItem.classList.add("li-item")
    let span1 = document.createElement('span');
    let c = 10;
    let x1 = document.createTextNode("X");
    
    let span2 = document.createElement('span');
    let x2 = document.createTextNode("edit");
    span1.appendChild(x1);
    span2.appendChild(x2);
    const commanClass = `listItem-${count}`
    span1.classList.add(commanClass);
    listItem.classList.add(commanClass);
    listItem.setAttribute("id",`${commanClass}`)
    span1.classList.add('close');
    span2.classList.add('close2');
    
    listItem.appendChild(span1);
    listItem.appendChild(span2);


    
    list.appendChild(listItem);

    input.value = ""
    count++;
}
else{
    alert("please enter your todo! ")
}
    

})
        listWrapper.addEventListener("click",(e)=>{
            if( e.target.classList[0] == "li-item" ){
                e.target.classList.toggle("checked");
            }
            // else if(e.target.classList[0]=="close2"){
            //     let newtodo = prompt("Please edit your todo");
            //     e.target.parentNode.textContent =newtodo
            // }
           else if (e.target.classList[0]=="close2"){
            console.log("edit is clicked");
            const input = document.getElementsByTagName("input")[0]
            let getclass = e.target.parentElement.classList[1] ;
        
            input.value =e.target.parentElement.innerText.split("\n")[0]
            const editbtn = document.getElementById("editbtn");
            editbtn.disabled = false; 
            //////edit /////
            editbtn.addEventListener("click", ()=>{
                const getlist = document.getElementsByClassName(getclass)[0];
                console.log(getclass)
                console.log(getlist)
                getlist.textContent = input.value;
                let span1 = document.createElement('span');
                let x1 = document.createTextNode("X");
    
                let span2 = document.createElement('span');
                let x2 = document.createTextNode("edit");
                span1.appendChild(x1);
                span2.appendChild(x2);
                getlist.appendChild(span1);
                getlist.appendChild(span2);
                span1.classList.add(getclass);
    
                span1.classList.add('close');
                span2.classList.add('close2');
                
    
                editbtn.disabled = true;
                input.value = "";
                getclass = "empty";
                console.log(getclass)
            })
           }
            else {
                const className = e.target.classList[0];
                const list = document.getElementsByClassName(className)[0];
                list.remove();
            }
            
        })
        document.addEventListener('keypress', (event)=>{

            // event.keyCode or event.which  property will have the code of the pressed key
            let keyCode = event.keyCode ? event.keyCode : event.which;
       
            // 13 points the enter key
            if(keyCode === 13) {
              // call click function of the buttonn 
              addbtn.click();
            }
              
          });
