import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="mt-6 footer-container flex justify-evenly items-center px-12 py-6">
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
        <label for="my-modal-5" className="footer-btn">
          Know More
        </label>

        {/* <label for="my-modal-5" class="btn modal-button">
          open modal
        </label> */}

        <input type="checkbox" id="my-modal-5" class="modal-toggle" />
        <div class="modal ">
          <div class="modal-box w-11/12 max-w-5xl flex">
            <div>
              <h3 class="font-bold text-lg">
                How does the delivery & pick-up works?
              </h3>
              <p class="py-4">
                The delivery can be done at the point of your arrival like
                railway station, airport, bus terminals etc. or a point of your
                choice within the city limits. Similarly when you return, the
                pick-up will be arranged from the point of your arrival. If the
                point of delivery and pickup is not same, just inform our
                support team and they will do the needful. Please note that you
                need to have at least 2 hours for smooth delivery & pick-up.
              </p>
            </div>
            <div class="divider lg:divider-horizontal">OR</div>

            <div>
              <h3 class="font-bold text-lg">Why should you consider this?</h3>
              <p class="py-4">Save on rent</p>
              <p class="py-4">Travel-lite</p>
              <p class="py-4">Free Delivery & Pick-up*</p>
              {/* <div class="modal-action">
                <label for="my-modal-5" class="btn">
                  Yay!
                </label>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
