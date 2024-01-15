import { useState } from "react";
import NavBar from "./components/NavBar";
import Links from "./components/Links";
import Profile from "./components/Profile";
import MobilePreview from "./components/MobilePreview";

function App() {
  const [activeSection , setActiveSection] = useState('links')
  const [listLinks , setListlink] = useState([{id : 1 , platform : "" , link : ""}])


  return (
    <div className="bg-[#eeeeee] w-full min-h-screen md:pt-4">
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div class="w-[90%] mt-4 mx-auto grid grid-cols-5 gap-6">
        <MobilePreview listLinks={listLinks} />
        {activeSection === 'links' && 
            <Links listLinks={listLinks} setListlink={setListlink} />
        }
        {activeSection=== 'profile' && 
          <Profile />
        }
      </div>
    </div>
  );
}

export default App;
