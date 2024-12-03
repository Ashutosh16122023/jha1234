import http from 'k6/http'
import { check } from 'k6'

export const options = {

    vus:10,
    duration:'5s'

}
const url="https://jsonplaceholder.typicode.com/posts"
const data=open('./payload.json')

export default function(){

    const response=http.post(url, data)
        console.log("*** printing payload ***",data)
        

    }
    check(response, {
        'status code validation':(response)=> response.status ===201})
        'Response Id Validation'; (response)=> response.body.includes('id')
