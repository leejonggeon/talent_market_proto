const mongoose = require("mongoose");
//mongoose 모델 가져오기
const bcrypt = require("bcrypt");
const e = require("express");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
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

  //패스워드가 변환될 때만
  if (user.isModified("password")) {
    //비밀번호를 암호화한다.
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      //hash: 암호화된 비밀번호
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);

        user.password = hash;

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
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  //jwt를 이용해 웹 토큰 생성
  var user = this;

  var token = jwt.sign(user._id.toHexString(), "secretToken");
  //user._id + 'secretToken'을 이용해 토큰을 만듬.
  //secretToken을 넣으면 user_id가 나옴.
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  var user = this;

  //토큰을 decode한다.
  jwt.verify(token, "secretToken", function (err, decoded) {
    //decode : 디코드 된 유저 아이디
    //유저 아이디를 이용해 유저를 찾은 후,
    // 클라이언트에서 가져온 token과 DB에 보관된 토큰이
    //일치하는지 확인.
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = mongoose.model("User", userSchema);

module.exports = { User }; //모델을 다른 곳에서도 쓸 수 있게 export
