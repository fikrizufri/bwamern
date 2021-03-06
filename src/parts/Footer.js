import React from "react";
import Button from "elements/Button";
import IconText from "parts/IconText";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">
              We kaboom your brauty holiday instantyl and memorable
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beinners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Term & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Contact Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@staycation.id"
                >
                  upport@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="+625656556">
                  025 - 656 - 556
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Samarinda, Kalimantan Timur</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright © 2019 - All rights reserved - Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
