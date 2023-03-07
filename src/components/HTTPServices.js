import environment from '../Environment';

export default function HttpService(){
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer`
  }

  return {
    GET: async function(url){

      fetch.baseUrl
      url = environment.baseUrl +  url;
      headers['Authorization'] = localStorage.getItem('token');
      return await fetch(url,{
        method:"GET",
        headers:headers
        }).then((response)=>  response);
    },
    POST: async function(url,data){
      url = environment.baseUrl +  url;
      headers['Authorization'] = localStorage.getItem('token');
      return await fetch("url",{
        method:"POST",
        headers:headers,
        body:data
        });
    }
  }  
}
