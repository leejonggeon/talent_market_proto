//백엔드 시작점

const express = require("express");
//express 모듈을 가져온다.
const app = express();
//새로운 express 앱을 가져온다.
const port = 3000;

const bodyParser = require("body-parser");

const config = require("./config/key");

const { User } = require("./models/User");

//application/x-www-form-urlencoded 로 분석된 데이터를 가져오게함.
app.use(bodyParser.urlencoded({ extended: true }));
//application/json 형태로 된 데이터를 가져올 수 있게함.
app.use(bodyParser.json());

const monggoose = require("mongoose");
monggoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));
//에러 방지

app.get("/", (req, res) => res.send("안녕하세요!!!"));

//회원 가입할 때 필요한 정보를 client에서 가져오면
//그것들을 데이터베이스에 넣어준다.
app.post("/register", (req, res) => {
  const user = new User(req.body);
  console.log("req.body : ", req.body);
  //비밀번호 암호화

  //mongoDB method
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.post("/login", (req, res) => {
  //요청된 이메일이 데이터베이스에 있는지 찾아본다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      //없다면
      return json({
        loginSuccess: false,
        message: "there is no email matched with requsted one",
      });
    }

    //있다면, 비밀번호가 맞는지 확인.
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "wrong password!" });

      //비밀번호까지 같다면 token 생성.
      user.generateToken((err, user) => {});
    });
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
//5000 port에서 시작s
