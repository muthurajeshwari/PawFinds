import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>

    <div className="home">
        <div className="left">
            <h1>Find Your New Best Friend</h1>
            <p>When you adopt, you're not just saving a life — you're gaining a companion <br/>who will fill your home with love and loyalty.
            Let's make more<br /> tails wag and hearts smile.</p>
            <button className="adopt">Adopt Now!</button>
        </div>
        <img src="https://www.petplace.com/pet-adoption/media_1740aa105bbc41052f254093d1112ead04d221c37.jpeg?width=750&format=jpeg&optimize=medium" alt="" className="mainpic" />
    </div>

    <div className="section-heading">
      <h1>What you can do?</h1>
    </div>

    <div className="works">
        <div className="doings">
        <div className="dos">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-OaRvAcPh2MoQmS-2IEkLwrAKIuyoBj0sA&s" alt="" className="pic" />
            <h3 className="des">Adopt</h3>
            <p>Add a new member <br />to your family.</p>
        </div>
        <div className="dos">
            <img src="data:image/png;base64,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" alt="" className="pic" />
            <h3 className="des">Donate</h3>
            <p>Change lives one <br />penny at a time.</p>
        </div>
        <div className="dos">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCtNQxEnJqKRKQ03hRqNqBHepgY08Ao3AncUBVI9R_dNJc9zDzhslIgAm1PiPFFhiPl0&usqp=CAU" alt="" className="pic" />
            <h3 className="des">Foster</h3>
            <p>Shelter until you <br /> can with our help.</p>
        </div>
        <div className="dos">
            <img src="https://cdn-icons-png.freepik.com/512/1467/1467331.png" alt="" className="pic" />
            <h3 className="des">Volunteer</h3>
            <p>Help out with events <br /> and fundraisers.</p>
        </div>

        </div>
        
    </div>

    <div className="section-heading">
      <h1>Adopt a pet Don't Shop!</h1>
    </div>

    <div className="shop">
    <p>If you are an animal lover and looking to get a pet <br/>for your home, consider adopting one. There are many wonderful pets <br />waiting for you to take them home.<br /><button className="adopt">Adopt Now!</button></p>
    <img src="https://media.newyorker.com/photos/606b51c2313f23423168acbe/master/pass/Brewer-CompanionDogApplication.jpg" alt="" className='secondpic' />
    </div>


    


    </>
  )
}

export default Home
