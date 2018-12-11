import React, {Component} from 'react';
import { Button } from 'react-materialize';
import {connect} from "react-redux";
import { setRecipes } from "../actions";
import RecipeList from "./RecipeList";


class SearchReciepes extends Component{

    constructor(){
        super();
        this.state = {
            ingredients : null,
            noResultsMessage: null,
            resultFound : false
        }
    }

    search(event){
        event.preventDefault();
        let { ingredients } = this.state;
        this.setState({ noResultsMessage : ( ingredients === null || ingredients === "" ) ? "please enter some Ingredients" : "", resultFound: false})
        console.log(ingredients);
        if (ingredients === null || ingredients === "") return;

        const url = `http://www.recipepuppy.com/api?i=${ingredients}`;
        fetch(url, {
            method : "GET"
         })
         .then( response => response.json())
         .then ( json => { this.props.setRecipes(json.results); console.log(json);
                           this.setState({ 
                               resultFound : json.results.length > 0 ? true : false,
                               noResultsMessage : json.results.length > 0 ? "" : "enter valid keywords"
                            }) 
                        } );
        console.log(url);
    }    

    render (){
        return (
            <div> 
                <form  onSubmit = { (e) => this.search(e) }>
                    {"   "}
                    <div className="input-field">  
                    <input 
                        type="text" 
                        onChange = {event => this.setState({ ingredients : event.target.value})} />
                        <label>  Ingredients :  </label>
                        </div>
                    {"   "}                    
                <Button type= "submit"> Submit </Button>
                </form>
                {  ( this.state.resultFound ) ?  <RecipeList />  : <span> {this.state.noResultsMessage} </span>}
            </div>
        )
    }
}

export default connect(null, {setRecipes})(SearchReciepes);