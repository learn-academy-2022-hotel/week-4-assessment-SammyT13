# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_odd_num number
    if number.even?
       p "#{number} is even"
    else
       p "#{number} is odd"
    end
end

even_odd_num(num1)
# Output: "7 is odd"
even_odd_num(num2)
# Output: "42 is even"
even_odd_num(num3)
# Output: "221 is odd"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels album
    p album.delete 'aeiouAEIOU'
end

remove_vowels(beatles_album1)
# Output: "Rbbr Sl"
remove_vowels(beatles_album2)
# Output: "Sgt Pppr"
remove_vowels(beatles_album3)
# Output: "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome_test word
    if word.downcase == word.downcase.reverse
        p "#{word} is a palindrome"
    else 
        p "#{word} is not a palindrome"
    end 
end

palindrome_test(palindrome_tester1)
# Output: "Racecar is a palindrome"
palindrome_test(palindrome_tester2)
# Output: "LEARN is not a palindrome"
palindrome_test(palindrome_tester3)
# Output: "Rotator is a palindrome"

