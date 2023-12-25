import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import CoursePage from './CoursePage';

function CourseLoader() {
    const { slug } = useParams();
  
    const [CourseComponent, setCourseComponent] = React.useState(null);
  
    React.useEffect(() => {
      try {
        const importComponent = async () => {
          const module = await import(`./AllCourses/${slug}.js`);
          setCourseComponent(module.default);
        };
        importComponent();
      } catch (error) {
        console.error("Error loading course:", error);
      }
    }, [slug]);
  
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {CourseComponent && <CoursePage course={CourseComponent} />}
        </Suspense>
      </div>
    );
  }
  
  export default CourseLoader;
  