import React from 'react';
import styled from 'styled-components';
import SimpleModalWrapped from '../components/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import hero from './hero.jpg'

const StyledLanding = styled.main`
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-image: url(${hero});
    background-size: 100% 100%;
`;
const ideas = ['todo', 'cats', 'stuff'];
class Landing extends React.Component {
   state = {
        open: false,
        selectedValue: ideas[1]
    };

    handleClickOpen = () => {
        this.setState({
        open: true,
        });
    };

    handleClose = value => {
        this.setState({ selectedValue: value, open: false });
    };
    
    render() {
        return (
            <StyledLanding>
                <Typography align='center' gutterBottom='true' variant="h3">Codespiration</Typography>
                <Typography align='center' gutterBottom='true' variant="h5">Need some inspiration for your next coding project?
                Well, Let's get pickin'!</Typography>
                <Button variant='contained' color='primary' onClick={this.handleClickOpen}>Get Idea</Button>
                <SimpleModalWrapped
                selectedValue={this.state.selectedValue}
                open={this.state.open}
                onClose={this.handleClose} />
            </StyledLanding>
        );
    } 
}

export default Landing;
