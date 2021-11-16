import { useState } from "react";
import { Button, ButtonGroup, Input, TextareaAutosize, Radio, RadioGroup, FormControl, FormControlLabel } from "@mui/material";

const QuizForAdmin = (props) => {
  const [quiz, setQuiz] = useState({
    question: props.data.question, 
    answer: props.data.answer, 
    c1: props.data.choice[0], 
    c2: props.data.choice[1], 
    c3: props.data.choice[2], 
    c4: props.data.choice[3]
  });
  const { question, answer, c1, c2, c3, c4 } = quiz;
  const [editable, setEditable] = useState(false);
  const style = {
    textAlign: 'left',
    border: '3px solid black',
    padding: '10px',
    margin: '0px 15px 0px 15px',
    width: 'calc(100%-30px)'
  };

  const handleToggleEdit = () => {
    setEditable(!editable);
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleSubmitUpdate = (e) => {  
    setEditable(!editable);  
    props.updateData({
      id: props.data._id,
      question: question,
      answer: answer,
      choice: [c1, c2, c3, c4]
    });    
  };

  const handleRemove = () => {
    props.removeData(props.data._id);
  };

  if (editable) {
    return (
      <div style={style}>
        <h3>
          <TextareaAutosize
            placeholder="Describe a question"                            
            name="question"
            value={question}
            onChange={onChangeInput}
            minRows={1}
            maxRows={5}
            style={{width: "calc(100% - 20px)", padding: 10, font: "inherit", fontSize: "inherit", fontWeight: "inherit"}}
          />
        </h3>
        <RadioGroup name="answer" value={answer} onChange={onChangeInput}>
          <FormControlLabel value="1" control={<Radio />} style={{margin: 2}} 
            label={<Input placeholder="Describe a choice." name="c1" value={c1} onChange={onChangeInput}/>}/>
          <FormControlLabel value="2" control={<Radio />} style={{margin: 2}} 
            label={<Input placeholder="Describe a choice." name="c2" value={c2} onChange={onChangeInput}/>}/>
          <FormControlLabel value="3" control={<Radio />} style={{margin: 2}} 
            label={<Input placeholder="Describe a choice." name="c3" value={c3} onChange={onChangeInput}/>}/>
          <FormControlLabel value="4" control={<Radio />} style={{margin: 2}} 
            label={<Input placeholder="Describe a choice." name="c4" value={c4} onChange={onChangeInput}/>}/>    
        </RadioGroup>
        
        <div style={{margin:10}}>
          <ButtonGroup color="primary" aria-label="text primary button group">
            <Button variant="outlined" color="primary" size="small" onClick={handleSubmitUpdate} >Apply</Button>
            <Button variant="outlined" color="secondary" size="small" onClick={handleRemove} >Remove</Button>
          </ButtonGroup>
        </div>                
      </div>
    );
  } else {
    return (
      <div style={style}>
        <h3 style={{width: "calc(100% - 20px)", padding: 10}}>{question}</h3>
        <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
          <RadioGroup value={answer}>
            <FormControlLabel value="1" control={<Radio color="primary"/>} label={c1} style={{margin: 2}}/>
            <FormControlLabel value="2" control={<Radio color="primary"/>} label={c2} style={{margin: 2}}/>
            <FormControlLabel value="3" control={<Radio color="primary"/>} label={c3} style={{margin: 2}}/>
            <FormControlLabel value="4" control={<Radio color="primary"/>} label={c4} style={{margin: 2}}/>
          </RadioGroup>
        </FormControl>

        <div style={{margin:10}}>
          <ButtonGroup variant="contained" color="primary" aria-label="text primary button group">
            <Button color="primary" size="small" style={{fontWeight:"bolder"}} onClick={handleToggleEdit}>Edit</Button>
            <Button color="secondary" size="small" style={{fontWeight:"bolder"}} onClick={handleRemove}>Remove</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  };
};
export default QuizForAdmin;