import React, { useState } from "react";
import "./about.css";

const tipsData = [
  {
    img: "https://www.netmeds.com/images/cms/magefan_blog/nmslite/1743611619_Pet-Care_480x180.jpg",
    title: "Which Pet is Right for You?",
    content:
      "Not every pet suits every person. Dogs need time and attention, while cats are more independent. Birds and fish require less interaction but still need care. Think about your lifestyle, home space, and energy levels. This helps you make a thoughtful, lasting choice.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8nQHhanvGaPcI7niIOS9VTtNjwi4Ep9f2mzFg_ZepGgJQd-ExPipJt-B7w0_aqQV-Wk8&usqp=CAU",
    title: "First-Time Pet Owner Checklist",
    content:
      "Starting your pet journey? You’ll need the basics: quality food, a cozy bed, toys, grooming tools, and a vet contact. Vaccinations and ID tags are must-haves. Preparing these essentials early ensures a smooth transition. It also shows your pet they’re already loved..",
  },
  {
    img: "https://www.globalcu.org/contentassets/d86fb4cad7fa4d5082b6c44d1c7fa265/promo.split_pet-budget_mobile.png",
    title: "Time & Budget Considerations",
    content:
      "Pets aren’t just cute—they require time and money. Factor in food, grooming, vet bills, and your availability for walks or play. Unexpected costs can arise too. Planning realistically keeps both you and your pet happy in the long run.",
  },
  {
    img: "https://housesittingmagazine.com/wp-content/uploads/2021/08/Preparing-for-pet-sitters.jpg",
    title: "Preparing Your Home for a Pet",
    content:
      "Pets explore, chew, and shed! Make your home safe by securing wires, removing toxins, and setting up their space. Add comfort with beds, scratch posts, or kennels. The more welcoming your home, the faster your pet settles in.",
  },
];

function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <div className="section-heading">
        <h1>Excited to get a pet, but still confused?</h1>
      </div>
      <section className="tips">
        {tipsData.map((tip, index) => (
          <div className="tips-card" key={index}>
            {activeIndex === index ? (
              <div className="tip-content">{tip.content}</div>
            ) : (
              <img src={tip.img} alt="" className="pics" />
            )}
            <button className="btn" onClick={() => setActiveIndex(index)}>
              {tip.title}
            </button>
          </div>
        ))}
      </section>
      <div className="section-heading">
        <h1>Why PawFinds?</h1>
      </div>

      <section class="features">
        <div class="card">
          <div class="icon"></div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROEdFydGtSeFfLJKPMSVMk9HytBLw4wfwBgw&s"
            alt=""
            className="feature-pics"
          />
          <h3>Healthy Pet</h3>
          <p>
            Being pet lovers our self, we understand the importance of a pet’s
            health. All our puppies are at least eight weeks old when they are
            sent to you.
          </p>
        </div>

        <div class="card">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="feature-pics"
          />
          <h3>Vaccinated & Insured Pet</h3>
          <p>
            To make the initial experience with your furry family member smooth
            and trouble-free, we make sure that all our puppies are up-to-date
            on their vac cinations and are insured.
          </p>
        </div>

        <div class="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvyBo0KVgv4poxfCMur7px1tW5g1tYwxIQhp7Ie0O0nU6veB0ViBekjcyfoOeqG6F_nz4&usqp=CAU"
            alt=""
            className="feature-pics"
          />
          <h3>Responsible Breeders</h3>
          <p>
            All of our puppies are raised by responsible breeders who consider
            their pet’s health their foremost priority. We have zero tolerance
            for puppy mills and all our breeders are pet lovers just like us who
            are looking for the best homes for their fur babies.
          </p>
        </div>
        <div class="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWCEANOACb36NLF7Olyn3y2jzmazVCE98CyunVwiEYdLEpHa6AvLqj_JHU-CcMp9BHK2M&usqp=CAU"
            alt=""
            className="feature-pics"
          />
          <h3>Easy and Hassle-free Process</h3>
          <p>
            With Mr N Mrs Pet, your journey with a pet starts with no
            difficulties. You have access to adorable pets looking for furever
            homes nationwide. You can receive guidance regarding any pet-related
            aspect in the comfort of your home.
          </p>
        </div>
        <div class="card">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E10AQH50hbWrX-zIA/image-shrink_800/B4EZYhMs_6HgAg-/0/1744313703715?e=2147483647&v=beta&t=45-bm6iJKgqeNjtcQuS7awQJn7kHis3dUPkFwGOMdDM"
            alt=""
            className="feature-pics"
          />
          <h3>Expert Pet Guidance</h3>
          <p>
            Our pet experts will guide you throughout your journey as a pet
            parent and will always be at your beck and call there to help you.{" "}
          </p>
        </div>

        <div class="card">
          <img
            src="https://nationaltoday.com/wp-content/uploads/2021/02/National-Pet-Parents-Day-1.jpg"
            alt=""
            className="feature-pics"
          />
          <h3>Happy Pet Parenting</h3>
          <p>
            We don’t stop at providing you with a furry family member and
            guidance related to it. We are also connected with service providers
            such asveterinarians trainers, groomers, and hostels.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
