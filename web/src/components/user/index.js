/* Index.js */
/* Inside this file you will import your other helper files */

// Import each file using the * notation
// This will import automatically every function exported by these files
import EmailField from './inputs/emailField';
import PasswordField from './inputs/passwordField'
import SubmitButton from './inputs/submitButton';
import AccountSettings from './settings/accountSettings';
import ChangeEmail from './settings/changeEmail';
import ChangePassword from './settings/changePassword';
import DeleteAccount from './settings/deleteAccount';
import ReAuth from './settings/reAuth';
import Loging from './loging';
import Profile from './profile';
import ResetPassword from './resetPassword';
import Verification from './verification';

// Export again
export {
    EmailField,
    PasswordField,
    SubmitButton,
    AccountSettings,
    ChangeEmail,
    ChangePassword,
    DeleteAccount,
    ReAuth,
    Loging,
    Profile,
    ResetPassword,
    Verification,
};