
module.exports.logout = (req,res)=>{
    res.clearCookie('auth');
    res.redirect('/');
}