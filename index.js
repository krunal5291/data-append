
let student=(e)=>{
    e.preventDefault();

    let name=document.getElementById("name").value
    let number=document.getElementById("number").value
    let grid=document.getElementById("grid").value
    let coures=document.getElementById("coures").value

    console.log(name,number,grid,coures);

    let tr=document.createElement("tr")
    let td1=document.createElement("td")
    let td2=document.createElement("td")
    let td3=document.createElement("td")
    let td4=document.createElement("td")

    td1.innerHTML=name
    td2.innerHTML=number
    td3.innerHTML=grid
    td4.innerHTML=coures

    tr.append(td1,td2,td3,td4)

    document.getElementById("data").append(tr)

}


document.getElementById("form").addEventListener("submit",student)