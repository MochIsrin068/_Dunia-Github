---
path: "/post-third"
date: "2019-02-13"
title: "Map, Filter, Reduce, forEach -The Four Horsemen of Modern JavaScript"
author: "Iyan Saputra"
---

In the ancient times, there was this messiah called for loop. Just like every other programming languages, JavaScript too had it’s own for loop function.

![ok](https://cdn-images-1.medium.com/max/800/1*jB6d5FefmqwGd3p59Ddlbg.jpeg)

The loop’s job was to iterate over data. As you know the internet is all about a series of data. You have a list of posts or comments that needed to be displayed in an order.

The chosen one looked like this:
```
for (var i = 0; i < 10; i++) {
    // Do something..<br/>
}
```

During the primitive times it was enough to do all sort of data operations.

## forEach()

forEach is an overpowered version of it’s master for loop.

You start with an array `let fruits = [“Apple”, “Banana”, “Mango”]`

Then forEach will execute a function for each item of the list.

```
fruits.forEach(fruit => console.log(“I am eating”, fruit));
-> 
I am eating Apple
I am eating Banana
I am eating Mango
```

## map()

map is a super powerful function, and perhaps the most popular horsemen of them all.

It will take an array, manipulate the items and create a new array keeping the original array untouched.

```
fruits.map(fruit => fruit + " is good")
->
["Apple is good", "Banana is good", "Mango is good"]
```

## filter()
filter has the skills of map with the power of an if statement.

It can filter out the items of your input array. After the operation, it will create a new filtered array.

Here I check to filter out only the “Apple”:

```
fruits.filter(fruit => fruit == "Apple")
->
["Apple"]
```

And here I filter only the fruits that has a length of less than 6 chars:

```
fruits.filter(fruit => fruit.length < 6)
->
["Apple", "Mango"]
```
## reduce()

reduce is the most powerful horsemen of the ancient one. It can be used to filter out and or combine all the items into a final single output.

Here I am making a fruit salad with all the fruits:

```
fruits.reduce((bowl, fruit) => bowl + ", " + fruit);
->
"Apple, Banana, Mango"
```

Mortals be aware, bow down to your god, the ancient for loop and its loyal followers the Four Horsemen.

![ok](https://cdn-images-1.medium.com/max/800/1*I6_mPAZTqOfnucuOi7weJw.jpeg)

Master the use of forEach(), map(), filter(), and reduce() to make your programming lives easier.
