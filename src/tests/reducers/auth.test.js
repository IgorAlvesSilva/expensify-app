import authReducer from '../../reducers/auth'

test('should set default value', () => {
    const state = authReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({});
})

test('should set login with user uid', () => {
    const action = { 
        type: "LOGIN",
        uid: '821783728'
    }
    const state = authReducer(undefined, action);

    expect(state).toEqual({uid: action.uid});
})



test('should set logout', () => {
    const action = { 
        type: "LOGOUT"
    }
    const state = authReducer(undefined, action);

    expect(state).toEqual({});
})
