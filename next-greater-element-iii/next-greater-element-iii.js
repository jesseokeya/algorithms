    if (p === -1){
        return -1
    }
    
    // If p and pVal is found then again start from right most point in arr and find the first value greater than pVal which is 3 and we will find 
    // 4. Now swap 4 and 3 and break out of loop
    
    for (let i=l;i>=0;i--){
        if (arr[i]>pVal){
            swap(arr,p,i)
            break
        }
    }
    
    //Now reverse the array from position p+1. That is from the numbers after we found 3 (which got swapped with 4) 
    reverse(arr,p+1,l)
    let res = arr.join('')
    
    //If res is greater then Max int or lesser than input val then return -1
    if (res > Math.pow(2,31) || res <= n) return -1
    
    return res
    
};
​
​
function reverse(arr,i,j){
​
    while (i<j){
        swap(arr,i,j)
        i++
        j--
    }
}
​
function swap(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
