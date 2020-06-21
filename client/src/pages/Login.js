import React from 'react';
// import Layout from '../components/navigation/Layout';
// import AuthForm from '../components/forms/Auth';
// import authService from '../services/authService';
// import usersService from '../services/usersService';
// import { interceptPage } from '../components/interceptPage';
// import withShowError from '../components/withShowError';

// /* Users can log in using either their e-mail (passport 'username') or their publicName
//  If non-email address value entered, match with publicName and replace 'email' value 
//  by matched user's username (=email) */
// const Login = ({ next, onLoginSuccess, user }) => {
//     // const { addNotification } = notificationsProps;
//     return (
//         // <Layout user={user} >
//             {/* <div className={classes.main}> */}
//             <AuthForm
//                 register={false}
//                 initialValues={{
//                     email: '',
//                     password: '',
//                 }}
//                 onSubmit={async ({ password, email }) => {
//                     if (email.indexOf('@') === -1)
//                         await usersService.getAll().then(users => {
//                             let matchedUsers = users.filter(user => user.publicName === email);
//                             email = matchedUsers.length > 0 ? matchedUsers[0].username : email;
//                         });

//                     authService
//                         .login(password, email)
//                         .then(({ user }) => {
//                             onLoginSuccess(user);
//                             next();
//                         })
//                         .catch(showError);
//                 }}
//             />
//             {/* </div> */}
//         // </Layout>
//     );
// };

// export default interceptPage(withShowError(Login));
