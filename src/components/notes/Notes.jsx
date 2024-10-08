import React, { useState, useEffect } from 'react';
import { MdDelete, MdDriveFileRenameOutline } from 'react-icons/md';
import { FaSave } from 'react-icons/fa';
import './Notes.css';

const Notes = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editMode, setEditMode] = useState(null); // ID поста в режиме редактирования
  const [editTitle, setEditTitle] = useState(''); // Временное состояние для заголовка
  const [editDescription, setEditDescription] = useState('');
  const handleButtonClick = () => {
    setIsClicked(true); 
    setTimeout(() => setIsClicked(false), 20);
  };
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPost(savedPosts);
  }, []);

  // Функция для обновления localStorage при добавлении или удалении постов
  const updateLocalStorage = (posts) => {
    localStorage.setItem('posts', JSON.stringify(posts));
  };
  const handleDeletePost = (idToRemove) => {
    const updatedPosts = post.filter((post) => post.id !== idToRemove);
    setPost(updatedPosts);
    updateLocalStorage(updatedPosts);
  };

  const handleEditPost = (idToUpdate) => {
    const updatedPosts = post.map((post) =>
      post.id === idToUpdate
        ? { ...post, title: editTitle, description: editDescription }
        : post
    );
    setPost(updatedPosts);
    setEditMode(null);
    setEditTitle('');
    setEditDescription('');
    updateLocalStorage(updatedPosts);
  };

  const addNote = () => {
    if (title.trim()) {
      const newNote = { id: Date.now(), title, description };
      setPost([newNote, ...post]);
      setTitle('');
      setDescription('');
      updateLocalStorage([newNote, ...post]);
    }
  };

  return (
    <div className="notes-main">
      <div className="creating-note">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button
          className={`button ${isClicked ? 'clicked' : ''}`}
          onClick={() => {
            addNote();
            handleButtonClick();
          }}
        >
          Add Note
        </button>
      </div>
      <div className="notes-notesList">
        <ul className="notes">
          {post.map((note) => (
            <li key={note.id} className="note-item">
              <div className="item-content">
                {editMode === note.id ? (
                  <div>
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      placeholder="Edit title"
                      className="edit-input"
                    />
                    <input
                      type="text"
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      placeholder="Edit description"
                      className="edit-input"
                    />
                  </div>
                ) : (
                  <div>
                    <h3>{note.title}</h3>
                    <p>{note.description}</p>
                  </div>
                )}
              </div>
              <div className="note-item-buttons">
                <button
                  className="note-item-button-delete"
                  onClick={() => handleDeletePost(note.id)}
                >
                  <MdDelete color="red" size={20} />
                </button>
                {editMode === note.id ? (
                  <button
                    className="note-item-button-edit"
                    onClick={() => handleEditPost(note.id)}
                  >
                    <FaSave size={18} color="green" />
                  </button>
                ) : (
                  <button
                    className="note-item-button-edit"
                    onClick={() => {
                      setEditMode(note.id);
                      setEditTitle(note.title);
                      setEditDescription(note.description);
                    }}
                  >
                    <MdDriveFileRenameOutline color="green" size={20} />
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notes;