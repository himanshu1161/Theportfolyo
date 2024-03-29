import React from "react";
import { format } from "date-fns";

const renderTimelineItem = (item) => (
  <li
    key={item._id}
    className="wow fadeInUp"
    data-wow-duration=".7s"
    data-wow-delay={`${item.sequence * 0.2}s`} // Adjust delay based on sequence
  >
    <div className="list_inner">
      <span>
        {format(new Date(item.startDate), "MMMM yyyy")} -{" "}
        {format(new Date(item.endDate), "MMMM yyyy")}
      </span>
    </div>
    <div className="list_inner">
      <span>{item.jobTitle}</span>
    </div>
    <div className="list_inner">
      <span>{item.jobLocation}</span>
    </div>
  </li>
);

const Timeline = ({ data }) => {
  if (!data || !data.user || !data.user.timeline) {
    return "Not Available";
  }

  const sortedTimeline = data.user.timeline.sort((a, b) => a.sequence - b.sequence);

  // Separate timeline items into "Education" and "Experience"
  const educationItems = sortedTimeline.filter((item) => item.forEducation);
  const experienceItems = sortedTimeline.filter((item) => !item.forEducation);

  return (
    <div className="kura_tm_section" id="timeline">
      <div className="kura_tm_timeline">
        <div className="container">
          <div className="kura_tm_main_title">
            <span>Timeline</span>
            <h3>Working Period</h3>
          </div>
          <div className="timeline_list">
            <h4>Education</h4>
            <ul>
              {educationItems.map((item) => (
                <li key={item._id}>
                  <div className="list_inner">
                    <span>
                      {format(new Date(item.startDate), "MMMM yyyy")} -{" "}
                      {format(new Date(item.endDate), "MMMM yyyy")}
                    </span>
                  </div>
                  <div className="list_inner">
                    <span>{item.jobTitle}</span>
                  </div>
                  <div className="list_inner">
                    <span>{item.jobLocation}</span>
                  </div>
                </li>
              ))}
            </ul>
            <h4>Experience</h4>
            <ul>
              {experienceItems.map((item) => (
                <React.Fragment key={item._id}>
                  {renderTimelineItem(item)}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
