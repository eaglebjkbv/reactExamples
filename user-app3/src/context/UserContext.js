import React, { PureComponent} from 'react'

export const MyContext=React.createContext();
export class UserProvider extends PureComponent {
    state={
        users:[
            {
                id:1,
                role:1,
                name:"Takamatsu",
                email:"takamatsu@gmail.com",
                pass:"1234"
            },
            {
                id:2,
                role:2,
                name:"Hisashi",
                email:"hisashi@gmail.com",
                pass:"1234"
            },
        ]
    };
    
    
    render() {
        const {children}=this.props;
        return (
             <MyContext.Provider value={this.state}>
                {children}
            </MyContext.Provider>
              
            
        )
    }
}



