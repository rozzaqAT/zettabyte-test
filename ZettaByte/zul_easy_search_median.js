// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  script>
 
// JavaScript program to find median
 
// Function for calculating median
function findMedian(a, n)
{
    // First we sort the array
    a.sort();
 
    // check for even case
    if (n % 2 != 0)
        return a[parseInt(n / 2)];
 
    return (a[parseInt((n - 1) / 2)] + a[parseInt(n / 2)]) / 2.0;
}
 
// Driver program
    let a = [8, 7, 7, 9, 5, 4, 2, 9];
    let n = a.length;
    document.write("Median = " + findMedian(a, n));
 
</script>

}

console.log(result(input));
