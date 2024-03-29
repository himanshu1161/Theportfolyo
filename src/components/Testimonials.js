import React, { Fragment, useState } from "react";
import { NewsModal } from "./ContentModal";

const Testimonials = ({ data }) => {
  const testimonials = data?.user?.testimonials;
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
    date: "",
  });

  const onOpenModal = (title, date) => {
    setOpen(true);
    setModalValue({ title, date });
  };

  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "", date: "" });
  };

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
          <div className="container" style={{marginBottom:"6rem"}}>
            <div className="kura_tm_main_title">
              <span className="head_test">Testimonials</span>
              <h3 className="h_t3">What People Say</h3>
            </div>
            <div className="testimonials_list">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial_box">
                  <div className="inner">
                  <h5 className="h_t2">{testimonial.name} - {testimonial.position}</h5>
                    <p className="h_t2">{testimonial.review.replace(/"/g, "")}</p>
                   <hr />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonials;
