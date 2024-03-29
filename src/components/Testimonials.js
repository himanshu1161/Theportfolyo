import React, { Fragment, useState, useEffect } from "react";
import { NewsModal } from "./ContentModal";

const Testimonials = ({ data }) => {
  const testimonials = data?.user?.testimonials;
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
    date: "",
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true); 

  const onOpenModal = (title, date) => {
    setOpen(true);
    setModalValue({ title, date });
  };

  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "", date: "" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % testimonials.length;
        setCurrentIndex(nextIndex);
        setAnimate(false); 
      }, 500); 
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  return (
    <Fragment>
      <div className="kura_tm_section" id="news">
      </div>
      <NewsModal
        open={open}
        onCloseModal={() => onCloseModal()}
        title={modalValue.title}
        date={modalValue.date}
      />
      {/* Testimonials */}
      <div className="kura_tm_section" id="testimonials">
        <div className="kura_tm_testimonials">
          <div className="container" style={{ marginBottom: "6rem" }}>
            <div className="kura_tm_main_title">
              <span className="head_test">Testimonials</span>
              <h3 className="h_t3">What People Say</h3>
            </div>
            <div className="testimonial_box">
              <div className="inner" style={{ animation: animate ? "fadeInOut 1s ease-in-out" : "none" }}>
                <div>
                  <h5 className="h_t2">
                    {testimonials[currentIndex].name} - {testimonials[currentIndex].position}
                  </h5>
                  <p className="h_t2">{testimonials[currentIndex].review.replace(/"/g, "")}</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonials;
