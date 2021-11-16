import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { readAllQuiz, createQuiz, updateQuiz, deleteQuiz } from '../../../_actions/quiz_action'
import QuizForm from "./QuizForm";
import QuizList from "./QuizList";

const AdminPage = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  let quizData = useSelector(state => state.quiz);
  
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

  const addData = (data) => {
    if (!data) console.log("data was not input yet.");
    console.log("inputData for create", data)
    dispatch(createQuiz(data))
  };

  const updateData = (data) => {
    dispatch(updateQuiz(data))
    // setQuizData(quizData.map(info => id === info.id ? { ...info, ...data } : info));
    // axios.put('/api/v3/quizzes', {
    //   question: data.question,
    //   answer: data.answer,
    //   choice: data.choice    
    // }, { withCredentials: true })
  };

  const removeData = (id) => {
    dispatch(deleteQuiz(id))
  };

  if (loading) return <div className="App">Now Loading...</div>;
  if (error) return <div className="App">Error!</div>;

  return (
    <div className="App">
      <div>
        <h1>Admin Page</h1>
      </div>
      <div>
        <QuizForm addData={addData} />
      </div>
      {
        quizData && quizData.quiz
        ? <QuizList data={quizData.quiz} removeData={removeData} updateData={updateData}/>
        : <div></div>
      }
    </div>
  ); 
};

export default AdminPage;
