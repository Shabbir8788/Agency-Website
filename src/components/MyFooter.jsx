import React from "react";
import logo1 from "../assets/logo1.png";
import { Footer } from "flowbite-react";

import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer className=" px-4 lg:px-14 bg-[#263238] max-w-screen-2xl mx-auto py-12">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 gap-8">
          <div className=" mt-8 space-y-4 flex flex-col gap-8 ">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={logo1}
                alt=""
                className="w-10 inline-block items-center "
              />
              <span className="text-white">Ambition</span>
            </a>

            <div className="text-[#F5F7FA] text-sm mb-1">
              <p>Copyright © 2020 Ambition ltd.</p>
              <p>All rights reserved</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:mt-4 lg:grid-cols-3 sm:gap-6 ">
            <div>
              <Footer.Title title="Company" className="text-white" />
              <Footer.LinkGroup col className="text-[#F5F7FA]">
                <Footer.Link href="#">About us</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
                <Footer.Link href="#">Contact us</Footer.Link>
                <Footer.Link href="#">Pricing</Footer.Link>
                <Footer.Link href="#">Testimonials</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Support" className="text-white" />
              <Footer.LinkGroup col className="text-[#F5F7FA]">
                <Footer.Link href="#">Help center</Footer.Link>
                <Footer.Link href="#">Terms of service</Footer.Link>
                <Footer.Link href="#">Legal</Footer.Link>
                <Footer.Link href="#">Privacy policy</Footer.Link>
                <Footer.Link href="#">Status</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Stay up to date" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className="w-full rounded-md p-2 bg-neutralDGrey"
                  />
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Ambition" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
