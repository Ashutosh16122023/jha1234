import http from 'k6/http'

export const options ={
   stages:[
    {duration:'1m',target:200},
    {duration:'5m',target:200},
    {duration:'30s',target:0}
   ]
}
export default function (){
    http.get("https://www.amazon.in/")
}
 