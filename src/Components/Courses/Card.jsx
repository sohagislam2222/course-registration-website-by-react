import PropTypes from 'prop-types';
import { totalCredit } from '../../App';

const Card = ({ selectedCourses, handleRemove }) => {
  const credit = selectedCourses.reduce((a, b) => a + b.credit, 0);
  return (
    <div className="bg-gray-200 w-full rounded-lg p-5">
      <div className=" font-bold">
        <h3>Total credit hours remainig:{totalCredit - credit}</h3>
      </div>
      <div className="divider"></div>
      <div>
        <h3 className="font-bold">Course Name:</h3>
        <div>
          <ol className="px-3">
            {selectedCourses.map(course => (
              <div
                className="flex justify-between items-center my-2"
                key={course.id}
              >
                <li className="list-decimal">{course.name} </li>
                <button
                  onClick={() => handleRemove(course)}
                  className="btn btn-primary"
                >
                  Remove
                </button>
              </div>
            ))}
          </ol>
        </div>
      </div>
      <div className="divider"></div>

      <div>Total Credit :{totalCredit}hours</div>
      <div className="divider"></div>

      <div>
        Total Price: {selectedCourses.reduce((a, b) => a + b.price, 0)} USD
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
