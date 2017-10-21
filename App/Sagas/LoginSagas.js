export function logout()
 {
    return (
        type: 'LOGOUT'
    );
}

export function login(data)
{
   return ({
    type: 'LOGIN',
    data,
    });
}
