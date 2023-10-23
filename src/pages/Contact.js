import React from "react";

const Contact = () => {
  return (
    <main className="relative">
      <section className="mx-auto max-w-[360px] md:max-w-lg lg:max-w-[1450px] flex flex-col mt-[6rem] overflow mb-[8rem]">
        <h1 className="text-[2rem] mb-20 self-center font-medium border-b-[3px] w-fit border-[#102619]">
          Contact us
        </h1>
        <p className="text-[1.3rem]">
          If you have any question, any problem with a product or even any tip
          for improving send us a message!
        </p>
        <div className="flex flex-row justify-between items-center">
          <form className="flex flex-col w-[100%] lg:w-[50%] mt-12">
            <label className="text-[1.1rem] uppercase font-medium mb-2">
              Your name
            </label>
            <input
              className="text-[1.3rem] border-b-[3px] border-[#102619] bg-transparent"
              type="text"
            />
            <label
              className="text-[1.1rem] uppercase font-medium mb-2 mt-10"
              type="email"
              placeholder="Your e-mail here"
            >
              Your e-mail
            </label>
            <input
              className="text-[1.3rem] border-b-[3px] border-[#102619] bg-transparent"
              type="text"
            />
            <label
              className="text-[1.1rem] uppercase font-medium mb-2 mt-10"
              type="email"
              placeholder="Your e-mail here"
            >
              Your message
            </label>
            <textarea
              className="text-[1.1rem] mt-10 border-[3px] border-[#102619] rounded-md"
              cols="50"
              rows="10"
            ></textarea>
            <button className="mt-10 items-center text-[1.2rem] border-[3px] px-4 py-2 rounded-[0.3rem] border-[#000000] font-medium hover:bg-[#BCD2C5] transition">
              Submit
            </button>
          </form>
          <div className="hidden lg:block">
            <img src="/images/svg/contact.svg" alt="Letter" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
