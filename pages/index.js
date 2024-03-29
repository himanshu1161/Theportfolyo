import { Fragment } from "react";
import axios from 'axios';
import { useState } from 'react';
import Audio from "../src/components/Audio";
import Contact from "../src/components/Contact";
import Cursor from "../src/components/Cursor";
import Home from "../src/components/Home";
import Portfolio from "../src/components/Portfolio";
import Price from "../src/components/Price";
import Skills from "../src/components/Skills";
import Timeline from "../src/components/Timeline";
import Footer from "../src/layout/Footer";
import Header from "../src/layout/Header";
import Settings from "../src/layout/Settings";
import PageHead from "../src/PageHead";
import Testimonials from "../src/components/Testimonials";

const Index = ({ data }) => {
  const [portfolioData, setPortfolioData] = useState(data);

  return (
    <Fragment>
      <PageHead page="Home" data={portfolioData}/>
      <div id="opened">
        <div className="kura_tm_all_wrap" data-color="orange">
          <Settings />
          <Header />
          {portfolioData && portfolioData.user && portfolioData.user.about && <Home data={portfolioData} />}
          {portfolioData && portfolioData.user && portfolioData.user.projects && <Portfolio data={portfolioData} />}
          {portfolioData && portfolioData.user && portfolioData.user.skills && <Skills data={portfolioData} />}
          {portfolioData && portfolioData.user && portfolioData.user.timeline && <Timeline data={portfolioData} />}
          {portfolioData && portfolioData.user && portfolioData.user.services && <Price data={portfolioData} />}
          {portfolioData && portfolioData.user && portfolioData.user.services && <Testimonials data={portfolioData}/>}
          {portfolioData && portfolioData.user && portfolioData.user.about && <Contact data={portfolioData} />}
          <Footer />
          <Audio />
          <Cursor />
        </div>
      </div>
    </Fragment>
  );
};

export async function getServerSideProps() {
  const userId = "65b3a22c01d900e96c4219ae";
  const apiUrl = `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    // console.log(data,"data ")
    return { props: { data } };
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return { props: { data: null } }; 
  }
}

export default Index;
