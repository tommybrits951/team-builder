import React, {useState} from "react"
import './App.css';
import Forms from "./components/Forms"
function App() {
  const [member, setMember] = useState([]);
  const [values, setValues] = useState({
    name: '',
    email: '',
    role: '',
  });
  const onSubmit = () => {
    setMember([values, ...member])
    setValues({name: "", email: "", role: ''})
  }
  const onChange = (name, value) => {
    setValues({...values, [name]: value})
  }
  return (
    <div className="App">
      <Forms
      values={values}
      change={onChange}
      submit={onSubmit}
      />
      {member.map((mem, idx) => {
        return (
          <div key={idx}>
            {mem.name} {mem.email} {mem.role}
          </div>
        )
      })}
    </div>
  );
}

export default App;
