import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Links from "./components/Links";
import Profile from "./components/Profile";
import MobilePreview from "./components/MobilePreview";
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function App() {
  const nav = useNavigate()
  const [activeSection , setActiveSection] = useState('links')
  const [listLinks , setListlink] = useState([{id : 1 , platform : "" , link : ""}])
  const [user , setUser] = useState({}) 
  const getUser = () => {
    if(localStorage.user){
      let userId = JSON.parse(localStorage.user)._id
      let token = JSON.parse(localStorage.user).token
      axios.get(`${process.env.REACT_APP_API_URL}/user/${userId}` , { headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
      }})
      .then(res => {
        setUser(res.data)
        if(res.data.listLinks && res.data.listLinks.length > 0) {
          setListlink(res.data.listLinks)
        }
          
      })
      .catch(err => {
        localStorage.clear()
        nav('/login')
      })
    }else {
      nav('/login')
    }
    
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="bg-[#eeeeee] w-full min-h-screen md:pt-4">
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="w-[90%] mt-4 mx-auto grid grid-cols-5 gap-6">
        <MobilePreview user={user} listLinks={listLinks} setListlink={setListlink} />
        {activeSection === 'links' && 
            <Links listLinks={listLinks} setListlink={setListlink} getUser={getUser} />
        }
        {activeSection=== 'profile' && 
          <Profile userFirstName={user.firstName} userLastName={user.lastName} userEmail={user.email}  getUser={getUser} />
        }
      </div>
    </div>
  );
}

export default App;
