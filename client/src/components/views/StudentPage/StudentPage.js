import { useState, useEffect } from 'react';
import axios from 'axios';
import QuizForStud from './QuizForStud';

const StudentPage = () => {
  const [quizData, setQuizData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInfo = () => {
      try {
        setError(null);
        setLoading(true);
        axios.get('/api/v3/quizzes', { withCredentials: true }).then((res) => {
          if(res.data.quizGetAllSuccess){
            setQuizData(res.data.data);
          } else {
            console.log(res.data.error)
          }
        });
      } catch (e) {
          setError(e);
      };
      setLoading(false);
    };
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
      ? <QuizForStud data={quizData}/>
      : <div>No quiz is created!</div>
      }
    </div>
  );
};
export default StudentPage;
