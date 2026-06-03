# Tdz Interview Questions

Path: `01-variables/tdz/interview-questions.md`

## Beginner

1. What is Tdz?
Answer: TDZ means Temporal Dead Zone, where let and const exist but cannot be used before initialization.

2. Why do we use Tdz?
Answer: To write predictable JavaScript and avoid runtime confusion.

3. Where is this used in backend code?
Answer: In handlers, services, helpers, validation, and data transformation.

## Intermediate

1. What is one common mistake with Tdz?
Answer: Reading the code without tracing scope, value, or execution order.

2. How do you debug Tdz issues?
Answer: Create a small snippet, log values step by step, and explain why each line runs.

## Advanced

1. Explain Tdz in terms of memory and execution.
Answer: First identify what exists before execution, then trace runtime changes line by line.

## One Line Revision

TDZ means Temporal Dead Zone, where let and const exist but cannot be used before initialization.
