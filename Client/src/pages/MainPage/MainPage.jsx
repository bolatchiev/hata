
import FilterCard from "../../widgets/FilterCard";

import React from 'react'
import LoginPage from '../LoginPage/LoginPage'
import RegFormPage from '../RegFormPage/RegFormPage'

export default function MainPage() {
  return (
    <>

      <FilterCard />
    
        <LoginPage/>
        <RegFormPage/>
    </>
  )

}
