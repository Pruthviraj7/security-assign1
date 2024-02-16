describe("Test the Username and Password", function () {

    describe("checkLogin", function () {
      it("The function should return ‘No username entered.’ if the username is an empty string", function () {
        var result = checkLogin("", "password");
        expect(result).toEqual("No username entered.");
      });
  
      it("The function should return ‘No password entered.’ if the password is an empty string", function () {
        var result = checkLogin("username", "");
        expect(result).toEqual("No password entered.");
      });
  
      it("The function should return true for correct username and password", function () {
        var result = checkLogin("raj", "Guest");
        expect(result).toEqual("Welcome back!");
      });
  
      it("The function should return 'Invalid Username or Password.' for incorrect username", function () {
        var result = checkLogin("incorrectUser", "Guest");
        expect(result).toEqual("Invalid Username or Password.");
      });
  
      it("The function should return 'Invalid Username or Password.' for incorrect password", function () {
        var result = checkLogin("raj", "IncorrectPassword");
        expect(result).toEqual("Invalid Username or Password.");
      });
  
      it("The function should return 'Invalid Username or Password.' for both incorrect username and password", function () {
        var result = checkLogin("incorrectUser", "IncorrectPassword");
        expect(result).toEqual("Invalid Username or Password.");
      });
    });
  
    describe("md5Encrypt", function () {
      it("The function should return a string of the hashed value (as 32 hexadecimal characters)", function () {
        var result = md5Encrypt("Guest");
        // Assuming "testPassword" is a known input and its expected MD5 hash is known
        expect(result).toEqual("adb831a7fdd83dd1e2a309ce7591dff8"); // Replace "expectedHashedValue" with the actual expected hash
      });
    });
  
  });
  
