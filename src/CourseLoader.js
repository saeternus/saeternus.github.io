import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import CoursePage from './CoursePage';

function CourseLoader() {
    const { slug } = useParams();
  
    // Initialize CourseComponent as a state
    const [CourseComponent, setCourseComponent] = React.useState(null);
  
    React.useEffect(() => {
      try {
        // Dynamically import the course component
        const importComponent = async () => {
          const module = await import(`./AllCourses/${slug}.js`);
          // Set the CourseComponent state with the default export of the module
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
          {/* Render the CoursePage when CourseComponent is not null */}
          {CourseComponent && <CoursePage course={CourseComponent} />}
        </Suspense>
      </div>
    );
  }
  
  export default CourseLoader;
  