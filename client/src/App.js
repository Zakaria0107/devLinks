import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [activeSection , setActiveSection] = useState('links')
  return (
    <div className="bg-[#eeeeee] w-full min-h-screen md:pt-4">
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div class="w-[90%] mt-4 mx-auto grid grid-cols-5 gap-6">
        <div className="hidden md:block col-span-2 bg-white min-h-screen rounded-lg">
          mobile
        </div>
        {activeSection === 'links' && 
        <div className="col-span-5 md:col-span-3 bg-white min-h-screen rounded-lg">
          links
        </div>
        }
        {activeSection=== 'profile' && 
        <div className="col-span-5 md:col-span-3 bg-white min-h-screen rounded-lg">
          profile
        </div>}
      </div>
    </div>
  );
}

export default App;
