import { loginUser, logoutUser, signupUser } from './auth';

test('expects to not login a user', () => {
    return loginUser("username" , "password")
        .then(data => {
            expect(data).toBe(false);
        });
});