import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GoAlertFill } from "react-icons/go";
import BlockCard from '../../components/Blockcrad/BlockCard'
import styles from './Genre.module.css'
import Action from '../../assets/Images/Action.png'
import Drama from '../../assets/Images/Drama.png'
import Fantasy from '../../assets/Images/Fantasy.png'
import Fiction from '../../assets/Images/Fiction.png'
import Horror from '../../assets/Images/Horror.png'
import Music from '../../assets/Images/Music.png'
import Romance from '../../assets/Images/Romance.png'
import Thriller from '../../assets/Images/Thriller.png'
import Western from '../../assets/Images/Western.png'


const DEFAULT_GENRES = [
  {
      id: "Action",
      color: "#FF5209",
      image: (
          <img
              style={{ width: "12vw", height: "16vh", paddingLeft: "0vw", paddingTop: "0vh"}}
              src={Action}
              alt="Action genre"
          />
      ),
  },
  {
      id: "Drama",
      color: "#D7A4FF",
      image: <img style={{ width: "12vw", height: "16vh", paddingLeft: "0vw", paddingTop: "0vh"}} src={Drama} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: (
        <img style={{ width: "12vw", height: "16vh", paddingLeft: "0vw", paddingTop: "0vh"}} src={Romance} />
    ),
},
{
  id: "Thriller",
  color: "#84C2FF",
  image: (
      <img style={{ width: "12vw", height: "16vh", paddingLeft: "0vw", paddingTop: "0vh"}} src={Thriller} />
  ),
},
{
  id: "Western",
  color: "#912500",
  image: (
      <img style={{ width: "12vw", height: "16vh", paddingLeft: "0vw", paddingTop: "0vh"}} src={Western} />
  ),
},
{
  id: "Horror",
  color: "#7358FF",
  image: <img style={{ width: "12vw", height: "16vh", paddingLeft: "0vw", paddingTop: "0vh"}} src={Horror} />,
},
 
{
  id: "Music",
  color: "#E61E32",
  image: <img style={{ width: "12vw", height: "16vh", paddingLeft: "0vw", paddingTop: "0vh"}} src={Music} />,
},
{
      id: "Fantasy",
      color: " #FF4ADE",
      image: (
          <img style={{ width: "12vw", height: "16vh", paddingLeft: "0vw", paddingTop: "0vh"}} src={Fantasy} />
      ),
},
{
      id: "Fiction",
      color: "#6CD061",
      image: (
          <img style={{ width: "12vw", height: "16vh", paddingLeft: "0vw", paddingTop: "0vh"}} src={Fiction} />
      ),
},
];


const Genre = () => {

  const navigate = useNavigate()
  const [categories, setCategories] = useState([]);
  const [lengthError, setlengthError] = useState(false)
  
  const removeCategory = (value) => {
    const newCategoryList = categories.filter(
        (category) => category !== value
    );
    setCategories(newCategoryList);
};
const handleSubmit = () => {
  if (!categories.length) {
    setlengthError(true);
      return;
  }
  localStorage.setItem("genre", categories);
  navigate("/registered");
};

  return (<>
  <div className={styles.genre}>
    <div className={styles.leftSection}>
      <h1>Super App</h1>
      <h2>Choose your <br /> entertainment <br />category</h2>
      <h3>Please choose only 1 category</h3>
      <div className={styles.genreNameSection}>
      {categories.map((category) => (
      <div className={styles.genreName} key={category}>
      {category}
      <span  onClick={() => removeCategory(category)}>X</span>
      </div>
      ))}
      {lengthError ?<p className={styles.error}><GoAlertFill/> Choose 1 category to proceed further </p>:<></>}
      </div>
    </div>
    <div className={styles.rightSection}>
    {DEFAULT_GENRES.map((genre, idx) => (
    <BlockCard genreDetails={genre} idx={idx} key={genre.id} categoriesList={categories} setCategories={setCategories} 
    removeCategory={removeCategory}/>
    ))}
    <button onClick={handleSubmit}>Next Page</button>
    </div>
  </div>
  </>
  )
}

export default Genre