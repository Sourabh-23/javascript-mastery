# Bind Interview Questions

Path: `14-call-apply-bind/bind/interview-questions.md`

## Beginner

1. What is Bind?
Answer: bind returns a new function with fixed this.

2. Why do we use Bind?
Answer: To write predictable JavaScript and avoid runtime confusion.

3. Where is this used in backend code?
Answer: In handlers, services, helpers, validation, and data transformation.

## Intermediate

1. What is one common mistake with Bind?
Answer: Reading the code without tracing scope, value, or execution order.

2. How do you debug Bind issues?
Answer: Create a small snippet, log values step by step, and explain why each line runs.

## Advanced

1. Explain Bind in terms of memory and execution.
Answer: First identify what exists before execution, then trace runtime changes line by line.

## One Line Revision

bind returns a new function with fixed this.
