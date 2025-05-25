/*
 * @lc app=leetcode id=9 lang=golang
 *
 * [9] Palindrome Number
 */

// @lc code=start
func isPalindrome(x int) bool {
	// Negative numbers and numbers ending with 0 (but not 0 itself) can't be palindromes
	if x < 0 || (x % 10 == 0 && x != 0) {
			return false
	}

	reversed := 0

	// Reverse half of the number
	for x > reversed {
			digit := x % 10
			reversed = reversed*10 + digit
			x /= 10
	}

	// For even digit length: x == reversed
	// For odd digit length: x == reversed/10 (middle digit doesn't matter)
	return x == reversed || x == reversed/10
}

