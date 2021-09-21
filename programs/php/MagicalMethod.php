<?php
class Object {
	/* __construct This magic methods is called when someone create object
	 * of your class. Usually this is used for creating constructor in php5.
	 */
	function __construct() {
		echo "Constructor is called";
	}
	/*__destruct  This magic method is called when object of
	 *  your class is unset. This is just opposite of __construct.
	 */
	function __destruct() {
		echo "Destructor is called";
	}
	/*__get   This method called when your object attempt to read
	 * property or variable of the class which is inaccessible or unavailable.
	 */
	function __get($name)
	{
		echo "__get($name)";
	}
	/*__set   This method called when object of your class attempts to
	 * set value of the property which is really inaccessible or unavailable in your class.
	 */
	function __set($name , $value)
	{
		echo "__set($name , $value)";
	}
	/* __isset This magic methods trigger when isset() function is applied
	 *  on any property of the class which isinaccessible or unavailable.
	 */
	function __isset($name) {
		echo "__isset($name)";
	}
	/*  __unset is something opposite of isset method. This method triggers
	 *  when unset() function called on inaccessible or unavailable property of the class.
	 */
	function __unset($name) {
		echo "__unset($name)";
	}
	/* __call magic method trigger when you are attempting to call method or
	 *  function of the class which is either inaccessible or unavailable.
	 */
	function  __call($name , $parameter) {
		echo "__call($name)";
		var_dump($parameter);
	}
	/* __callstatic execture when inaccessible or unavailable method is in
	 *  static context.
	 */
	public function  __callStatic($name , $parameter) {
		echo "__callStatic($name)";
		var_dump($parameter);
	}
	/* __sleep methods trigger when you are going to serialize your class object.*/
	function __sleep(){
		return array(); //Array of variable u want to serialize
	}
	/*  __wakeup executes when you are un serializing any class object. */
	function __wakeup(){
		//After doing unserialize(); setup remaining things here;
	}
	/*  __toString executes when you are using echo on your object. */
	function __toString(){
		return 'toString()';
	}
	/* __invoke called when you are using object of your class as function */
	function __invoke() {
		echo "Object is called as function";
	}
	/*An object copy is created by using the clone keyword (which calls the object's __clone() method if possible).
	 *  An object's __clone() method cannot be called directly.
	 */
	function __clone() {
		echo 'you used clone on object';
	}
	/*__set_state() */
	public static function __set_state($an_array) // As of PHP 5.1.0
	{
		$obj = new Object;
		$obj->newValue = 'setState';
		return $obj;
	}
	 
	/*__debugInfo() called on var_dump*/
	function __debugInfo() {
		return [
				'propSquared' => 'you called var_dump',
		];
	}
}
$obj = new Object(); //__construct will be executed
isset($obj->isSet); //__isset will be executed
unset($obj->usSet); //__unset will be executed
$obj->set = 3; //__set will be executed
echo $obj->get; //__get will be execited
$obj->calling('method' , 'parameter');//__call will be executed
$obj::staticCalling('method' , 'parameter');//staticCall will be executed
echo $obj;
$obj();
var_dump($obj);
eval('$b = ' . var_export($obj, true) . ';');
print_r($obj->newValue);
unset($obj); //__destruct will be executed

/*
 class A
 {
 public $var1;
 public $var2;

 public static function __set_state($an_array) // As of PHP 5.1.0
 {
 $obj = new Object;
 $obj->newValue = 'setState';
 $obj->var2 = $an_array['var2'];
 return $obj;
 }
 }

 $a = new A;
 $a->var1 = 5;
 $a->var2 = 'foo';

 eval('$b = ' . var_export($a, true) . ';'); // $b = A::__set_state(array(
 //    'var1' => 5,
 //    'var2' => 'foo',
 // ));
 var_dump($b);
 */
