import React from "react";
import Title from "../components/Title";
import logo from "../assets/Logo.jpg";
import Newsletter from "../components/Newsletter";

export default function About() {
  return (
    <div className="border-t pt-14">
      {/* About Title */}
      <div className="text-center mb-20">
        <Title text1={"About"} text2={"Us"} />
        <p className="text-sm text-gray-500 mt-3">
          Who we are & what we stand for
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
        {/* Image */}
        <div className="flex-1">
          <img
            src={logo}
            alt="About"
            className="w-full max-w-md mx-auto rounded-2xl border border-black/10 bg-[#FFF6EC] p-6"
          />
        </div>

        {/* Text */}
        <div className="flex-1 space-y-6 text-gray-600 leading-relaxed">
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
            veniam nihil autem magni dolores.
          </p>

          <div className="pt-4">
            <h3 className="text-xl font-semibold text-black mb-3">
              Our Mission
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              ipsam, accusamus non voluptatem impedit velit explicabo laborum,
              nemo praesentium magni doloremque sint ullam nulla mollitia
              aliquam architecto! Esse, debitis delectus.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-32">
        <div className="text-center mb-16">
          <Title text1={"Why"} text2={"Choose Us"} />
        </div>

        <div className="max-w-6xl mx-auto px-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card */}
          <div className="bg-[#FFF6EC] border border-black/10 rounded-2xl p-8">
            <h4 className="font-semibold text-black mb-3">
              Quality Assurance
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Mollitia rerum explicabo vitae autem optio laborum dicta,
              aspernatur sed facere sit dolorem aperiam ullam consequuntur.
            </p>
          </div>

          {/* Card */}
          <div className="bg-[#FFF6EC] border border-black/10 rounded-2xl p-8">
            <h4 className="font-semibold text-black mb-3">
              Convenience
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Mollitia rerum explicabo vitae autem optio laborum dicta,
              aspernatur sed facere sit dolorem aperiam ullam consequuntur.
            </p>
          </div>

          {/* Card */}
          <div className="bg-[#FFF6EC] border border-black/10 rounded-2xl p-8">
            <h4 className="font-semibold text-black mb-3">
              Exceptional Customer Service
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Mollitia rerum explicabo vitae autem optio laborum dicta,
              aspernatur sed facere sit dolorem aperiam ullam consequuntur.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-32">
        <Newsletter />
      </div>
    </div>
  );
}
