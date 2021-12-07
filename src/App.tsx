import React from 'react'
import { Toolbar } from './Toolbar'
import { FrontPage } from './FrontPage'
import { TypeOfContent } from './TypeOfContent'
import { ProfessionalInfo } from './ProfessionalInfo'
import { PersonalInfo } from './PersonalInfo'
import { Footer } from './Footer'

function App() {
  const [showProfessional, setShowProfessional] = React.useState(true);

  const changeType = (isProfessional: boolean) => {
    setShowProfessional(isProfessional)
    console.log(isProfessional)
  }

  return (
    <div className="App bg-gray-100 text-green-800 dark:bg-gray-800 dark:text-green-200 transition-colors duration-300 text-lg">
      <Toolbar/>
      <FrontPage/>
      
      <TypeOfContent changeType={changeType}/>
      {
        showProfessional ?
          <ProfessionalInfo/> :
          <PersonalInfo/>
      }
      <Footer/>
    </div>
  );
}

export default App;
