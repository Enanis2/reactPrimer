const { User } = require('./userModel.js')
const { Token } = require('./tokenModel.js')

User.hasOne(Token);
Token.belonsTo(User, {
    foreignKey: 'userId'
});

module.exports = {
    User,
    Token
}