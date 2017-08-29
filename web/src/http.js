import _ from 'lodash';

function httpRequest() {
    var http = new XMLHttpRequest();    

    function templateMethod(method, url, async, config){
        return new Promise((resolve, reject) => {

                http.open(method, url, async);

                http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

                http.onreadystatechange = () => {
                    if(http.status == 200 && http.readyState == 4){ 
                        resolve(JSON.stringify(http.response));                        
                    } else if(http.status >= 400){
                        reject(http.responseText);
                    }
                }

                http.send(JSON.stringify(config));        
        });
    }

    return {
        post: function(url, config){
            return templateMethod("POST", url, true, config);
        },
        get : function(){
            return templateMethod("GET", url, true);
        }
    }
}

export default httpRequest();