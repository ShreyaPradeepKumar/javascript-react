import './App.css'
import { useState } from 'react';

function HomePage(){
  return <h1>Welcome to the Home Page</h1>
}
function App() {
  return
   <div><Routes> 
    <Route path="/" element={<HomePage />} />
  </Routes>
</div>
}
export default App;