import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layouts/Navbar';
import Homepage from './pages/Homepage';
import{Routes,Route}from 'react-router-dom';
import AddUser from './users/AddUser';
import UpdateUser from './users/UpdateUser';
import ReadUser from './users/ReadUser';
import DeleteUser from './users/DeleteUser';



function App() {
  return (
    <div className="App">
                  <Navbar/>
                  <Routes>
<Route  path="/" element={<Homepage/>}/>   
<Route  path="/addUsers" element={<AddUser/>}/>   
 <Route  path="/deleteUser/:id" element={<DeleteUser/>}/>   
<Route   path="/updateUser/:id" element={<UpdateUser/>}/>   
<Route  path="/getUser/:id" element={<ReadUser/>}/>   

</Routes>
    </div>
  );
}

export default App;
