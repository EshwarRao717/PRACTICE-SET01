import React from 'react'
import Coursetitle from './Coursetitle'
import Coursedescription from './Coursedescription'
import Coursehighlights from './Coursehighlights'
import Instructorinformation from './Instructorinformation'

const Coursepage = () => {
  return (
    <div>Coursepage
        <Coursetitle/>
        <Coursedescription/>
        <Coursehighlights/>
        <Instructorinformation/>
    </div>
  )
}

export default Coursepage