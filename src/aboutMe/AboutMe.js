import { useEffect, useState } from "react";
import { getImages } from "../APIManager";
import '../index.css';
export const AboutMe = () => {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    getImages().then((data) => setImgs(data));
  }, []);

  return (
    <>
      <div className="flex flex-row w-[90%] justify-center items-center mx-auto my-[180px] border-2 border-green-600 rounded-xl">
        <article className="w-[45%] p-4">
          <p>
            Hey there, I'm Wesley, and I'm excited to share a bit about myself
            with you. One of my favorite things to do is create. There's
            something so satisfying about building things with my own two hands.
            Currently, I'm working on a chicken run for my Aunt, and I'm having
            a blast doing it.
          </p>
          <p>
            Growing up on a farm in West TN, self-sufficiency was just a way of
            life. We grew our own food and hunted for our meals, and it was a
            huge part of my upbringing. Even to this day, my dad still lives on
            the farm and continues to grow, hunt, and fish for much of his own
            food. It's a lifestyle that has instilled in me the values of
            resourcefulness and self-reliance.
          </p>
          <p>
            When I'm not building things, I love being outdoors. One of my
            favorite activities is hiking with my dog Poppy and my partner
            Vision. We love exploring the mountains of Tennessee and finding
            hidden trails with stunning views. I'm also a big fan of biophilic
            design, which is all about bringing the outside world inside. I can
            spend hours searching for pictures of AI-generated biophilic homes,
            filled with plants and moss.
          </p>
          <p>
            I'm an enneagram four and an INFP, which means I'm a natural
            people-pleaser who finds fulfillment in helping others. My dream is
            to travel to Asia and experience all the incredible views it has to
            offer, from tropical paradises to magical forests. I'm constantly
            dreaming of new adventures and experiences.
          </p>
          <p>
            Ultimately, my dream is to live in a house surrounded by trees and
            continue exploring the outdoors and creating with my hands. Thanks
            for taking the time to learn a bit about me. I can't wait to learn
            more about you too!
          </p>
        </article>
        <div className="carousel h-[30%] rounded-box w-[45%] mx-auto">
  {imgs.map((img) => {
    return (
      <div className="carousel-item h-[400px] p-5 flex items-center justify-center">
        <img
          src={img.url}
          className="max-h-full max-w-full"
        />
      </div>
    );
  })}
</div>
      </div>
    </>
  );
};
