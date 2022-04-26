import React from 'react';
import {Child} from './Child';

const Parent = () => {
    return (
        <div>
           <Child color="red" age={3} />
        </div>
    );
};

export default Parent;