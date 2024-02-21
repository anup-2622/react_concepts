import React from 'react'
import Cardcontact from './Cardcontact'
import contacts from './Contact'

const Propsconcept = () => {
    // console.log(contacts);
  return (
    <div className='w-screen text-center bg-slate-200'>
      <h2>My Contact</h2>
      <div className="flex flex-wrap items-center justify-center">

      {contacts.map((data) =>
      (
        <Cardcontact key={data.id} name={data.name} number={data.phone} email={data.email} image={data.imgURL} />
        ))}
        </div>

      {/* <Cardcontact name="sipu raj" number="7549348178" email="anupk2622@gmail.com" image="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"/> */}
    </div>
  )
}

export default Propsconcept