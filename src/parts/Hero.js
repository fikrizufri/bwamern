import React from "react";
import Fade from "react-reveal/Fade";

import ImgHero from "assets/images/img-hero.png";
import ImgHeroFrame from "assets/images/img-hero-frame.png";
import IcnCities from "assets/images/icon/icon_cities.svg";
import IcnTreasure from "assets/images/icon/icon_treasure.svg";
import IcnTraveler from "assets/images/icon/icon-traveler.svg";

import Button from "elements/Button";
import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  //   const Title = []; return this.props.users.map(user => this.userCard(user));
  const Title = props.data.title;
  const TagLine = props.data.tagline;

  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div
            className="col-auto pr-5"
            style={{
              width: 530,
            }}
          >
            <h1
              className="font-weight-bold line-height-1"
              dangerouslySetInnerHTML={{
                __html: Title,
              }}
            ></h1>
            <p
              className="mb-3 font-weight-light text-gray-500 w-75"
              style={{
                lineHeight: "170%",
              }}
              dangerouslySetInnerHTML={{
                __html: TagLine,
              }}
            ></p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>
            <div
              className="row"
              style={{
                marginTop: 80,
              }}
            >
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={IcnTraveler}
                  alt={`${props.data.travelers} Traveler`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)}
                  <span className="text-gray-500 font-weight-light ml-1">
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={IcnTreasure}
                  alt={`${props.data.treasures} Traveler`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)}
                  <span className="text-gray-500 font-weight-light ml-1">
                    Treasure
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={IcnCities}
                  alt={`${props.data.cities} Traveler`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)}
                  <span className="text-gray-500 font-weight-light ml-1">
                    Cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5">
            <div
              style={{
                width: 540,
                height: 410,
              }}
            >
              <img
                src={ImgHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{
                  margin: "-30px 0 0 -30px",
                  zIndex: 1,
                }}
              />
              <img
                src={ImgHeroFrame}
                alt="Room with couches fram"
                className="img-fluid position-absolute"
                style={{
                  margin: "0 -15px -15px 0",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
