import React, {useState, useEffect} from 'react';
import {Modal, Button} from 'react-bootstrap';

const AddNewPostBlock = function () {
    const [show, setShow] = useState(false);
    const [postTitle, setPostTitle] = useState(null);
    const [postBody, setPostBody] = useState(null);
    const [addPostButtonState, setAddPostButtonState] = useState(true)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);

    const handleNewPost = () => {
        if(!!postTitle && !!postBody){
            setShow(false);
        }
    }

    useEffect(() => {
        if(!!postTitle && !!postBody){
            setAddPostButtonState(false)
        } else {
            setAddPostButtonState(true)
        }
    }, [postTitle, postBody])


    return (
        <div className="add-new-post-container">
                <Button variant="" className="add-new-post-btn" onClick={handleShow}>
                + add new post
                </Button>
  
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                    <Modal.Title>Create the post</Modal.Title>
                    <Button variant="close" onClick={handleClose}>
                    </Button>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <label htmlFor="new-post-title">
                                Post title</label>
                            <input 
                                type="text" 
                                id="new-post-title" 
                                onChange={(e) => {
                                    setPostTitle(e.target.value)
                                }
                                }
                            />
                            <label htmlFor="new-post-body">Post content</label>
                            <textarea 
                                name="new-post-body" 
                                id="new-post-body" 
                                cols="47" 
                                rows="5"
                                onChange={(e) => {
                                    setPostBody(e.target.value)
                                }
                            }
                            ></textarea>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button 
                        variant="primary"
                        disabled={addPostButtonState}  
                        onClick={handleNewPost} 
                    >
                        Add post
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Decline
                    </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
}

export default AddNewPostBlock