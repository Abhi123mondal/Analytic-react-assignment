import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Container';


export const Comments = () => {
  const { id } = useParams();
  const [commentsData, setCommentsData] = useState([]);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setUserData(data);
    }
    async function fetchComments() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        const data = await response.json();
        setCommentsData(data);
      }
  
      fetchComments();

    fetchUser();
  }, [id]);

  return (
    <div className="Container_1">
        {userData ? (
        <div className='user_container'>
          <h2>{userData.name}</h2>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <p>Website: {userData.website}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <table>
        <thead>
          <tr>
            <th>POST ID</th>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>BODY</th>
          </tr>
        </thead>
        <tbody>
          {commentsData.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.postId}</td>
              <td>{ele.id}</td>
              <td>{ele.name}</td>
              <td>{ele.email}</td>
              <td>{ele.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};