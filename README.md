# Stack Overflow Error in Recursive Function
This repository demonstrates a common error in JavaScript: stack overflow errors caused by unbounded recursion. The `bug.js` file contains a recursive function that attempts to calculate something, but without proper base cases, it leads to excessive function calls, resulting in a stack overflow error when the inputs are sufficiently large.  The `bugSolution.js` file provides a corrected version of the function.

## Bug Description
The original function (`myFunc`) uses recursion to calculate a result based on the input parameters `a` and `b`. However, the recursive calls are not properly limited. The function keeps calling itself until the JavaScript engine's call stack is exhausted, resulting in a stack overflow error. This usually occurs when `a` and `b` are significantly larger numbers.

## Solution
The solution in `bugSolution.js` addresses the issue by adding a base case that stops the recursive calls before the stack overflows. By checking for `a` and `b` values other than 0, it prevents the unbounded recursion and correctly handles the calculation for various inputs.