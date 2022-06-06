var data =  JSON.parse(localStorage.getItem("user"))||[]

  function Info(n,e,add,am){
    this.name = n
    this.email = e
    this.address = add
    this.amount = am
  }
  function sub(){
    event.preventDefault()
    name = document.querySelector("#name").value
    email = document.querySelector("#email").value
    address = document.querySelector("#address").value
    amount = Number(document.querySelector("#amount").value)
    document.querySelector("#name").value=null;
    document.querySelector("#email").value=null;
    document.querySelector("#address").value=null;
    document.querySelector("#amount").value=null;
    
    let p = new Info(name,email,address,amount)

    console.log(p)
    // data.push(p)
    localStorage.setItem("user",JSON.stringify(p))
  }

  sub()