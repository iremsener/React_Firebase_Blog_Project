import React, {useEffect, useState} from 'react';
import {collection, doc, getDocs, deleteDoc} from 'firebase/firestore';
import {auth, db} from '../firebase-config';

function Home({ isAuth }) {

  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc (db, "posts", id)
    await deleteDoc(postDoc);
  }

  return (
    <div className="homePage">
     <div className='tmsf'>
      <div className="col-2">
                <div className="world">
                    <div className="snowdan"></div>
                    <div className="world-map"></div>
                </div>
                
            </div>
            <div className='hero'>
              <div className='static-txt'>I'm a</div>
              <ul className='dynamic-txts'>
                <li><span>Blogger .</span></li>
                <li><span>Author .</span></li>
                <li><span>Developer .</span></li>
                <li><span>Writer .</span></li>
              </ul>
            </div>
      </div> 
      <hr></hr>
    


       {postList.map((post) => {
        return(
          
   
                
           
          <div className="post">
            <div className="postHeader">
            <div className="title">
                <h1> {post.title} </h1>
              </div>
              <div className="postTextContainer"> {post.postText} </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                <button 
                onClick={() => {deletePost(post.id);
                }}
                > 
                  { "" }
                  &#128465; 
                </button>
                )}
                </div>
                
          
                  
            </div>
            
            

          </div>
          
         
        );

       })}
    </div>
    
  );
}

export default Home;