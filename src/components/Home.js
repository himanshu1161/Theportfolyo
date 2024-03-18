import { useState } from "react";
import { HomeModal } from "./ContentModal";

const Home = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
  });

  const onOpenModal = (img, title) => {
    setOpen(true);
    setModalValue({ img, title });
  };

  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "" });
  };

  // Check if data is available before accessing its properties
  const userName = data?.user?.about?.name || "User";
  const subTitle = data?.user?.about?.subTitle || "Subtitle";
  const avatarUrl = data?.user?.about?.avatar?.url || "/default-avatar.jpg";
  const expYears = data?.user?.about?.exp_year || 0;
  const total =  data?.user?.about?.some_total || 0;

  return (
    <div className="kura_tm_section" id="home">
      <div className="kura_tm_hero">
        <div className="container">
          <div className="content">
            <div className="left">
              <span className="name">{userName}</span>
              <h3 className="job">{subTitle}</h3>
              <div className="services">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal(
                          "/img/service/1.jpg",
                          "Creative Designer based in Japan"
                        )
                      }
                    >
                      <img className="image" src="/img/service/1.jpg" alt="" />
                      <span>Web Development</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal("/img/service/2.jpg", "Digital Marketing")
                      }
                    >
                      <img className="image" src="/img/service/2.jpg" alt="" />
                      <span>Digital Marketing</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal("/img/service/1.jpg", "Graphic Design")
                      }
                    >
                      <img className="image" src="/img/service/3.jpg" alt="" />
                      <span>Graphic Design</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="short_info">
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>{expYears}</h3>
                      <span>
                        Years of
                        <br />
                        Experience
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>{total}+</h3>
                      <span>
                        Happy
                        <br />
                        Customers
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="image">
                <img src={avatarUrl} alt="" />
                <div
                  className="main"
                  style={{ backgroundImage: `url(${avatarUrl})` }}
                ></div>
                <div className="shape"></div>
              </div>
            </div>
            <div className="down anchor">
              <a href="#portfolio">
                <img className="svg" src="/img/svg/down-arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <HomeModal
        open={open}
        onCloseModal={() => onCloseModal()}
        img={modalValue.img}
        title={modalValue.title}
      />
    </div>
  );
};

export default Home;
