# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming contains data with the ability to manipulate the data’s behavior, allowing developers to make changes without concern about other code in the program.  This prevents other regulations in the program from breaking down.  Object-oriented programming, or OPP for short, differs from functional programming, is functional programming is code involving functions where functions perform specific tasks and manipulation.

Researched answer: Object-oriented programming, also known as OPP, concerns its design around data or objects.   OOP allows developers to manipulate data and collaboratively work on big projects and groups since each method or object can be assigned without regard to the existing code.  This also allows for faster updates to the program.  Things to consider when working on object-oriented programming are the classes, objects, methods, and attributes.  The significant difference between the object-oriented and functional programming paradigms is that available programming focuses on using functions to execute specific tasks, and OOP focuses on classes where instances of objects are created.

1. What is the difference between a Float and an Integer in Ruby?

Your answer: The difference between a float and an integer in Ruby is a float involves decimal places, which is a fraction like a number, and an integer is a whole number, which could be negative or positive.  An example of a float would be 3.14, and an example of an integer is 1 or -1.

Researched answer: Before we go over the difference between a float and an integer in Ruby, remember both are objects, like everything else in Ruby.  Now, a float is a number with decimals and is helpful when dealing with large numbers and precision.  For example, if we wanted to get the exact result of dividing two integers, like 5 divided by 3?  In Ruby, we need to include a decimal place followed by numbers.  So we would enter 5.0 divided by 3 or 5 divided by 3.0, which would return 2.5. When dealing with integers in Ruby, they are still helpful in doing fundamental math problems and counting; however, they can lose precision when executing some math problems like division.  If we were to take the same example as above, 5 divided by 3, Ruby would return 2, which is the floor value of 2.5.

1. Ruby has an implicit return. What does that mean?

Your answer: The last line of code is read and returned in Ruby’s implicit return.  A developer does not have to include the keyword return for the last line of code to execute as the developer intended.  For instance, if the last line read val1 + val2, without the keyword return, the expression would evaluate and add the numbers val1 and val2 were holding.

Researched answer: The last line of code is read and returned in Ruby’s implicit return.  A developer does not have to include the keyword return for the last line of code to execute as the developer intended.  For instance, if the last line read val1 + val2, without the keyword return, the expression would evaluate and add the numbers val1 and val2 were holding.  One thing to consider when using implicit return is how readable the code is.  Remember, other developers will likely follow up on the program to add or remove lines of code.

1. What is a block in Ruby?

Your answer: When using Ruby, it is possible for methods requiring additional information to be passed into the method to modify its behavior.  An anonymous function is used to give the additional information, typically defined using keywords do and end to execute this action.

Researched answer: In Ruby, blocks pass along information as arguments and return a value or action.  In Ruby, a developer can use keywords do and end to or curly braces {} to create blocks, including lines of codes in between.  A developer should keep this in mind when creating blocks with do and end or curly braces, as in Ruby, curly braces will take precedence, so the order of execution of multiple blocks should be considered.

1. How do you extract a value in a Ruby hash?

Your answer: In Ruby, to extract the value in a hash, utilize the unique symbol the value is attached to.  Remember hashes are key-valued pairs in Ruby.  The key is a unique symbol, and the corresponding value follows.  For example, we can have a hash called a recipe containing information like flour, sugar, eggs, and butter, and each symbol is assigned ‘1 cup’, ‘3 tablespoons’, ‘2 eggs’, and ‘1 cup’, respectively.  If a developer wants to extract the value associated with the symbol eggs, the developer will type recipe[: eggs], which returns the value of 2 eggs.

Researched answer: In Ruby, to extract the value in a hash, utilize the unique symbol the value is attached to.  Remember hashes are key-valued pairs in Ruby.  The key is a unique symbol, and the corresponding value follows.  For example, we can have a hash called a recipe containing information like flour, sugar, eggs, and butter, and each symbol is assigned ‘1 cup’, ‘3 tablespoons’, ‘2 eggs’, and ‘1 cup’, respectively.  If a developer wants to extract the value associated with the symbol eggs, the developer will type recipe[: eggs], which returns the value of 2 eggs.

## Looking Ahead: Terms for Next Week

1. Class Inheritance: Class inheritance allows a developer to utilize a class from another, creating a hierarchy of classes that share attributes and methods.

2. RSpec: RSpect is a testing framework utilized for the Ruby programming language.

3. CRUD: When associated with an API, the CRUD operation stands for Create, Read, Update, and Delete.  These action verbs are used in database manipulation.

4. Test-driven development: TDD is a software development practice that requires developers to create test cases, and only when the test fails are developers required to write new code.

5. HTTP: HTTP is a hyper-text transfer protocol for fetching resources like HTML and API.
