import { useCallback, useEffect, useState, useRef } from 'react';

function App() { //variables are collected
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef= useState(null) //Used to access the input field where the generated password is displayed. 
  //This allows programmatically selecting the text for copying.



  //password generator method create
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_+-()[]~'";
    
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length); //random number generate
      pass += str.charAt(char); //charAt method to take a char in required index
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed,setPassword]);

  const copyPasswordToClipboard=useCallback(() => {
    passwordRef.current?.select() //select copy password also set range value[setSetectRange(0,8)]
    window.navigator.clipboard.writeText(password) //copy password and allow write text to clipoard
  },[password])
  
//if a page is load first time useEffect hook is called
//Automatically generates a new password whenever: length changes.
//numberAllowed changes.
//charAllowed changes.
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
         <button
              onClick={copyPasswordToClipboard}
              className="border-2 bg-blue  text-white">
              Copy
          </button>

        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))} //wraps the logic and passes the new numeric value to setLength
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Number Input:</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Character Input:</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
