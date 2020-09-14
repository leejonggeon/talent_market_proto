import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_action/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    //option : null -> 아무나 출입 가능
    //true -> 로그인한 유저만 출입가능
    //false -> 로그인하지 않은 유저만 출입가능

    const dispatch = useDispatch();

    useEffect(() => {
      //백엔드에서 가져온 정보가 response에 들어 있음.
      dispatch(auth()).then((response) => {
        console.log(response);

        //로그인 하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            props.history.push("/login");
          }
        } else {
          //로그인한 상태
          if (adminRoute && !response.payload.isAdmin) {
            //어드민이 아닌데 어드민에 들어가려 하면
            props.history.push("/");
          } else {
            if (!option) {
              //로그인한 유저가 출입 불가능한 페이지
              //로 접근하려 할 때
              props.history.push("/");
            }
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
