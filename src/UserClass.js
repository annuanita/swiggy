import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state ={
            count:0,
            count2:2,
            userInfo:{
                avatar_url:"https//google.com",
                login:"xyz",
            },
        };
      //  console.log("constructor called first on class initialization");
    }
    async componentDidMount(){
        const response = await fetch("https://api.github.com/users/annuanita");
        const json = await response.json();
        console.log(json);
        this.setState({
            userInfo:json,
        })

       // console.log("Child ComponentDidMount Call");
    }

    render(){
        const {xyz} = this.props;
        const {count,count2,avatar_url,login} = this.state.userInfo;
       // console.log(" then render called")
         return(

            <div className="user-card">
                <img src={avatar_url}/>
                <h3>Login: {login}</h3>
                <h2>Name: Priyanka </h2>
                 <h3>Location: Up</h3>
                 <h3>Hobby : sluggish</h3>
                 <h4>{this.props.pp}</h4>
                 <h4>{xyz}</h4>
                 <h2>CountClass: {count}</h2>
                 <h2>CountClass2: {count2}</h2>
                 <button  onClick={() =>{
                    this.setState({
                        count: this.state.count+1,
                        count2: this.state.count2+1,
                    })
                 }}>update count </button>
            </div>
         )  
    }

}

export default UserClass;