import fetch from "node-fetch";

/* fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => {
        console.log(users);

        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((data) => data.json())
            .then((post) => {
                console.log(post);
        });
    }); */

/* Fetch; verileri almamızı sağlayan bir işlemdir. Yukarıda yaptığımız işlemde ikinci fetch işlemimiz
daha kısa sürdüğünden dolayı işlem sırasını karıştırarak daha önce basılacaktı. Biz bu işlemi 
ilk fetch işleminden sonra çağırarak manipüle etmiş oluyoruz. Dolayısıyla asenkron olarak çalışan
javascript'i senkronize etmiş oluyoruz. */


// yukarıdaki işlemi bir fonksiyona uyarlamak ve async, await kullanmak istersek:

async function getData(){
    const users = await(
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const data1 = await(
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    console.log(users);
    console.log(data1);
} 

getData();

