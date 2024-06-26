import { Link } from "react-router-dom";
import * as S from "../../styled/common/SignPages.styled";
import { appRoutes } from "../../lib/appRoutes";

export default function SignUpForm({
  isSubmitted,
  handleInputChange,
  handleSignUp,
  isNotFilled,
  isNotFilledLogin,
  isNotFilledName,
  isNotFilledPassword,
  error,
}) {
  return (
    <S.ModalFormLoginSignPage>
      <S.ModalInputSignPage
        onChange={handleInputChange}
        type="text"
        name="name"
        id="first-name"
        placeholder="Имя"
        $isNotFilled={isNotFilledName}
      />
      <S.ModalInputSignPage
        onChange={handleInputChange}
        type="email"
        name="login"
        id="loginReg"
        placeholder="Эл. почта"
        $isNotFilled={isNotFilledLogin}
      />
      <S.ModalInputSignPage
        onChange={handleInputChange}
        type="password"
        name="password"
        id="passwordFirst"
        placeholder="Пароль"
        $isNotFilled={isNotFilledPassword}
      />
      {error ? (
        <S.NotCorrectText>
          {error}
        </S.NotCorrectText>
      ) : (
        ""
      )}
      <S.ModalButtonEnterSignPage
        onClick={handleSignUp}
        $isNotFilled={isNotFilled}
        $isSubmitted={isSubmitted}
      >
        Зарегистрироваться
      </S.ModalButtonEnterSignPage>
      <S.ModalFormGroupSignPage>
        <p>
          Уже есть аккаунт? <Link to={appRoutes.SIGNIN}>Войдите здесь</Link>
        </p>
      </S.ModalFormGroupSignPage>
    </S.ModalFormLoginSignPage>
  );
}
