import environment from "../Environment";

export const interceptor = async () => {
    const { fetch: originalFetch } = window;
    window.fetch = async (...args) => {
      let [resource, config] = args;
      let token = localStorage.getItem('token');
      let headers = {
        "Content-Type": "application/json",
        "Authorization":  token ? token : 'Bearer'
     }
     
     if(config == undefined){
      config = {headers:headers};
     }else{
      config['headers'] = headers;
     }
      if(resource.charAt(0) === '/'){
        resource = resource.substring(1,resource.length)
      }
      resource = environment.baseUrl + resource;
      const response = await originalFetch(resource, config);
      return response;
    };
  };

