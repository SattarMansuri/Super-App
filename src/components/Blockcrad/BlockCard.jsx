import React, { useState, useEffect } from "react";
import styles from './BlockCard.module.css'

const BlockCard = (props)=> {
    const [isSelected, setIsSelected] = useState(false);

    const addValueToCategory = (value) => {
        const existingValue = props.categoriesList.filter(
            (category) => category === value
        );

        if (!existingValue.length) {
            props.setCategories([...props.categoriesList, value]);
        } else {
            const newCategoryList = props.categoriesList.filter(
                (category) => category !== value
            );
            props.setCategories(newCategoryList);
        }
    };

    useEffect(() => {
        const isExists = props.categoriesList.includes(props.genreDetails.id) === true;
        setIsSelected(isExists);
    });

    return (
        <div className={styles.card}
            onClick={() => {
                addValueToCategory(props.genreDetails.id);
                setIsSelected(!isSelected);
            }}
            style={{
                background: props.genreDetails["color"],
                color: "white",
                padding: "16px",
                borderRadius: "12px",
                border: `${isSelected ? "4px solid green" : "4px solid white"}`,
            }}
            key={props.key}
        >
            <p style={{ marginTop: "-2.8vh", fontSize: "1.8rem", marginRight:"10vw", paddingTop:".5vh" }}>
                {props.genreDetails.id}
            </p>
            {props.genreDetails.image}
        </div>
    );
}

export default BlockCard;