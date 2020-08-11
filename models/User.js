const mongoose = require("mongoose");
//mongoose 모델 가져오기
const bcrypt = require("bcrypt");
const e = require("express");
const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },

  email: {
    type: String,
    trim: true, //john ahn@naver.com -> johnahn
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },

  role: {
    type: Number, //0: 관리자, 1: 일반 유저
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    //토큰 유효기간
    type: Number,
  },
});
//저장하기 전에 fn을 한다.
userSchema.pre("save", function (next) {
  var user = this;
  console.log("user : ", user);
  //패스워드가 변환될 때만
  if (user.isModified("password")) {
    //비밀번호를 암호화한다.
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      //hash: 암호화된 비밀번호
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        console.log("before: ", user.password);
        user.password = hash;
        console.log("after: ", user.password);
        console.log("hash : ", hash);
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  //plainPassword: 1234567, encrypted pw : $36av^3asbw
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err), cb(null, isMatch);
  });
};

const User = mongoose.model("User", userSchema);

module.exports = { User }; //모델을 다른 곳에서도 쓸 수 있게 export
