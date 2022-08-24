import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faRightToBracket,
  faCreditCard,
  faUserGroup,
  faAnglesUp,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="30px"
      fill="green"
    >
      <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
    </svg>
  );

  return (
    <div>
      <div className="mt-2 footer footer-container flex justify-evenly items-center px-12 py-6">
        <h1 className="text-2xl text-white font-bold ">
          Traveling via Delhi,
          <br /> <span>Dehradun or Chandigarh?</span>
        </h1>
        <h1 className="text-2xl text-white font-bold ">
          Rent while you transit <br />
          <span> & save even more!</span>
        </h1>
        <div className="flex flex-col  justify-center items-center">
          <h1 className="text-white">
            Save upto <span className="text-xl text-white font-bold">20%</span>
          </h1>
          {/* modal button */}
          <label for="my-modal-5" className="footer-btn">
            Know More
          </label>

          {/* modal content */}

          <input type="checkbox" id="my-modal-5" class="modal-toggle" />
          <div class="modal ">
            <div class="modal-box w-11/12 max-w-5xl">
              <div className="flex justify-center items-center ">
                <div>
                  <h3 class="font-bold text-lg">
                    How does the delivery & pick-up works?
                  </h3>
                  <p class="py-4">
                    The delivery can be done at the point of your arrival like
                    railway station, airport, bus terminals etc. or a point of
                    your choice within the city limits.
                  </p>
                  <p class="py-4">
                    Similarly when you return, the pick-up will be arranged from
                    the point of your arrival. If the point of delivery and
                    pickup is not same, just inform our support team and they
                    will do the needful.
                  </p>
                  <p class="py-4">
                    Please note that you need to have at least 2 hours for
                    smooth delivery & pick-up.
                  </p>
                </div>
                <div class="divider lg:divider-horizontal"></div>
                <div className="w-full">
                  <div class="modal-action">
                    <div>
                      <h3 class="font-bold text-lg">
                        Why should you consider this?
                      </h3>

                      <p class="py-4 flex ">
                        {icon}
                        <span className="pl-4"> Save on rent</span>
                      </p>
                      <p class="py-4 flex">
                        {icon} <span className="pl-4"> Travel-lite</span>
                      </p>
                      <p class="py-4 flex">
                        {icon}
                        <span className="pl-4"> Free Delivery & Pick-up*</span>
                      </p>
                      <h3 class="font-bold text-lg py-4">
                        Want to rent, while you transit?
                      </h3>
                      <div className="flex ">
                        <label
                          for="my-modal-5"
                          class="btn-outline btn-warning btn"
                        >
                          No
                        </label>
                        <label
                          for="my-modal-5"
                          class="btn btn-outline btn-warning ml-4"
                        >
                          Yes
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer for small screen */}
      <div className="flex lg:hidden  justify-evenly items-center p-2">
        <div className="flex flex-col sm-footer justify-center items-center">
          <h1>
            <FontAwesomeIcon icon={faAnglesUp}></FontAwesomeIcon>
          </h1>
          <h1>Categories</h1>
        </div>

        <div className="flex flex-col sm-footer justify-center items-center">
          <h1>
            <FontAwesomeIcon icon={faCreditCard} />
          </h1>
          <h1>Offers</h1>
        </div>
        <div className="flex flex-col sm-footer justify-center items-center">
          <h1>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </h1>
          <h1>Search</h1>
        </div>
        <div className="flex flex-col sm-footer justify-center items-center">
          <h1>
            <FontAwesomeIcon icon={faUserGroup} />
          </h1>
          <h1>Refer & Earn</h1>
        </div>
        <div className="flex flex-col sm-footer justify-center items-center">
          <h1>
            <FontAwesomeIcon icon={faRightToBracket} />{" "}
          </h1>
          <h1>SignUp</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
