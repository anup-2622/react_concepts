import React from 'react'
import Cardcontact from './Cardcontact'
import contacts from './Contact'

const Propsconcept = () => {
    // console.log(contacts);
  return (
    <div className=''>
      <h2>My Contact</h2>
      {contacts.map((data) =>
      (
          <Cardcontact  name={data.name} number={data.phone} email={data.email} image={data.imgURL} />
      ))}

      {/* <Cardcontact name="sipu raj" number="7549348178" email="anupk2622@gmail.com" image="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"/> */}
    </div>
  )
}

export default Propsconcept