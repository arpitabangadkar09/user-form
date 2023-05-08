import  {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const submitstring  = () => {
       console.log('first name', myfirstname);
       console.log('last name', mylastname);
       console.log('email',myemail );
       console.log('password',mypassword);
       console.log('contact',mycontact);

  }
 

  const [myfirstname, setMyfirstname] = useState('');
  const [mylastname, setMylastname]  = useState('');
  const [myemail, setMyemail] = useState('');
  const [mypassword, setMypassword] = useState('');
  const [mycontact, setMycontact] = useState('');
  

  return (


    <div className="App">
         <h1> User Form </h1>

         
         <br></br><br></br>
         <div>
               First Name <br></br>
              <input type = "text" value = {myfirstname} onChange = {(e) =>setMyfirstname(e.target.value)}/>
         </div>
         <br></br>
         <div>
               Last Name  <br></br>
               <input type = 'text' value = {mylastname} onChange = {(e) =>setMylastname(e.target.value)} />
         </div>
         <br></br>
         <div>
               Email Id <br></br>
               <input type  = 'email' value = {myemail} onChange = {(e) =>setMyemail(e.target.value)}  />
         </div>
          <br></br>
          <div>
                Password <br></br>
                <input type = 'password' value = {mypassword} onChange = {(e) =>setMypassword(e.target.value)}  />
          </div>
          <br></br> 
          <div>
                 Contact Number<br></br>
                 <input type = 'text' value = {mycontact} onChange = {(e) =>setMycontact(e.target.value)} />
          </div>
          <br></br>
          <button onClick = { () => {submitstring()}}> submit </button>
         
    </div>
  );
}

export default App;
