import { useState } from "react";
import axios from "axios";

const projectID = "95537658-d464-4ce4-81d5-48091183c73e"

const  Modal =()=>{

const[username,setUsername]=useState('');
const[password,setPassword]=useState('');
const[error,setError]=useState('');

const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };



return(
<div className="wrapper">
    <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onChange={handleSubmit}>

            <input  className="input" placeholder="username" type="text" value={username} onChange={(e)=> setUsername(e.target.value)} required />
            <input  className="input" placeholder="password" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required />

             <div align = 'center'>
                <button className="button">
                    <span> start chatting</span>
                </button>
             </div>
        </form>
        <h1>{error}</h1>
    </div>
</div>

)

}
export default Modal;