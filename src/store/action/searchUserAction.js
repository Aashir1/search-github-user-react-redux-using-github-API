
class GitAction {
    static SAVE_USERS = 'SAVE_USERS';
    
    static searchUser(userName) {
        console.log(userName);
        return (dispatch) => {


            let response = GitAction.fetchJSON(`https://api.github.com/users/${userName}`);
            response.then(user => {
                console.log(user.name); 
                 
                let obj = {
                    name: user.login,
                    imageURL: user.avatar_url,
                    profileURL: user.html_url
                }
                dispatch(GitAction.storeUser(obj));
            })
        }
    }

    static fetchJSON(URL) {
        return fetch(URL).then(response =>  response.json() )
            .catch(err => console.log('Error:', err));
    }

    static storeUser(obj){
        return{
            type: GitAction.SAVE_USERS,
            obj
        }
    }
}



export default GitAction;



