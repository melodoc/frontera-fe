import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../../components/header/header";
import { PageHeader } from "../../components/page-header";
import { CourseInfo } from "../../components/course-info/course-info";
import { CourseCards } from "../../components/course-cards/course-cards";
import { getDetailCourse } from "../../__data__/action/detail-course";
import { Loader } from "../../components/loader/loader";
import style from "./detail-course.module.scss";

export const DetailCourse = ({ courseId }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = useSelector((state: any) => ({
    data: state.detailCourse.data,
  }));
  useEffect(() => {
    dispatch(getDetailCourse(courseId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (data == null || !data) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <main className={style.Container}>
        <PageHeader label={data.title} />
        <CourseInfo info={data.info} description={data.description} />
        <section className={style.gallery}>
          <CourseCards cards={data.videoList} />
        </section>
      </main>
    </>
  );
};
