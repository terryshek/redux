/**
 * Created by terryshek on 6/7/16.
 */
import axios from "axios";
export const getData  =  () =>{
    var deferred = Promise.defer();
    axios.get('https://api.github.com/users')
        .then(function (response) {
            if(response.status== 200){
                deferred.resolve(response.data);
            }
        })
        .catch(function (error) {
            deferred.reject(new Error(error));
        });
    return deferred.promise;
}
