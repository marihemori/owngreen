import React from "react";

const Newsletter = () => {
  return (
    <section className="mx-auto max-w-[360px] md:max-w-lg lg:max-w-[1450px] flex lg:flex-row items-center justify-between mt-[8rem] mb-[8rem]">
      <div className="hidden lg:block lg:w-[50%]">
        <img src="/images/svg/newsletter.svg" alt="Nature" />
      </div>
      <div className="lg:w-[50%] lg:text-right">
        <h2 className="h2 mb-6 font-medium">Newsletter</h2>
        <p className="text-[1.3rem]">
          If you are interested on receive news about the seeds world, ngo’s
          work, and preservation just subscribe for our newsletter.
        </p>
        <form className="mt-8 flex justify-end gap-1">
          <input
            className="px-4 py-2 border-[#102619] border-[3px] text-[1.3rem] lg:w-[46%] rounded-[0.3rem]"
            type="email"
            placeholder="Your e-mail here"
          />
          <button className="text-[1.3rem] border-[3px] px-4 py-2 rounded-[0.3rem] border-[#000000] font-medium hover:bg-[#BCD2C5] transition w-fit lg:self-end">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
