import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { readAllQuiz } from '../../../_actions/quiz_action'
import QuizForStud from './QuizForStud';

const StudentPage = () => {
  const dispatch = useDispatch("")

  // const [quizData, setQuizData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const quizData = useSelector(state => state.quiz);

  const fetchInfo = () => {
    try {
      setError(null);
      setLoading(true);
      dispatch(readAllQuiz())
    } catch (e) {
        setError(e);
    };
    setLoading(false);
  };

  useEffect(() => {    
    fetchInfo();
  }, []);

  if (loading) return <div className="App">Now Loading...</div>;
  if (error) return <div className="App">Error!</div>;

  return(
    <div className="App">
      <div>
        <h1>Student Page</h1>
      </div>
      {
      quizData
      ? <QuizForStud data={quizData.quiz}/>
      : <div>No quiz is created!</div>
      }
    </div>
  );
};
export default StudentPage;
