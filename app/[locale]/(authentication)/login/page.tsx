import {
  Divider,
  Heading,
  LoginForm,
  SocialLogins,
  Wrapper,
} from "@/components";
import { useTranslations } from "next-intl";
import styles from "./page.module.css";

export default function Login() {
  const t = useTranslations("Index");

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Heading type="heading">{t("loginHeading")}</Heading>
        <Heading type="sub-heading">{t("loginSubHeading")}</Heading>
      </div>

      <Wrapper>
        <div className={styles.main}>
          {/* <SocialLogins
            googleText={t("googleLogin")}
            appleText={t("appleLogin")}
          />
          <Divider /> */}
          
          <LoginForm
            emailPlaceholder={t("email")}
            passwordPlaceholder={t("loginPassword")}
            rememberText={t("remember")}
            forgotPasswordText={t("forgotPassword")}
            signinText={t("signIn")}
            noAccountText={t("noAccount")}
            signupText={t("signUp")}
            defaultError={t("required")}
            emailError={t("emailError")}
            passwordError={t("passwordError")}
          />
        </div>
      </Wrapper>
    </div>
  );
}
