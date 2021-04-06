import React from 'react';
class AddPost extends React.Component{
    
    render(){
        return(
            <div className= "add-blog">
             <h1>AddPost</h1>
             <form>
              <label>
                  Title: 
              </label>
              <input type= "text" /><br/><br/>
              <input type = 'file'/><br/><br/>
              <label>
                 Description: 
              </label>
             <textarea / > <br/><br/>
             <input type="submit"/>
             </form>
            </div>
        );
    }
}
export default AddPost;