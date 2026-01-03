import React from "react";
import Title from "../components/Title";
import logo from "../assets/Logo.jpg";
import Newsletter from '../components/Newsletter'

export default function About() {
  return (
    <div>
      <div>
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div>
        <img src={logo} alt="About Image" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            architecto eum, optio similique vel soluta eius fugiat blanditiis
            quasi quod maxime est magnam totam laudantium accusantium atque
            alias corrupti perspiciatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            deserunt. Voluptatem ex laboriosam, consequatur esse unde minima.
            Libero quasi cupiditate temporibus! Ullam impedit maxime dicta
            veniam nihil autem magni dolores?
          </p>
          <b>Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam,
            accusamus non voluptatem impedit velit explicabo laborum, nemo
            praesentium magni doloremque sint ullam nulla mollitia aliquam
            architecto! Esse, debitis delectus.
          </p>
        </div>
      </div>
      <div>
        <Title text1={"Why"} text2={"Choose Us"} />
      </div>
      <div>
        <div>
          <b>Quality Assurance</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            rerum explicabo vitae autem optio laborum dicta, aspernatur sed
            facere sit dolorem aperiam ullam consequuntur beatae laboriosam
            modi, blanditiis delectus quae.
          </p>
        </div>
        <div>
          <b>Convenience</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            rerum explicabo vitae autem optio laborum dicta, aspernatur sed
            facere sit dolorem aperiam ullam consequuntur beatae laboriosam
            modi, blanditiis delectus quae.
          </p>
        </div>
        <div>
          <b>Exceptional Customer Service</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            rerum explicabo vitae autem optio laborum dicta, aspernatur sed
            facere sit dolorem aperiam ullam consequuntur beatae laboriosam
            modi, blanditiis delectus quae.
          </p>
        </div>
      </div>
      <Newsletter/>
    </div>
  );
}
