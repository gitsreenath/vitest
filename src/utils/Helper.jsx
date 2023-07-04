import axios from "axios"

export const add=(num1,num2)=>{
    if(typeof num1 === "number" || typeof num2 === "number")
    {

        return num1 + num2
    }
    return 0

}


export const reveser=(value)=>{
    return value.split("").reverse().join("")

}

export const api_url="https://jsonplaceholder.typicode.com/users"   

export const emp=['srenath',"savitha","sumesh","aryan"]

export const student=
{
    name:"sreenath",
    age:20,
}

export const fetchData=async()=>{
    const response=await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    return response.data
}