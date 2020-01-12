

function MessageBoard(){

  this.load =  ()=> {
    document.querySelector( '#save' ).addEventListener( 'click', () => {
      this.save(document.getElementById("pass").value, document.getElementById("desc").value);
    });
    this.render()
  },

  this.render = () => {
    fetch("http://localhost:3434/messages")
    .then(res => res.json())
    .then(messages => {
      const hash = {};
      for (let i = 0; i < messages.length; i++) {
        const messageId = messages[i]._id;
        if (!document.getElementById(messageId)) this.create(messages[i]);
        hash[messageId] = true;
      }

      const childNodes = document.getElementById("message-list").childNodes;
      for (let i = 0; i < childNodes.length; i++) {
        const childId = childNodes[i].id;
        if (!hash[childId]) {
          //deleteNode(childId);
        }
      }
    }) 
  }, 
  
  this.refresh =  () => setInterval(() => this.render(), 10000), 

  this.save = ( pass, msg ) => {
    let body = {
      msg: msg ,
      pass: pass
    }

     if (!body.msg || !body.pass) {
       const newMessage = document.getElementById("new-message");
       const warning = document.createElement("span");
       warning.innerText = "All fields must be filled.";
       warning.setAttribute("id", "warning");
       newMessage.append(warning);
   
     }
     fetch("/save-info", {
       method: "POST",
       mode: 'cors', // no-cors, *cors, same-origin
       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
       credentials: 'same-origin',
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(body)
     }).then( (body) => body )
  };

  this.delete = () => {
    const id = this.parentElement.id;
    const parentLi = document.getElementById(id);
    parentLi.parentElement.removeChild(parentLi);
  
    fetch(`/messages/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  this.create = (data) => {
    const messages = {
      message: data.message,
      id: data._id 
    }
    console.log(data)
    const list = document.getElementById("message-list").childNodes;
    const listElement = document.createElement("li");

    listElement.innerText = messages.message;
    listElement.setAttribute("id", message.id);

    const button = document.createElement("button");
    button.innerText = "Delete";
    button.setAttribute("class", "del");
    button.addEventListener("click", deletePost);

    listElement.append(button);
    list.append(li);
  };

  this.runMessageBoard = () => {
    this.load()
    this.render()
    //this.refresh()
    
    console.log('running')
  };
}
  
function deleteNode(id) {
  const parentLi = document.getElementById(id);
  parentLi.parentElement.removeChild(parentLi);
}

let app = new MessageBoard()
console.log(app.runMessageBoard())