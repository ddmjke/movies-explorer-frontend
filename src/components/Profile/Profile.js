import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import useFormAndValidation from "../../hooks/useFormAndValidation";

export default function Profile(props) {
  const {values, handleChange, errors, isValid, resetForm} = useFormAndValidation({
    name: props.user.name || '',
    email: props.user.email || ''
  });

  return (
    <>
    <header className="header header_place_profile">
      <Navigation loggedIn={true} />
    </header>
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${props.user.name}!`}</h2>

      <form className="profile__form" noValidate onSubmit={e => {
        e.preventDefault();
        props.onSubmit({
          email: values.email,
          name: values.name
        });
      }}>

        <label className="profile__field">
          <span className="profile__input-description">Имя</span>
          <input  
                name="name"
                onChange={handleChange}
                value={values.name || ''}
                className="profile__input profile__input_field_name"
                type="name"
                id="name"
                placeholder="name"
                required
              />
          <span className="profile__input-error">{errors.name}</span>
        </label>

        <label className="profile__field">
          <span className="profile__input-description">E-mail</span>
          <input  
                name="email"
                onChange={handleChange}
                value={values.email || ''}
                className="profile__input profile__input_field_email"
                type="email"
                id="email"
                placeholder="Email"
                required
              />
          <span className="profile__input-error">{errors.email}</span>
        </label>
        <span className="networkerror">{props.errorText}</span>

        <button 
              className={`profile__submit-button ${props.pending && 'pendingbutton'}  ${!isValid && 'inactive'}`}
              disabled={!isValid}
              type="submit" >
          Редактировать
        </button>  
      </form>
        <NavLink className="profile__redirect-link" to="/" onClick={props.onLogOut}>Выйти из аккаунта</NavLink>
    </section>
    </>
  );
}