package main

import "fmt"

func main() {
   /* local variable definition */
   var a int = 10

   /* check the boolean condition using if statement */
   if( a < 20 ) {
      /* if condition is true then print the following */
      fmt.Printf("a is less than 20\n" )
   } else if( a == 30 ) {
      /* if else if condition is true  */
      fmt.Printf("Value of a is 30\n" )
   } else {
      /* if condition is false then print the following */
      fmt.Printf("a is not less than 20\n" );
   }
   fmt.Printf("value of a is : %d\n", a)


   /* local variable definition */
   var grade string = "B"
   var marks int = 90

   switch marks {
      case 90: grade = "A"
      case 80: grade = "B"
      case 50,60,70 : grade = "C"
      default: grade = "D"
   }
   switch {
      case grade == "A" :
         fmt.Printf("Excellent!\n" )
      case grade == "B", grade == "C" :
         fmt.Printf("Well done\n" )
      case grade == "D" :
         fmt.Printf("You passed\n" )
      case grade == "F":
         fmt.Printf("Better try again\n" )
      default:
         fmt.Printf("Invalid grade\n" );
   }
   fmt.Printf("Your grade is  %s\n", grade );


   var x interface{}

   switch i := x.(type) {
      case nil:
         fmt.Printf("type of x :%T",i)
      case int:
         fmt.Printf("x is int")
      case float64:
         fmt.Printf("x is float64")
      case func(int) float64:
         fmt.Printf("x is func(int)")
      case bool, string:
         fmt.Printf("x is bool or string")
      default:
         fmt.Printf("don't know the type")
   }  
}
