var containsDuplicate = function(nums) {
    if(nums != ''){
       var a = new Set(nums);
           a = Array.from(a);
    if(a.length == nums.length){
        return false;
    }
    else{
        return true;
    }
    }
    return false;

};

console.log(containsDuplicate([0]));
