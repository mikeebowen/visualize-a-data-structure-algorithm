# Sort Ski Resorts in the Western US by Altitude Sorted with Selection Sort

The problem for this assignment was to create a website that demonstrated how selection sort works by using it to sort ski resorts by altitude. I used a responsive grid that I downloaded from http://www.99lime.com/elements/ called [HTML Kickstart](http://www.99lime.com/elements/).

The grid gave me the basic structure and I was able to use jQuery to place my elements in the DOM, without much problem. Creating the algorithm however, was much more difficult. My first attempt was a modified version of a script I found [here](http://www.nczonline.net/blog/2009/09/08/computer-science-in-javascript-selection-sort/) using a for loop inside of another for loop.

With some help from Mel Quark, I was able to get the algorithm working. But after I put a setTimeOut() on it started sorting the elements incorrectly. Then I worked closely with Claudia Cuevas and Ben Mason on Sunday to rework my script with some tips from Mark Ryman who had made his work already.

After some tweaking, I was able to make a version of Mark's While loop inside a for loop that would correctly sort the mountains. However, when I tried to use setTimeOut() again, the answers once again came out in the wrong order, just like the first function.

I would have liked to do more styling with CSS and add a shuffle button, but I spent most of my time trying to make the algorithm work and slow down. I did take the time to make my list horizontal and use jQuery to add a background image to each <li> and some other CSS,  but there was much more I would have liked to do if I had more time.

The images I used came from [flickr](https://www.flickr.com/photos/edsuom/) and [Google Images](https://www.google.com/imghp?hl=en&tab=wi&ei=l_zFVPjsK8PzoAS88YFo&ved=0CAQQqi4oAg). Besides Claudia Cuevas, Ben Mason, Mark Ryman, and especially Mel Quark, I also got help online from [MDN](https://developer.mozilla.org/en-US/), [jQuery](http://api.jquery.com/), and [StackOverflow](http://stackoverflow.com/) as well as countless blog posts and YouTube Videos.
