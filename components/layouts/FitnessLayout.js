import react from "react";
import ContentLayout from "./ContentLayout";
import cx from "classnames";

//React Reveal Animation
import Fade from "react-reveal/Fade";

const FitnessLayout = (props) => {
  return (
    <react.Fragment>
      <ContentLayout>
        {/* <div className={cx("hero", "fitnessHero")}></div> */}
        <Fade>
          <div className={cx("fallback", "herofallback")}>
            <div className={cx("hero", "fitnessHero")}></div>
          </div>
        </Fade>

        {props.children}
      </ContentLayout>
      <style jsx>{`
        .fitnessHero {
          background-image: url("/static/images/hero/fitness.webp");
          //height: 600px;
        }

        .herofallback {
          background-image: url("/static/images/hero/fitness.jp2");
        }
      `}</style>
    </react.Fragment>
  );
};

export default FitnessLayout;
