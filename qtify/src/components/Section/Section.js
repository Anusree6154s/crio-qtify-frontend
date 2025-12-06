import React from "react";
import Loader from "../Loader/Loader";
import CardSection from "./CardSection";
import FaqSection from "./FaqSection";

export default React.memo(function Section({
  title,
  data: { data, type },
  songs = false,
  genres,
  setCollapse,
  collapsed = true,
  albumType,
}) {

  return (
    <>
      <Loader data={data} />;

      {type === "grid" ? (
        <CardSection
          songs={songs}
          title={title}
          albumType={albumType}
          setCollapse={setCollapse}
          collapsed={collapsed}
          data={data}
          genres={genres}
        />
      ) : (
        <FaqSection title={title} data={data} />
      )}
    </>
  );
});
