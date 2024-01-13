import React from "react";

const Newsletter = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <div className="flex items-center justify-center lg:w-3/5 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug ">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <div className="flex items-center justify-center gap-8">
            <button className="btn-primary">
              Get a Demo{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                className="inline-block ml-2"
              >
                <path
                  d="M6.71673 4.75L8.43584 3.03089C8.63972 2.82701 8.63972 2.49646 8.43584 2.29258L6.71673 0.573474M8.28293 2.66174L0.625976 2.66174"
                  stroke="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
