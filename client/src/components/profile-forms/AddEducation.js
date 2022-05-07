import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEducation } from './../../actions/profile'
import { Link, useNavigate } from 'react-router-dom'

const AddEducation = ({ addEducation }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  })

  const [toDateDisabled, toggleDisabled] = useState(false)

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <div className='container'>
      <h1 className='large text-primary'>Add any school you have attended</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault()
          addEducation(formData, navigate)
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* School'
            value={school}
            name='school'
            required
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Degree'
            value={degree}
            name='degree'
            required
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Field Of Study'
            value={fieldofstudy}
            name='fieldofstudy'
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <h4>From Date</h4>
          <input
            type='date'
            value={from}
            name='from'
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              value={current}
              name='current'
              checked={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current })
                toggleDisabled(!toDateDisabled)
              }}
            />{' '}
            Current Job
          </p>
        </div>
        <div className='form-group'>
          <h4>To Date</h4>
          <input
            type='date'
            value={to}
            name='to'
            onChange={(e) => onChange(e)}
            disabled={toDateDisabled ? 'disabled' : ''}
          />
        </div>
        <div className='form-group'>
          <textarea
            value={description}
            name='description'
            cols='30'
            rows='5'
            placeholder='Program Description'
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <a className='btn btn-light my-1' href='dashboard.html'>
          Go Back
        </a>
      </form>
    </div>
  )
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
}

export default connect(null, { addEducation })(AddEducation)
