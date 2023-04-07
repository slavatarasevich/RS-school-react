import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.scss';

type FormInputsType = {
  data: string;
  setData: (value: string) => void;
};

function FormInputs({ data, setData }: FormInputsType) {
  const [fileInput, setFileInput] = useState('');

  const [popUp, setPopUp] = useState<boolean>(false);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function popup() {
    setPopUp(true);
    setTimeout(() => setPopUp(false), 700);
  }

  const onSubmit = (dataFromForm: { fileInput: string }) => {
    const newDataFromForm = { ...dataFromForm, fileInput };
    const newData = [...data, newDataFromForm];
    setData(newData);

    reset();
    popup();
  };

  const fileOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setFileInput(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-inputs__container">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)} onReset={reset} id="form__main">
          <h1>Tour creator</h1>
          {/* ------------------/ INPUT NAME & DATE /------------------------------------*/}
          <input
            id="text"
            placeholder="tour name (ex.: Milan)"
            {...register('inputTour', { required: true, pattern: /^[A-Z]+[a-zA-Z]*$/ })}
          />
          {errors?.inputTour && <p id="error">Cannot be empty, must start with capital letter</p>}
          <input type="date" id="date" {...register('inputTourDate', { required: true })} />
          {errors?.inputTourDate && <p id="error">Select a date</p>}
          {/* ------------------/ DROP DOWN /-------------------------------------------- */}
          <select id="dropdown__type-tour" {...register('typeTour', { required: true })}>
            <option value="">--Select</option>
            <option value="Beach">Beach</option>
            <option value="Medical">Medical</option>
            <option value="Cultural">Cultural</option>
            <option value="Adventure">Adventure</option>
          </select>
          {errors?.typeTour && <p id="error">Please select tour type</p>}
          {/* ------------------/ Radio Buttons /--------------------------------------------*/}
          <div className="radio-group">
            <p>Kids are allowed?</p>
            <label htmlFor="radio-yes">
              Yes
              <input type="radio" {...register('radioInput', { required: true })} value="yes" />
            </label>
            <label htmlFor="radio-no">
              No
              <input type="radio" {...register('radioInput', { required: true })} value="no" />
            </label>
          </div>
          {errors?.radioInput && <p id="error">Select either one</p>}
          {/* ------------------/ Check box /--------------------------------------------*/}
          <label className="scas-approval" htmlFor="scas-approval">
            <input
              type="checkbox"
              id="scas-approval"
              {...register('checkBoxInput', { required: true })}
            />
            SCAS approved
          </label>
          {errors?.checkBoxInput && <p id="error">Please check this box</p>}
          {/* ----------------------------FILE UPLOAD-------------------------------------*/}
          <input
            type="file"
            accept="image/*"
            {...register('image', { required: true })}
            onChange={fileOnChangeHandler}
            id="upload"
          />
          {errors?.image && <p id="error">Please select an image</p>}

          <div className="form__controls">
            <button type="submit">Create tour</button>
          </div>
        </form>
        {popUp ? (
          <div className="popup__msg">
            <p>New tour has been created...</p> <img src="./src/assets/imgs/checkmark.png" alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default FormInputs;