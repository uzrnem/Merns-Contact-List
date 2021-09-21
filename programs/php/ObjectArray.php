<?php
class Object implements ArrayAccess, Iterator, Countable {
    private $arey = array();

    /*
     * Interface ArrayAccess
     */
    public function offsetSet($offset, $value) {
        if (is_null($offset)) {
            $this->arey[] = $value;
        } else {
            $this->arey[$offset] = $value;
        }
    }

    /*
     * Interface ArrayAccess
     */
    public function offsetExists($offset) {
        return isset($this->arey[$offset]);
    }

    /*
     * Interface ArrayAccess
     */
    public function offsetUnset($offset) {
        unset($this->arey[$offset]);
    }

    /*
     * Interface ArrayAccess
     */
    public function offsetGet($offset) {
        return $this->arey[$offset];
    }
    
    /*
     * Interface Countable
     */
    public function count () {
        return count($this->arey);
    }

    /*
     * Interface Iterator
     */
    public function rewind()
    {
        reset($this->arey);
    }

    /*
     * Interface Iterator
     */
    public function current()
    {
        return current($this->arey);
    }

    /*
     * Interface Iterator
     */
    public function key() 
    {
        return key($this->arey);
    }

    /*
     * Interface Iterator
     */
    public function next() 
    {
        return next($this->arey);
    }

    /*
     * Interface Iterator
     */
    public function valid()
    {
        $key = key($this->arey);
        return ($key !== NULL && $key !== FALSE);
    }
}
