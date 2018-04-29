var isPalindrome = function(s) {

		s= s.toLowerCase();
		var b = s.replace(/[^a-z0-9]/gi,'');
    var a = b.split("").reverse().join("");

    if(a === b) {
        return true;
    }
    return false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
