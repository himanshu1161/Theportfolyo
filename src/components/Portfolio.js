import React, { Fragment, useState } from "react";
import LightBox from "react-awesome-lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../swiperSliderProps";

const Portfolio = ({ data }) => {
  const [showLight, setShowLight] = useState(null);

  const showLightBox = (index) => {
    setShowLight({
      startIndex: index,
    });
  };

  const hideLightBox = () => {
    setShowLight(null);
  };

  return (
    <Fragment>
      <div className="kura_tm_section" id="portfolio">
        <div className="kura_tm_portfolio">
          <div className="container">
            <div className="kura_tm_main_title">
              <span>Portfolio</span>
              <h3>Selected Works</h3>
            </div>
            <div
              className="portfolio_list gallery_zoom wow fadeInUp"
              data-wow-duration=".7s"
            >
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <Swiper {...portfolioSlider}>
                    {data?.user?.projects.map((project, index) => (
                      <SwiperSlide key={project._id} className="swiper-slide">
                        <div className="list_inner">
                          <div className="image">
                            <img src={project.image.url} alt="" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${project.image.url})`,
                              }}
                            ></div>
                            <div className="overlay"></div>
                            <img
                              className="svg"
                              src="/img/svg/right-arrow.svg"
                              alt=""
                            />
                            <div className="details">
                              <h3>{project.title}</h3>
                              <span>{project.techStack.join(", ")}</span>
                            </div>
                          </div>
                          <a
                            className="kura_tm_full_link popup-vimeo"
                            onClick={() => showLightBox(index)}
                          ></a>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="kura_tm_swiper_progress fill">
                  <div className="my_pagination_in"></div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a className="my_next">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLight ? (
        <LightBox
          images={data?.user?.projects.map((project) => ({
            url: project.image.url,
            title: project.title,
          }))}
          startIndex={showLight.startIndex}
          onClose={hideLightBox}
        />
      ) : null}
    </Fragment>
  );
};

export default Portfolio;
