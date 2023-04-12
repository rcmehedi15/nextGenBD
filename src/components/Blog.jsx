import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='container mx-auto'>
             <div className=' faq-container'>
            <div class="faq">
                <h1 className='faq-title text-center text-primary'> Questions:</h1>
                <div className='single-question'>
                    <h1> 01: When should you use context API?</h1>
                    <div className='answer'><span className='bg-danger'>Answer:</span> <br /> <br />
                        <p><span>Contest API </span>
                        The Context API helps share data between components which you can't easily share with props, for example, complex data objects. React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level.
                        </p>
                    </div>
                </div>

                <div className='single-question'>
                    <h1> 02: What is a custom hook?</h1>
                    <div className='answer'><span className='bg-danger'>Answer:</span> <br /> <br />
                        <p> <span>Custom Hook</span>
                        Custom React hooks are an essential tool that let you add special, unique functionality to your React applications.


                        </p>
                    </div>
                </div>
                <div className='single-question'>
                    <h1> 03: What is useRef?</h1>
                    <div className='answer'><span className='bg-danger'>Answer:</span> <br /> <br />
                        <p>
                            <span >useRef</span>The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

                        </p>
                    </div>
                </div>
                <div className='single-question'>
                    <h1> 04: What is useMemo?</h1>
                    <div className='answer'><span className='bg-danger'>Answer:</span> <br /> <br />
                        <p>
                            <span >useMemo</span> The useMemo is a hook used in the functional component of react that returns a memoized value. In Computer Science, memoization is a concept used in general when we don’t need to recompute the function with a given argument for the next time as it returns the cached result.
                        </p>
                    </div>
                </div>

                <div className='  p-2 text-center text'>
                    <p>Copyright © <a href="https://www.facebook.com/rcmehedi15" target='_blank' className='text-decoration-none'>MD Mehedi Hasan</a> | HmdMehedi2016@gmail.com</p>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Blog;