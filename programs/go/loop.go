package main

import "fmt"
import "time"

func main() {
  for i:=0; i<5; i++ {
   time.Sleep(1 * time.Second)
   fmt.Println("In display", time.Second)
  }
}
