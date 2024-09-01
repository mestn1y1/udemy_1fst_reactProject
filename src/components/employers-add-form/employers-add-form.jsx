import "./employers-add-form.css";

export default function EmployersAddForm() {
  return (
    <div className="app-add-form">
      <h2>Добавьте нового сотрудника</h2>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
        />
        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
}
