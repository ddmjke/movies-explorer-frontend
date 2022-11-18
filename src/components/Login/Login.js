import { NavLink } from "react-router-dom";
import useFormAndValidation from "../../hooks/useFormAndValidation";

export default function LogIn(props) {
  const {values, handleChange, errors, isValid} = useFormAndValidation({
    email: props.email || '',
    password: props.password || ''
  });

  return (
    <section className="login">
      <NavLink className="navigation__logo" to="/"/>
      <h2 className="login__title">Рады видеть!</h2>

      <form className="login__form" noValidate onSubmit={e => {
        e.preventDefault();
        props.onSubmit({
          email: values.email,
          password: values.password
        })
        }}>
        <label className="login__field">
          <span className="login__input-description">E-mail</span>

          <input  
                name="email"
                onChange={handleChange}
                value={values.email || ''}
                className="login__input login__input_field_email"
                type="email"
                id="email"
                placeholder="Email"
                required
              />
          <span className="login__input-error">{errors.email}</span>
        </label>

        <label className="login__field">
          <span className="login__input-description">password</span>

          <input  
                name="password"
                onChange={handleChange}
                value={values.password || ''}
                className="login__input login__input_field_password"
                type="password"
                id="password"
                placeholder="password"
                required
              />
          <span className="login__input-error">{errors.password}</span>
        </label>

        <span className="networkerror">{props.errorText}</span>

        <button 
              className={`login__submit-button ${props.pending && 'pendingbutton'} ${!isValid && 'inactive'}`}
              disabled={!isValid}
              type="submit" >
          Войти
        </button>  
      </form>
      <h2 className="login__redirect">
        Ещё не зарегистрированы?
        <NavLink className="login__redirect-link" to="/sign-up">Регистрация</NavLink>
      </h2>
    </section>
  );
}