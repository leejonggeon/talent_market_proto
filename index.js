//백엔드 시작점

const express = require("express");
//express 모듈을 가져온다.
const app = express();
//새로운 express 앱을 가져온다.
const port = 3000;

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const { auth } = require("./middleware/auth");
const { User } = require("./models/User");

//application/x-www-form-urlencoded 로 분석된 데이터를 가져오게함.
app.use(bodyParser.urlencoded({ extended: true }));
//application/json 형태로 된 데이터를 가져올 수 있게함.
app.use(bodyParser.json());
//cookie parser 사용 가능.
app.use(cookieParser());

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
app.post("/api/users/register", (req, res) => {
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

app.post("/api/users/login", (req, res) => {
  //요청된 이메일이 데이터베이스에 있는지 찾아본다.
  console.log("okay so far");
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      //없다면
      return json({
        loginSuccess: false,
        message: "there is no email matched with requsted one",
      });
    }
    console.log("user exists");
    //있다면, 비밀번호가 맞는지 확인.
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        console.log("here is the prob");
        return res.json({ loginSuccess: false, message: "wrong password!" });
      }
      console.log("before token generate");
      //비밀번호까지 같다면 token 생성.
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        //token을 저장한다. in cookie or local storage
        //여기서는 cookie에.
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
        console.log("after token generate");
      });
    });
  });
});

//인증과 관련된 부분은 복잡.
//auth : 미들웨어. call back fn 하기 전에 중간에 무언가를 해줌.
app.get("/api/users/auth", auth, (req, res) => {
  //여기까지 미들웨어를 통과해서 왔다는 것은 Auth가 true임을 의미.
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image,
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
//5000 port에서 시작s
