"use client";
import { useState, useEffect } from "react";
import { Eye, EyeOff, ArrowLeft, ArrowRight } from "lucide-react";
import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, provider, OAuthProvider } from "firebase/auth";
import { app } from "./firebase"
import DashboardPage from "../dashboard/page";

const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
const signupwithGoogle = () => {
  signInWithPopup(auth, googleprovider);
}

export default function TripAdvisorForm({ isLogin = false, onBack }) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [uid, setuid] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(value => {
      alert("hello user success");
      setemail(""); setpassword("");
      ; setuid("");
    });;
  };

  // forsignin
  const signin = () => {
    signInWithEmailAndPassword(auth, email, password).then((value) => alert("succcess on signin")).catch((err) => alert(`please check the password and email correctly invalid ${err}`));
  }
  const [user, setuser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        alert(`${uid}  HEY !!! you'r logged in `);
        setuser(user);
      }
      else {
        alert("YOU  are no longer A logged-in user ")
        setuser(null);
      }
    })
  }, []);

  if (user === null) {
    return (
      <div>
        <div className="min-h-screen flex flex-col lg:flex-row">

          {/* Left Panel */}
          <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[400px] lg:min-h-screen">
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-400 via-teal-500 to-blue-600"
              style={{
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><filter id="blur"><feGaussianBlur stdDeviation="20"/></filter></defs><circle cx="200" cy="300" r="150" fill="rgba(255,255,255,0.1)" filter="url(%23blur)"/><circle cx="800" cy="200" r="100" fill="rgba(255,255,255,0.1)" filter="url(%23blur)"/><circle cx="600" cy="700" r="200" fill="rgba(255,255,255,0.1)" filter="url(%23blur)"/></svg>')`,
              }}
            />
            <div className="absolute inset-0 opacity-20 hidden sm:block">
              <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rotate-45"></div>
              <div className="absolute bottom-20 left-20 w-24 h-24 border border-white rotate-12"></div>
              <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
            </div>
            <div className="relative z-10 flex justify-between items-center p-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <span className="text-white font-bold text-xl">XYZ Company</span>
              </div>
            </div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 sm:px-8 mt-10 lg:mt-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-6 sm:mb-8 leading-tight">
                Let's Get<br />Started...
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
              <div className="flex justify-between items-end">
                <div className="flex items-center space-x-3 bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">🦊</div>
                  <div>
                    <div className="text-white font-semibold">User Info</div>
                    <div className="text-white text-sm opacity-80">User Qualification</div>
                  </div>
                </div>
                <div className="hidden sm:flex space-x-4">
                  <button onClick={onBack} className="w-12 h-12 bg-black bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-colors">
                    <ArrowLeft size={20} />
                  </button>
                  <button className="w-12 h-12 bg-black bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-colors">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-1/2 bg-gray-50 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-12 py-12">
            <div className="max-w-md mx-auto w-full">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <span className="text-black font-bold text-xl">XYZ Company</span>
                </div>
              </div>

              <button onClick={onBack} className="text-sm text-blue-600 hover:underline mb-4">
                ← Back to Home
              </button>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                {isLogin ? "Log In" : "Create Account"}
              </h2>

              <div className="mb-8">
                <p className="text-center text-gray-600 mb-6">Sign {isLogin ? "In" : "Up"} With Open Account</p>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-6 justify-center ">
                  {/* <button onClick={signupwithFacebook} className="comic-button rounded-full w-fll text-black flex justify-center " style={{paddingInline:"17px"}}>facebook <img src="./fb.svg" alt="" /> </button> */}

                  <button onClick={signupwithGoogle} className="comic-button rounded-full w-fll text-black justify-center  " style={{ paddingInline: "20px" }}> Google <img src="./gol.svg" alt="" className=" w-8  rounded-full" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }} /> </button>
                  {/* <button onClick={signupwithApple} className="comic-button rounded-full w-fll text-black justify-center " style={{paddingInline:"20px"}}>Apple <img src="./apl.svg" alt="" className=" w-7 rounded-full" style={{backgroundColor:"rgba(26, 25, 2, 0)"}}/> </button> */}

                </div>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-gray-50 text-gray-500">OR</span>
                  </div>
                </div>
              </div>

              {/* AFTER OR SECTION  */}

              <div className="space-y-6">
                <input
                  defaultValue={"hello"}
                  onChange={e => setuid(e.target.value)} value={uid}

                  type="text"
                  placeholder="Username"
                  className="w-full px-6 py-4 border border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <input
                  defaultValue={"hola"}
                  required
                  onChange={e => setemail(e.target.value)} value={email}
                  type="email"
                  placeholder="Email Id"
                  className="w-full px-6 py-4 border border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <div className="relative">
                  <input

                    value={password} onChange={e => setpassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full px-6 py-4 border border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="remember" className="ml-3 text-gray-600">
                    Remember Me
                  </label>
                </div>


                <button
                  onClick={() => {
                    if (isLogin) {
                      signin();

                    } else {
                      createUser();


                    }
                  }}

                  type="button"
                  className="w-full bg-gray-900 text-white py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors"
                >
                  {isLogin ? "Log In" : "Create Account"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
   <DashboardPage />
  )
}