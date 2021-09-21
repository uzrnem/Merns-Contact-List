package main

import "fmt"

func swap(x, y string) (string, string) {
   return y, x
}
func main() {

  /* declare a function variable */
   getSquareRoot := func(x float64) float64 {
      return math.Sqrt(x)
   }

   a, b := swap("Mahesh", "Kumar")
   fmt.Println(a, b)
}


func getSequence() func() int {
   i:=0
   return func() int {
      i+=1
      return i
   }
}

func main1(){
   /* nextNumber is now a function with i as 0 */
   nextNumber := getSequence()

   /* invoke nextNumber to increase i by 1 and return the same */
   fmt.Println(nextNumber()) //3
   fmt.Println(nextNumber()) //2
   fmt.Println(nextNumber()) //1

   /* create a new sequence and see the result, i is 0 again*/
   nextNumber1 := getSequence()
   fmt.Println(nextNumber1()) //1
   fmt.Println(nextNumber1()) //2
}



"math"
)

/* define a circle */
type Circle struct {
 x,y,radius float64
}

/* define a method for circle */
func(circle Circle) area() float64 {
 return math.Pi * circle.radius * circle.radius
}

func main(){
 circle := Circle{x:0, y:0, radius:5}
 fmt.Printf("Circle area: %f", circle.area())
}
