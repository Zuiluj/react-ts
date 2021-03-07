import { Component } from 'react';

interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: User[];
}

interface UserSearchState {
    name: string;
    user: User | undefined;
}

// Ensure that the props to receive will follow the interface 'UserSearchProps'
class UserSearch extends Component<UserSearchProps> {
    // initialize the state using an interface
    state: UserSearchState = {
        name: '',
        user: undefined,
    };

    onClick = () => {
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name;
        });

        this.setState({ user: foundUser });
    };

    return() {
        const { name, user } = this.state;

        <div>
            User Search
            <input
                value={name}
                onChange={(e) => this.setState({ name: e.target.value })}
            />
            <button onClick={this.onClick}> Find User</button>
            <div>{user && user.name}</div>
            <div>{user && user.age}</div>
        </div>;
    }
}
