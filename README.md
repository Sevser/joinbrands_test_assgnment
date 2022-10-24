# joinbrants_test_assignment

# Links
[https://www.linkedin.com/in/semyon-evstigneev-981a73164/](https://www.linkedin.com/in/semyon-evstigneev-981a73164/)
[https://github.com/Sevser](https://github.com/Sevser)
[https://leetcode.com/sevser40/](https://leetcode.com/sevser40/)
[https://gitlab.com/Sevser1](https://gitlab.com/Sevser1)

# Projects
[https://lkk.moex.com/](https://lkk.moex.com/)
[https://serval-cloud.ru/](https://serval-cloud.ru/)
[https://lk.serval-cloud.ru/](https://lk.serval-cloud.ru/)
[https://refueler.ru/#/](https://refueler.ru/#/)
[https://pkk.rosreestr.ru/](https://pkk.rosreestr.ru/)
[http://ikn.mkra.org/](http://ikn.mkra.org/)
[https://ikn.mkra.org/maps/?type=0](https://ikn.mkra.org/maps/?type=0)
[https://sevser.github.io/PianoMidi/](https://sevser.github.io/PianoMidi/)
[https://sevser.github.io/atlant_io/](https://sevser.github.io/atlant_io/)
[https://sevser.github.io/react-typescript-first-attempt/](https://sevser.github.io/react-typescript-first-attempt/)

## technologies
Vue3, Vue-cli, VueRouter, Typescript, sass, yarn

**Build a website with following pages**
*   / (homepage), public, contains links to /sign-up, /sign-in
*   /sign-up, public, contains a form to register (username, email, password) and a link to /sign-in
*   /sign-in public, on success redirects to /profile
*   /lost-password public, 3 scenarios to manage:
    * display an input to enter an email address if no data passed in the URL (/lost-password),
    * If an email address is passed in the URL (/lost-password?email={EMAIL}, display a link
with a code (/lost-password?code={CODE}) to reset the password (CODE must be stored in
the local storage for example)
    * if CODE is received, show field for new password
*   /profile: available only when the user is signed in, else redirect to /sign-in. Shows the user name
and email, a link to /change-password, and a link to /sign-out
*   /change-password: available only when signed in, else redirect to /sign-in
*   /sign-out: logs out the user, redirects to /


## Pay attention to the following:
*   Components organization
*   Use the local storage/IndexedDB to store users
*   Form data validation
*   Coding style (object oriented, clean and simple)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```
