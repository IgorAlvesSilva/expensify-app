import {login, logout} from '../../actions/auth'

test('should generate login action when login called', () => {
    const uid = '2981283';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should generate logout action when logout called', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'    
    })
})