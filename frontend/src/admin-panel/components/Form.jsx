import "../css/Form.css";

function Form({ formFields, setFormFields }) {
  const setFieldValue = (name, value) => {
    const updatedFields = formFields.map((field) =>
      field.name === name ? { ...field, value } : field
    );

    setFormFields(updatedFields);
  };

  return (
    <div className="needs-validation">
      {formFields.map((item, index) => {
        return (
          <div key={index} className="mb-3">
            <label className="form-label">{item.label}</label>
            <input
              type={item.type}
              className={`form-control ${item.valid && item.valid}`}
              placeholder={item.label}
              value={item.value}
              onChange={(e) => setFieldValue(item.name, e.target.value)}
              //   required=""
            />
            {item.required && (
              <>
                {item.valid === "valid" && (
                  <div className="valid-feedback">{`Looks good!`}</div>
                )}
                {item.valid === "invalid" && (
                  <div className="invalid-feedback">{`Please provide a valid ${item.label}`}</div>
                )}
              </>
            )}
          </div>
        );
      })}
      <button
        className="btn btn-primary"
        // type="submit"
        onClick={() => console.log(formFields)}
      >
        {`Submit form`}
      </button>
    </div>
  );
}

export default Form;
