import { lazy, Suspense, useRef, useState } from "react";
import { useBooks } from "../Hooks/useBooks";
import LinearLoadin from "./Linear_Loading/LinearLoadin";
import { Tab, Tabs } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
const Accordionlist = lazy(() => import("./Accordionlist"));
import "swiper/css";

const BookShowcase = ({ department }) => {
  const swiperRef = useRef(null);
  const [syllabus, setSyllabus] = useState([]);
  const [academic, setAcademic] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [tabIndex, setTabIndex] = useState(1);

  useBooks(setAcademic, department, "books");
  useBooks(setQuestions, department, "questions");
  useBooks(setSyllabus, department, "syllabus");

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
    swiperRef.current.slideTo(newValue);
  };
  const handleChangeIndex = (sw) => {
    swiperRef.current = sw;
    setTabIndex(sw.activeIndex);
  };

  return (
    <Suspense fallback={<LinearLoadin />}>
      <div className="md:w-3/5 w-full m-auto my-10 md:shadow-2xl md:rounded-lg xs:px-10 px-2 sm:px-10 pt-5 pb-8 bg-white">
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          variant="fullWidth"
          centered
        >
          <Tab
            label={`syllabus (${syllabus.length})`}
            sx={{ fontWeight: 600 }}
          />
          <Tab label={`books (${academic.length})`} sx={{ fontWeight: 600 }} />
          <Tab
            label={`questions (${questions.length})`}
            sx={{ fontWeight: 600 }}
          />
        </Tabs>
        <div className="pt-5">
          <Swiper
            effect={"creative"}
            modules={[EffectCreative]}
            onInit={handleChangeIndex}
            onSlideChange={handleChangeIndex}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
          >
            <SwiperSlide>
              <Accordionlist title="Syllabus" contents={syllabus} />
            </SwiperSlide>
            <SwiperSlide>
              <Accordionlist title="Books" contents={academic} />
            </SwiperSlide>
            <SwiperSlide>
              <Accordionlist title="Questions" contents={questions} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Suspense>
  );
};

export default BookShowcase;
