import { useEffect, useState } from 'react';
import Card from './Components/Courses/Card';
import Courses from './Components/Courses/Courses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export let totalCredit = 15;

const storedCourse = JSON.parse(localStorage.getItem('cart') || '[]');

function App() {
  const [selectedCourses, setSelectedCourses] = useState(storedCourse);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(selectedCourses));
  }, [selectedCourses]);

  const handleCourseSelection = course => {
    console.log(course);

    const exist = selectedCourses.find(c => c.id == course.id);
    if (!exist) {
      const credit = selectedCourses.reduce((a, b) => a + b.credit, 0);
      if (credit + course.credit > totalCredit) {
        return toast.warning('Your credit hours has been finished');
      }
      const allCourse = [...selectedCourses, course];
      setSelectedCourses(allCourse);
      toast.success('Congratulation! Your Course has been added');
    } else {
      toast.warning('You have already select this course');
    }
  };

  const handleRemove = course => {
    const remaining = selectedCourses.filter(c => c.id !== course.id);

    setSelectedCourses(remaining);
  };

  return (
    <>
      <h1 className="text-3xl text-center my-5 max-w-7xl container mx-auto">
        Course Registration
      </h1>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-stretch gap-3 container max-w-7xl mx-auto">
        <div className="w-full md:w-[70%] lg:w-[80%] mx-auto">
          <Courses handleCourseSelection={handleCourseSelection}></Courses>
        </div>
        <div className="w-full md:w-[28%] lg:w-[28%] rounded-lg mx-auto">
          <Card
            selectedCourses={selectedCourses}
            handleRemove={handleRemove}
          ></Card>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
