import axios from "axios";

async function getData(id){
    const user = await (
        await axios("https://jsonplaceholder.typicode.com/users/"+id)
    );

    const posts = await (
        await axios("https://jsonplaceholder.typicode.com/posts?userId="+id)
    );
   
    console.log(user.data);
    console.log(posts.data);
}

export default getData;