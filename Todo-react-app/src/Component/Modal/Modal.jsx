import { useContext, useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "./Modal.module.css";
import ContextTodo from '../../Store/ContextTodo';

function Modalcomp(props) {
    const ctx = useContext(ContextTodo);
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState()
    const [desc, setDesc] = useState()
    const { editTodoId } = props;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const titleRef = useRef();
    const descRef = useRef();

    const editTodo = ctx.AllData.filter((todo, index) => {
        return todo.id === editTodoId
    })

    useEffect(() => {
        setTitle(editTodo[0].title);
        setDesc(editTodo[0].description);
    }, [])

    const changeHandler = () => {
        setTitle(titleRef.current.value);
        setDesc(descRef.current.value);

    }

    const handleSave = (id) => {
        const enteredValues = {
            title, desc
        }
        ctx.modifyData(id,enteredValues);
        handleClose();
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Here...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.modal}>
                        <div>
                            <label>Id: </label>
                            <input type="text" value={editTodoId + 1} disabled></input>
                        </div>

                        <div>
                            <label>Title: </label>
                            <input type="text" placeholder='Enter Title' value={title} onChange={changeHandler} ref={titleRef}></input>
                        </div>
                        <div>
                            <label>Description: </label>
                            <input type="text" value={desc} onChange={changeHandler} ref={descRef}></input>
                        </div>
                        <div>
                            <label>Date: </label>
                            <input type="date" ></input>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleSave(editTodoId) }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Modalcomp;