module.exports = {
    path: '/login',
    template: {
        username: function(params, query, body) {
            return body.username;
        },
        authenticated: function(params, query, body) {
            return body.password === 'password1';
        }
    }
};
