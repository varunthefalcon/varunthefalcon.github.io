import React, { Component } from 'react';
import { setFavouriteRecipes, removeFavouriteRecipes } from '../../actions/index'
import { connect } from 'react-redux';

class Recipelist extends Component {

    constructor(props){
        super();
        console.log(props);
        this.state = {
            favourtied : false
        }
    }

    handleFavourite = (recipe) => {
            this.setState({favourtied : !this.state.favourtied})
            this.state.favourtied ? this.props.removeFavouriteRecipes(recipe) : this.props.setFavouriteRecipes(recipe);
    }

    render(){
    let { recipe } = this.props;

    return (
        <div className="recipe-item">
        <div 
            title="Mark Favourite!"
            className="recipeStar"
            onClick={ () => this.handleFavourite(recipe)}
        >
            { this.state.favourtied ? <span>&#9733;</span> : <span>&#9734;</span> }
        </div>
        <div className="recipe-text">
        <a target="__blank" href={recipe.href}> 
            <h4> { recipe.title } </h4>  
        </a>
        <p>{recipe.ingredients}</p>
        </div>
        <a target="__blank" href={recipe.href}> 
        <img 
            src={recipe.thumbnail} 
            alt={recipe.title} 
            className="recipe-img"
        />
        </a>
        </div>
    );
}
}

export default connect(null, {setFavouriteRecipes, removeFavouriteRecipes})(Recipelist);