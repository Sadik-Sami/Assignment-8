import React from 'react';

const Answers = () => {
    return (
        <div>
            <div className="card bg-base-100 shadow-2xl">
                <div className='rounded-xl'><img src='cafe-1.png' alt="Album" /></div>
                <div className="card-body">
                    <div>
                        <h1 className='font-semibold text-3xl'>Difference Between Props and State ?</h1>
                        <p className='px-4 text-lg'>Props are used to pass data from parent component to child component which is uni-directional in reactJS. Wheras state is used to manage data inside a specific component</p>
                    </div>
                    <div>
                        <h1 className='font-semibold text-3xl'>How does useState work ?</h1>
                        <p className='px-4 text-lg'>useState is React Hook that allows user to add state to a component. It returns an array with two values: one stores the current state of the component and another is a funtion to update the value of the state. It takes an initial state value as an argument and returns an updated state value whenever the updater function is used to update it.</p>
                    </div>
                    <div>
                        <h1 className='font-semibold text-3xl'>What can useEffect do without just loading data ?</h1>
                        <p className='px-4 text-lg'>useEffect takes a dependecy as a second argument as the first one is an anonymous function. The dependecy can be used to observe certain parts of the website to render updated data without reloading the whole webpage.</p>
                    </div>
                    <div>
                        <h1 className='font-semibold text-3xl'>How does React Work ?</h1>
                        <p className='px-4 text-lg'>React creates something called virtual DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM. React only changes what needs to be changed! which effectively reduces memory consumption ,rendering and loading time as unnecessary dom painting or rendering doesnt happen</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Answers;