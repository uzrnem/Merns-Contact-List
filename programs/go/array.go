package main

import "fmt"

func main() {
   var n [10]int /* n is an array of 10 integers */
   var i,j int

   a = [3][4]int{
      {0, 1, 2, 3} ,   /*  initializers for row indexed by 0 */
      {4, 5, 6, 7} ,   /*  initializers for row indexed by 1 */
      {8, 9, 10, 11}   /*  initializers for row indexed by 2 */
   }

   var a = [5][2]int{ {0,0}, {1,2}, {2,4}, {3,6},{4,8}}
   var i, j int

   /* output each array element's value */
   for  i = 0; i < 5; i++ {
      for j = 0; j < 2; j++ {
         fmt.Printf("a[%d][%d] = %d\n", i,j, a[i][j] )
      }
   }
   /* initialize elements of array n to 0 */
   for i = 0; i < 10; i++ {
      n[i] = i + 100 /* set element at location i to i + 100 */
   }

   /* output each array element's value */
   for j = 0; j < 10; j++ {
      fmt.Printf("Element[%d] = %d\n", j, n[j] )
   }
   /* an int array with 5 elements */
   var  balance = []int {1000, 2, 3, 17, 50}
   var avg float32

   /* pass array as an argument */
   avg = getAverage( balance, 5 ) ;

   /* output the returned value */
   fmt.Printf( "Average value is: %f ", avg );
}

func getAverage(arr []int, int size) float32 {
   var i int
   var avg, sum float32

   for i = 0; i < size; ++i {
      sum += arr[i]
   }

   avg = sum / size
   return avg;
}
