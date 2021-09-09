import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
    const isUserLoggedIn = true;

    const colorIconGitHub = isUserLoggedIn ? "#04d361" : "#eba417";

    const contentTextButton = isUserLoggedIn ? "Angelo Reis" : "Sign in with Github";

    return (
        <button
         type="button"
         className={styles.signInButton}>
            <FaGithub color={colorIconGitHub}/>
            {contentTextButton}
            {isUserLoggedIn && <FiX className={styles.closeIcon} color="#737380"/>}
        </button>
    );
}