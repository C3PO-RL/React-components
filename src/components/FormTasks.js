import React, { useState } from 'react';

function FormTasks({ Task, setTask }) {
  const [dataForm, setdataForm] = useState({
    title: '',
    responsible: '',
    description: '',
    priority: 'low',
  });
  console.log(dataForm);

  const { title, responsible, description, priority } = dataForm;
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setdataForm({ ...dataForm, [name]: value });
    console.log(dataForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...Task, dataForm]);
    console.log([...Task, dataForm]);
    setdataForm({
      title: '',
      responsible: '',
      description: '',
      priority: 'low',
    });
  };

  return (
    <div className='card'>
      <form className='card-body' onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            name='title'
            className='form-control'
            placeholder='Title'
            value={title}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            name='responsible'
            className='form-control'
            placeholder='Responsible'
            value={responsible}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            name='description'
            className='form-control'
            placeholder='Description'
            value={description}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <select
            name='priority'
            className='form-control'
            value={priority}
            onChange={handleInputChange}>
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </select>
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormTasks;
