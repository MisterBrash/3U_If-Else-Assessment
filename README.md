# Unit 3 Mid-Assessment: Conditionals

##### ICS3 - Mr. Brash 🐿️

### Read Carefully:

- No talking to classmates. No use of AI or code generators.  
- Google the solution won't help, this task is specific.  
- W3Schools and code reference sites are allowed.

#### [`index.html`](index.html)

You will _not_ need to edit this file.  

- On the page is a number box and two buttons.
    - They have already been setup for you, including event listeners.
- There is a `<div>` called "output" where you will give output to the user.
    - To give output call `output()` with whatever you want displayed. **Example:**  `` output(`Hello ${name}`) ``
    - Basically if you would normally put `alert` or `console.log` just put `output` instead.

#### [`main.js`](main.js)

This is where you will do all of your work, starting at line 30. You have _three_ functions to write:
1. `is_even(value)` - this function will return the keyword `true` if the given value is even and `false` otherwise. **Note:** this is **not** the _String_ "true" or "false" it is the _keyword_ `true` or `false`. **No** quotation marks and **no** capital letters.  

2. `fact()` - this function will provide a _random_ fact about the user's age.  
    - The age is already available in the `age` variable. Do not modify the first two lines of the function.  
    - Whenever the "Random Fact" button is pressed, utilize the `randInt()` function and display a random fact from the table below to the user:
    
        |Random Facts|
        |---|
        |1. Tell the user if their age is even or odd<br>(this one should use your `is_even()` function from part 1)|
        |2. Tell the user if they are old enough to drive in Ontario or not|
        |3. Tell the user if they are old enough to vote in a federal election in Ontario or not|
        |4. Tell the user if they are old enough to purchase alcohol in Ontario or not|
        |5. Tell the user if they they qualify for the seniors discount or not (age 60+)|

3. `roll()` - Whenever the user presses the "Roll 2d10" button the following should happen:
    - Two random values between 1 and 10 (inclusive) are created.
        - If both values are 1, output "Snake Eyes 🐍" and _return_ `1`  

        - Otherwise if both values are _equal_ output "Doubles!" and the two values. _Return_ the individual value.  
        **Example output:** `Doubles! 3 & 3`  return value is `3`

        - Otherwise if both values are _even_ output "Evens!" and the two values. _Return_ the sum of the two values. 
        **Example output:** `Evens! 4 & 8` return value is `12`

        - Otherwise if both values are _odd_ output "Odds!" and the two values. _Return_ the product of the two values.  
        **Example output:** `Odds! 5 & 9` return value is `45`

        - For all other cases output "Boring..." and the two values. _Return_ `0`.  
        **Example output:** `Boring... 7 & 4`

    Test your code and submit by synchronizing with GitHub.

#### Hints:

- The modulo operator `%` provides the remainder of a division. For example, `18 % 3` returns `0` and `18 % 8` returns `2`.
- All even numbers are divisible by 2.
- You only need `if`, `else if`, and potentially `else` for this task.
- You can place if-statements inside an if-statement.
- Sometimes "and" `&&` and "or" `||` can be helpful, but not always.

<br>
<br>

🐿️
