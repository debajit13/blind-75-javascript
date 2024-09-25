class Solution {
  isPalindrome(s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
      if (l < r && !this.checkAlphaNum(s[l])) {
        l++;
      }

      if (r > l && !this.checkAlphaNum(s[r])) {
        r--;
      }

      if (s[l].toLowerCase() !== s[r].toLowerCase()) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  }

  checkAlphaNum(c) {
    let charCode = c.charCodeAt(0);
    return (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 48 && charCode <= 57) ||
      (charCode >= 97 && charCode <= 122)
    );
  }
}
