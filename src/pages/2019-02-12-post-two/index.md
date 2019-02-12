---
path: "/post-two"
date: "2019-02-12"
title: "How to Remove Array Duplicates in ES6"
author: "Marrie Doe"
---

![ok](https://cdn-images-1.medium.com/max/800/1*Z1SU1atGbGMgY_jHaDyMGA.png)

Here are three ways to filter out duplicates from an array and return only the unique values. My favorite is using Set cause it’s the shortest and simplest 😁

![ok](https://cdn-images-1.medium.com/max/800/1*tmEwK00Tgvo_MW1sWjZn4g.png)

## 1. Using Set
Let me start first by explaining what `Set` is:

> "Set is a new data object introduced in ES6. Because Set only lets you store unique values. When you pass in an array, it will remove any duplicate values."

Okay, let’s go back to our code and break down what’s happening. There are 2 things going on:

1. First, we are creating a new Setby passing an array. Because Setonly allows unique values, all duplicates will be removed.

2. Now the duplicates are gone, we’re going to convert it back to an array by using the spread operator ...

!['ok](https://cdn-images-1.medium.com/max/800/1*f0io_19WfjiN42N2JKIZ0Q.png)

### Convert Set to an Array using Array.from
Alternatively, you can also use `Array.from` to convert a `Set` into an array:

![ok](https://cdn-images-1.medium.com/max/800/1*MZgefa7Rur-RafdrT8OSpw.png)

## 2. Using filter
In order to understand this option, let’s go through what these two methods are doing: `indexOf` and `filter`.

### indexOf
The `indexOf` method returns the first index it finds of the provided element from our array.

![ok](https://cdn-images-1.medium.com/max/800/1*W1jHsgUou5frNHlbC-jVpw.png)

### filter
The `filter()` method creates a new array of elements that pass the conditional we provide. In other words, if the element passes and returns `true`, it will be included in the filtered array. And any element that fails or return `false`, it will be NOT be in the filtered array.

Let’s step in and walk through what happens as we loop through the array.

![ok](https://cdn-images-1.medium.com/max/800/1*gwrwc11agEuXo-CQ4mObxg.png)

Below is the output from the console.log showed above. The duplicates are where the index doesn’t match the indexOf. So in those cases, the condition will be false and won’t be included in our filtered array.

![ok](https://cdn-images-1.medium.com/max/800/1*QCIsNc2xN7SPZc3dYhjReg.png)

### Retrieve the duplicate values
We can also use the filter method to retrieve the duplicate values from the array. We can do this by simply adjusting our condition like so:

![ok](https://cdn-images-1.medium.com/max/800/1*QWswjvxzLyhuycOQ8qzohA.png)

Again, if we step through the code above and see the output:

![ok](https://cdn-images-1.medium.com/max/800/1*SqNQiboZ6Tk7M2GB_n_T5A.png)

## 3. Using reduce
The `reduce` method is used to reduce the elements of the array and combine them into a final array based on some reducer function that you pass.

In this case, our reducer function is checking if our final array contains the item. If it doesn’t, push that item into our final array. Otherwise, skip that element and return just our final array as is (essentially skipping over that element).

Reduce is always a bit more tricky to understand, so let’s also step into each case and see the output:

![ok](https://cdn-images-1.medium.com/max/800/1*g_TJT20Qtgwn_U-H42CBlA.png)

And here’s the output from the console.log:

![ok](https://cdn-images-1.medium.com/max/800/1*xxIRrX8Q8st2-uVOe5-T3A.png)

### Resources

* [MDN Web Docs — Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
* [MDN Web Docs — Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* [MDN Web Docs — Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
* [GitHubGist: Remove duplicates from JS array](https://gist.github.com/telekosmos/3b62a31a5c43f40849bb)
* [CodeHandbook: How to Remove Duplicates from JavaScript Array](https://codehandbook.org/how-to-remove-duplicates-from-javascript-array/)