import axios from "axios";
import { useState, useEffect } from "react";
import QuizForm from "./QuizForm";
import QuizList from "./QuizList";

const AdminPage = () => {
  const [quizData, setQuizData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
   useEffect(() => {
    try {
      setError(null);
      setLoading(true);
      axios.get('/api/v3/quizzes')
        .then((res) => {
          if(res.data.quizGetAllSuccess){
            setQuizData(res.data.data);
          } else {
            console.log(res.data.error)
          }          
        }, { withCredentials: true }
      );
    } catch (e) {
      console.log(e)
      setError(e);
    }
    setLoading(false);
  }, []);

  const addData = (data) => {
    if (!data) console.log("data was not input yet.");
    // setQuizData(quizData.concat({ ...data }));
    axios.post('/api/v3/quizzes', {
      question: data.question,
      answer: data.answer,
      choice: data.choice     
    }, { withCredentials: true })
    .then((res) => console.log("addData", res))
    .catch((err) => console.log(err));
  };

  const updateData = (id, data) => {
    // setQuizData(quizData.map(info => id === info.id ? { ...info, ...data } : info));
    // axios.put('/api/v3/quizzes', {
    //   question: data.question,
    //   answer: data.answer,
    //   choice: data.choice    
    // }, { withCredentials: true })
    // .then((res) => console.log(res))
    // .catch((err) => console.log(err));
  };

  const removeData = (id) => {
    // setQuizData(quizData.filter(info => info.id !== id));
    // axios.delete('/api/v3/quizzes', { data: id }, { withCredentials: true })
    // .then((res) => console.log(res))
    // .catch((err) => console.log(err));
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
        quizData
        ? <QuizList data={quizData} removeData={removeData} updateData={updateData}/>
        : <div></div>
      }
    </div>
  ); 
};

export default AdminPage;
