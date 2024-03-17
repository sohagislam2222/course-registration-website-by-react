/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { FaBookOpen } from 'react-icons/fa';
const Course = ({ course, handleCourseSelection }) => {
  const { name, description, time, photo, price, credit } = course;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full p-5" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex justify-around">
            <p className="flex gap-2 items-center">
              <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar>
              {price}
            </p>
            <p className="flex gap-2 items-center">
              <FaBookOpen></FaBookOpen> Credit:{credit}
            </p>
          </div>
          <div className="card-actions justify-center mt-4 ">
            <button
              onClick={() => handleCourseSelection(course)}
              className="btn btn-primary w-full"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {};

export default Course;
