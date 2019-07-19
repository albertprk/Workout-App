import React, { Component } from 'react';
import {connect} from 'react-redux'
import { trainersFetchData, trainerInfoLastName} from '../../actions/trainers'
import {} from '../../reducers/trainers'
import Spinner from '../Spinner'
import { updatepage } from "../../actions/page";


class TrainerCards extends React.Component {
  componentDidMount() {
    console.log("mouting");
    this.props.fetchData("http://localhost:9000/trainers")
    console.log("mounted");
    console.log(this.props)
  }
  
  render() {
    if (this.props.hasErrored) {
      return <div>
      <p>Sorry! Error rendering</p>
      </div>
    }
    
    if (this.props.isLoading) {
      return <div align="center">
      <p>Loading...</p>
      <Spinner/>
      </div>
    }
    
    return (
      <div>
      {this.renderTrainerCards() }
      </div>
      )
    };

    
    
    renderTrainerCards() {
      
      console.log("in trainerCard page")
      console.log(this.props.trainersList)
      var allTrainers = this.props.trainersList
      
      console.log("this.props.trainersList length" )
      
      console.log(this.props.trainersList.length)
      
      const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
      
      
      
      if (allTrainers.length == 0){
        return (
          <div>
          rendering
          </div>
          )
        }
        else {
          
          return (
            <div>
            
            <div className="ui link cards">
            
            {
              allTrainers.map((targetTrainer,index) => {
                
                return(
                  <div className="card" onClick={() => {
                    this.props.changeTrainerInfoLastName(targetTrainer.lastName)
                    this.props.changePage("Trainer")

                  }}>
                  <div className="image">
                  <img src={targetTrainer.profilePicture}/>
                  </div>
                  <div className="content">
                  <div className="header">{targetTrainer.firstName + " " + targetTrainer.lastName}</div>
                  <div className="meta">
                  <a>verified personal trainer</a>
                  </div>
                  <div className="description">
                  {targetTrainer.description}
                  </div>
                  </div>
                  <div className="extra content">
                  <span className="right floated">
                  Joined in {new Date(targetTrainer.joiningDate).getDate() + "-" + months[ new Date(targetTrainer.joiningDate).getMonth()] + "-" + new Date(targetTrainer.joiningDate).getFullYear()}
                  </span>
                  <span>
                  {/* // todo: make it dynamic */}
                  <i className="user icon" />
                  Hired by 75 users
                  </span>
                  </div>
                  
                  </div>

                  )
                  
                  
                  
                }
                )
                
              }
              
              
              
              </div>
              
              </div>
              )
            }
          }}
          
          const mapStateToProps = (state) => {
            return {
              trainersList: state.trainersReducer,
              hasErrored: state.trainersErrored,
              isLoading: state.trainersLoading,
            }
          }
          
          const mapDispatchToProps = (dispatch) => {
            return {
              fetchData: (url) => dispatch(trainersFetchData(url)),
              changePage: (page) =>dispatch(updatepage(page)),
              changeTrainerInfoLastName: (lastName) => dispatch(trainerInfoLastName(lastName))
            }
          }
          
          export default connect(mapStateToProps, mapDispatchToProps)(TrainerCards);
          
          