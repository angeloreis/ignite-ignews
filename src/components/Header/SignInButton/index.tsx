import {signIn, signOut, useSession} from 'next-auth/client'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
    const [session] = useSession()

    const colorIconGitHub = session ? "#04d361" : "#eba417";
    const contentTextButton = session ? session.user.name : "Sign in with Github";

    const authOnApp = () => {
        session ? signOut() : signIn('github')
    }

    return (
        <button
         type="button"
         className={styles.signInButton}
         onClick={authOnApp}>
            <FaGithub color={colorIconGitHub}/>
            {contentTextButton}
            {session && <FiX className={styles.closeIcon} color="#737380"/>}
        </button>
    );
}
