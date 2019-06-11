import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SimpleModalWrapped from '../components/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import hero from './hero.jpg'

const StyledLanding = styled.main`
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-image: url(${hero});
    background-size: 100% 100%;
`;
class Landing extends React.Component {
   state = {
        ideas: [],
        isLoaded: false,
        selectedValue: '',
        isOpen: false,
    };

    handleClickOpen = () => {
        this.setState({
            isOpen: true,
            selectedValue: this.state.ideas[Math.floor(Math.random() * this.state.ideas.length)]
        });
    };

    handleClose = value => {
        this.setState({ 
            selectedValue: value, 
            isOpen: false 
        });
    };
    componentDidMount() {
        const url = 'https://api.github.com/search/repositories';
        axios(`${url}?q=topic:react stars:>10000`)
            .then(res => this.setState({
                ideas: res.data.items,
                isLoaded: true
            }))
            .catch(err=>console.log(err));
     }
    render() {
        const {isLoaded, selectedValue, ideas} = this.state;
        if(isLoaded) {
            return (
                <StyledLanding>
                    <Typography align='center' gutterBottom='true' variant="h3">Codespiration</Typography>
                    <Typography align='center' gutterBottom='true' variant="h5">Need some inspiration for your next coding project?
                    Well, Let's get pickin'!</Typography>
                    <Button variant='contained' color='primary' onClick={this.handleClickOpen}>Get Idea</Button>
                    <SimpleModalWrapped
                        ideas={ideas}
                        selectedValue={selectedValue}
                        open={this.state.isOpen}
                        handleClickOpen = {this.handleClickOpen}
                        onClose={this.handleClose} />
                </StyledLanding>
            );
        }
        return null;
    } 
}

export default Landing;
