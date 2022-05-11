# Project 2 - Merge Sort

## Array: [16, 21, 11, 8, 12, 22]

### Merge sort steps:  
    1. Divide the array into two parts until reaching single element:
	[16, 21, 11]		    [8, 12, 22] 
     	[16, 21]    [11]	    [8, 12]     [22]
        [16] [21]   [11]	    [8] [12]    [22]
    2. Sort and merge elements
    	[16, 21]    [11]		[8, 12]    [22]
	      [11, 16, 21]            [8, 12, 22]
		    [8, 11, 12, 16, 21, 22]

### Big O Notation: 
    O(n*logn)
