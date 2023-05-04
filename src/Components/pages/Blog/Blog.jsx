import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <div className='bg-slate-500 text-black rounded my-5 p-4'>
                <h1 className='font-bold mb-2'>Tell us the differences between uncontrolled and controlled components</h1>
                <p>
                In React, controlled components refer to components that have their state and behavior controlled by the parent component.  Uncontrolled components refer to components that manage their own state internally.  These components rely on props passed down from the parent component to update their state and behavior. They use a ref to access the DOM element's current value and update the state accordingly.   
                </p>
            </div>

            <div className='bg-slate-500 text-black rounded my-5 p-4'>
                <h1 className='font-bold mb-2'>How to validate React props using PropTypes</h1>
                <p>
                PropTypes is a typechecking library that validates the props passed PropTypes is mainly used for development purposes to catch errors early and provide warnings to the developer. to a component and provides warnings in the console if the passed props do not match the expected data type or if any required props are missing.  It is not intended to replace server-side validation or to provide security against malicious attacks.
                </p>
            </div>

            <div className='bg-slate-500 text-black rounded my-5 p-4'>
                <h1 className='font-bold mb-2'>Tell us the difference between nodejs and express js.</h1>
                <p>
                Express is a minimal and flexible node.  On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications" js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications..
 
                </p>
            </div>

            <div className='bg-slate-500 text-black rounded my-5 p-4'>
                <h1 className='font-bold mb-2' >What is a custom hook, and why will you create a custom hook?</h1>
                <p>
                In React, a custom hook is a JavaScript function that starts with the prefix "use" and allows you to extract reusable logic from a component. A custom hook is used to share stateful logic between components without duplicating the code. The main benefits of using custom hooks are:

1. Simplicity: Custom hooks simplify the code by separating the business logic from the presentation logic. This helps to keep the components small and focused, making them easier to understand and maintain.
2. Reusability: Custom hooks allow developers to extract and reuse common logic in multiple components. This helps to reduce code duplication and keeps the codebase organized and maintainable.
3. Testability: Custom hooks can be easily tested in isolation, making it easier to write unit tests and ensure the code is working as expected.
 
                </p>
            </div>

        </div>
    );
};

export default Blog;