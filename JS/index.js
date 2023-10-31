// const xhr = new XMLHttpRequest();
// xhr.open("GET","https://fakestoreapi.com/products?limit=5");
// xhr.responseType = "application/json";
// xhr.onload = () => {
//     let body = JSON.parse(xhr.response);
//     body.forEach(resp => {
//         console.log(resp);
//     });
//     console.log(xhr.response);
//     console.log(xhr.responseType);
//     console.log(`response: ${body[0].toString}`);
// }
// xhr.send();

const xhrRequest = (method,url, data) =>{
    const promise = new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = "json";
        xhr.onload = () => {
            resolve(xhr.response);
        }
        xhr.onerror = () =>{
            console.log(`error occured ${xhr.HEADERS_RECEIVED}`)
        }
        if(data){
            xhr.setRequestHeader("content-type","application/json");
            xhr.send(JSON.stringify(data));
        }
        else{
            xhr.send();
        }
    });

    return promise;
}

const getData = xhrRequest("GET", "https://fakestoreapi.com/products?limit=5")
                .then(rd =>{
                    rd.forEach(element => {
                        console.log(rd);
                    });
                });
const postData = xhrRequest("POST","https://fakestoreapi.com/auth/login", {
                                    username: "mor_2314",
                                    password: "83r5^_"
                                })
                                .then(rd =>{
                                    console.log(JSON.stringify(rd));
                                }).catch(rd =>{
                                    console.log(JSON.stringify(rd));
                                });

// const btn = document.getElementById("get-started");
// btn.addEventListener("click",xhr);