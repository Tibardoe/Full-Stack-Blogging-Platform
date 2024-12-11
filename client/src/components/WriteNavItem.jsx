import React from 'react';
import { useNavigate } from 'react-router-dom';

function WriteNavItem() {
    const navigate = useNavigate();

    function handleWrite() {
        navigate("/post-blog")
    }

    return (
        <div className='write' onClick={handleWrite}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="-0.5 -0.5 24 24"><path fill="currentColor"
                d="m21.289.98l.59.59c.813.814.69 2.257-.277 3.223L9.435 16.96l-3.942 1.442c-.495.182-.977-.054-1.075-.525a.93.93 0 0 1 .045-.51l1.47-3.976L18.066 1.257c.967-.966 2.41-1.09 3.223-.276zM8.904 2.19a1 1 0 1 1 0 2h-4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a1 1 0 0 1 2 0v4a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4z" />

            </svg>
            Write
        </div>
    );
};

export default WriteNavItem;
