import React from 'react'

const StaleClosure = () => {
  return (
    <div>StaleClosure</div>
  )
}

export default StaleClosure;



/** NOTE: Stale Closure
 *  1. What is it? why is it called stale ?
 *     - A stale closure happens when a function captures an old value of a variable, and continues to use that outdated value even after the variable has changed.
 *     - In React terms:
 *       => Each render creates new state values.
 *       => But closures may still reference state from an older render
 * 
 */