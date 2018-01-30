import React from 'react';
import {connect} from 'react-redux';
import SearchButton from '../components/searchButton';
import Lists from '../components/list';
import InputField from '../components/input';
import GitAction from '../store/action/searchUserAction';
import InfoDialog from '../components/modal';


function mapStoreStateToProps(state){
  console.log('store state: ', state)
  return{
    users: state.StoreUser.allUsers
  }
}

function mapDispatchWithProps(dispatch){
  return{
    searchUser : (userName) => dispatch(GitAction.searchUser(userName))
  }
}

class GitUser extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userInput : '',
      tempIndex: 0,
      openModal: false,
      image:'',
      url:'',
      name:''
    }
  }
  showUserInfo = (obj) =>{
    console.log(obj);
    this.setState({image:obj.imageURL,name: obj.name, url:obj.profileURL, openModal: true});
  }
  updateInput = (e) =>{
    this.setState({userInput: e.target.value});
  }
  searchUser = () =>{
      this.props.searchUser(this.state.userInput);
      this.setState({userInput:''});
  }
  handleModal= ()=>{
      this.setState({openModal: false});
  }
  render(){
    console.log(this.props.users)
    return(
      <div>
         <InfoDialog showImage={this.state.image} name={this.state.name} link={this.state.url} open={this.state.openModal}   handleOpen={this.handleModal}/> 
          <InputField onchangeEvent = {(e)=>{this.updateInput(e)}}/>
          <SearchButton onclickBtn = {this.searchUser} btnText={`Submit`}/>
          <Lists allUsers={this.props.users} infoClicked = {(eachUser)=>{this.showUserInfo(eachUser)}}/>
      </div>
    )
  }
}

export default connect(mapStoreStateToProps, mapDispatchWithProps)(GitUser);