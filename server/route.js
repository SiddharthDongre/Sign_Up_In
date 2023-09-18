import { suiModel } from "./mongoose.js";

let SignUp, SignIn;

SignUp = async (req, res) => {
  // console.log(req.body);
  let { name, email, password } = req.body;

  let a;

  a = await suiModel.findOne({ email: email });

  // console.log(a.email);

  if(a === null) {
    suiModel.insertMany({
      name: name,
      email: email,
      password: password
    });
  
    res.send("User Successfully Signed Up");
  } else {
    res.send("User Already Exist");
  };
};


SignIn = async (req, res) => {
  // console.log(req.body);
  let { email, password } = req.body;
  let a;
  
  a = await suiModel.findOne({ email: email });

  // console.log(a);

  if(a === null){
    res.send("User not signed up");
  } else {
    if(password === a.password) {
      res.send(a);
    } else {
      res.send("Invalid Password");
    };
  };
};

export { SignUp, SignIn };

