function palindrome(message) {
    // wirte your code here
    let arr = message.split('');
    let i = 0, j = arr.length - 1;
    while (i < j) {
        if(arr[i]!=arr[j]) return false;
        i++;j--;
    }
    return true;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true