
// let myRequest= new XMLHttpRequest();
// // open request to input CRUD METHOD and link ....ect 
// myRequest.open("GET","https://api.github.com/users/amrelbardini/repos");
// //send request 
// myRequest.send(); 

// myRequest.onreadystatechange=function(){
//     if(this.readyState===4 && this.status===200){
//         let jsObj=JSON.parse(this.responseText);
//         // console.log(jsObj);
//         for(let i=0;i<jsObj.length;i++){
//             let hr=document.createElement('hr');
//             let div=document.createElement("div").appendChild(hr);   
//             let repoName=document.createTextNode(`${i+1}-${jsObj[i].full_name}`);
//             div.appendChild(repoName);
//             document.body.appendChild(div);
//         }
//     }
// }


  const getData=(apiLink)=>{
    return myPromise=new Promise((resolve,reject)=>{
        let myRequest=new XMLHttpRequest();
        myRequest.onload=function(){
            //check on ready state change and status 
            if(this.readyState===4 && this.status===200){
                resolve(JSON.parse(this.responseText));
            }else{
              reject(Error("connection failed!"));
            }
        };
        myRequest.open("GET",apiLink);
        myRequest.send();

    }); 

  };

// getData("https://api.github.com/users/amrelbardini/repos").then((result)=>{console.log(result)});

let renderInDom= async(apilink)=>{
  const result= await getData(apiLink).then((result)=>{return result});
  console.log(result);
  for(let i=0;i<result.length;i++){
                let strong=document.createElement('b');
                let div=document.createElement("div");   
                let repoName=document.createTextNode(`${i+1}-${result[i].full_name}`);
                strong.appendChild(repoName);
                div.appendChild(strong);
                document.body.appendChild(div);
                div.setAttribute("style","margin:10px;color:#333;background-color:#ccc; font-size:17px;border-bottom:1px solid #ccc; padding:10px");
            }


}
const apiLink="https://api.github.com/users/amrelbardini/repos";
renderInDom(apiLink);
